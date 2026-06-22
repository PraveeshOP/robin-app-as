import ContactUsCard from "./contactUsCard";

export default function ContactH1() {
  return (
    <div className="flex w-full items-center justify-center px-4 sm:px-6">
      <div className="flex w-full max-w-[1600px] flex-col justify-between gap-8 rounded-lg py-6 sm:p-8 lg:flex-row lg:gap-10">
        <div className="flex flex-1 flex-col gap-4 lg:mt-10">
          <div className="mt-4 text-[#42a9b8]">Contact Us</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            Let&apos;s build something great together
          </h1>
          <p className="mt-4 text-gray-400">
            Have a project in mind or want to lean more about our servies?
            We&apos;d love to hear from ypu. Reach out to us and let&apos;s
            start a conversation about how we can help bring your ideas to life.
            Whether you have a specific project in mind or just want to learn
            more about what we offer, we&apos;re here to help. Contact us today
            and let&apos;s build something great together!
          </p>
          <ContactUsCard />
        </div>
        <div className="flex-1">
          <img
            src="/contactUsImage.png"
            alt="Dashboard Image"
            className="h-auto max-h-[430px] w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
