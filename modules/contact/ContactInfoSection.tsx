import Image from "next/image";
import React from "react";
import plant from "@/public/assets/images/plant.png";
import {
  CallIcon,
  EmailIcon,
  LocationIcon,
} from "@/public/assets/icons/icon-as-svg";

const ContactInfoSection = () => {
  return (
    <div className="relative  w-full lg:w-157.5 lg:h-192.5  lg:mx-auto rounded-[25px] lg:rounded-[53px] lg:overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(215.47deg,#FFE991_0%,#FFA2F9_100%)] rounded-[25px] lg:rounded-[53px]" />
      {/* <div className="absolute w-21.25 h-auto lg:w-auto bottom-3.25 lg:bottom-7.5 right-7.5">
        <Image
          src={plant}
          alt=""
          width={100}
          height={100}
          sizes="100"
          className="w-full h-full"
        />
      </div> */}
      <div className="absolute lg:w-[153px] h-auto  w-[85px] bottom-3.25 lg:bottom-7.5 right-7.5">
        <Image
          src={plant}
          alt=""
          width={100}
          height={100}
          sizes="100"
          className="w-full h-full"
        />
      </div>
      <div className="absolute lg:w-216.75 lg:h-216.75 bg-white/10 rounded-full left-3.25 top-13.75" />
      <div className="absolute lg:w-167.5 lg:h-167.5 bg-white/10 rounded-full left-[210px] top-[252px]" />

      <div className="relative z-10 flex flex-col gap-7.5 lg:gap-10 px-5 lg:px-17.5 pt-5 lg:pt-15 lg:pb-0 pb-7.5">
        <div className="flex flex-col gap-3.75 lg:max-w-[490px]">
          <div className="flex flex-col gap-1.25">
            <h4 className="text-lg lg:text-[20px] font-bold  text-[#FF4BBD]">
              কোনো সাহায্য দরকার?
            </h4>
            <h2 className="text-[30px] lg:text-[40px] font-bold text-[#7A13FF] leading-10 lg:leading-11.25">
              আমাদের সাথে যোগাযোগ
            </h2>
          </div>
          <p className="text-base lg:text-[20px] leading-6.25 lg:leading-[30px] text-[#3D0099] text-justify">
            আপনার যেকোনো প্রশ্ন, টিউটর নির্বাচন বা সেবা সংক্রান্ত সহায়তার জন্য
            আমাদের সাথে যোগাযোগ করুন। আমাদের সাপোর্ট টিম দ্রুত এবং আন্তরিকভাবে
            আপনাকে প্রয়োজনীয় সহায়তা প্রদান করবে।
          </p>
        </div>
        <div className="flex flex-col gap-3.75 lg:gap-[30px]">
          <div className="flex items-center gap-3.75 lg:5">
            <div className="w-15 lg:w-[80px] h-15 lg:h-[80px] bg-[#7A13FF]/90 backdrop-blur-[2px] rounded-[20px] flex items-center justify-center">
              <div className="text-white text-2xl">
                <CallIcon className="w-[30px] lg:w-10 h-[30px] lg:h-10 " />
              </div>
            </div>
            <div className="flex flex-col gap-[2px]">
              <h4 className="text-base lg:text-[20px] lg:leading-5 font-bold text-[#7A13FF]">
                ফোন নাম্বার
              </h4>
              <p className="text-[20px] lg:text-[25px] font-bold text-[#390084]">
                ০১৯৪০-৯৭০৪৮৮
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.75 lg:5">
            <div className="w-15 lg:w-[80px] h-15 lg:h-[80px] bg-[#FF13E7]/90 backdrop-blur-[2px] rounded-[15px] lg:rounded-[20px] flex items-center justify-center">
              <div className="text-white text-2xl">
                <EmailIcon className="w-[30px] lg:w-10 h-[30px] lg:h-10 " />
              </div>
            </div>
            <div className="flex flex-col gap-[2px] lg:w-[calc(100%-100px)] w-[calc(100%-100px)]">
              <h4 className="text-base lg:text-[20px] lg:leading-5 font-bold text-[#FF24E6]">
                ইমেইল
              </h4>
              <p className="text-[20px] lg:text-[25px] font-bold text-[#390084] break-all">
                mohdzahidulislam7@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.75 lg:5 w-full">
            <div className="w-15 lg:w-[80px] h-15 lg:h-[80px] bg-[#FF7700]/90 backdrop-blur-[2px] rounded-[15px] lg:rounded-[20px] flex items-center justify-center">
              <div className="text-white text-2xl">
                <LocationIcon className="w-[30px] lg:w-10 h-[30px] lg:h-10 " />
              </div>
            </div>
            <div className="flex flex-col gap-[2px] pt-[10px] lg:w-[calc(100%-100px)] w-[calc(100%-100px)]">
              <h4 className="text-base lg:text-[20px] lg:leading-5 font-bold text-[#FF7200]">
                ঠিকানা
              </h4>
              <p className="text-[20px] lg:text-[25px] font-bold text-[#390084] leading-8">
                Opposite Side of Boyra Public College, Khulna,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
