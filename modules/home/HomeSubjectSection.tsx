import { cn } from "@/src/utils/cn";
import Image from "next/image";
import kpi from "@/public/assets/images/kpi.png";
import ku from "@/public/assets/images/ku.png";
import bl from "@/public/assets/images/bl.png";
import kuet from "@/public/assets/images/kuet.png";
import {
  AdmissionBatchIcon,
  ArrowIcon,
  ArthonitiIcon,
  ArtsIcon,
  CalculatorIcon,
  CSTIcon,
  EnglishIcon,
  LampIcon,
  LanguageIcon,
  UpArrowIcon,
} from "@/public/assets/icons/icon-as-svg";
import { FC } from "react";
import { COLORS } from "./components/HomeSubjectBGColors";
import Link from "next/link";

const SUBJECTS = [
  "গণিত",
  "বিজ্ঞান",
  "ইংরেজি",
  "কম্পিউটার বিজ্ঞান",
  "ভর্তি পরীক্ষা",
  "অর্থনীতি",
  "মানবিক",
  "ভাষা শিক্ষা",
];

const images = [kpi, ku, bl, kuet];

const TutorAvatars = () => (
  <div className="flex relative h-7.5">
    {images.map((img, idx) => (
      <div
        key={idx}
        className={`absolute top-0 w-7.5 h-7.5 overflow-hidden bg-white rounded-full transition-all duration-400 border-2 border-[#E7F9DF] group-hover:border-[#7FFF44]`}
        style={{ left: `${idx * 15}px` }}
      >
        <Image
          src={img}
          alt="tutor"
          width={100}
          height={100}
          sizes="100vw"
          className="w-10 h-auto object-cover scale-200 rounded-full transition-all duration-400"
        />
      </div>
    ))}
  </div>
);

interface SubjectCardProps {
  subject: string;
  index: number;
}

const SubjectCard = ({ subject, index }: SubjectCardProps) => {
  const colors = COLORS[index] || COLORS[7];

  return (
    <div
      className={cn(
        "bg-white border rounded-[20px] p-5 group text-[#021713] transition-all duration-400 cursor-pointer",
        colors.bg,
        colors.border,
        colors.hover,
      )}
    >
      <div className="flex gap-3.75 items-center">
        <div
          className={cn(
            "group-hover:bg-white size-10 lg:size-[50px] rounded-[7px] p-1.75 transition-all duration-400",
            colors.icon,
          )}
        >
          {(() => {
            const IconComponent = [
              CalculatorIcon,
              LampIcon,
              EnglishIcon,
              CSTIcon,
              AdmissionBatchIcon,
              ArthonitiIcon,
              ArtsIcon,
              LanguageIcon,
            ][index];
            return (
              <IconComponent
                fillClass={colors.fill}
                className="w-6.25 lg:w-9 h-6.25 lg:h-9"
              />
            );
          })()}
        </div>
        <h1 className="text-[25px] font-bold leading-[34px]">{subject}</h1>
      </div>
      <div className="pt-3.75">
        <h2 className="w-full text-justify text-base text-[#021713]">
          বীজগণিত, জ্যামিতি, ক্যালকুলাস এবং আরও <br /> অনেক কিছু
        </h2>
        <div className="grid grid-cols-3 items-center justify-between pt-3">
          <TutorAvatars />
          <h2 className="font-bold text-base text-[#021713] text-nowrap">
            ১৫+ নির্বাচিত টিউটর
          </h2>
          <div className=" flex justify-end">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const SubjectComp = () => (
  <div className="grid lg:grid-cols-4 gap-2.5 lg:gap-7 ">
    {SUBJECTS.map((subject, index) => (
      <SubjectCard key={index} subject={subject} index={index} />
    ))}
  </div>
);

export default function HomeSubjectSection() {
  return (
    <div className="lg:max-w-330 mx-5 lg:mx-auto lg:mb-32.5  ">
      <div className="flex justify-between items-center  mb-6 lg:mb-15">
        <div>
          <h1 className="text-[35px] lg:text-[55px] font-bold lg:pb-3 leading-11.25 lg:leading-15 text-[#021713]">
            আপনার পছন্দের বিষয়ে খুঁজে <br className=" lg:block hidden" /> নিন
            দক্ষ টিউটর
          </h1>
          <h3 className="lg:text-lg text-[#021713] lg:pt-0 pt-1.5">
            আপনার প্রয়োজন অনুযায়ী অভিজ্ঞ ও যাচাইকৃত শিক্ষকের সাথে সহজেই
            সংযুক্ত হন
          </h3>
        </div>
        <Link
          href="/tutors"
          className=" hidden cursor-pointer bg-[#FF59B4] size-39 group rounded-full text-center group-hover:pt-0   lg:flex flex-col justify-center items-center"
        >
          <h2 className="text-white pb-1 text-xl font-bold group-hover:hidden transition-all duration-100">
            সম্পূর্ণ তালিকা <br /> দেখুন
          </h2>
          <UpArrowIcon className=" group-hover:size-18 transition-all duration-500" />
        </Link>
      </div>
      <SubjectComp />
      <div className=" mt-5 w-full flex justify-center mb-10 lg:hidden ">
        <button className=" text-center  text-white font-bold bg-[#FF59B4] rounded-lg px-5 py-2.5">
          যোগাযোগ করুন
        </button>
      </div>
    </div>
  );
}
