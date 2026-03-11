import { SIZE_LG, useLayout } from "@/context/LayoutProvider";
import Class_1 from "@/public/assets/images/class_1.png";
import Class_2 from "@/public/assets/images/class_2.png";
import Class_3 from "@/public/assets/images/class_3.png";
import Class_4 from "@/public/assets/images/class_4.png";
import Class_5 from "@/public/assets/images/class_5.png";
import Class_6 from "@/public/assets/images/class_6.png";
import Class_7 from "@/public/assets/images/class_7.png";
import Class_8 from "@/public/assets/images/class_8.png";
import Image from "next/image";
import Link from "next/link";

const CLASS_DATA = [
  {
    icon: Class_6,
    title: "প্রাথমিক",
    count: "৪০+ টিউটর",
    color: "bg-pink-500",
  },
  {
    icon: Class_7,
    title: "সেকেন্ডারি",
    count: "৮০+ টিউটর",
    color: "bg-cyan-500",
  },
  {
    icon: Class_8,
    title: "মাধ্যমিক",
    count: "৭৫+ টিউটর",
    color: "bg-green-500",
  },
  {
    icon: Class_1,
    title: "এসএসি",
    count: "৮৯+ টিউটর",
    color: "bg-purple-500",
  },
  {
    icon: Class_2,
    title: "উচ্চ মাধ্যমিক",
    count: "৮২+ টিউটর",
    color: "bg-cyan-500",
  },
  {
    icon: Class_3,
    title: "এইচএসি",
    count: "৮২+ টিউটর",
    color: "bg-orange-500",
  },
  {
    icon: Class_4,
    title: "ভর্তি পরীক্ষা",
    count: "৬৮+ টিউটর",
    color: "bg-teal-500",
  },
  {
    icon: Class_5,
    title: "পেশাগত",
    count: "৯৩+ টিউটর",
    color: "bg-pink-500",
  },
];
const HomeClassSection = () => {
  const { windowWidth } = useLayout();
  return (
    <div className="lg:relative pt-8.75 lg:pt-28.75 lg:max-w-330 mx-4 lg:mx-auto ">
      <div className="lg:block hidden lg:absolute bg-[#FF00C7]/50 -bottom-16 -left-20 size-63.75 opacity-50 rounded-full blur-[120px]" />
      <div className="text-center mb-6.25 lg:mb-15">
        <h1 className="text-[35px] lg:text-[55px] font-bold text-[#021713] mb-1.5 lg:mb-3 leading-11.25 lg:leading-15">
          ক্লাস নির্বাচন করুন ও খুঁজে নিন <br className="lg:block hidden" />{" "}
          উপযুক্ত টিউটর
        </h1>
        <p className="text-base lg:text-lg text-[#021713]">
          শ্রেণি অনুযায়ী দক্ষ ও যাচাইকৃত টিউটরের সাথে সহজেই যুক্ত হন
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 lg:gap-7 ">
        {CLASS_DATA.map((item, idx) => (
          <button
            key={idx}
            className="rounded-[15px] lg:rounded-[25px] cursor-pointer flex gap-2.5 lg:gap-3.75 border  border-[#021713]/30  hover:bg-[#FFF4FD]  hover:border-[#FF4BBD] p-2.5 lg:p-5    transition"
          >
            <div
              className={`w-12.5 lg:w-17.5 h-12.5 lg:h-17.5 flex items-center text-lg lg:text-[25px]`}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
                sizes="100vw"
                className="w-full h-full "
              />
            </div>
            <div>
              <h3 className="font-bold text-start text-nowrap text-lg lg:text-[25px] text-[#021713] overflow-hidden">
                {item.title}{" "}
                {windowWidth > SIZE_LG &&
                  (idx === CLASS_DATA.length - 1 ? " কোর্স" : "")}
              </h3>
              <p className="text-[#021713]/80 text-base text-start text-nowrap">
                {item.count}
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className="text-center  pt-10 lg:pt-13">
        <Link
          href={"/tutors"}
          className="font-bold leading-5.25 text-[#021713] text-lg border border-[#021713]  hover:bg-[#021713] hover:text-[#72FF31] rounded-lg px-6.25 py-[14px]"
        >
          শিক্ষক অনুসন্ধান
        </Link>
      </div>
    </div>
  );
};

export default HomeClassSection;
