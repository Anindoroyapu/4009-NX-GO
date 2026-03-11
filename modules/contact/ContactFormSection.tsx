import React from "react";

const ContactFormSection = () => {
  return (
    <div className=" lg:w-148.75 lg:h-152.5 lg:left-247.5 lg:mr-8.75 lg:top-[calc(50%-305px-35px)] flex flex-col gap-8.75">
      <h2 className="w-full text-[30px] lg:text-[40px] leading-11.25 font-bold text-[#021713]">
        কোনো প্রশ্ন আছে কি?
      </h2>
      <div className="w-full lg:w-148.75 lg:h-132.5 flex flex-wrap lg:justify-end lg:content-end items-center gap-y-[18px] gap-x-3.75">
        <div className="w-full lg:w-72.5 flex flex-col gap-[10px]">
          <label className="px-[10px] text-[16px] leading-[18px] font-bold uppercase text-[#021713]">
            সম্পূর্ণ নাম লিখুন
          </label>
          <input
            type="text"
            placeholder="Ex: Cristopher Nolan"
            className="lg:w-72.5 w-full h-[50px] px-[14px] bg-white border border-[#02171333] rounded-[10px] text-[16px] text-[#021713b3] outline-none"
          />
        </div>

        <div className="w-full lg:w-72.5 flex flex-col gap-[10px]">
          <label className="px-[10px] text-[16px] leading-[18px] font-bold uppercase text-[#021713]">
            ইমেইল লিখুন
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="lg:w-72.5 h-[50px] px-[14px] bg-white border border-[#02171333] rounded-[10px] text-[16px] text-[#021713b3] outline-none"
          />
        </div>

        <div className="w-full lg:w-72.5 flex flex-col gap-[10px]">
          <label className="px-[10px] text-[16px] leading-[18px] font-bold uppercase text-[#021713]">
            ফোন নাম্বার লিখুন
          </label>
          <input
            type="text"
            placeholder="01XXXXXXXXX"
            className="lg:w-72.5 h-[50px] px-[14px] bg-white border border-[#02171333] rounded-[10px] text-[16px] text-[#021713b3] outline-none"
          />
        </div>

        <div className="w-full lg:w-72.5 flex flex-col gap-[10px]">
          <label className="px-[10px] text-[16px] leading-[18px] font-bold uppercase text-[#021713]">
            বিষয় নির্বাচন করুন
          </label>
          <input
            type="text"
            placeholder="Subject"
            className="lg:w-72.5 h-[50px] px-[14px] bg-white border border-[#02171333] rounded-[10px] text-[16px] text-[#021713b3] outline-none"
          />
        </div>

        <div className="w-full lg:w-148.75 flex flex-col gap-[10px]">
          <label className="px-[10px] text-[16px] leading-[18px] font-bold uppercase text-[#021713]">
            ঠিকানা লিখুন
          </label>
          <input
            type="text"
            placeholder="Ex: Khulna, Bangladesh"
            className="lg:w-148.75 h-[50px] px-[14px] bg-white border border-[#02171333] rounded-[10px] text-[16px] text-[#021713b3] outline-none"
          />
        </div>

        <div className="w-full lg:w-148.75 flex flex-col gap-[10px]">
          <label className="px-[10px] text-[16px] leading-[18px] font-bold uppercase text-[#021713]">
            আপনার ম্যাসেজ লিখুন*
          </label>
          <textarea
            placeholder="আপনার ম্যাসেজ লিখুন"
            className="lg:w-148.75 h-36.75 px-[14px] py-[14px] bg-white border border-[#02171333] rounded-[10px] text-[16px] text-[#021713b3] outline-none resize-none"
          />
        </div>

        <div className="w-full lg:w-148.75 lg:h-[49px] grid  lg:flex lg:justify-between gap-6.25 lg:items-center mt-[10px]">
          <div className="flex items-center gap-3 lg:w-[232px]">
            <input
              type="checkbox"
              className="w-6.25 h-6.25 bg-white border border-[#02171380] rounded-[5px]"
            />
            <span className="text-[16px] uppercase text-black">
              আমি সকল নীতি ও শর্ত-তে একমত
            </span>
          </div>

          <button className="w-full lg:w-40 h-[49px] bg-[#72FF31] rounded-[8px] flex items-center justify-center">
            <span className="text-[18px] font-bold uppercase text-[#021713]">
              বার্তা প্রেরণ করুন
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
