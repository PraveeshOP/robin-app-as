type GetInTouchInnerCardProps = {
  title: string;
  icon: string;
  text: string;
};

export default function GetInTouchInnerCard({
  title,
  icon,
  text,
}: GetInTouchInnerCardProps) {
  return (
    <div className="flex flex-row gap-6 bg-gray-900 p-6 rounded-lg">
      <div className="flex-shrink-0 h-full flex items-center w-15">
        <img src={icon} alt="Contact Us Icon" className="h-10 w-auto" />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <div>
          <p className="text-gray-400 whitespace-pre-line">{text}</p>
        </div>
      </div>
    </div>
  );
}
