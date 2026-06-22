import AboutH1 from "@/app/about/_components/aboutH1";
import AboutH2 from "@/app/about/_components/aboutH2";
import AboutH3 from "@/app/about/_components/aboutH3";
import AboutH4 from "@/app/about/_components/aboutH4";
import StartProject from "@/components/startProject";

export default function About() {
  return (
    <div className="flex flex-col gap-8 pt-4 lg:gap-12">
      <section>
        <AboutH1 />
      </section>
      <section>
        <AboutH2 />
      </section>
      <section>
        <AboutH3 />
      </section>
      <section>
        <AboutH4 />
      </section>
      <section>
        <StartProject />
      </section>
    </div>
  );
}
