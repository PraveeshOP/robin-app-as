import AboutH1 from "@/app/about/_components/aboutH1";
import AboutH2 from "@/app/about/_components/aboutH2";
import AboutH3 from "@/app/about/_components/aboutH3";
import AboutH4 from "@/app/about/_components/aboutH4";
import AboutH5 from "@/app/about/_components/aboutH5";

export default function Services() {
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
