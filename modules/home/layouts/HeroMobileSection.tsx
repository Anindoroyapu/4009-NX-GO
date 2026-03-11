import React from "react";
import HeroMobileImagesComp from "../components/HeroMobileImagesComp";
import Link from "next/link";
import Image from "next/image";
import heroShadow from "@/public/assets/images/main-shadow.png";
import HeroMobileCountComp from "../components/HeroMobileCountComp";

const HeroMobileSection = () => {
  return (
    <div className="pt-7.5">
      <div>
        <h3 className=" text-center text-[#FF34D3] font-bold text-base">
          গৃহ-শিক্ষক/শিক্ষিকা দিচ্ছে
        </h3>
        <h2 className=" text-[40px] font-bold leading-none text-center text-[#021713] pt-2.5">
          খুলনা টিউশন সার্ভিস
        </h2>
        <h3 className="text-[15px] font-normal pt-1.5 leading-full text-center text-[#021713] ">
          টিউশনের প্রথম ২টি ক্লাস সম্পূর্ণ ফ্রি!
        </h3>
        <h3 className="text-[15px] font-normal pt-0.5 leading-full text-center text-[#021713] ">
          যে কোন প্রকার শিক্ষক-শিক্ষিকার জন্য যোগাযোগ করুন।
        </h3>
      </div>
      <div className=" relative pb-8.5">
        <HeroMobileImagesComp />
        <div>
          <div className="w-full absolute top-7.5  flex items-start gap-5 justify-center">
            <Link
              href={"/contact"}
              className=" font-bold text-[#021713] text-base border border-[#72FF31] bg-[#72FF31] hover:bg-[#021713] hover:text-[#72FF31] rounded-lg px-5  py-2.5"
            >
              যোগাযোগ করুন
            </Link>
            <Link
              href={"/tutors"}
              className=" font-bold text-[#021713] text-base border border-[#021713] hover:bg-[#021713] hover:text-[#72FF31] rounded-lg px-5  py-2.5"
            >
              শিক্ষক অনুসন্ধান
            </Link>
          </div>
          <div className="w-full h-90 absolute top-23 ">
            <Image
              alt="heroShadow"
              src={heroShadow}
              width={100}
              height={100}
              sizes="100vw"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* Count Section */}
        <div className=" absolute bottom-0 w-full h-1.5 bg-gradient-to-r from-[#8A38F5]/10 via-[#C02C9D]/10 to-[#51218F]/10" />
        {/* Hero Count Component */}
        <HeroMobileCountComp />
      </div>
    </div>
  );
};

export default HeroMobileSection;
