import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

const profile = {
  name: "황프로",
  bio: "풀스택 개발자 | 요즘 AI AX 에 대한 관심이 뿜뿜",
};

const links = [
  { title: "🐙 GitHub", href: "https://github.com/Hwangsh33" },
  { title: "📝 Blog", href: "https://naver.com" },
  { title: "📧 Email", href: "mailto:h2south@gmail.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-8 px-5 py-12">
      <Profile name={profile.name} bio={profile.bio} />
      <ul className="flex w-full flex-col gap-4">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard title={link.title} href={link.href} />
          </li>
        ))}
      </ul>
    </main>
  );
}
