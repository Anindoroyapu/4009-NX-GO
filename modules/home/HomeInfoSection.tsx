import { cn } from "@/src/utils/cn";
import Image from "next/image";
import InfoImage from "@/public/assets/images/info_image.png";
import { InfoBadgeIcon } from "@/public/assets/icons/icon-as-svg";

const InfoCardComp = () => {
  const infoList = [
    {
      id: 1,
      title: "মানসম্মত শিক্ষা",
      text: "বাছাইকৃত ও অভিজ্ঞ টিউটরের মাধ্যমে নির্ভরযোগ্য পাঠদান",
    },
    {
      id: 2,
      title: "ব্যাক্তিগত মনোযোগ",
      text: "প্রতিটি শিক্ষার্থীর জন্য আলাদা করে শেখার পরিকল্পনা",
    },
    {
      id: 3,
      title: "ফলপ্রসূ শেখার অভিজ্ঞতা",
      text: "সহজ, কার্যকর ও লক্ষ্যভিত্তিক শিক্ষণ পদ্ধতি অনুসারণ",
    },
    {
      id: 4,
      title: "উন্নত শিক্ষা ফলাফল",
      text: "নিয়মিত মূল্যায়ন ও সঠিক গাইডলাইনে নিশ্চিত অগ্রগতি",
    },
  ];

  return (
    <div className=" pt-3.5 lg:pt-5 grid grid-cols-1 lg:grid-cols-2 gap-3.75 lg:gap-[18px] space-y-0.5">
      {infoList.map((info, index) => (
        <div
          key={index}
          className={cn(
            "flex  gap-3.75 text-lg text-justify  p-2.5 border border-[#00AAFF]/20 rounded-[15px] text-white",
            index === infoList.length - 1
              ? "bg-[#FF00C7] border-[#00AAFF]/20"
              : index === infoList.length - 1 - 1
                ? "bg-[#00AAFF] border-[#FF41D6]/20"
                : index === infoList.length - 1 - 1 - 1
                  ? "bg-[#FF9500] border-[#FF00C7]/20"
                  : "bg-[#AE00FF] border-[#FF41D6]/20",
          )}
        >
          <div className=" ">
            <InfoBadgeIcon />
          </div>
          <div className="">
            <div className=" font-bold text-lg">{info.title}</div>
            <p className=" pt-1 text-justify text-white/95 text-base">
              {info.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const HomeInfoSection = () => {
  return (
    <div className="lg:relative grid grid-cols-1 lg:px-0 px-5 lg:grid-cols-2 gap-5 lg:gap-20 mb-7.5 lg:mb-45.75 justify-center lg:max-w-330 mx-auto mt-7.5 lg:mt-30">
      <div className=" w-full lg:w-160.5 h-full z-10">
        <Image
          alt=""
          src={InfoImage}
          width={100}
          height={100}
          sizes="100vw"
          className=" w-full h-auto object-contain"
        />
      </div>
      <div className=" hidden lg:block  lg:absolute bg-[#FF00C7]/50 top-64 size-63.75 opacity-50 rounded-full blur-[100px]" />
      <div>
        <h1 className=" text-[35px] lg:text-[55px] font-bold">
          আমাদের সম্পর্কে
        </h1>
        <h3 className=" text-base lg:text-lg lg:mt-3 text-justify">
          খুলনা টিউশন সার্ভিস (Khulna Tuition Service) হলো এমন একটি শিক্ষামূলক
          প্ল্যাটফর্ম যা শিক্ষার্থীদের দক্ষ ও অভিজ্ঞ টিউটরদের সাথে সংযুক্ত করে,
          যাতে তারা ব্যক্তিগত শেখার মাধ্যমে নিজেদের শিক্ষাগত লক্ষ্য অর্জন করতে
        </h3>
        <h3 className=" pt-5 lg:pt-7.25 font-bold text-xl">
          আমরা আপনাকে প্রতিশ্রুতি দিচ্ছি —
        </h3>

        <InfoCardComp />
      </div>
    </div>
  );
};

export default HomeInfoSection;
