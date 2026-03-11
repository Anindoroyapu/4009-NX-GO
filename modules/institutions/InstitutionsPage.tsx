"use client";
import Image from "next/image";
import NoImage from "@/public/assets/images/no_image.png";
import InstitutesTopSection from "./InstitutesTopSection";
import Link from "next/link";
import HomeTutorSearchSection from "../home/layouts/HomeTutorSearchSection";
import { SIZE_LG, useLayout } from "@/context/LayoutProvider";
import {
  InstituteDataProvider,
  useInstituteData,
} from "./context/InstituteDataProvider";
import { FC } from "react";

const InstitutionsCard: FC<{ item: any }> = ({ item }: any) => {
  return (
    <div className="flex items-center justify-center lg:w-[300px] lg:h-[248px] lg:shadow-[0_0_50px_0_rgba(138,56,245,0.05)]  shadow-[0_0_50px_0_rgba(138,56,245,0.05)] border-[#8A38F5]/10 lg:border-0 border gap-10 p-5 bg-white rounded-[15px] lg:rounded-[20px] ">
      <Link
        href={"/tutors"}
        className="flex flex-col items-center justify-center "
      >
        <div className="w-[60px] lg:w-[100px] h-[60px] lg:h-[100px] rounded-full">
          <Image
            src={
              item.institute_logo
                ? `https://khulnatutionservice.com/${item.institute_logo}`
                : NoImage
            }
            alt={item.institute_name}
            width={100}
            height={120}
            sizes="100vw"
            className="rounded-full w-full h-full  border-[#8A38F5]/20 bg-center bg-cover"
          />
        </div>
        <div className=" flex flex-col gap-[5px] items-center pt-[15px] lg:pt-5  ">
          <span className="font-shurjo font-bold text-[15px] lg:text-[22px] leading-6.25 text-center text-[#021713]">
            {item.institute_name}
          </span>
          <span className="font-shurjo font-bold text-xs lg:text-[16px] leading-[21px] text-center text-[rgba(2,23,19,0.7)]">
            ৮২+ টিউটর্স
          </span>
        </div>
      </Link>
    </div>
  );
};

const InstituteList = () => {
  const { data, loading } = useInstituteData();
  const institutes = data?.institute_all_ar;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 lg:gap-10 my-5 lg:my-17.5 lg:pb-100">
      {!loading &&
        institutes?.map((item: any, index: number) => (
          <InstitutionsCard key={index} item={item} />
        ))}
    </div>
  );
};

const InstitutionsPage = () => {
  const { windowWidth } = useLayout();
  return (
    <InstituteDataProvider>
      <div className="relative lg:w-330 mx-5 lg:mx-auto mt-5 lg:mt-17.5">
        <div className=" absolute hidden lg:block rounded-full -z-20 top-[400px] left-64 blur-[300px] w-60 h-60 bg-[#06C9FF]" />
        <div className=" absolute hidden lg:block rounded-full -z-20 top-250 left-44 blur-[400px] w-100 h-100 bg-[#FF48D7]" />
        <div className=" absolute hidden lg:block rounded-full -z-20 top-300 right-0 blur-[300px] w-60 h-60 bg-[#06C9FF]" />
        <div className=" absolute hidden lg:block rounded-full -z-20 top-64 right-0 blur-[330px] w-100 h-100 bg-[#FFDD00]" />

        <InstitutesTopSection />
        <InstituteList />
        {windowWidth < SIZE_LG && <HomeTutorSearchSection />}
      </div>
    </InstituteDataProvider>
  );
};

export default InstitutionsPage;
