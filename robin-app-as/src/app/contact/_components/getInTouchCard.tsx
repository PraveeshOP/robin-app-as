import GetInTouchInnerCard from "./getInTouchInnerCard";

export default function GetInTouchCard() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <GetInTouchInnerCard
        title="Our Office"
        icon="/userIcon.png"
        text={"Stovner Senter 26 \n 0985 Oslo"}
      />
      <GetInTouchInnerCard
        title="Email Us"
        icon="/userIcon.png"
        text={"praveeshpoudel1@gmail.com \n it@easy.no"}
      />
      <GetInTouchInnerCard
        title="Call Us"
        icon="/userIcon.png"
        text={"+47 486 72 406 \n +47 123 45 678"}
      />
      <GetInTouchInnerCard
        title="Working Hours"
        icon="/userIcon.png"
        text={"Mon-fri: 9:00 AM - 6:00 PM \n Sat-Sun: Closed"}
      />
      <GetInTouchInnerCard
        title="Let's work together"
        icon="/userIcon.png"
        text={
          "We're always open to discussing new projects, creative ideas or opportunities to be part of your visions."
        }
      />
    </div>
  );
}
