import { SearchIcon } from "@/public/assets/icons/icon-as-svg";
import { cn } from "@/src/utils/cn";
import { FC } from "react";

const TutorsFilterSection: FC<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={cn(
        "fixed  inset-0 flex bottom-[-100%] transition-all duration-300 z-50",
        isOpen ? "" : "opacity-0 pointer-events-none",
      )}
    >
      <div
        className={cn(
          " w-full h-[50%] flex flex-col justify-between  transition-transform duration-300 transform",
          isOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="bg-black/40 opacity-50 w-full h-[30%]"
        ></button>

        <div className="bg-black/20  relative w-full h-full">
          <div className="">
            <div className=" bg-white absolute bottom-0 h-9 w-full left-1/2 z-20 -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full rounded-t-[40px] pt-10 bg-white px-5 pb-7.5 overflow-y-auto">
              <h2 className="text-[20px] font-bold text-[#8A38F5] text-center font-shurjo">
                ফিলটার
              </h2>
              <div className="mt-[46px] flex flex-col gap-6.25">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] font-bold text-[#00A2FF] font-shurjo">
                    শিক্ষা প্রতিষ্ঠান
                  </h3>
                  <div className="flex flex-wrap gap-[10px]">
                    <div className="flex items-center gap-[10px] px-2 py-0.75 bg-[#8A38F51A] border border-[#8A38F580] rounded-[6px]">
                      <span className="text-[14px] text-[#8A38F5] font-shurjo">
                        Khulna University
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 3.5L3.50047 10.4995M10.4995 10.5L3.5 3.5005"
                          stroke="#8A38F5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-[7px] px-[10px] h-10 border border-[#021713B3] rounded-[8px]">
                    <SearchIcon />
                    <span className="text-[14px] text-[#02171380] uppercase font-shurjo">
                      অনুসন্ধান করুন
                    </span>
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] font-bold text-[#00A2FF] font-shurjo">
                    বিষয় নির্বাচন
                  </h3>

                  <div className="flex items-center gap-[7px] px-[10px] h-10 border border-[#021713B3] rounded-[8px]">
                    <SearchIcon />
                    <span className="text-[14px] text-[#02171380] uppercase font-shurjo">
                      অনুসন্ধান করুন
                    </span>
                  </div>
                </div>

                {/* Area Selection */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] font-bold text-[#00A2FF] font-shurjo">
                    এরিয়া নির্বাচন
                  </h3>

                  <div className="flex items-center gap-[7px] px-[10px] h-10 border border-[#021713B3] rounded-[8px]">
                    <SearchIcon />
                    <span className="text-[14px] text-[#02171380] uppercase font-shurjo">
                      অনুসন্ধান করুন
                    </span>
                  </div>
                </div>

                {/* Gender Selection */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] font-bold text-[#00A2FF] font-shurjo">
                    লিঙ্গ নির্বাচন
                  </h3>

                  <div className="flex gap-3">
                    <label className="flex items-center gap-[10px]">
                      <div className="w-[24px] h-[24px] bg-[#8A38F5] flex items-center justify-center rounded">
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.75 4.25L3.25 6.75L8.75 0.75"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-[16px] text-[#021713] font-shurjo">
                        পুরুষ
                      </span>
                    </label>

                    <label className="flex items-center gap-[10px]">
                      <div className="w-[24px] h-[24px] border border-[#021713] rounded" />
                      <span className="text-[16px] text-[#021713] font-shurjo">
                        মহিলা
                      </span>
                    </label>
                  </div>
                </div>

                {/* Class Selection */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] font-bold text-[#00A2FF] font-shurjo">
                    শ্রেণি/ক্লাস নির্বাচন
                  </h3>

                  <div className="flex flex-wrap gap-x-3.75 gap-y-3">
                    {[
                      "১ম শ্রেণি",
                      "২য় শ্রেণি",
                      "৩য় শ্রেণি",
                      "৪র্থ শ্রেণি",
                      "৫ম শ্রেণি",
                      "৬ষ্ট শ্রেণি",
                      "৭ম শ্রেণি",
                      "৮ম শ্রেণি",
                      "৯/১০ম শ্রেণি",
                    ].map((cls, i) => (
                      <label
                        key={i}
                        className="flex items-center gap-[10px] w-[90px]"
                      >
                        <div className="w-[24px] h-[24px] border border-[#021713]" />
                        <span className="text-[16px] text-[#021713] font-shurjo">
                          {cls}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorsFilterSection;
