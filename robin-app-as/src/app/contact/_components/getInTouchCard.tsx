import GetInTouchInnerCard from "./getInTouchInnerCard";

export default function GetInTouchCard() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="text-2xl font-bold">Get in touch</h1>
      <p className="text-gray-400">
        We&apos;re here to answer your questions and help you succeed.
      </p>
      <GetInTouchInnerCard
        title="Our Office"
        icon="/location.png"
        text={"Stovner Senter 26 \n 0985 Oslo"}
      />
      <GetInTouchInnerCard
        title="Email Us"
        icon="/email.png"
        text={"it@robinapp.no \n regnskap@robinapp.no"}
      />
      <GetInTouchInnerCard
        title="Call Us"
        icon="/phone.png"
        text={"+47 486 72 406 \n +47 123 45 678"}
      />
      <GetInTouchInnerCard
        title="Working Hours"
        icon="/working.png"
        text={"Mon-fri: 9:00 AM - 6:00 PM \n Sat-Sun: Closed"}
      />
      <GetInTouchInnerCard
        title="Let's work together"
        icon="/workTogether.png"
        text={
          "We're always open to discussing new projects, creative ideas or opportunities to be part of your visions."
        }
      />
    </div>
  );
}
