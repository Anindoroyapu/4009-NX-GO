import { cn } from "@/src/utils/cn";
import React, { FC } from "react";
import {
  AboutValues01,
  AboutValues02,
  AboutValues03,
  AboutValues04,
  AboutValues05,
  AboutValues06,
} from "./about-svg-icon";

const AboutValuesCardComp: FC<{
  title: string;
  detail: string;
  color: string;
  id: string;
}> = ({ title, detail, color, id }) => {
  return (
    <div className="flex items-start gap-5 lg:w-168.75 lg:h-24.25">
      <div
        className={cn(
          `flex justify-center items-center w-[50px] lg:w-16.25 h-[50px] lg:h-16.25 rounded-xl p-[13px_12px] relative bg-[#${color}]`,
        )}
      >
        <div className=" size-[50px] lg:size-16.25 flex items-center relative">
          {id === "1" && (
            <AboutValues01 className="w-[30px] lg:w-10 h-[30px] lg:h-10" />
          )}
          {id === "2" && (
            <AboutValues02 className="w-[30px] lg:w-10 h-[30px] lg:h-10" />
          )}
          {id === "3" && (
            <AboutValues03 className="w-[30px] lg:w-10 h-[30px] lg:h-10" />
          )}
          {id === "4" && (
            <AboutValues04 className="w-[30px] lg:w-10 h-[30px] lg:h-10" />
          )}
          {id === "5" && (
            <AboutValues05 className="w-[30px] lg:w-10 h-[30px] lg:h-10" />
          )}
          {id === "6" && (
            <AboutValues06 className="w-[30px] lg:w-10 h-[30px] lg:h-10" />
          )}
        </div>
      </div>

      <div className="flex flex-col items-start gap-0.75 lg:w-147.5 lg:h-24.25">
        <h3 className="w-full font-['Shurjo'] font-bold text-lg lg:text-[30px] lg:leading-[34px] text-[#021713] text-justify">
          {title}
        </h3>
        <p className="w-full font-['Shurjo'] font-normal text-base lg:text-[18px] leading-6.25 lg:leading-[30px] text-[#021713]/80">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default AboutValuesCardComp;
