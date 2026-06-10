import ServicesH1 from "./_components/servicesH1";
import ServicesH2 from "./_components/servicesH2";
import StartProject from "@/components/startProject";

export default function Services() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <section className="w-full flex justify-center">
        <ServicesH1 />
      </section>
      <section className="w-full flex justify-center">
        <ServicesH2 />
      </section>
      <section className="w-full flex justify-center">
        <StartProject />
      </section>
    </div>
  );
}
