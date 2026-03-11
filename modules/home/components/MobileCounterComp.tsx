import { useEffect, useState } from "react";

const toBanglaNumber = (num: number) =>
  num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

const parseCount = (value: string) => {
  const english = value.replace(
    /[০-৯]/g,
    (d) => "0123456789"["০১২৩৪৫৬৭৮৯".indexOf(d)],
  );
  return Number(english.replace(/[^0-9]/g, ""));
};
const Counter = ({
  count,
  title,
  details,
  plusSign,
}: {
  count: string;
  title: string;
  details: string;
  plusSign: string;
}) => {
  const target = parseCount(count);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!target) return;
    let start = 0;
    const duration = 3200;
    const interval = 100;
    const step = Math.ceil(target / (duration / interval));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(start);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="w-full md:w-34.75">
      <h1 className="text-[45px] md:text-[55px] font-bold text-[#021713]">
        {toBanglaNumber(current)}
        <span className="text-[#FF81E4] leading-none">{plusSign}</span>
      </h1>
      <h4 className="md:mt-2.5 text-base leading-none text-[#021713]/60 font-medium">
        <span className=" text-nowrap">{title}</span> <br />
        {details}
      </h4>
    </div>
  );
};

const MobileCounterComp = () => {
  return (
    <div className="grid grid-cols-2 gap-7.5 md:flex items-center mx-auto">
      <div className=" flex items-center justify-between w-full">
        <Counter
          count="৮৫০"
          title="শীর্ষ বিশ্ববিদ্যালয়ের"
          details="শিক্ষার্থী"
          plusSign="+"
        />
        <div className="w-0 h-20 border  ml-15  border-[#021713]/20 " />
      </div>
      <div className=" mr-7.5">
        <Counter
          count="৩০০"
          title="অভিজ্ঞ ও দক্ষ "
          details="শিক্ষক"
          plusSign="+"
        />
      </div>
      <div className=" flex   items-center justify-between w-full">
        <Counter
          count="৫০"
          title="বিষয়ে নির্ভরযোগ্য"
          details="টিউশন সেবা"
          plusSign="+"
        />
        <div className="w-0 h-20 border ml-17  border-[#021713]/20 " />
      </div>
      <Counter
        count="৯৫"
        title="সফলতার প্রমাণিত"
        details="রেকর্ড"
        plusSign="%"
      />
    </div>
  );
};
export default MobileCounterComp;
