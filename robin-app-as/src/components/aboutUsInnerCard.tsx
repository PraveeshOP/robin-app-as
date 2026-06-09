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
    <div className="flex flex-row gap-4">
      <div>
        <img src={icon} alt="About Us Icon" className="h-10 w-auto" />
      </div>
      <div className="flex flex-col">
        <div>
          <h1 className="text-3xl font-bold">{number}+</h1>
        </div>
        <div>
          <p className="text-gray-400">{text}</p>
        </div>
      </div>
    </div>
  );
}
