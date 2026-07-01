type OurProcessInnerCardProps = {
  number: number;
  icon: string;
  title: string;
  text: string;
};

export default function OurProcessInnerCard({
  number,
  icon,
  title,
  text,
}: OurProcessInnerCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <img src={icon} alt="About Us Icon" className="h-10 w-auto" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-[var(--muted)]">{number}</h1>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-[var(--muted)]">{text}</p>
      </div>
    </div>
  );
}
