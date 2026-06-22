export default function DashboardH1() {
  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-10 px-4 sm:px-6 lg:flex-row lg:px-10 xl:px-20">
      <div className="flex max-w-3xl flex-1 flex-col gap-4">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Build your idea into a <span className="text-[#42a9b8]">product</span>
        </h1>
        <p className="mt-2 text-lg sm:text-xl lg:text-2xl">
          We build innovative, scalable, and secure software solutions that help
          businesses grow and succeed in the digital world.
        </p>
        <div className="mt-2 flex flex-row gap-6 text-lg sm:gap-10 sm:text-2xl">
          <p>Build.</p>
          <p>Launch.</p>
          <p>Grow.</p>
        </div>
        <div className="mt-2 flex flex-col">
          <a href="/servicePage" className="w-fit rounded-lg bg-[#42a9b8] px-5 py-3 text-white">
            Our Services →
          </a>
        </div>
      </div>
      <div className="flex w-full flex-1 justify-center lg:justify-end">
        <img src="/itSolutions.png" alt="Dashboard Image" className="h-auto max-h-[440px] w-full max-w-xl object-contain" />
      </div>
    </div>
  );
}
