import Image from "next/image";
import Link from "next/link";
import tutorSearchImage from "@/public/assets/images/tutor_search_bg.png";
import tutorSearchImageMobile from "@/public/assets/images/tutor_search_bg_mobile.png";
const HomeTutorSearchSection = () => {
  return (
    <div className=" relative">
      <div className=" absolute -z-20 w-full h-[513px] lg:block hidden -top-22">
        <Image
          src={tutorSearchImage}
          alt="tutorSearchImage"
          width={100}
          height={100}
          sizes="100vw"
          className="w-full h-full object-cover "
        />
      </div>
      <div className=" absolute -z-20 w-full h-[113px] lg:hidden block -bottom-11">
        <Image
          src={tutorSearchImageMobile}
          alt="tutorSearchImage"
          width={100}
          height={100}
          sizes="100vw"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="flex flex-col items-center gap-6.25 my-[43px] lg:my-30 lg:mx-auto mx-2.5 ">
        <div className="flex flex-col items-center gap-2.5 lg:w-[870px]  ">
          <h1 className="lg:w-[570px] font-shurjo font-bold text-[35px] lg:text-[55px] leading-11.25 lg:leading-[65px] text-center text-[#021713]">
            শুরু হোক আপনার সাফল্যের যাত্রা আজ থেকেই!
          </h1>
          <p className="lg:w-[870px] font-shurjo font-normal lg:text-xl leading-6.25 lg:leading-[30px] text-center text-black">
            হাজারো শিক্ষার্থী আমাদের দক্ষ ও যাচাইকৃত টিউটরের সহায়তায় তাদের
            শিক্ষাগত লক্ষ্য অর্জন করেছে। আপনিও আজই যুক্ত হন এবং নিজের জন্য
            উপযুক্ত টিউটর খুঁজে নিন।
          </p>
        </div>

        <Link
          href={"/tutors"}
          className=" z-30 font-bold text-[#021713] text-lg bg-[#72FF31] hover:bg-[#021713] hover:text-[#72FF31] rounded-lg px-6.25  py-[14px]"
        >
          এখনই টিউটর খুঁজুন
        </Link>
      </div>
    </div>
  );
};

export default HomeTutorSearchSection;
