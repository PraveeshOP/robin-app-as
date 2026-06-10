import ContactH1 from "./_components/contactH1";
import ContactH2 from "./_components/contactH2";
import StartProject from "@/components/startProject";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
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
