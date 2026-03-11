"use client";
import { Checkbox } from "@/src/utils/checkbox";
import { FC, useState } from "react";
import TutorClassSelectComp from "./TutorClassSelectComp";
import InstituteSearchComp from "./InstituteSearchComp";
import SubjectsSearchComp from "./SubjectsSearchComp";
import AreaSearchComp from "./AreaSearchComp";
import { useTutorsData } from "../context/TutorsDataProvider";
import { cn } from "@/src/utils/cn";

export type TFormData = {
  gender: {
    male: string;
    female: string;
  };
  class: {
    class_1: string;
    class_2: string;
    class_3: string;
    class_4: string;
    class_5: string;
    class_6: string;
    class_7: string;
    class_8: string;
    class_9: string;
    class_10: string;
    class_11: string;
    class_12: string;
  };
  board_institute: string;
  search_subject: string;
  search_name: string;
  search_location: string;
  min_remuneration: string;
  max_remuneration: string;
};

const TutorWebFilterComp: FC<{ data?: any }> = ({ data }) => {
  const { formData, setFormData } = useTutorsData();
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="">
      <div
        className={cn(
          "flex sticky flex-col items-start p-5 gap-3.5 w-75 top-30 overflow-auto left-75  bg-white shadow-[-10px_0_50px_0_rgba(138,56,245,0.05)] rounded-[20px]",
          showMore ? "h-290" : "h-200",
        )}
      >
        <div className="font-bold text-[25px] leading-7 text-[#021713]">
          অ্যাডভান্স ফিল্টার
        </div>
        <div className="border-b border-[rgba(2,23,19,0.1)] w-65 h-0" />
        <div className="flex flex-col items-start gap-6 w-65 h-158">
          <div className="flex flex-row items-center gap-5 w-65 h-5">
            <span className="font-bold text-[18px] leading-5 text-[#00A1FF]">
              লিঙ্গ নির্বাচন
            </span>
          </div>
          <div className="flex flex-col items-center gap-[12.5px]">
            <button
              onClick={() => {
                setFormData({
                  ...formData,
                  gender: {
                    ...formData?.gender,
                    male: formData?.gender?.male === "male" ? "" : "male",
                  },
                });
              }}
              className="cursor-pointer flex gap-[12.5px]"
            >
              <Checkbox
                checked={formData?.gender?.male === "male"}
                className="text-white size-5 [&>_.checkIcon]:size-4"
              />
              <span className="font-normal text-[16px] leading-[22px] text-[#021713]">
                পুরুষ
              </span>
            </button>

            <button
              onClick={() => {
                setFormData({
                  ...formData,
                  gender: {
                    ...formData?.gender,
                    female:
                      formData?.gender?.female === "female" ? "" : "female",
                  },
                });
              }}
              className="cursor-pointer flex gap-[12.5px]"
            >
              <Checkbox
                checked={formData?.gender?.female === "female"}
                className="text-white size-5 [&>_.checkIcon]:size-4"
              />
              <span className="font-normal text-[16px] leading-[22px] text-[#021713]">
                মহিলা
              </span>
            </button>
          </div>

          <div className="flex flex-row items-center gap-5 w-65 h-5">
            <span className="font-bold text-[18px] leading-5 text-[#00A2FF]">
              শ্রেণি/ক্লাস নির্বাচন
            </span>
          </div>

          <TutorClassSelectComp
            formData={formData}
            setFormData={setFormData}
            showMore={showMore}
            setShowMore={setShowMore}
          />

          <div className="flex flex-col">
            <InstituteSearchComp
              formData={formData?.board_institute}
              setFormData={setFormData}
            />
            <SubjectsSearchComp
              formData={formData?.search_subject}
              setFormData={setFormData}
            />
            <AreaSearchComp
              formData={formData?.search_location}
              setFormData={setFormData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorWebFilterComp;
