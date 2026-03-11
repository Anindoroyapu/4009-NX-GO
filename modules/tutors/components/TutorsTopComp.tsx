import { FC } from "react";
import { useTutorsData } from "../context/TutorsDataProvider";

const TutorsTopComp: FC<{ data?: any }> = ({ data }) => {
  const { count, showCount, setShowCount, setFormData } = useTutorsData();
  // const [selectedCount, setSelectedCount] = useState<string | number>(10);
  const displayOptions = [15, 30, 50, 100, 0];

  return (
    <div className="flex flex-row justify-between items-center gap-111.75 p-5 pl-5 w-245 h-15 left-160 top-37.25 bg-white rounded-[15px] shadow-md/3">
      <div className="w-75.5 h-5 font-normal text-lg leading-5 text-[#021713]">
        {count
          ? `${count} জন টিউটরের মধ্যে ` +
            (showCount === 0 ? `${count} ` : `${showCount} `) +
            ` জন প্রদর্শিত হচ্ছে`
          : "0 জন টিউটরের মধ্যে 0 জন প্রদর্শিত হচ্ছে"}
      </div>
      <div className="flex flex-row cursor-pointer justify-between items-center gap-6.25 px-3 py-2.5 w-47 h-10 rounded-[7px] border border-[rgba(138,56,245,0.3)] bg-[rgba(138,56,245,0.05)] font-bold text-base text-[#8A38F5] appearance-none pr-8">
        <select
          value={showCount}
          onChange={(e) => {
            setShowCount(Number(e.target.value));
            setFormData((prev: any) => ({
              ...prev,
              showCount: Number(e.target.value),
            }));
          }}
          className=" cursor-pointer outline-none"
        >
          {displayOptions.map((option) => (
            <option key={option} value={option}>
              {option === 0 ? "সব" : `${option} টি`} দেখানো হচ্ছে
            </option>
          ))}
        </select>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 7.50004L10 12.5L5 7.5"
            stroke="#8A38F5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default TutorsTopComp;
