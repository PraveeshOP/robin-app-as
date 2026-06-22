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
    <article className="flex h-full min-h-72 flex-col gap-5 rounded-lg border border-gray-600 bg-gray-900 p-6 sm:p-8">
      <div>
        <img src={icon} alt="Service Icon" className="h-16 mr-4" />
      </div>
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-grow text-gray-400">
        <p>{text}</p>
      </div>
      <div className="">
        <a className="text-[#42a9b8]" href={link}>
          Learn More →
        </a>
      </div>
    </article>
  );
}
