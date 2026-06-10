export default function ServicesH1() {
  return (
    <div className="flex flex-col gap-20 w-full items-center justify-center">
      <div className="flex justify-between w-[90%] p-8 rounded-lg gap-10">
        <div className="flex-1 flex flex-col gap-4 mt-10">
          <div className="mt-4 text-[#42a9b8]">Services</div>
          <h1 className="text-5xl">
            Powerful IT solutions that drive your business <br /> forward.
          </h1>
          <p className="mt-4 text-gray-400">
            We deliver end-to-end digital solutions to help businesses innovate,
            scale, and stay ahead in the competitive landscape. From custom
            software development to IT consulting, we have the expertise to turn
            your vision into reality.
          </p>
          <a href="/contact">
            <button className="bg-[#42a9b8] text-white px-5 py-3 rounded-lg w-60">
              Let's Build Together →
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
