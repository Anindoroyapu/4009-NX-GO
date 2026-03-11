import { StarSVGIcon } from "@/public/assets/icons/icon-as-svg";
import WebCounterComp from "./WebCounterComp";
import { FC } from "react";

const HeroCountComp: FC = () => {
  return (
    <div className="px-5.5 md:px-0 pt-13.5 w-full mx-auto md:w-330   ">
      <div className="md:absolute  md:flex justify-center">
        <div className="">
          <div className="flex items-center gap-3.5">
            <h3 className="text-[35px] md:text-[50px] font-bold text-[#021713] leading-15">
              যেখানে আমরা
            </h3>

            <StarSVGIcon className="lg:size-8.75 size-6.25 animate-spin  [animation-duration:15s]" />
          </div>
          <h3 className="text-[35px] md:text-[50px] font-bold text-[#021713] leading-15">
            অন্যদের থেকে আলাদা
          </h3>
        </div>
        <WebCounterComp />
      </div>
    </div>
  );
};

export default HeroCountComp;
