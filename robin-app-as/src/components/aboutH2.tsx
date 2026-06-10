import OurStoryCard from "./ourStoryCard";

export default function AboutH2() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-gray-900 p-8">
      <div className="flex justify-between w-[90%] rounded-lg gap-10">
        <div className="flex-1">
          <img
            src="/RobinOffice.png"
            alt="Dashboard Image"
            className="rounded-lg h-auto w-150"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="mt-4 text-[#42a9b8]">Our Story</div>
          <h1 className="text-5xl">Turning ideas into reality</h1>
          <p className="mt-4 text-gray-400">
            Robin was founded with a simple mission: help businesses embrace{" "}
            <br /> technology and grow.
          </p>
          <p className="mt-4 text-gray-400">
            Over the years, we've delivered high-quality software solutions that
            have helped <br /> businesses of all sizes achieve their goals.
          </p>
          <p className="mt-4 text-gray-400">
            Our journey is built on trusrt, innovation, and a relentless focus
            on solving real problems.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <OurStoryCard />
      </div>
    </div>
  );
}
