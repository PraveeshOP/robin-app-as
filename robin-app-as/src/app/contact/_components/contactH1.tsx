import ContactUsCard from "./contactUsCard";

export default function ContactH1() {
  return (
    <div className="flex flex-col gap-20 w-full items-center justify-center">
      <div className="flex justify-between w-[90%] p-8 rounded-lg gap-10">
        <div className="flex-1 flex flex-col gap-4 mt-10">
          <div className="mt-4 text-[#42a9b8]">Contact Us</div>
          <h1 className="text-5xl">
            Let's build something <br /> great together
          </h1>
          <p className="mt-4 text-gray-400">
            Have a prohect in mind or want to lean more about our servies? We'd
            love to hear from ypu. Reach out to us and let's start a
            conversation about how we can help bring your ideas to life. Whether
            you have a specific project in mind or just want to learn more about
            what we offer, we're here to help. Contact us today and let's build
            something great together!
          </p>
          <ContactUsCard />
        </div>
        <div className="flex-1">
          <img
            src="/developerTeam2.png"
            alt="Dashboard Image"
            className="rounded-lg h-auto w-180"
          />
        </div>
      </div>
    </div>
  );
}
