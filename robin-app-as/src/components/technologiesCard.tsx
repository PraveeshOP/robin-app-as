import TechnologiesInnerCard from "./technologiesInnerCard";

export default function TechnologiesCard() {
  return (
    <div className="flex flex-row gap-10 w-[90%] items-center justify-center">
      <div className="flex-1">
        <TechnologiesInnerCard icon="/userIcon.png" text="React" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/userIcon.png" text="TypeScript" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/userIcon.png" text="Next.js" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/userIcon.png" text="Node.js" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/userIcon.png" text="Python" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/userIcon.png" text="PostgresSQL" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/userIcon.png" text="AWS" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/userIcon.png" text="Docker" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/userIcon.png" text="Figma" />
      </div>
    </div>
  );
}
