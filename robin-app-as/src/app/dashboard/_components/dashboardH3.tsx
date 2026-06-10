import AboutUsCard from "@/app/dashboard/_components/aboutUsCard";

export default function DashboardH3() {
  return (
    <div className="flex flex-col gap-20 w-full items-center justify-center">
      <div className="flex justify-between w-[90%] bg-gray-900 p-8 rounded-lg gap-10">
        <div className="flex-1">
          <img
            src="/developerTeam.avif"
            alt="Dashboard Image"
            className="rounded-lg h-90 w-auto"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="mt-4">
            <a className="text-[#42a9b8]" href="#">
              About Us →
            </a>
          </div>
          <h1 className="text-5xl">
            We are your trusted <br /> IT partners
          </h1>
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
