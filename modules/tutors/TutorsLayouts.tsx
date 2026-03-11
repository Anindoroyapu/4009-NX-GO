/* eslint-disable @typescript-eslint/no-explicit-any */
import { SIZE_LG, useLayout } from "@/context/LayoutProvider";
import TutorWebFilterComp from "./components/TutorWebFilterComp";
import TutorsTopComp from "./components/TutorsTopComp";
import { useTutorsData } from "./context/TutorsDataProvider";
import TutorsWebCardComp from "./components/TutorsWebCardComp";
import TutorsTopMobileComp from "./components/TutorsTopMobileComp";
import TutorsMobileCardComp from "./components/TutorsMobileCardComp";
import HomeTutorSearchSection from "../home/layouts/HomeTutorSearchSection";

import TutorsWebCardSkeletonComp from "./components/TutorsWebCardSkeletonComp";

const TutorsLayouts = () => {
  const { windowWidth } = useLayout();

  const { data, loading, setShowCount, showCount, setFormData } =
    useTutorsData();

  const tutorList = data;
  // const TutorEducationData = tutorList
  //   ? educationList
  //       ?.filter((edu: any) =>
  //         Object.values(tutorList as Record<string, Tutor>).some(
  //           (tutor: Tutor) => tutor.sl === edu.tutor_sl,
  //         ),
  //       )
  //       .map((edu: any) => edu.institute_board || null)
  //   : [];

  const TutorData = data
    ? Object.values(data as Record<string, any>).map(
        (tutor: any) => tutor.tutor || null,
      )
    : [];

  const TutorEducationData = data
    ? Object.values(data as Record<string, any>).map(
        (edu: any) => edu.education || null,
      )
    : [];
  return windowWidth > SIZE_LG ? (
    <div className=" my-10 flex gap-10 relative top-0 w-330 h-full  mx-5 lg:mx-auto">
      <TutorWebFilterComp data={data} />
      <div className="">
        <TutorsTopComp data={data} />
        <div className=" grid grid-cols-3 mt-10 gap-10 ">
          {!loading &&
            TutorData &&
            Object?.values(TutorData as any).map(
              (tutor: any, index: number) => {
                const educationInfo = TutorEducationData[index] || {};
                return (
                  <TutorsWebCardComp
                    key={index}
                    name={tutor.name}
                    university={tutor.current_edu_institute}
                    subjects={tutor.interest_subject}
                    profile_sl={tutor.sl}
                    image={educationInfo}
                  />
                );
              },
            )}
          {loading &&
            Array.from({ length: 6 }).map((_, index) => (
              <TutorsWebCardSkeletonComp key={index} />
            ))}
        </div>
        <button
          onClick={() => {
            setShowCount(showCount + 15);
            setFormData((prev: any) => ({
              ...prev,
              showCount: showCount + 15,
            }));
          }}
          className=" w-31.25 h-31.25 rounded-full bg-[#FF59B4] hover:bg-[#44BAFF] text-center flex items-center justify-center  m-auto text-xl font-bold text-white mt-10 cursor-pointer"
        >
          আরও দেখুন
        </button>
      </div>
    </div>
  ) : (
    <div className=" w-full px-5 mb-10">
      <TutorsTopMobileComp />
      <div className=" pt-5 grid grid-cols-1 gap-2.5 ">
        {tutorList &&
          Object?.values(TutorData as any).map((tutor: any, index: number) => {
            const educationInfo = TutorEducationData[index] || {};
            return (
              <TutorsMobileCardComp
                key={index}
                name={tutor.name}
                university={tutor.current_edu_institute}
                subjects={tutor.interest_subject}
                profile_sl={tutor.sl}
                image={educationInfo}
              />
            );
          })}
      </div>
      <HomeTutorSearchSection />
    </div>
  );
};

export default TutorsLayouts;
