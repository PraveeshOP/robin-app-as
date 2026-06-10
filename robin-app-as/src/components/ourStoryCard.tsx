import OurStoryInnerCard from "./ourStoryInnerCard";

export default function OurStoryCard() {
  return (
    <div className="flex flex-row gap-10 w-full items-center justify-center">
      <div className="flex-1">
        <OurStoryInnerCard
          title="Our Vision"
          icon="/userIcon.png"
          text="To be a global IT company known for creating, value, building trust, and shaping the future of technology."
        />
      </div>
      <div className="flex-1">
        <OurStoryInnerCard
          title="Our Mission"
          icon="/userIcon.png"
          text="To deliver innovative and reliable software solutions that empower businesses to thrive in the digital age."
        />
      </div>
      <div className="flex-1">
        <OurStoryInnerCard
          title="Our Values"
          icon="/userIcon.png"
          text="Quality, Integrity, Customer-Centricity, Innovation, and Collaboration are at the core of everything we do."
        />
      </div>
    </div>
  );
}
