import OurStoryInnerCard from "./ourStoryInnerCard";

export default function OurStoryCard() {
  return (
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
      <div>
        <OurStoryInnerCard
          title="Our Vision"
          icon="/userIcon.png"
          text="To be a global IT company known for creating, value, building trust, and shaping the future of technology."
        />
      </div>
      <div>
        <OurStoryInnerCard
          title="Our Mission"
          icon="/userIcon.png"
          text="To deliver innovative and reliable software solutions that empower businesses to thrive in the digital age."
        />
      </div>
      <div>
        <OurStoryInnerCard
          title="Our Values"
          icon="/userIcon.png"
          text="Quality, Integrity, Customer-Centricity, Innovation, and Collaboration are at the core of everything we do."
        />
      </div>
    </div>
  );
}
