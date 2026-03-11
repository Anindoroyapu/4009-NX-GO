"use client";
import AboutValuesSection from "./AboutValuesSection";
import AboutPurposeSection from "./AboutPurposeSection";
import AboutOurPoetSection from "./AboutOurPoetSection";
import AboutTopSection from "./AboutTopSection";
import HomeTutorSearchSection from "../home/layouts/HomeTutorSearchSection";
import { StarSVGIcon } from "@/public/assets/icons/icon-as-svg";

const AboutPage = () => {
  return (
    <div>
      <div className=" absolute hidden lg:block rounded-full -z-20 top-44 left-64 blur-[300px] w-60 h-60 bg-[#06C9FF]" />
      <div className=" absolute hidden lg:block rounded-full -z-20 top-250 left-44 blur-[400px] w-80 h-80 bg-[#FF48D7]" />
      <div className=" absolute hidden lg:block rounded-full -z-20 top-300 right-0 blur-[300px] w-60 h-60 bg-[#06C9FF]" />
      <div className=" absolute hidden lg:block rounded-full -z-20 top-64 right-0 blur-[330px] w-100 h-100 bg-[#FFDD00]" />

      <div className="absolute right-1/4">
        <StarSVGIcon className="lg:size-8.75 size-6.25 animate-spin  [animation-duration:15s]" />
      </div>
      <div className="absolute left-1/4 top-74">
        <StarSVGIcon className="lg:size-8.75 size-6.25 animate-spin  [animation-duration:15s]" />
      </div>
      <div className=" absolute">
        <div className="animate-bounce delay-75 [animation-duration:10s] h-70 absolute top-20 right-0">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.05432 23.984C2.42406 23.7753 11.5492 19.9027 18.0245 27.4927C21.4292 31.4853 21.9821 35.7838 22.2403 36.2724C22.4726 36.7117 22.9901 36.8735 23.3987 36.7061C23.8664 36.5222 24.0794 36.0371 23.9716 35.6349L23.4657 33.7469C22.0554 27.1685 23.5287 20.8521 29.21 17.2454C32.4908 15.1621 35.7303 14.8142 36.2768 14.5317C37.1512 14.0709 36.7999 12.7319 35.7956 12.7754C34.938 12.8216 29.0961 15.4473 23.2983 12.7797C23.1174 12.7003 22.9126 12.6951 22.728 12.7652C22.5433 12.8353 22.3936 12.9752 22.311 13.1546C22.2284 13.3341 22.2197 13.5387 22.2865 13.7246C22.3533 13.9104 22.4905 14.0626 22.6684 14.1484C24.6578 15.0637 26.867 15.5068 29.2491 15.4698C23.77 18.5241 21.2873 23.6845 21.4811 29.9291C18.5477 24.4571 13.8373 21.1844 7.5039 21.3031C12.9893 18.2565 15.5227 13.0863 15.3098 6.86404C16.3904 8.876 17.7839 10.7055 19.5316 12.1609C19.6855 12.2857 19.8823 12.3448 20.0795 12.3255C20.2766 12.3062 20.4583 12.2101 20.585 12.0578C20.7118 11.9056 20.7735 11.7096 20.7568 11.5122C20.7402 11.3149 20.6464 11.132 20.4959 11.0033C19.8797 10.4903 19.2931 9.90862 18.7519 9.27444C15.5395 5.50722 14.7256 1.01685 14.5822 0.601012C14.2155 -0.460882 12.4347 -0.042162 12.8486 1.2815C13.5948 3.66728 15.5976 11.8902 10.0352 17.5373C6.28112 21.3452 1.12109 21.9093 0.499472 22.2353C-0.436809 22.7288 0.0554898 24.135 1.05432 23.984Z"
                fill="#FF81E4"
              />
            </svg>
          </svg>
        </div>
      </div>
      <div className="  lg:w-330 mt-10 lg:mt-17.5 mx-5 lg:mx-auto">
        <AboutTopSection />

        <AboutOurPoetSection />

        <AboutPurposeSection />

        <AboutValuesSection />
      </div>
      <HomeTutorSearchSection />
    </div>
  );
};

export default AboutPage;
