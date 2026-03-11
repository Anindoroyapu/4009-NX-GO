import Image from "next/image";
import React from "react";
import webTutorImage from "@/public/assets/images/tutor_mobile_bg.png";
import Link from "next/link";

const HomeTutorMobileSection = () => {
  return (
    <div className=" relative pt-12.5  ">
      <div className="w-auto h-76.25 absolute -z-20">
        <Image
          src={webTutorImage}
          alt="Tutor Background"
          width={100}
          height={100}
          sizes="100vw"
          className="w-full h-full object-cover  "
        />
      </div>
      <div className=" container  text-center flex flex-col items-center justify-center  pt-[61px] pb-[51px] ">
        <h2 className=" pb-1.5 text-[35px] leading-11.25 text-[#021713] font-bold">
          আপনি কি একজন দক্ষ <br /> টিউটর?
        </h2>
        <h3 className=" pb-3.25 text-base text-[#021713] font-normal ">
          আজই আমাদের প্ল্যাটফর্মে যুক্ত হয়ে আপনার দক্ষতাকে আয়ের সুযোগে পরিণত
          করুন।
        </h3>
        <Link
          href={"/add-tutors"}
          className=" font-bold text-[#021713] text-base bg-[#72FF31] hover:bg-[#021713] hover:text-[#72FF31] rounded-lg px-6.25  py-[14px]"
        >
          টিউটর হিসেবে যোগ দিন
        </Link>
      </div>
    </div>
  );
};

export default HomeTutorMobileSection;
