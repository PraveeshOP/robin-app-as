export default function AboutH1() {
  return (
    <div className="flex flex-col gap-20 w-full items-center justify-center">
      <div className="flex justify-between w-[90%] p-8 rounded-lg gap-10">
        <div className="flex-1 flex flex-col gap-4 mt-10">
          <div className="mt-4 text-[#42a9b8]">About Us</div>
          <h1 className="text-5xl">
            We build software that solves real <br /> problems.
          </h1>
          <p className="mt-4 text-gray-400">
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
            src="/developerTeam2.png"
            alt="Dashboard Image"
            className="rounded-lg h-auto w-180"
          />
        </div>
      </div>
    </div>
  );
}
