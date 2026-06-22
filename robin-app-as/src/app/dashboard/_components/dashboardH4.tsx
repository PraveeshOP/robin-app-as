import OurProcessInnerCard from "./ourProcessInnerCard";

export default function DashboardH4() {
  return (
    <div className="flex w-full items-center justify-center px-4 sm:px-6">
      <div className="flex w-full max-w-[1600px] flex-col justify-between gap-8 rounded-lg bg-gray-900 p-6 sm:p-8 lg:flex-row lg:gap-10">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">Our Process</h2>
          <p className="mt-4 text-gray-400">
            A simple and effective process that ensures successful
            project delivery. We work closely with our clients to understand
            their needs and goals, and we use our expertise to deliver
            high-quality software solutions that meet them.
          </p>
        </div>
        <div className="grid flex-[2] grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
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
