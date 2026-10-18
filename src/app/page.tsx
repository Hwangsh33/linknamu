import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 더미 데이터: 실제 내용은 나중에 교체
const profile = {
  name: "대황마",
  bio: "최강바이브 코더",
};

const links = [
  { title: "GitHub", href: "https://github.com" },
  { title: "LinkedIn", href: "https://www.linkedin.com" },
  { title: "Blog", href: "https://example.com" },
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
