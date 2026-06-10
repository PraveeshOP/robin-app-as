import TechnologiesCard from "./technologiesCard";

export default function AboutH4() {
  return (
    <div className="flex flex-col gap-5 w-full items-center justify-center">
      <div className="mt-4 text-[#42a9b8]">TECHNOLOGIES WE USE</div>
      <TechnologiesCard />
    </div>
  );
}
