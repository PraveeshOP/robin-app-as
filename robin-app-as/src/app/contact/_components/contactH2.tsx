import GetInTouchCard from "./getInTouchCard";
import SendMessegeCard from "./sendMessegeCard";
import OfficeMap from "./OfficeMap";

export default function ContactH2() {
  return (
    <div className="flex flex-col gap-20 w-full items-center justify-center">
      <div className="flex justify-between w-[90%] p-8 rounded-lg gap-10">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Get in touch</h1>
          <p className="text-gray-400">
            We're here to answer your questions and help you succeed.
          </p>
          <GetInTouchCard />
        </div>
        <div className="flex-1/2 flex flex-col gap-4">
          <SendMessegeCard />
          <OfficeMap />
        </div>
      </div>
    </div>
  );
}
