import Image from "next/image";
import webTutorImage from "@/public/assets/images/tutor_bg.png";
import Link from "next/link";

const HomeWebTutorSection = () => {
  return (
    <div className=" relative pt-26  ">
      <div className="w-auto h-105 absolute -z-20">
        <Image
          src={webTutorImage}
          alt="Tutor Background"
          width={100}
          height={100}
          sizes="100vw"
          className="w-full h-full object-cover  "
        />
      </div>
      <div className=" container  text-center flex flex-col items-center justify-center  pt-[101px] pb-[86px] ">
        <h2 className=" pb-2.5 text-[55px] leading-15 text-[#021713] font-bold">
          আপনি কি একজন দক্ষ <br /> টিউটর?
        </h2>
        <h3 className=" pb-7.5 text-lg text-[#021713] font-normal ">
          আজই আমাদের প্ল্যাটফর্মে যুক্ত হয়ে আপনার দক্ষতাকে আয়ের সুযোগে পরিণত
          করুন।
        </h3>
        <Link
          href={"/add-tutors"}
          className=" font-bold text-[#021713] text-lg bg-[#72FF31] hover:bg-[#021713] hover:text-[#72FF31] rounded-lg px-6.25  py-[14px]"
        >
          টিউটর হিসেবে যোগ দিন
        </Link>
      </div>
    </div>
  );
};

export default HomeWebTutorSection;
