import ServiceCard from "./serviceCard";

export default function DashboardH2() {
  return (
    <div className="flex flex-col gap-20 w-full items-center justify-center">
      <div className="w-5/6 bg-gray-900 p-8 rounded-lg">
        <div className="flex justify-between mt-4">
          <div className="flex flex-col gap-4 w-200">
            <h1 className="text-5xl font-bold">Our Services</h1>
          </div>
          <div className="flex flex-col gap-4 w-200">
            <p>
              We offer a wide range of IT solutions to help businesses innovate,
              scale and stay ahead.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <ServiceCard
            title="Web Development"
            icon="/webDevelopment.png"
            text="Custom web sites and web applications built with the latest technologies."
          />
          <ServiceCard
            title="Mobile App Development"
            icon="/mobileDevelopment.png"
            text="Native and cross-platform mobile applications that deliver great user experiences."
          />
          <ServiceCard
            title="Accounting System Development"
            icon="accountingSystemDevelopment.png"
            text="Custom accounting systems built to meet your business needs."
          />
          <ServiceCard
            title="IT Consulting"
            icon="itConsulting.png"
            text="Strategic IT guidance to help your business thrive."
          />
        </div>
      </div>
    </div>
  );
}
