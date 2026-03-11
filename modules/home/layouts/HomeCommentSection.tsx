import { UpArrowIcon } from "@/public/assets/icons/icon-as-svg";
import HomeCommentComp from "../components/HomeCommentComp";

const comments = [
  {
    comment:
      "আমি যেসব বিষয়ে দুর্বল ছিলাম, সেখানে এই প্ল্যাটফর্ম থেকে দারুণ সহায়তা পেয়েছি। টিউটর খুব গুছিয়ে পড়ান এবং প্রতিটি টপিক সহজ উদাহরণ দিয়ে বুঝিয়ে দেন। নিয়মিত টেস্ট ও ফিডব্যাকের কারণে আমার প্রস্তুতি ধাপে ধাপে শক্ত হয়েছে এবং এখন পড়াশোনা নিয়ে আত্মবিশ্বাস অনেক বেড়েছে।",
    name: "রিমা আক্তার",
  },
  {
    comment:
      "আমার সন্তানের জন্য একজন নির্ভরযোগ্য টিউটর খুঁজছিলাম, যা এখানে খুব সহজেই পেয়েছি। টিউটর নিয়মিত ক্লাস নেন, পড়াশোনার অগ্রগতি জানিয়ে দেন এবং প্রয়োজন অনুযায়ী অতিরিক্ত সহায়তা করেন। প্ল্যাটফর্মটির ব্যবস্থাপনা পেশাদার ও সহযোগিতাপূর্ণ হওয়ায় একজন অভিভাবক হিসেবে আমি অনেক নিশ্চিন্ত থাকতে পারছি।",
    name: "মোঃ আরিফ হোসেন",
  },
  {
    comment:
      "আমি যে বিষয়গুলোতে দুর্বল ছিলাম, সেগুলো নিয়ে এখানে সবচেয়ে বেশি সহায়তা পেয়েছি। টিউটর খুব গুছিয়ে পড়ান এবং প্রতিটি টপিক বাস্তব উদাহরণ দিয়ে বুঝিয়ে দেন। নিয়মিত টেস্ট ও ফিডব্যাকের কারণে আমার প্রস্তুতি ধাপে ধাপে শক্ত হয়েছে। এখন পড়াশোনা নিয়ে আর আগের মতো ভয় নেই, বরং আত্মবিশ্বাস নিয়ে পরীক্ষার প্রস্তুতি নিতে পারছি।",
    name: "নুসরাত জাহান",
  },
  {
    comment:
      "ভর্তি পরীক্ষার প্রস্তুতির জন্য এখানকার গাইডলাইন সত্যিই কার্যকর ছিল। টিউটর সিলেবাস অনুযায়ী পরিকল্পনা করে পড়িয়েছেন এবং নিয়মিত মডেল টেস্ট নিয়েছেন। প্রতিটি ভুল আলাদা করে ব্যাখ্যা করায় আমার দুর্বলতা দ্রুত কাটিয়ে উঠতে পেরেছি। এর ফলে আমার প্রস্তুতি অনেক বেশি সংগঠিত ও লক্ষ্যভিত্তিক হয়েছে।",
    name: "তানজিলা রহমান",
  },
  {
    comment:
      "আমার মেয়ের পড়াশোনার প্রতি আগ্রহ বাড়ানোর জন্য একজন ধৈর্যশীল টিউটর দরকার ছিল। এখানে পাওয়া টিউটর খুব সহজ ও বন্ধুসুলভভাবে পড়ান। এখন সে নিয়মিত পড়াশোনা করে, প্রশ্ন করতে আগ্রহ দেখায় এবং শেখার প্রতি আত্মবিশ্বাসী হয়েছে, যা একজন অভিভাবক হিসেবে আমাকে খুব খুশি করেছে।",
    name: "রাশেদ মাহমুদ",
  },
  {
    comment:
      "চাকরির পাশাপাশি পড়াশোনা চালানো আমার জন্য কঠিন ছিল। এখানকার টিউটর আমার সময় অনুযায়ী ক্লাস নিয়েছেন এবং বাস্তব উদাহরণ দিয়ে বিষয়গুলো বুঝিয়েছেন। এতে করে পড়াশোনা ও কাজের মধ্যে সুন্দর ভারসাম্য বজায় রাখা সম্ভব হয়েছে এবং শেখার অভিজ্ঞতাও ছিল খুবই ফলপ্রসূ।",
    name: "সাইফুল ইসলাম",
  },
];

const HomeCommentSection = () => {
  return (
    <div className="lg:max-w-330 mx-4 lg:mx-auto pt-6.5 lg:pt-32.5">
      <div className="flex justify-between items-center mb-3.5 lg:mb-15">
        <div>
          <h1 className="text-[35px] lg:text-[55px] font-bold pb-3 leading-11.25 lg:leading-15 text-[#021713]">
            আমাদের সাফল্যের গল্প এখন <br className=" hidden lg:block" />{" "}
            শিক্ষার্থীদের মুখে!
          </h1>
          <h3 className="text-base lg:text-lg text-[#021713]">
            বাস্তব অভিজ্ঞতা, বাস্তব ফলাফল—শিক্ষার্থী ও অভিভাবকদের মতামত
          </h3>
        </div>
        <div className="bg-[#FF8E8E] size-39 group rounded-full text-center hidden lg:flex flex-col justify-center items-center">
          <h2 className="text-white pb-1 text-xl font-bold group-hover:hidden transition-all duration-100">
            সকল মতামত <br /> দেখুন
          </h2>
          <UpArrowIcon className=" group-hover:size-18 transition-all duration-500" />
        </div>
      </div>

      {/* Comments */}
      <div className="flex overflow-auto lg:grid grid-cols-3  gap-2.5 lg:gap-9">
        {comments.map((item, index) => (
          <HomeCommentComp
            key={index}
            comment={item.comment}
            name={item.name}
          />
        ))}
      </div>
      <div className=" mt-5 w-full flex justify-center mb-10 lg:hidden ">
        <button className=" text-center  text-white font-bold bg-[#FF8E8E] rounded-lg px-5 py-2.5">
          সকল মতামত দেখুন
        </button>
      </div>
    </div>
  );
};

export default HomeCommentSection;
