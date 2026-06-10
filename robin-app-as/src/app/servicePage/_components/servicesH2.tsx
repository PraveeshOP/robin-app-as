import ServiceCard from "@/components/serviceCard";

export default function ServicesH2() {
  return (
    <div className="flex flex-col w-[90%] items-center justify-center">
      <div className="flex flex-row gap-4 w-full justify-center">
        <div className="flex-1">
          <ServiceCard
            title="Web Development"
            icon="/webDevelopment.png"
            text="Custom web sites and web applications built with the latest technologies."
            link="/servicePage"
          />
        </div>
        <div className="flex-1">
          <ServiceCard
            title="Mobile App Development"
            icon="/mobileDevelopment.png"
            text="Native and cross-platform mobile applications that deliver great user experiences."
            link="/servicePage"
          />
        </div>
        <div className="flex-1">
          <ServiceCard
            title="Accounting System"
            icon="/accountingSystem.webp"
            text="Custom accounting systems built to meet your business needs."
            link="/servicePage"
          />
        </div>
        <div className="flex-1">
          <ServiceCard
            title="IT Consulting"
            icon="/itConsulting.png"
            text="Strategic IT guidance to help your business thrive."
            link="/servicePage"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 w-3/4 justify-center">
        <div className="flex-1">
          <ServiceCard
            title="Cyber Security"
            icon="/cyberSecurityLogo.png"
            text="Comprehensive cyber security solutions to protect your business from threats."
            link="/servicePage"
          />
        </div>
        <div className="flex-1">
          <ServiceCard
            title="DevOps & Automation"
            icon="/devOps.png"
            text="Streamline your development and deployment processes with our DevOps solutions."
            link="/servicePage"
          />
        </div>
        <div className="flex-1">
          <ServiceCard
            title="Support & Maintenance"
            icon="/customerSupport.png"
            text="Ongoing support and maintenance to keep your systems running smoothly."
            link="/servicePage"
          />
        </div>
      </div>
    </div>
  );
}
