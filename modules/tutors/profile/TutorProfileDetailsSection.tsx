"use client";
import Image from "next/image";
import { useTutorsData } from "./context/TutorsProfileProvider";
import { BookIcon } from "@/public/assets/icons/icon-as-svg";
import { Skeleton } from "@/src/libs/skeleton";
import NoImage from "@/public/assets/images/no_image.png";
const VerifiedBadge = () => (
  <div className="flex items-center gap-[6px] px-[15px] py-[7px] lg:bg-[rgba(138,56,245,0.1)] lg:border border-[rgba(138,56,245,0.2)] rounded-[20px]">
    <VerifiedIcon />
    <span className="text-[16px] lg:block hidden text-nowrap font-bold text-[#8A38F5]">
      যাচাইকৃত টিউটর
    </span>
  </div>
);

const VerifiedIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0013 1.04175C9.53364 1.04175 9.15264 1.23851 8.80597 1.50306C8.48122 1.75082 8.12302 2.10904 7.70396 2.52814L7.67449 2.55761C7.2456 2.9865 6.87171 3.1553 6.2947 3.1553C6.22239 3.1553 6.13113 3.15273 6.02807 3.14983C5.76388 3.1424 5.42211 3.13278 5.12309 3.15864C4.6857 3.19646 4.13907 3.31616 3.72418 3.73453C3.31247 4.14971 3.19569 4.6941 3.15899 5.12874C3.13399 5.42504 3.14359 5.76426 3.15102 6.02656C3.15394 6.1299 3.15654 6.22132 3.15654 6.29346C3.15654 6.87048 2.98773 7.24437 2.55882 7.67328L2.52936 7.70274C2.11026 8.1218 1.75204 8.48 1.50429 8.80466C1.23974 9.15141 1.04298 9.53241 1.04297 10.0001C1.04298 10.4677 1.23974 10.8487 1.50429 11.1954C1.75209 11.5202 2.11039 11.8785 2.52959 12.2977L2.55885 12.3269C2.8369 12.6049 2.96806 12.7852 3.0424 12.9554C3.11479 13.1212 3.15654 13.331 3.15654 13.7067C3.15654 13.779 3.15397 13.8702 3.15107 13.9733C3.14364 14.2375 3.13402 14.5792 3.15988 14.8783C3.19771 15.3157 3.31741 15.8623 3.73579 16.2772C4.15098 16.6889 4.69536 16.8057 5.12999 16.8423C5.42628 16.8674 5.76549 16.8577 6.02779 16.8503C6.13114 16.8474 6.22255 16.8448 6.29469 16.8448C6.66237 16.8448 6.86902 16.8818 7.03168 16.9489C7.19419 17.016 7.36802 17.1361 7.62983 17.3979C7.68571 17.4537 7.75933 17.5327 7.84424 17.6237C8.03588 17.8291 8.28523 18.0963 8.51797 18.2997C8.87105 18.6084 9.37764 18.9584 10.0013 18.9584C10.6251 18.9584 11.1316 18.6084 11.4847 18.2997C11.7174 18.0963 11.9666 17.8293 12.1581 17.6239C12.2431 17.5327 12.3169 17.4538 12.3728 17.3978C12.6346 17.1361 12.8084 17.016 12.9709 16.9489C13.1336 16.8818 13.3402 16.8448 13.7079 16.8448C13.7801 16.8448 13.8715 16.8474 13.9748 16.8503C14.2371 16.8577 14.5763 16.8674 14.8726 16.8423C15.3072 16.8057 15.8516 16.6889 16.2668 16.2772C16.6852 15.8623 16.8049 15.3157 16.8427 14.8783C16.8686 14.5792 16.859 14.2375 16.8516 13.9733C16.8486 13.8703 16.8461 13.7789 16.8461 13.7067C16.8461 13.331 16.8878 13.1212 16.9602 12.9554C17.0346 12.7852 17.1657 12.6049 17.4437 12.3269L17.4731 12.2977C17.8922 11.8785 18.2506 11.5202 18.4983 11.1954C18.7629 10.8487 18.9596 10.4677 18.9596 10.0001C18.9596 9.53241 18.7629 9.15141 18.4983 8.80466C18.2506 8.48 17.8924 8.12181 17.4733 7.70276L17.4438 7.67328C17.1657 7.39521 17.0346 7.21491 16.9602 7.0447C16.8878 6.87898 16.8461 6.66915 16.8461 6.29346C16.8461 6.2212 16.8486 6.13002 16.8516 6.02705C16.859 5.76286 16.8686 5.42088 16.8427 5.12187C16.8049 4.68449 16.6852 4.13786 16.2669 3.72297C15.8517 3.31124 15.3073 3.19446 14.8726 3.15776C14.5763 3.13274 14.2371 3.14235 13.9748 3.14978C13.8715 3.15271 13.7801 3.1553 13.7079 3.1553C13.1307 3.1553 12.7569 2.98642 12.3281 2.55761L12.2986 2.52815C11.8796 2.10904 11.5214 1.75082 11.1966 1.50306C10.85 1.23851 10.469 1.04175 10.0013 1.04175ZM13.1394 8.45275C13.4354 8.10036 13.3897 7.5747 13.0373 7.27868C12.6849 6.98266 12.1592 7.02836 11.8632 7.38077L8.91564 10.8897L8.05633 10.1225C7.71302 9.816 7.18622 9.84583 6.87969 10.1892C6.57317 10.5324 6.60299 11.0592 6.94629 11.3657L8.4463 12.7051C8.61439 12.8552 8.83614 12.9307 9.06097 12.9147C9.28572 12.8985 9.49447 12.792 9.63938 12.6194L13.1394 8.45275Z"
      fill="#8A38F5"
    />
  </svg>
);

const SubjectsList = ({
  subjects,
  totalSubjects,
}: {
  subjects: string[];
  totalSubjects: number;
}) => (
  <div className="flex   gap-2 lg:gap-[15px] text-[16px] font-bold ">
    <BookIcon className="lg:w-6 w-5 lg:h-6 h-5" />
    <div className="flex flex-wrap items-center gap-1.5">
      {subjects.map((sub, index) => (
        <div key={index} className="flex items-center gap-1.5">
          <span className="text-nowrap">{sub.trim()}</span>
          {index < subjects.length - 1 && totalSubjects > 0 && (
            <div className="w-[4px] h-[4px] bg-[#021713] rounded-full" />
          )}
        </div>
      ))}
    </div>
  </div>
);

const Description = () => (
  <div className="flex flex-col gap-[15px] lg:gap-[20px] lg:w-[870px] lg:text-[18px] leading-[26px] text-[#021713]/80 text-justify">
    <p>
      Experienced and dedicated tutor committed to helping students achieve
      their academic goals. With a strong educational background and passion for
      teaching, I provide personalized instruction tailored to each
      student&apos;s learning style and needs.
    </p>
    <p>
      My approach focuses on building strong foundational knowledge while
      developing critical thinking and problem-solving skills.
    </p>
  </div>
);

const EducationSection = ({
  education,
}: {
  education: Array<{ degree: string; institute_board: string }>;
}) => {
  const { loading } = useTutorsData();
  return (
    <div className="flex flex-col gap-2.5 lg:gap-3.75 w-full lg:w-210.75">
      <h2 className="text-xl lg:text-[25px] font-bold text-[#021713]">
        শিক্ষাগত যোগ্যতা
      </h2>
      {loading ? (
        <div className="flex gap-3.75">
          <div className="flex flex-col gap-2">
            <Skeleton className=" w-32 h-6" />
            <Skeleton className=" w-48 h-5" />
          </div>
        </div>
      ) : (
        <div className="flex gap-3.75 overflow-auto max-w-screen">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      )}
    </div>
  );
};

const EducationCard = ({
  education,
}: {
  education: { degree: string; institute_board: string };
}) => {
  const { loading } = useTutorsData();
  return (
    <div className=" min-w-[150px] lg:min-w-[271px] h-[84px] bg-white  rounded-[15px] flex items-center gap-[14px] px-3 lg:px-[25px] py-2.5 lg:py-5 shadow-[0px_0px_10px_rgba(2,23,19,0.05)]">
      <div className="w-[2px] h-[42px] bg-[#8A38F5] rounded" />
      {!loading ? (
        <div>
          <p className="lg:text-[20px] font-bold uppercase">
            {education.degree}
          </p>
          <p className="text-sm lg:text-[16px] text-[rgba(2,23,19,0.8)]">
            {education.institute_board}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <Skeleton className=" w-32 h-6" />
          <Skeleton className=" w-48 h-5" />
        </div>
      )}
    </div>
  );
};

const ExperienceSection = ({ profileData }: { profileData: any }) => {
  const { loading } = useTutorsData();

  return (
    <div className="flex flex-col gap-[15px] lg:w-[557px]">
      <h2 className="text-xl lg:text-[25px] font-bold text-[#021713]">
        অভিজ্ঞতা
      </h2>

      <div className="flex gap-[15px]">
        <div className="lg:h-[84px] min-w-[150px] lg:min-w-[271px] bg-white shadow-[0px_0px_40px_rgba(2,23,19,0.05)] rounded-[15px] flex items-center gap-[14px] px-2 lg:px-6.25 py-2.5 lg:py-[20px]">
          <div className="w-[2px] h-[42px] bg-[#0FB700] rounded" />
          {!loading ? (
            <div>
              <p className="lg:text-[20px] font-bold">
                {profileData?.experience || 0}
              </p>
              <p className="text-sm lg:text-[16px] text-[rgba(2,23,19,0.8)]">
                {profileData?.interest_subject}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Skeleton className=" w-20 h-6" />
              <Skeleton className=" w-32 h-5" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TutorProfileDetailsSection = () => {
  const { profileData, institute, education, loading } = useTutorsData();

  const tutorLogo =
    Object.values(
      institute as Record<string, { sl: number; institute_logo: string }>,
    )[0]?.institute_logo || "";

  const subjects = profileData?.interest_subject?.split(",").slice(0, 3) || [];

  return (
    <div className="lg:left-75 lg:top-37.5 lg:w-217.5 lg:h-177.75 flex flex-col lg:gap-[50px]">
      <div className="lg:w-217.5 flex flex-col gap-5 lg:gap-8.75">
        <div className="flex items-center gap-[15px] lg:gap-10 lg:w-155.75">
          <div className="w-16.25 h-16.25 lg:w-30 lg:h-30 rounded-full border-2 border-[rgba(138,56,245,0.2)] shadow-[0px_0px_10px_rgba(2,23,19,0.04)]">
            <Image
              src={
                tutorLogo
                  ? `https://khulnatutionservice.com/${tutorLogo}`
                  : NoImage
              }
              alt="Tutor profile"
              width={100}
              height={100}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1.5 lg:gap-3 w-[calc(100%-80px)] lg:w-115.75">
            <div className="flex items-center gap-1.5 lg:gap-3.75">
              <h1 className="lg:text-[35px] text-xl font-bold md:text-nowrap text-[#021713] lg:leading-9.75">
                {!loading ? (
                  profileData?.name || ""
                ) : (
                  <Skeleton className=" w-44 h-10" />
                )}
              </h1>
              <VerifiedBadge />
            </div>

            {!loading ? (
              <SubjectsList
                subjects={subjects}
                totalSubjects={
                  profileData?.interest_subject?.split(",").length || 0
                }
              />
            ) : (
              <Skeleton className=" w-60 h-6" />
            )}
          </div>
        </div>
        <Description />
        <EducationSection education={education} />
      </div>
      <ExperienceSection profileData={profileData} />
    </div>
  );
};

export default TutorProfileDetailsSection;
