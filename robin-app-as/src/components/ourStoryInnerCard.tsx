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
    <div className="flex flex-row gap-4 rounded-lg border border-gray-600 p-6 w-120">
      <div>
        <img src={icon} alt="About Us Icon" className="h-auto w-50" />
      </div>
      <div className="flex flex-col">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <div>
          <p className="text-gray-400">{text}</p>
        </div>
      </div>
    </div>
  );
}
