type LinkCardProps = {
  title: string;
  href: string;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ title, href, count, onClick }: LinkCardProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(href.startsWith("mailto:")
        ? {}
        : { target: "_blank", rel: "noopener noreferrer" })}
      className="flex w-full items-center rounded-2xl border border-zinc-300 px-6 py-4 font-medium transition hover:-translate-y-0.5 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
    >
      {/* 좌우 균형을 맞춰 제목이 가운데에 오도록 */}
      <span className="w-12" aria-hidden />
      <span className="flex-1 text-center">{title}</span>
      <span className="w-12 text-right text-xs text-zinc-500 dark:text-zinc-400">
        {count}회
      </span>
    </a>
  );
}
