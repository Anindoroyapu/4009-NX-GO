"use client";
import Image from "next/image";
import MullobodImg from "@/public/assets/images/mullobod.png";
import MullobodMobileImg from "@/public/assets/images/mullobod01.png";
import AboutValuesCardComp from "./components/AboutValuesCardComp";
import { SIZE_LG, useLayout } from "@/context/LayoutProvider";

const AboutValuesSection = () => {
  const { windowWidth } = useLayout();
  return (
    <div className="w-full mt-10 lg:mt-30.25 mx-auto">
      <div>
        {/* Header Section */}
        <div className="mt-6.25 lg:mt-[50px] flex flex-col items-center gap-1.25 lg:gap-3 text-center">
          <h2 className="font-['Shurjo'] font-bold text-[35px] lg:text-[55px] leading-11.25 lg:leading-15 text-[#021713]">
            আমাদের মূল্যবোধ
          </h2>
          <h3 className="font-['Shurjo'] font-normal text-base lg:text-[20px] lg:leading-6.75 text-black">
            সততা, মানসম্মত সেবা, দায়িত্বশীলতা এবং শিক্ষার্থীর সফলতাকে কেন্দ্র
            করে গড়ে উঠেছে আমাদের প্রতিটি সিদ্ধান্ত ও কার্যক্রম।
          </h3>
        </div>

        {/* Body Section */}

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6.25 lg:gap-15 lg:mt-[50px] mt-6.25">
          <div className="">
            <Image
              src={windowWidth > SIZE_LG ? MullobodImg : MullobodMobileImg}
              alt=""
              width={100}
              height={100}
              sizes="100vw"
              className="w-full h-full"
            />
          </div>
          <div className="space-y-3.75 my-auto lg:space-y-6.25">
            <AboutValuesCardComp
              title="সততা ও স্বচ্ছতা"
              detail="প্রতিটি সেবায় পরিষ্কার যোগাযোগ, ন্যায়নীতি ও সম্পূর্ণ স্বচ্ছতা বজায় রেখে গ্রাহকের আস্থা অর্জন এবং দীর্ঘমেয়াদি বিশ্বাস গড়ে তোলাই আমাদের প্রধান অঙ্গীকার।"
              color="FF81E4"
              id="1"
            />{" "}
            <AboutValuesCardComp
              title="মানসম্মত শিক্ষা"
              detail="যাচাইকৃত ও দক্ষ টিউটরের মাধ্যমে আন্তর্জাতিক মানের শিক্ষা নিশ্চিত করে শিক্ষার্থীর শেখার দক্ষতা, ফলাফল এবং আত্মবিশ্বাস ধারাবাহিকভাবে উন্নত করাই আমাদের লক্ষ্য।"
              color="71D0FF"
              id="2"
            />{" "}
            <AboutValuesCardComp
              title="শিক্ষার্থী-কেন্দ্রিকতা"
              detail="প্রতিটি শিক্ষার্থীর আলাদা প্রয়োজন, শেখার ধরন এবং লক্ষ্য বুঝে ব্যক্তিগত সহায়তা প্রদান করে তাদের সর্বোচ্চ সম্ভাবনা অর্জনে সহযোগিতা করা।"
              color="FFCD07"
              id="3"
            />{" "}
            <AboutValuesCardComp
              title="উদ্ভাবন ও উন্নয়ন"
              detail="আধুনিক প্রযুক্তি, স্মার্ট সিস্টেম এবং নতুন শিক্ষণ কৌশল ব্যবহার করে শেখার অভিজ্ঞতাকে আরও সহজ, দ্রুত, কার্যকর এবং আনন্দদায়ক করে তোলা।"
              color="BB81FF"
              id="4"
            />
            <AboutValuesCardComp
              title="নিরাপত্তা ও বিশ্বাস"
              detail="নিরাপদ প্ল্যাটফর্ম, তথ্য সুরক্ষা ব্যবস্থা এবং যাচাইকৃত প্রোফাইলের মাধ্যমে ব্যবহারকারীদের আস্থা, গোপনীয়তা এবং মানসিক নিশ্চয়তা নিশ্চিত করা।"
              color="FF81E4"
              id="5"
            />
            <AboutValuesCardComp
              title="দায়বদ্ধতা ও দায়িত্ব"
              detail="শিক্ষার্থীর অগ্রগতি, সেবার গুণগত মান এবং গ্রাহক সন্তুষ্টিকে সর্বোচ্চ গুরুত্ব দিয়ে দীর্ঘমেয়াদি সম্পর্ক ও বিশ্বাসযোগ্যতা বজায় রাখা।"
              color="FF7B7B"
              id="6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutValuesSection;
