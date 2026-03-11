import { useState } from "react";
import TutorsFilterSection from "../TutorsFilterSection";
import { FilterIcon } from "@/public/assets/icons/icon-as-svg";

const TutorsTopMobileComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative bg-white shadow-sm shadow-gray-50 px-5 rounded-[15px]">
      <div className=" flex justify-between items-center  py-2.5 bg-white shadow-[0_0_50px_rgba(138,56,245,0.05)] rounded-[15px]">
        <span className=" font-shurjo font-bold text-[18px] leading-[20px] text-[#021713]">
          টিউটর্স
        </span>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex flex-row justify-between items-center px-3 py-2 gap-6.25   h-10 bg-[rgba(138,56,245,0.05)] border border-[rgba(138,56,245,0.3)] rounded-[7px]"
        >
          <div className="w-11.25 h-[20px] font-shurjo font-bold text-[16px] leading-[20px] text-[#8A38F5] mx-auto">
            ফিলটার
          </div>

          <div className="w-[20px] h-[20px] mx-auto relative">
            <FilterIcon />
          </div>
        </button>
      </div>

      {isOpen && <TutorsFilterSection isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default TutorsTopMobileComp;
