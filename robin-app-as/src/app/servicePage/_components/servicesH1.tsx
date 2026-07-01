export default function ServicesH1() {
  return (
    <div className="flex w-full items-center justify-center px-4 sm:px-6">
      <div className="flex w-full max-w-[1600px] flex-col justify-between gap-8 rounded-lg py-6 sm:p-8 lg:flex-row lg:gap-10">
        <div className="flex flex-1 flex-col gap-4 lg:mt-10">
          <div className="mt-4 text-[#42a9b8]">Services</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">Powerful IT solutions that drive your business forward.</h1>
          <p className="mt-4 text-[var(--muted)]">
            We deliver end-to-end digital solutions to help businesses innovate,
            scale, and stay ahead in the competitive landscape. From custom
            software development to IT consulting, we have the expertise to turn
            your vision into reality.
          </p>
          <a href="/contact">
            <button className="bg-[#42a9b8] text-white px-5 py-3 rounded-lg w-60">
              Let&apos;s Build Together →
            </button>
          </a>
        </div>
        <div className="flex-1">
          <img
            src="/developerTeam2.png"
            alt="Dashboard Image"
            className="h-auto max-h-[430px] w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
