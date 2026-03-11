import { SearchIcon } from "@/public/assets/icons/icon-as-svg";

const InstituteSearchComp: React.FC<{
  formData: string;
  setFormData: (value: any) => void;
}> = ({ formData, setFormData }) => {
  return (
    <div>
      <span className="font-bold text-[18px] leading-[20px] text-[#00A2FF]">
        শিক্ষা প্রতিষ্ঠান
      </span>
      <div className="flex items-center gap-[7px] w-[260px] h-10  px-[10px] bg-white border border-[#021713]/70 rounded-[8px] mt-3 mb-6.25  ">
        <div className="relative w-[20px] h-[20px]">
          <SearchIcon />
        </div>
        <input
          type="text"
          value={formData || ""}
          onChange={(e) =>
            setFormData({
              board_institute: e.target.value,
            })
          }
          placeholder="অনুসন্ধান করুন"
          className=" w-full text-[14px] py-[14px] leading-[20px] font-normal font-['Shurjo'] uppercase    bg-transparent  outline-none  placeholder:text-[rgba(2,23,19,0.5)] "
        />
      </div>
    </div>
  );
};
export default InstituteSearchComp;
