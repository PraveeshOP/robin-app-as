import GetInTouchCard from "./getInTouchCard";
import SendMessegeCard from "./sendMessegeCard";
import OfficeMap from "./OfficeMap";

export default function ContactH2() {
  return (
    <div className="flex w-full items-center justify-center px-4 sm:px-6">
      <div className="flex w-full max-w-[1600px] flex-col justify-between gap-8 rounded-lg py-6 sm:p-8 lg:flex-row lg:gap-10">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Get in touch</h1>
          <p className="text-gray-400">
            We&apos;re here to answer your questions and help you succeed.
          </p>
          <GetInTouchCard />
        </div>
        <div className="flex min-w-0 flex-[1.5] flex-col gap-4">
          <SendMessegeCard />
          <OfficeMap />
        </div>
      </div>
    </div>
  );
}
