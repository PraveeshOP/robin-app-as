import ServiceCard2 from "@/components/serviceCard2";

export default function ServicesH2() {
  return (
    <div className="grid w-full max-w-[1600px] grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4">
      <div>
        <ServiceCard2
          title="Web Development"
          icon="/webDevelopment.png"
          text="Custom web sites and web applications built with the latest technologies."
        />
      </div>
      <div>
        <ServiceCard2
          title="Mobile App Development"
          icon="/mobileDevelopment.png"
          text="Native and cross-platform mobile applications that deliver great user experiences."
        />
      </div>
      <div>
        <ServiceCard2
          title="Accounting System"
          icon="/accountingSystem.webp"
          text="Custom accounting systems built to meet your business needs."
        />
      </div>
      <div>
        <ServiceCard2
          title="IT Consulting"
          icon="/itConsulting.png"
          text="Strategic IT guidance to help your business thrive."
        />
      </div>
      <div>
        <ServiceCard2
          title="Cyber Security"
          icon="/cyberSecurityLogo.png"
          text="Comprehensive cyber security solutions to protect your business from threats."
        />
      </div>
      <div>
        <ServiceCard2
          title="DevOps & Automation"
          icon="/devOps.png"
          text="Streamline your development and deployment processes with our DevOps solutions."
        />
      </div>
      <div>
        <ServiceCard2
          title="Support & Maintenance"
          icon="/customerSupport.png"
          text="Ongoing support and maintenance to keep your systems running smoothly."
        />
      </div>
    </div>
  );
}
