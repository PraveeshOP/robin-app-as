type ServiceCardProps = {
  title: string;
  icon: string;
  text: string;
  link: string;
};

export default function ServiceCard({
  title,
  icon,
  text,
  link,
}: ServiceCardProps) {
  return (
    <div className="flex mt-6 flex-col bg-gray-900 p-8 rounded-lg border border-gray-600 gap-6">
      <div>
        <img src={icon} alt="Service Icon" className="h-16 mr-4" />
      </div>
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-grow text-gray-400">
        <p>{text}</p>
      </div>
      <div className="my-4">
        <a className="text-[#42a9b8]" href={link}>
          Learn More →
        </a>
      </div>
    </div>
  );
}
