import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
};

export default function Profile({ name, bio }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-3 text-center">
      {/* 더미 프로필 사진(Wikimedia Commons, CC0): 실제 사진은 나중에 교체 */}
      <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-md">
        <Image
          src="/profile.jpg"
          alt={`${name} 프로필 사진`}
          fill
          sizes="128px"
          className="object-cover object-[49%_50%]"
          priority
        />
      </div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-zinc-600 dark:text-zinc-400">{bio}</p>
    </section>
  );
}
