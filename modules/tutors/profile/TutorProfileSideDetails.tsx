"use client";
import { Skeleton } from "@/src/libs/skeleton";
import { useTutorsData } from "./context/TutorsProfileProvider";
import {
  BookIcon,
  LocationAIcon,
  SchoolIcon,
  TimeIcon,
} from "@/public/assets/icons/icon-as-svg";
import { useTemplate } from "@/src/context/template/TemplateProvider";

const TutorProfileSideDetails = () => {
  const { profileData, loading } = useTutorsData();
  const profile_sl = profileData?.sl;
  const name = profileData?.name;
  const { openModal } = useTemplate();

  const details = [
    {
      icon: TimeIcon,
      label: "সময় দিতে পারবেন",
      value: `${parseInt(profileData?.interest_time?.split(",").map((index: string) => parseInt(index) - 12)[0])}:00`,
    },
    {
      icon: SchoolIcon,
      label: "শ্রেণি/ক্লাস",
      value:
        profileData?.interest_class
          ?.split("class_")
          ?.map((cls: string) => cls.trim()) || "N/A",
    },
    {
      icon: BookIcon,
      label: "বিষয়",
      value: profileData?.interest_subject || "N/A",
    },
    {
      icon: LocationAIcon,
      label: "পছন্দের এলাকা",
      value: profileData?.interest_area || "N/A",
      hideBorder: true,
    },
  ];

  return (
    <div className="lg:left-[1220px]  lg:top-[150px] lg:w-[400px] lg:h-[557px] ">
      <div className="bg-white shadow-[0_0_50px_0_rgba(30,0,70,0.05)] rounded-[20px] p-2.5 lg:p-[25px] flex flex-col  gap-5 lg:gap-[10px]">
        <h2 className="lg:text-[25px] text-xl font-bold leading-[28px] text-[#021713] border-b border-[#D0CFD9] pb-[10px]">
          টিউটরের তথ্য
        </h2>
        <div className="flex flex-col gap-[15px] lg:gap-[20px] pt-7.5">
          {details.map((detail, idx) => (
            <div
              key={idx}
              className={`flex gap-[15px] ${!detail.hideBorder && "border-b border-[rgba(2,23,19,0.2)]"} pb-[20px]`}
            >
              <div className="lg:w-[60px] w-[50px] h-[50px] lg:h-[60px] bg-[rgba(138,56,245,0.1)] rounded-[12px] flex items-center justify-center">
                <detail.icon className="lg:w-7.5 w-6 h-6 lg:h-7.5" />
              </div>

              {!loading ? (
                <div className="flex flex-col gap-[5px] w-[calc(100%-75px)]">
                  <p className="text-sm lg:text-[16px] text-[rgba(2,23,19,0.7)]">
                    {detail.label}
                  </p>
                  <p className="text-sm lg:text-[20px] font-bold text-[#021713]">
                    {detail.value}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-[5px] w-[calc(100%-75px)]">
                  <Skeleton className="w-32 h-4" />
                  <Skeleton className="w-48 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => openModal("contactTutor", { profile_sl, name })}
          className="lg:w-[350px] h-[49px] bg-[#72FF31] hover:bg-[#021713] text-[#021713] hover:text-[#72FF31] rounded-[8px] px-[25px] py-[14px] font-bold uppercase text-[18px] cursor-pointer"
        >
          যোগাযোগ করুন
        </button>
      </div>
    </div>
  );
};

export default TutorProfileSideDetails;
