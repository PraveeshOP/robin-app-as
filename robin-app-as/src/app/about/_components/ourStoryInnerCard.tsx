type OurStoryInnerCardProps = {
  title: string;
  icon: string;
  text: string;
};

export default function OurStoryInnerCard({
  title,
  icon,
  text,
}: OurStoryInnerCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-lg border border-[color:var(--border)] bg-[var(--surface)] p-5 shadow-sm sm:flex-row sm:p-6">
      <div className="shrink-0">
        <img src={icon} alt="About Us Icon" className="h-12 w-12 object-contain" />
      </div>
      <div className="flex flex-col">
        <div>
          <h3 className="text-2xl font-bold xl:text-3xl">{title}</h3>
        </div>
        <div>
          <p className="text-[var(--muted)]">{text}</p>
        </div>
      </div>
    </div>
  );
}
