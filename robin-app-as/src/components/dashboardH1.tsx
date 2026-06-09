export default function DashboardH1() {
  return (
    <div className="flex justify-between mt-4 w-full px-40">
      <div className="flex flex-col gap-4 w-200">
        <h1 className="text-7xl font-bold">
          Build your idea into a <span className="text-[#42a9b8]">product</span>
        </h1>
        <p className="text-2xl mt-4">
          We build innovative, scalable, and secure software solutions that help
          businesses grow and succeed in the digital world.
        </p>
        <div className="flex flex-row gap-10 mt-4 text-2xl">
          <p>Build.</p>
          <p>Launch.</p>
          <p>Grow.</p>
        </div>
        <div className="flex flex-col mt-4">
          <button className="bg-[#42a9b8] text-white px-5 py-3 rounded-lg w-50">
            Our Services →
          </button>
        </div>
      </div>
      <div>
        <img src="/itSolutions.png" alt="Dashboard Image" className="h-110" />
      </div>
    </div>
  );
}
