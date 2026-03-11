import React from "react";

const TutorsWebCardSkeletonComp = () => {
  return (
    <div className="w-75 h-90 bg-white rounded-[20px] border border-white shadow-[0_0_50px_0_rgba(138,56,245,0.05)] flex flex-col items-center justify-center px-5 pt-[30px] pb-5 gap-[18px]">
      <div className="w-full flex flex-col items-center gap-5">
        <div className="w-30 h-30 bg-gray-200 rounded-full animate-pulse" />
        <div className="flex flex-col items-center gap-1.25 w-full">
          <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
      <div className="w-full border-b-[0.5px] border-[#021713]/15" />
      <div className="w-full flex flex-col items-center gap-5">
        <div className="flex items-center gap-3 w-full justify-center">
          <div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex gap-2.25 w-full">
          <div className="w-31 h-10 bg-gray-200 rounded-lg animate-pulse" />
          <div className="w-31.75 h-10 bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default TutorsWebCardSkeletonComp;
