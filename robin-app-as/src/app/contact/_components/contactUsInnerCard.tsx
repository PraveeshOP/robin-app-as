type ContactUsInnerCardProps = {
  title: string;
  icon: string;
  text: string;
};

export default function ContactUsInnerCard({
  title,
  icon,
  text,
}: ContactUsInnerCardProps) {
  return (
    <div className="flex flex-row gap-4">
      <div>
        <img src={icon} alt="Contact Us Icon" className="h-10 w-auto" />
      </div>
      <div className="flex flex-col">
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <div>
          <p className="text-gray-400">{text}</p>
        </div>
      </div>
    </div>
  );
}
