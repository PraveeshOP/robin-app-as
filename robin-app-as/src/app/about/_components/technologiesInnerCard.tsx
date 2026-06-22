type TechnologiesInnerCardProps = {
  icon: string;
  text: string;
};

export default function TechnologiesInnerCard({
  icon,
  text,
}: TechnologiesInnerCardProps) {
  return (
    <div className="flex h-full min-w-0 flex-col gap-3 rounded-lg border border-gray-600 p-3">
      <div className="flex justify-center">
        <img src={icon} alt="About Us Icon" className="h-10 w-auto" />
      </div>
      <div className="flex justify-center">
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
