import AboutH1 from "@/components/aboutH1";
import AboutH2 from "@/components/aboutH2";
import AboutH3 from "@/components/aboutH3";
import AboutH4 from "@/components/aboutH4";
import AboutH5 from "@/components/aboutH5";

export default function About() {
  return (
    <div className="flex flex-col gap-4">
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
        <AboutH5 />
      </section>
    </div>
  );
}
