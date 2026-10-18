type LinkCardProps = {
  title: string;
  href: string;
};

export default function LinkCard({ title, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-zinc-300 px-6 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
    >
      {title}
    </a>
  );
}
