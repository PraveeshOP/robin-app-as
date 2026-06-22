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
    <div className="flex flex-row gap-3 rounded-lg bg-gray-900 p-3">
      <div className="flex w-10 flex-shrink-0 items-start">
        <img src={icon} alt="Contact Us Icon" className="h-8 w-auto" />
      </div>

      <div className="min-w-0">
        <h1 className="text-lg font-bold">{title}</h1>

        <p className="mt-1 break-words whitespace-pre-line text-sm text-gray-400">
          {text}
        </p>
      </div>
    </div>
  );
}
