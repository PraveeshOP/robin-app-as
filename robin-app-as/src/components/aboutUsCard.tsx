import { ACTION_BUILDING_INDICATOR_HIDE } from "next/dist/next-devtools/dev-overlay/shared";
import AboutUsInnerCard from "./aboutUsInnerCard";

export default function AboutUsCard() {
  return (
    <div className="flex flex-row gap-10 w-full items-center justify-center">
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
