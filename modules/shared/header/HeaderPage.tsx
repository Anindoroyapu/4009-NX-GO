import Image from "next/image";
import React from "react";
import MainLogo from "@/public/assets/images/mainLogo.png";

const HeaderPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-6 py-3 w-[1100px] h-[76px] bg-white border-[1.5px] border-[#F5F5F5] rounded-[18px]">
        <div className="w-[73.31px] h-[43.99px] bg-[#F15C2A]">
          <Image
            src={MainLogo}
            alt="logo"
            width={100}
            height={100}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>

        <div className="flex items-center gap-4 w-[513px] h-[24px]">
          <a className="text-[16px] font-medium text-[#F15C2A]">Home page</a>
          <div className="w-[1px] h-[8px] bg-[#E1E1E1]"></div>

          <a className="text-[16px] font-medium text-[#5A5A5A]">
            About Platform
          </a>
          <div className="w-[1px] h-[8px] bg-[#E1E1E1]"></div>

          <a className="text-[16px] font-medium text-[#5A5A5A]">Features</a>
          <div className="w-[1px] h-[8px] bg-[#E1E1E1]"></div>

          <a className="text-[16px] font-medium text-[#5A5A5A]">Pricing</a>
          <div className="w-[1px] h-[8px] bg-[#E1E1E1]"></div>

          <a className="text-[16px] font-medium text-[#5A5A5A]">Contact</a>
        </div>

        <div className="flex items-center gap-2 w-[146px] h-[52px]">
          <button className="flex items-center justify-center w-[40px] h-[40px] bg-[#FAFAFA] rounded-full backdrop-blur-[20px]">
            <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3a9 9 0 100 18 7 7 0 010-18z"
                stroke="#2E2E2E"
                stroke-width="1.5"
              />
            </svg>
          </button>

          <button className="flex items-center justify-center px-6 py-[14px] w-[98px] h-[52px] bg-[#2E2E2E] text-white text-[16px] font-medium rounded-[10px] backdrop-blur-[20px]">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
