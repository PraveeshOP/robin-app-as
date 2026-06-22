import ServiceCard from "@/components/serviceCard";

export default function DashboardH2() {
  return (
    <div className="flex w-full items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-[1600px] rounded-lg bg-gray-900 p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Our Services</h2>
          </div>
          <div className="max-w-xl text-gray-400">
            <p>
              We offer a wide range of IT solutions to help businesses
              innovate, scale and stay ahead.
            </p>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <ServiceCard
            title="Web Development"
            icon="/webDevelopment.png"
            text="Custom web sites and web applications built with the latest technologies."
            link="/servicePage"
          />
          <ServiceCard
            title="Mobile App Development"
            icon="/mobileDevelopment.png"
            text="Native and cross-platform mobile applications that deliver great user experiences."
            link="/servicePage"
          />
          <ServiceCard
            title="Accounting System"
            icon="/accountingSystem.webp"
            text="Custom accounting systems built to meet your business needs."
            link="/servicePage"
          />
          <ServiceCard
            title="IT Consulting"
            icon="/itConsulting.png"
            text="Strategic IT guidance to help your business thrive."
            link="/servicePage"
          />
        </div>
      </div>
    </div>
  );
}
