"use client";
import { useTemplate } from "@/src/context/template/TemplateProvider";
import useApi from "@/src/hook/useApi";
import { Button } from "@/src/libs/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/src/ui/dialog";
import { useState } from "react";

const ModalBody = () => {
  //   const tutor/{sl}/interest {
  // contact_phone,
  // area
  // } sl=tutor sl
  const { setMessage, closeModal, modalData } = useTemplate();
  const tutor_sl = modalData?.profile_sl;

  const [formData, setFormData] = useState({
    contact_phone: "",
    area: "",
    sl: tutor_sl,
  });

  const [loading, setLoading] = useState(false);
  const { post } = useApi();

  const inputFields = [
    {
      label: "যোগাযোগের ফোন নাম্বার লিখুন",
      data: "contact_phone",
      placeholder: "Ex: +880 1931 4889 75",
      type: "text",
    },
    {
      label: "অঞ্চল লিখুন",
      data: "area",
      placeholder: "Ex: খুলনা",
      type: "text",
    },
  ];

  const handleInterest = async () => {
    setLoading(true);
    post(`tutor/${tutor_sl}/interest`, formData)
      .then(() => {
        setMessage("টিউটর সফলভাবে যুক্ত করা হয়েছে!");
        setFormData({
          contact_phone: "",
          area: "",
          sl: tutor_sl,
        });
        closeModal();
      })
      .catch(() => {
        setMessage("টিউটর যুক্ত করতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className=" grid grid-cols-1 gap-3.5">
        <div className="mb-6 p-4 bg-gradient-to-r from-[#00A1FF]/10 to-[#021713]/5 rounded-lg border border-[#00A1FF]/20">
          <p className="text-sm text-[#021713] mb-2">
            টিউটর : <span className="font-semibold">{modalData?.name}</span>
          </p>
          <p className="font-semibold text-[16px] leading-6 text-[#00A1FF]">
            টিউটরের সাথে যোগাযোগের জন্য নিচের তথ্যগুলো প্রদান করুন
          </p>
        </div>
        {inputFields.map((field, i) => (
          <div key={i} className="flex flex-col gap-[8px] w-full">
            <div className="flex items-center gap-1">
              <label className="text-[16px] font-bold uppercase text-[#021713]">
                {field.label}
              </label>
              <span className="text-red-500">*</span>
            </div>
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
              value={formData[field.data as keyof typeof formData]}
              placeholder={field.placeholder}
              className="h-[50px] px-[14px] bg-white border border-[#021713]/20 rounded-[10px] outline-none text-[16px]"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-4">
        <Button
          title="Cancel"
          variant="gray"
          onClick={closeModal}
          className=" cursor-pointer"
        />
        <Button
          title={"Save"}
          variant="secondary"
          onClick={handleInterest}
          loading={loading}
          className=" cursor-pointer"
          disabled={!formData.contact_phone || !formData.area}
        />
      </div>
    </div>
  );
};

const ModalContactTutor = () => {
  const { closeModal, modalType } = useTemplate();
  return (
    <Dialog onOpenChange={closeModal} open={modalType === "contactTutor"}>
      <DialogContent className="max-w-125">
        <DialogHeader>
          <DialogTitle>Set Interest</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <ModalBody />
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default ModalContactTutor;
