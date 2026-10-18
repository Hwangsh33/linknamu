import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
};

export default function Profile({ name, bio }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-3 text-center">
      {/* 맑은 하늘 아래 임팩트 순간의 골퍼 사진: PattayaPatrol, Wikimedia Commons, CC BY-SA 4.0 */}
      <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-md">
        <Image
          src="/profile-impact.jpg"
          alt={`${name} 프로필 사진`}
          fill
          sizes="128px"
          className="object-cover object-[31%_50%]"
          priority
        />
      </div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-zinc-600 dark:text-zinc-400">{bio}</p>
    </section>
  );
}
