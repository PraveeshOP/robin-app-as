import AboutUsCard from "@/app/dashboard/_components/aboutUsCard";

export default function DashboardH3() {
  return (
    <div className="flex w-full items-center justify-center px-4 sm:px-6">
      <div className="flex w-full max-w-[1600px] flex-col justify-between gap-8 rounded-lg bg-gray-900 p-6 sm:p-8 lg:flex-row lg:gap-10">
        <div className="flex-1">
          <img
            src="/developerTeam.avif"
            alt="Dashboard Image"
            className="h-auto max-h-[430px] w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="mt-4">
            <a className="text-[#42a9b8]" href="#">
              About Us →
            </a>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">We are your trusted IT partners</h2>
          <p className="mt-4 text-gray-400">
            We are a team of passionate developers, designers, and strategists
            who love turning ideas into powerful digital solutions. We focus on
            quality, innovation, and long-term parterships to help businesses
            succeed in the digital world.
          </p>
          <AboutUsCard />
        </div>
      </div>
    </div>
  );
}
