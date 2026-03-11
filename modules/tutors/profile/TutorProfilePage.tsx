import React from "react";
import TutorProfileSideDetails from "./TutorProfileSideDetails";
import TutorProfileDetailsSection from "./TutorProfileDetailsSection";
import { TutorsProfileProvider } from "./context/TutorsProfileProvider";
import Link from "next/link";
import ModalContactTutor from "../modal/ModalContactTutor";

const TutorProfilePage = () => {
  return (
    <TutorsProfileProvider>
      <div className=" lg:flex grid container gap-10 lg:gap-12.5 my-5 lg:my-17.75">
        <div className=" absolute hidden lg:block rounded-full -z-20 top-100 left-120 blur-[300px] w-60 h-60 bg-[#06C9FF]/50" />
        <TutorProfileDetailsSection />
        <TutorProfileSideDetails />
      </div>

      <Link
        href="/tutors"
        className=" fixed lg:hidden absolute top-2.5 left-5 z-50"
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="45" height="45" rx="22.5" fill="#F2F3F4" />
          <path
            d="M21.457 28.75L15.207 22.5L21.457 16.25M15.7279 22.5H29.7904"
            stroke="#00071B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* //Modal */}
      <ModalContactTutor />
    </TutorsProfileProvider>
  );
};

export default TutorProfilePage;
