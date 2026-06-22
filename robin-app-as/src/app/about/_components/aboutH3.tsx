import { CircleCheck } from "lucide-react";

export default function AboutH3() {
  return (
    <div className="flex w-full items-center justify-center px-4 sm:px-6">
      <div className="flex w-full max-w-[1600px] flex-col justify-between gap-8 rounded-lg py-6 sm:p-8 lg:flex-row lg:gap-10">
        <div className="flex flex-1 flex-col gap-4 lg:mt-10">
          <div className="mt-4 text-[#42a9b8]">Why choose Robin?</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">We are more than just a software company</h2>
          <div className="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex-1 flex flex-col">
              <ul className="flex flex-col gap-4">
                <li className="flex flex-row gap-2">
                  <CircleCheck className="h-5 w-5 shrink-0 text-[#42a9b8]" />
                  Custom Solutions
                </li>
                <li className="flex flex-row gap-2">
                  <CircleCheck className="h-5 w-5 shrink-0 text-[#42a9b8]" />
                  Modern Technologies
                </li>
                <li className="flex flex-row gap-2">
                  <CircleCheck className="h-5 w-5 shrink-0 text-[#42a9b8]" />
                  Agile Development
                </li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col">
              <ul className="flex flex-col gap-4">
                <li className="flex flex-row gap-2">
                  <CircleCheck className="h-5 w-5 shrink-0 text-[#42a9b8]" />
                  Dedicated Support
                </li>
                <li className="flex flex-row gap-2">
                  <CircleCheck className="h-5 w-5 shrink-0 text-[#42a9b8]" />
                  Transparent Communication
                </li>
                <li className="flex flex-row gap-2">
                  <CircleCheck className="h-5 w-5 shrink-0 text-[#42a9b8]" />
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
            className="h-auto max-h-[430px] w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
