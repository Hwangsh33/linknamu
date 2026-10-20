import { links } from "@/lib/links";
import clientPromise from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number };

async function getCollection() {
  const client = await clientPromise;
  return client.db().collection<ClickDoc>("clicks");
}

// 모든 링크의 클릭 수를 한 번에 반환: { github: 3, blog: 0, ... }
export async function GET() {
  try {
    const docs = await (await getCollection()).find().toArray();
    const counts = Object.fromEntries(links.map((l) => [l.id, 0]));
    for (const doc of docs) {
      if (doc._id in counts) counts[doc._id] = doc.count;
    }
    return Response.json(counts, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}

// 해당 링크의 클릭 수를 1 증가: body { id: "github" }
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;
  if (typeof id !== "string" || !links.some((l) => l.id === id)) {
    return Response.json({ error: "유효하지 않은 링크입니다." }, { status: 400 });
  }
  try {
    const result = await (await getCollection()).findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return Response.json({ id, count: result?.count ?? 1 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
