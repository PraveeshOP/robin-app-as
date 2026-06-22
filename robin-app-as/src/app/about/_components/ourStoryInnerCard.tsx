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
    <div className="flex h-full flex-col gap-4 rounded-lg border border-gray-600 p-5 sm:flex-row sm:p-6">
      <div className="shrink-0">
        <img src={icon} alt="About Us Icon" className="h-12 w-12 object-contain" />
      </div>
      <div className="flex flex-col">
        <div>
          <h3 className="text-2xl font-bold xl:text-3xl">{title}</h3>
        </div>
        <div>
          <p className="text-gray-400">{text}</p>
        </div>
      </div>
    </div>
  );
}
