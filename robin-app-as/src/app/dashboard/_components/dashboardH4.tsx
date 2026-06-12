import OurProcessInnerCard from "./ourProcessInnerCard";

export default function DashboardH4() {
  return (
    <div className="flex flex-col gap-20 w-full items-center justify-center">
      <div className="flex justify-between w-[90%] bg-gray-900 p-8 rounded-lg gap-10">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-5xl">Our Process</h1>
          <p className="mt-4 text-gray-400">
            A simple and effective process that ensures successful
            <br />
            project delivery. We work closely with our clients to
            <br /> understand their needs and goals, and we use our expertise
            <br /> to deliver high-quality software solutions that meet those
            <br />
            needs and goals.
          </p>
        </div>
        <div className="flex-1/4 flex flex-row gap-10">
          <OurProcessInnerCard
            number={1}
            icon="/discover.png"
            title="Discover"
            text="We start by understanding your requirements and goals."
          />
          <OurProcessInnerCard
            number={2}
            icon="/plan.png"
            title="Plan"
            text="Our team creates a detailed plan for your project."
          />
          <OurProcessInnerCard
            number={3}
            icon="/develop.png"
            title="Development"
            text="We build your solution using the latest technologies."
          />
          <OurProcessInnerCard
            number={4}
            icon="/deliver.png"
            title="Deliver"
            text="We test, launch and support your product."
          />
        </div>
      </div>
    </div>
  );
}
