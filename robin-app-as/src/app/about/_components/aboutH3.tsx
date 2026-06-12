import { CircleCheck } from "lucide-react";

export default function AboutH3() {
  return (
    <div className="flex flex-col gap-20 w-full items-center justify-center">
      <div className="flex justify-between w-[90%] p-8 rounded-lg gap-10">
        <div className="flex-1 flex flex-col gap-4 mt-10">
          <div className="mt-4 text-[#42a9b8]">Why choose Robin?</div>
          <h1 className="text-5xl">
            We are more than just a <br /> software company
          </h1>
          <div className="flex justify-between w-full mt-4">
            <div className="flex-1 flex flex-col">
              <ul className="flex flex-col gap-4">
                <li className="flex flex-row gap-2">
                  <CircleCheck className="w-5 h-5 text-[#42a9b8]" />
                  Custom Solutions
                </li>
                <li className="flex flex-row gap-2">
                  <CircleCheck className="w-5 h-5 text-[#42a9b8]" />
                  Modern Technologies
                </li>
                <li className="flex flex-row gap-2">
                  <CircleCheck className="w-5 h-5 text-[#42a9b8]" />
                  Agile Development
                </li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col">
              <ul className="flex flex-col gap-4">
                <li className="flex flex-row gap-2">
                  <CircleCheck className="w-5 h-5 text-[#42a9b8]" />
                  Dedicated Support
                </li>
                <li className="flex flex-row gap-2">
                  <CircleCheck className="w-5 h-5 text-[#42a9b8]" />
                  Transparent Communication
                </li>
                <li className="flex flex-row gap-2">
                  <CircleCheck className="w-5 h-5 text-[#42a9b8]" />
                  Long-term Partnerships
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/about2.png"
            alt="Dashboard Image"
            className="rounded-lg h-90 w-200 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
