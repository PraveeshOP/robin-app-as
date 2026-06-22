import TechnologiesInnerCard from "./technologiesInnerCard";

export default function TechnologiesCard() {
  return (
    <div className="grid w-full max-w-[1600px] grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-5 sm:px-6 md:grid-cols-5 xl:grid-cols-9">
      <div>
        <TechnologiesInnerCard icon="/react.png" text="React" />
      </div>
      <div>
        <TechnologiesInnerCard icon="/typescript.png" text="TypeScript" />
      </div>
      <div>
        <TechnologiesInnerCard icon="/nextjs.png" text="Next.js" />
      </div>
      <div>
        <TechnologiesInnerCard icon="/node.png" text="Node.js" />
      </div>
      <div>
        <TechnologiesInnerCard icon="/python.png" text="Python" />
      </div>
      <div>
        <TechnologiesInnerCard icon="/postgre.png" text="PostgresSQL" />
      </div>
      <div>
        <TechnologiesInnerCard icon="/aws.png" text="AWS" />
      </div>
      <div>
        <TechnologiesInnerCard icon="/docker.png" text="Docker" />
      </div>
      <div>
        <TechnologiesInnerCard icon="/figma.png" text="Figma" />
      </div>
    </div>
  );
}
