import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import NoImage from "@/public/assets/images/no_image.png";
import { useTemplate } from "@/src/context/template/TemplateProvider";
interface TeacherCardProps {
  image: any;
  name: string;
  university: string;
  subjects: string;
  profile_sl: number;
}

const TutorsWebCardComp: FC<TeacherCardProps> = ({
  image,
  name,
  university,
  subjects,
  profile_sl,
}) => {
  const universityLogo =
    image?.map((edu: any) => edu.institute_logo)[0] || null;

  const { openModal } = useTemplate();

  return (
    <div className="w-[300px] h-[360px] bg-white rounded-[20px] border border-white shadow-[0_0_50px_0_rgba(138,56,245,0.05)] flex flex-col items-center justify-center px-5 pt-[30px] pb-[20px] gap-[18px]">
      <div className="w-full flex flex-col items-center gap-5">
        <div className="w-[120px] h-[120px] bg-center bg-cover">
          <Image
            src={
              universityLogo
                ? `https://khulnatutionservice.com/${universityLogo}`
                : NoImage
            }
            alt={name}
            width={120}
            height={120}
            sizes="100vw"
            className="rounded-full w-full h-full  border-[#8A38F5]/20 bg-center bg-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-[5px]">
          <h3 className="text-[22px] leading-6.25 font-bold text-[#021713] text-center">
            {name}
          </h3>
          <p className="text-[14px] leading-[18px] text-[#02171399] text-center">
            {university}
          </p>
        </div>
      </div>

      <div className="w-full border-b-[0.5px] border-[#021713]/15" />

      <div className="w-full flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33301 2.25001C7.44706 2.2472 9.50316 2.85959 11.25 3.99317V21.75C9.594 20.3951 7.5011 19.6484 5.33398 19.6514H5.31934C4.55616 19.6514 3.94559 19.6514 3.48535 19.6221C3.11122 19.5983 2.57249 19.4753 2.24121 19.3125C2.11711 19.2331 1.9933 19.1447 1.875 19.0264C1.7567 18.9081 1.6683 18.7843 1.58887 18.6602C1.37442 18.3249 1.30993 17.9284 1.28027 17.5518C1.25 17.167 1.25 16.6737 1.25 16.0762V6.40235C1.25 5.71199 1.24799 5.10712 1.32812 4.60548C1.41468 4.0638 1.60338 3.58943 2.00488 3.16603C2.79137 2.33668 3.67611 2.32137 4.74316 2.26466C4.93851 2.25428 5.13519 2.25002 5.33301 2.25001Z"
                fill="#8A38F5"
              />
              <path
                d="M18.667 2.25001C16.553 2.2472 14.4968 2.85959 12.75 3.99317V21.75C14.406 20.3951 16.4989 19.6484 18.666 19.6514H18.6807C19.4438 19.6514 20.0544 19.6514 20.5147 19.6221C20.8888 19.5983 21.4275 19.4753 21.7588 19.3125C21.8829 19.2331 22.0067 19.1447 22.125 19.0264C22.2433 18.9081 22.3317 18.7843 22.4111 18.6602C22.6256 18.3249 22.6901 17.9284 22.7197 17.5518C22.75 17.167 22.75 16.6737 22.75 16.0762V6.40235C22.75 5.71199 22.752 5.10712 22.6719 4.60548C22.5853 4.0638 22.3966 3.58943 21.9951 3.16603C21.2086 2.33668 20.3239 2.32137 19.2569 2.26466C19.0615 2.25428 18.8648 2.25002 18.667 2.25001Z"
                fill="#8A38F5"
              />
            </svg>
          </div>
          <p className="text-[16px] line-clamp-1 font-bold text-black">
            {subjects}
          </p>
        </div>
        <div className="flex gap-[9px] w-full">
          <Link
            href={`/tutors/10010101010/profile?profile=${profile_sl}&profile_sl=234500235410101023510&profile_sl=123500235210102351234235235010`}
            className="w-[124px] text-center py-2 h-10 border border-[#021713] rounded-[8px] text-[16px] font-bold uppercase text-[#021713] hover:bg-[#021713] hover:text-[#72FF31] cursor-pointer"
          >
            প্রোফাইল দেখুন
          </Link>
          <button
            onClick={() => openModal("contactTutor", { profile_sl, name })}
            className="w-[127px] text-center py-2 h-10 bg-[#72FF31] rounded-[8px] text-[16px] font-bold uppercase text-[#021713] hover:bg-[#021713] hover:text-[#72FF31] cursor-pointer"
          >
            যোগাযোগ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorsWebCardComp;
