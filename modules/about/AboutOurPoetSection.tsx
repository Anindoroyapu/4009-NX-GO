import Image from "next/image";
import React from "react";
import dancing from "@/public/assets/images/dancing.png";

const AboutOurPoetSection = () => {
  return (
    <div className="lg:flex lg:flex-row items-center p-0 lg:gap-20 w-full lg:w-285 mx-auto mt-8.75 lg:mt-20 lg:h-155 left-97.5 top-243.25">
      <div className="flex flex-col items-start p-0 gap-7 lg:w-140 lg:h-142.25">
        <div className="flex flex-col items-start p-0 lg:w-100 lg:h-23.25">
          <h2 className="lg:w-100 lg:h-15 text-nowrap font-[Shurjo] font-bold text-[35px] lg:text-[55px] leading-11.25 lg:leading-15 text-[#021713]">
            আমাদের গল্প ও যাত্রা
          </h2>
          <p className="lg:w-100 lg:h-8.25 font-[Shurjo] font-bold text-[20px] leading-8.25 text-[#8A38F5]">
            শুরুটা ২০২০ থেকে
          </p>
        </div>
        <div className="flex flex-col items-start p-0 gap-6 lg:w-140 lg:h-111.5">
          <p className="lg:w-140 lg:h-33 lg:text-start text-justify font-[Shurjo] font-normal text-[20px] leading-8.25 text-[#000000]">
            খুলনা টিউশন সার্ভিস-এর যাত্রা শুরু হয় একটি সাধারণ লক্ষ্য
            নিয়ে—শিক্ষার্থী ও দক্ষ টিউটরের মাঝে সেতুবন্ধন তৈরি করা। অনেক
            শিক্ষার্থী ও অভিভাবক উপযুক্ত ও নির্ভরযোগ্য টিউটর খুঁজে পেতে সমস্যার
            সম্মুখীন হন। এই চাহিদাকে গুরুত্ব দিয়েই আমরা গড়ে তুলেছি একটি সংগঠিত,
            নিরাপদ ও প্রযুক্তিনির্ভর প্ল্যাটফর্ম।
          </p>
          <p className="lg:w-140 lg:h-33 font-[Shurjo]  lg:text-start text-justify font-normal text-[20px] leading-8.25 text-[#000000]">
            আমরা বিশ্বাস করি, প্রতিটি শিক্ষার্থী আলাদা এবং তাদের শেখার ধরণও
            ভিন্ন। তাই প্রতিটি শিক্ষার্থীর প্রয়োজন অনুযায়ী যাচাইকৃত ও অভিজ্ঞ
            টিউটর নির্বাচন করে দেওয়া আমাদের প্রধান লক্ষ্য। মানসম্মত শিক্ষা,
            স্বচ্ছতা এবং নির্ভরযোগ্য সেবা নিশ্চিত করাই আমাদের প্রতিদিনের
            অঙ্গীকার।
          </p>
          <p className="lg:w-[560px] lg:h-[132px] font-[Shurjo] font-normal lg:text-start text-justify text-[20px] leading-8.25 text-[#000000]">
            আজ খুলনা শহরজুড়ে শত শত শিক্ষার্থী আমাদের মাধ্যমে নিয়মিত টিউশন সুবিধা
            পাচ্ছে। এই আস্থা ও ভালোবাসাই আমাদের এগিয়ে চলার প্রেরণা। ভবিষ্যতে
            আরও আধুনিক সেবা, স্মার্ট ম্যাচিং সিস্টেম এবং বিস্তৃত বিষয়ভিত্তিক
            টিউশন সুবিধা নিয়ে শিক্ষার জগতে ইতিবাচক পরিবর্তন আনাই আমাদের লক্ষ্য।
          </p>
        </div>
      </div>
      <div className="box-border lg:w-125 lg:h-155 lg:mt-0 mt-5 border-[#F5C0FF] rounded-[45px]">
        <Image
          src={dancing}
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

export default AboutOurPoetSection;
