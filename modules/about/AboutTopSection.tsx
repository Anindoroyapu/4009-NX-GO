"use client";
import Image from "next/image";
import React from "react";
import learning from "@/public/assets/images/learning.png";
import learningMobile from "@/public/assets/images/learning_mobile.png";
import { SIZE_LG, useLayout } from "@/context/LayoutProvider";
const AboutTopSection = () => {
  const { windowWidth } = useLayout();
  return (
    <div>
      <h1 className="text-center lg:text-2xl font-bold text-purple-600 uppercase">
        আমাদের সম্পর্কে
      </h1>
      <p className="text-center text-xl lg:text-[30px] font-bold text-black uppercase lg:max-w-255 mx-auto">
        খুলনা টিউশন সার্ভিস (Khulna Tuition Service) হলো এমন একটি শিক্ষামূলক
        প্ল্যাটফর্ম যা শিক্ষার্থীদের দক্ষ ও অভিজ্ঞ টিউটরদের সাথে সংযুক্ত করে,
        যাতে তারা ব্যক্তিগত শেখার মাধ্যমে নিজেদের শিক্ষাগত লক্ষ্য অর্জন করতে
        পারে।  
      </p>
      <div className="lg:mt-20 mt-6.5 lg:mx-0 -mx-5 ">
        <Image
          src={windowWidth > SIZE_LG ? learning : learningMobile}
          alt="Learning"
          width={100}
          height={100}
          sizes="100vw"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default AboutTopSection;
