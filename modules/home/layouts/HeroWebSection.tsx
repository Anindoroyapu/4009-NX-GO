import HeroImagesComp from "../components/HeroImagesComp";
import heroShadow from "@/public/assets/images/main-shadow.png";
import Link from "next/link";
import Image from "next/image";
import HeroCountComp from "../components/HeroCountComp";
import HeroAnimationComp from "../components/HeroAnimationComp";

const HeroWebSection = () => {
  return (
    <div className="relative">
      <HeroAnimationComp />
      <div>
        <h3 className=" text-center text-[#FF34D3] pt-23.25 font-bold text-[25px]">
          গৃহ-শিক্ষক/শিক্ষিকা দিচ্ছে
        </h3>
        <h2 className=" text-[90px] font-bold leading-none text-center text-[#021713] pt-6.25">
          খুলনা টিউশন সার্ভিস
        </h2>
        <h3 className="text-[25px] font-normal leading-full text-center text-[#021713] ">
          টিউশনের প্রথম ২টি ক্লাস সম্পূর্ণ ফ্রি!
        </h3>
        <h3 className="text-[25px] font-normal leading-none text-center text-[#021713] pt-1.5 ">
          যে কোন প্রকার শিক্ষক-শিক্ষিকার জন্য যোগাযোগ করুন।
        </h3>
      </div>
      <div className=" relative  pb-62.75">
        <HeroImagesComp />

        <div>
          <div className="w-full h-127.75 absolute top-7.5  flex items-start gap-5 justify-center">
            <Link
              href={"/contact"}
              className=" font-bold text-[#021713] text-lg bg-[#72FF31] hover:bg-[#021713] hover:text-[#72FF31] rounded-lg px-6.25  py-[14px]"
            >
              যোগাযোগ করুন
            </Link>
            <Link
              href={"/tutors"}
              className=" font-bold text-[#021713] text-lg border border-[#021713]  hover:bg-[#021713] hover:text-[#72FF31] rounded-lg px-6.25  py-[14px]"
            >
              শিক্ষক অনুসন্ধান
            </Link>
          </div>
          <div className="w-full h-127.75 absolute top-58.75 ">
            <Image
              alt="heroShadow"
              src={heroShadow}
              width={100}
              height={100}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* Count Section */}
        <div className=" absolute bottom-0 w-full h-1.5 bg-gradient-to-r from-[#8A38F5]/10 via-[#C02C9D]/10 to-[#51218F]/10" />

        {/* Hero Count Component */}
        <HeroCountComp />
      </div>
    </div>
  );
};
export default HeroWebSection;
