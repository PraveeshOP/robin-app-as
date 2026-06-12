import TechnologiesInnerCard from "./technologiesInnerCard";

export default function TechnologiesCard() {
  return (
    <div className="flex flex-row gap-10 w-[90%] items-center justify-center">
      <div className="flex-1">
        <TechnologiesInnerCard icon="/react.png" text="React" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/typescript.png" text="TypeScript" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/nextjs.png" text="Next.js" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/node.png" text="Node.js" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/python.png" text="Python" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/postgre.png" text="PostgresSQL" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/aws.png" text="AWS" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/docker.png" text="Docker" />
      </div>
      <div className="flex-1">
        <TechnologiesInnerCard icon="/figma.png" text="Figma" />
      </div>
    </div>
  );
}
