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
    <div className="flex flex-row gap-4 rounded-lg bg-gray-900 p-5 sm:gap-6 sm:p-6">
      <div className="flex h-full w-10 flex-shrink-0 items-center sm:w-15">
        <img src={icon} alt="Contact Us Icon" className="h-10 w-auto" />
      </div>
      <div className="min-w-0 flex flex-col gap-2">
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <div>
          <p className="break-words text-gray-400 whitespace-pre-line">{text}</p>
        </div>
      </div>
    </div>
  );
}
