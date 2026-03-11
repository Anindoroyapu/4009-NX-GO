import { Checkbox } from "@/src/utils/checkbox";
import { FC, useState } from "react";
import { TFormData } from "./TutorWebFilterComp";
import { cn } from "@/src/utils/cn";

const TutorClassComp: FC<{
  formData?: TFormData;
  classKey: string;
  title: string;
  setFormData: (value: TFormData) => void;
}> = ({ formData, classKey, title, setFormData }) => {
  const classData =
    (formData?.class as Record<string, string> | undefined) || {};
  const selectedValue = classData[classKey] || "";

  return (
    <button
      onClick={() =>
        setFormData({
          ...(formData || ({} as TFormData)),
          class: {
            ...classData,
            [classKey]: selectedValue === title ? "" : title,
          },
        } as TFormData)
      }
      className=" cursor-pointer flex gap-[12.5px]"
    >
      <Checkbox
        checked={selectedValue === title}
        className="text-white size-5 [&>_.checkIcon]:size-4"
      />
      <span className="font-normal text-[16px] leading-[22px] text-[#021713]">
        {title}
      </span>
    </button>
  );
};

const TutorClassSelectComp: FC<{
  formData?: TFormData;
  setFormData: (value: TFormData) => void;
  showMore: boolean;
  setShowMore: (value: boolean) => void;
}> = ({ formData, setFormData, showMore, setShowMore }) => {
  return (
    <div className="flex flex-col h-full gap-5 ">
      <TutorClassComp
        formData={formData}
        classKey="class_1"
        title="১ম শ্রেণি"
        setFormData={setFormData}
      />
      <TutorClassComp
        formData={formData}
        classKey="class_2"
        title="২য় শ্রেণি"
        setFormData={setFormData}
      />
      <TutorClassComp
        formData={formData}
        classKey="class_3"
        title="৩য় শ্রেণি"
        setFormData={setFormData}
      />
      <TutorClassComp
        formData={formData}
        classKey="class_4"
        title="৪র্থ শ্রেণি"
        setFormData={setFormData}
      />
      {showMore && (
        <>
          <TutorClassComp
            formData={formData}
            classKey="class_5"
            title="৫ম শ্রেণি"
            setFormData={setFormData}
          />
          <TutorClassComp
            formData={formData}
            classKey="class_6"
            title="৬ষ্ঠ শ্রেণি"
            setFormData={setFormData}
          />
          <TutorClassComp
            formData={formData}
            classKey="class_7"
            title="৭ম শ্রেণি"
            setFormData={setFormData}
          />
          <TutorClassComp
            formData={formData}
            classKey="class_8"
            title="৮ম শ্রেণি"
            setFormData={setFormData}
          />
          <TutorClassComp
            formData={formData}
            classKey="class_9"
            title="৯ম শ্রেণি"
            setFormData={setFormData}
          />
          <TutorClassComp
            formData={formData}
            classKey="class_10"
            title="১০ম শ্রেণি"
            setFormData={setFormData}
          />
          <TutorClassComp
            formData={formData}
            classKey="class_11"
            title="১১শ শ্রেণি"
            setFormData={setFormData}
          />
          <TutorClassComp
            formData={formData}
            classKey="class_12"
            title="১২শ শ্রেণি"
            setFormData={setFormData}
          />
        </>
      )}
      <button
        onClick={() => setShowMore(!showMore)}
        className="flex items-center gap-[5px] w-[260px] h-[22px]"
      >
        <div className=" cursor-pointer text-base leading-[22px] font-normal text-[#8A38F5] font-['Shurjo']">
          {!showMore ? "আরও দেখুন" : "কম দেখুন"}
        </div>
        <div
          className={cn(
            `"w-[18px] h-[18px] relative"`,
            !showMore ? " rotate-[0deg]" : "rotate-[180deg]",
          )}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 6.75004L9 11.25L4.5 6.75"
              stroke="#8A38F5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default TutorClassSelectComp;
