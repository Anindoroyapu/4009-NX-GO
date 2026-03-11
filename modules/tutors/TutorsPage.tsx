"use client";
import { TutorsDataProvider } from "./context/TutorsDataProvider";
import ModalContactTutor from "./modal/ModalContactTutor";
import TutorsLayouts from "./TutorsLayouts";

const TutorsPage = () => {
  return (
    <TutorsDataProvider>
      <div className=" absolute hidden lg:block rounded-full -z-20 top-44 left-64 blur-[300px] w-60 h-60 bg-[#06C9FF]" />
      <div className=" absolute hidden lg:block rounded-full -z-20 top-250 left-44 blur-[500px] w-100 h-100 bg-[#FF48D7]" />
      <div className=" absolute hidden lg:block rounded-full -z-20 top-300 right-0 blur-[300px] w-60 h-60 bg-[#00FF1E]" />
      <div className=" absolute hidden lg:block rounded-full -z-20 top-64 right-0 blur-[330px] w-100 h-100 bg-[#FFDD00]" />
      {/* Layout */}
      <TutorsLayouts />
      {/* //Modal */}
      <ModalContactTutor />
    </TutorsDataProvider>
  );
};

export default TutorsPage;
