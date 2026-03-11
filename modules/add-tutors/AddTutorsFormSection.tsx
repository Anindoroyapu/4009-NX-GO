"use client";
import { useTemplate } from "@/src/context/template/TemplateProvider";
import useApi from "@/src/hook/useApi";
import { useState } from "react";
import { inputFields, loginInputFields } from "./components/FormDataList";

const AddTutorsFormSection = () => {
  const [activeTab, setActiveTab] = useState("login");
  const { setMessage } = useTemplate();
  const { post } = useApi();

  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    dob: "",
    blood_group: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = () => {
    post("/tutor/registration", formData).then(() => {
      setMessage("টিউটর সফলভাবে যুক্ত করা হয়েছে!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        gender: "",
        dob: "",
        blood_group: "",
        password: "",
        confirm_password: "",
      });
    });
  };

  return (
    <div className="lg:w-[595px] flex flex-col lg:mt-[35px] lg:mr-[35px] justify-between">
      <div className="flex flex-col justify-between h-full gap-[35px]">
        <div className="flex flex-col  h-full gap-[35px]">
          <div className="flex w-full h-[45px] justify-center items-center gap-[50px] border-b border-[#D0CFD9]">
            <div
              onClick={() => setActiveTab("login")}
              className={`flex-1 flex justify-center items-center border-b h-full cursor-pointer ${
                activeTab === "login" ? "border-black" : "border-transparent"
              }`}
            >
              <span
                className={`text-xl lg:text-[30px] font-bold ${
                  activeTab === "login" ? "text-[#021713]" : "text-[#021713]/35"
                }`}
              >
                লগইন
              </span>
            </div>
            <div
              onClick={() => setActiveTab("register")}
              className={`flex-1 flex justify-center items-center border-b h-full cursor-pointer ${
                activeTab === "register" ? "border-black" : "border-transparent"
              }`}
            >
              <span
                className={`text-xl lg:text-[30px] font-bold ${
                  activeTab === "register"
                    ? "text-[#021713]"
                    : "text-[#021713]/35"
                }`}
              >
                রেজিস্ট্রেশন
              </span>
            </div>
          </div>

          {activeTab === "login" && (
            <div className="flex flex-col items-start gap-[20px]">
              <div>
                <h1 className="text-xl lg:text-[45px] font-bold leading-[50px] text-[#021713]">
                  পুনরায় স্বাগতম!
                </h1>
                <p className="text-base lg:text-[18px] text-[#021713]/70">
                  আপনার অ্যাকাউন্টে প্রবেশ করতে অনুগ্রহ করে লগইন করুন।
                </p>
              </div>
              <div className="w-full flex flex-col gap-[18px]">
                {loginInputFields.map((field, i) => (
                  <div key={i} className="flex flex-col gap-[10px]">
                    <label className="text-[16px] font-bold uppercase text-[#021713]">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.data]: e.target.value,
                        })
                      }
                      name={field.data}
                      value={formData[field.data]}
                      placeholder={field.placeholder}
                      className="w-full h-10 lg:h-[50px] px-[14px] outline-none text-[16px] bg-white border border-[#021713]/20 rounded-[10px]"
                    />
                  </div>
                ))}
                <div className=" flex justify-between items-center">
                  <button className="px-[25px] h-[49px] mt-[10px] bg-[#72FF31] rounded-[8px] text-[18px] font-bold uppercase text-[#021713]">
                    লগইন করুন
                  </button>
                  <button className=" px-[25px] h-[49px] text-[18px] font-bold uppercase text-[#8A38F5]">
                    পাসওয়ার্ড ভুলে গেছেন?
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Registration Form */}
          {activeTab === "register" && (
            <div className="flex flex-col items-start gap-[20px]">
              <div>
                <h1 className="text-xl lg:text-[45px] font-bold leading-[50px] text-[#021713]">
                  অ্যাকাউন্ট তৈরি করুন
                </h1>
                <p className="text-base lg:text-[18px] text-[#021713]/70">
                  আজই টিউটর হিসেবে যুক্ত হোন — প্রয়োজনীয় সকল তথ্য পূরণ করুন।
                </p>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
                {inputFields.map((field, i) => (
                  <div key={i} className="flex flex-col gap-[8px] w-full">
                    <label className="text-[16px] font-bold uppercase text-[#021713]">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.data]: e.target.value,
                        })
                      }
                      name={field.data}
                      value={formData[field.data]}
                      placeholder={field.placeholder}
                      className="h-10 lg:h-[50px] px-[14px] bg-white border border-[#021713]/20 rounded-[10px] outline-none text-[16px]"
                    />
                  </div>
                ))}

                <button
                  onClick={() => handleSubmit()}
                  className="w-full lg:w-fit px-[25px] h-[55px] hover:bg-[#021713] hover:text-[#72FF31] pointer mt-[10px] bg-[#72FF31] rounded-[10px] text-[18px] font-bold uppercase text-[#021713]"
                >
                  একাউন্ট তৈরি করুন
                </button>
              </div>
            </div>
          )}
        </div>
        <div className=" mb-12.5">
          <p className="text-center text-[16px] text-[#021713]">
            {activeTab === "login"
              ? "এখনও অ্যাকাউন্ট তৈরি করেননি?"
              : "আগেই অ্যাকাউন্ট করেছেন?"}
            <span
              onClick={() =>
                setActiveTab(activeTab === "login" ? "register" : "login")
              }
              className="text-[#8A38F5] font-semibold cursor-pointer hover:underline ml-[5px]"
            >
              {activeTab === "login"
                ? "এখানেই রেজিস্টার করুন"
                : "এখান থেকে লগইন করুন"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddTutorsFormSection;
