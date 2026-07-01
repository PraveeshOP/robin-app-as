export default function AboutH1() {
  return (
    <div className="flex w-full items-center justify-center px-4 sm:px-6">
      <div className="flex w-full max-w-[1600px] flex-col justify-between gap-8 rounded-lg py-6 sm:p-8 lg:flex-row lg:gap-10">
        <div className="flex flex-1 flex-col gap-4 lg:mt-10">
          <div className="mt-4 text-[#42a9b8]">About Us</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">We build software that solves real problems.</h1>
          <p className="mt-4 text-[var(--muted)]">
            We are a team of passionate developers, designers, and strategists
            who love turning ideas into powerful digital solutions. We focus on
            quality, innovation, and long-term parterships to help businesses
            succeed in the digital world.
          </p>
          <a href="/contact">
            <button className="bg-[#42a9b8] text-white px-5 py-3 rounded-lg w-60">
              Contact Us →
            </button>
          </a>
        </div>
        <div className="flex-1">
          <img
            src="/about1.png"
            alt="Dashboard Image"
            className="h-auto max-h-[430px] w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
