import ContactH1 from "./_components/contactH1";
import ContactH2 from "./_components/contactH2";
import StartProject from "@/components/startProject";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-4 lg:gap-12">
      <section className="w-full flex justify-center">
        <ContactH1 />
      </section>
      <section className="w-full flex justify-center">
        <ContactH2 />
      </section>
      <section className="w-full flex justify-center">
        <StartProject />
      </section>
    </div>
  );
}
