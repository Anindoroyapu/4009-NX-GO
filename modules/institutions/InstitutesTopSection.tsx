import React from "react";

const InstitutesTopSection = () => {
  return (
    <div className="w-full flex flex-col items-center p-0 gap-7  lg:h-[212px]  ">
      <div className="flex flex-col items-center p-0 gap-3.75  ">
        <div className="lg:block hidden font-shurjo font-bold text-[18px] leading-[20px] text-center uppercase text-[#AD42FF]">
          শিক্ষা প্রতিষ্ঠান
        </div>
        <div className="lg:block hidden font-shurjo font-bold text-xl lg:text-[30px] leading-[30px] lg:leading-11.25 text-center  lg:w-[1060px] text-[#000000]">
          এখানে আপনি দেশের বিভিন্ন স্কুল, কলেজ ও শিক্ষা প্রতিষ্ঠানের তালিকা
          পাবেন, যেখান থেকে সহজেই নির্দিষ্ট প্রতিষ্ঠানের অভিজ্ঞ ও যাচাইকৃত টিউটর
          খুঁজে নিতে পারবেন।
        </div>
      </div>
      <div className="box-border w-full flex   justify-between items-center p-1 gap-1 lg:w-[785px] h-10  lg:h-[57px] bg-white border border-[#E7B3EA] rounded-[30px]">
        <div className="flex w-full p-0 px-4 gap-2   lg:w-full h-[24px]">
          {/* Icons can be added here */}
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4154 18.7469C15.0502 18.7469 18.8074 14.9897 18.8074 10.3549C18.8074 5.72012 15.0502 1.96289 10.4154 1.96289C5.78066 1.96289 2.02344 5.72012 2.02344 10.3549C2.02344 14.9897 5.78066 18.7469 10.4154 18.7469Z"
                stroke="#021713"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M19.9594 22.0359C21.0728 22.0359 21.9754 21.1333 21.9754 20.0199C21.9754 18.9065 21.0728 18.0039 19.9594 18.0039C18.846 18.0039 17.9434 18.9065 17.9434 20.0199C17.9434 21.1333 18.846 22.0359 19.9594 22.0359Z"
                stroke="#021713"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder=" শিক্ষা প্রতিষ্ঠানের নাম..."
            className="font-shurjo font-normal outline-none w-full text-[16px] leading-[19px] text-[rgba(2,23,19,0.6)]"
          />
        </div>
        <button className="flex lg:block hidden flex-row cursor-pointer justify-center items-center lg:py-3.25 px-6.25 gap-2   w-[139px] h-10 lg:h-[47px] bg-[#00A1FF] rounded-[30px]">
          <span className="w-22.25 h-[21px] text-nowrap font-shurjo font-bold text-[16px] leading-[21px] text-center text-white">
            অনুসন্ধান করুন
          </span>
        </button>
      </div>
    </div>
  );
};

export default InstitutesTopSection;
