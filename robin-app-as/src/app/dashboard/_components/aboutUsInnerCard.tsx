type AboutUsInnerCardProps = {
  number: number;
  icon: string;
  text: string;
};

export default function AboutUsInnerCard({
  number,
  icon,
  text,
}: AboutUsInnerCardProps) {
  return (
    <div className="flex flex-row gap-3">
      <div>
        <img src={icon} alt="About Us Icon" className="h-10 w-auto" />
      </div>
      <div className="flex flex-col">
        <div>
          <p className="text-2xl font-bold xl:text-3xl">{number}+</p>
        </div>
        <div>
          <p className="text-[var(--muted)]">{text}</p>
        </div>
      </div>
    </div>
  );
}
