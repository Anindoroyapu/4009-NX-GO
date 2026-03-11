import React from "react";
import HomeTutorSearchSection from "../home/layouts/HomeTutorSearchSection";

import ContactFormSection from "./ContactFormSection";
import ContactInfoSection from "./ContactInfoSection";
import ContactMapSection from "./ContactMapSection";
const ContactPage = () => {
  return (
    <div className="lg:pb-130 lg:w-full  w-[calc(100%-40px)] mx-auto">
      <div className=" absolute hidden lg:block rounded-full -z-20 top-44 left-64 blur-[300px] w-60 h-60 bg-[#06C9FF]" />
      <div className=" absolute hidden lg:block rounded-full -z-20 top-250 left-44 blur-[400px] w-80 h-80 bg-[#FF48D7]" />
      <div className=" absolute hidden lg:block rounded-full -z-20 top-300 right-0 blur-[300px] w-60 h-60 bg-[#06C9FF]" />
      <div className=" absolute hidden lg:block rounded-full -z-20 top-64 right-0 blur-[330px] w-100 h-100 bg-[#FFDD00]" />
      <ContactMapSection />
      <div className=" lg:flex grid gap-5 lg:justify-between items-center lg:gap-15 lg:p-2.5 bg-white rounded-[60px] lg:w-330 mt-10 lg:mt-17.5   lg:mx-auto">
        <ContactInfoSection />
        <ContactFormSection />
      </div>
      <div className=" lg:absolute lg:left-0 lg:right-0 lg:-z-30">
        <HomeTutorSearchSection />
      </div>
    </div>
  );
};

export default ContactPage;
