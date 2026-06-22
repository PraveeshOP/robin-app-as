import GetInTouchCard from "./getInTouchCard";
import SendMessegeCard from "./sendMessegeCard";
import OfficeMap from "./OfficeMap";

export default function ContactH2() {
  return (
    <div className="flex w-full flex-col items-center px-4 sm:px-6">
      <div className="flex w-full max-w-[1600px] flex-col items-stretch gap-8 py-6 sm:p-8 lg:flex-row lg:gap-10">
        <div className="flex-1">
          <GetInTouchCard />
        </div>

        <div className="flex-[2]">
          <SendMessegeCard />
        </div>
      </div>

      <div className="w-full max-w-[1600px] sm:px-8">
        <OfficeMap />
      </div>
    </div>
  );
}
