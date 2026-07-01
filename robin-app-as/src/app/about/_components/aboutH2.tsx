import OurStoryCard from "./ourStoryCard";

export default function AboutH2() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[var(--surface-elevated)] px-4 py-8 sm:px-6 lg:px-10">
      <div className="flex w-full max-w-[1600px] flex-col-reverse justify-between gap-8 rounded-lg lg:flex-row lg:gap-10">
        <div className="flex-1">
          <img
            src="/RobinOffice.png"
            alt="Dashboard Image"
            className="h-auto max-h-[430px] w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="mt-4 text-[#42a9b8]">Our Story</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">Turning ideas into reality</h2>
          <p className="mt-4 text-[var(--muted)]">
            Robin was founded with a simple mission: help businesses embrace technology and grow.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            Over the years, we&apos;ve delivered high-quality software solutions that
            have helped businesses of all sizes achieve their goals.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            Our journey is built on trusrt, innovation, and a relentless focus
            on solving real problems.
          </p>
        </div>
      </div>
      <div className="mt-8 w-full max-w-[1600px]">
        <OurStoryCard />
      </div>
    </div>
  );
}
