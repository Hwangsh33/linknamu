import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";

const profile = {
  name: "황프로",
  bio: "풀스택 개발자 | 요즘 AI AX 에 대한 관심이 뿜뿜",
};

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-8 px-5 py-12">
      <Profile name={profile.name} bio={profile.bio} />
      <LinkList />
    </main>
  );
}
