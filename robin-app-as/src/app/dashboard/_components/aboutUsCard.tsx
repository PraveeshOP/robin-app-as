import AboutUsInnerCard from "./aboutUsInnerCard";

export default function AboutUsCard() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 pt-3 sm:grid-cols-3 lg:gap-8">
      <AboutUsInnerCard number={10} icon="/userIcon.png" text="Happy Clients" />
      <AboutUsInnerCard
        number={50}
        icon="/userIcon.png"
        text="Projects Completed"
      />
      <AboutUsInnerCard number={100} icon="/userIcon.png" text="Team Members" />
    </div>
  );
}
