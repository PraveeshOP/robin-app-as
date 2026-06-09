type ServiceCardProps = {
  title: string;
  icon: string;
  text: string;
};

export default function ServiceCard({ title, icon, text }: ServiceCardProps) {
  return (
    <div className="flex mt-6 flex-col bg-gray-900 p-8 rounded-lg border border-gray-600 gap-6">
      <div>
        <img src={icon} alt="Service Icon" className="h-16 mr-4" />
      </div>
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div>
        <p>{text}</p>
      </div>
      <div>
        <button className="bg-[#42a9b8] text-white px-5 py-3 rounded-lg w-50">
          Learn More →
        </button>
      </div>
    </div>
  );
}
