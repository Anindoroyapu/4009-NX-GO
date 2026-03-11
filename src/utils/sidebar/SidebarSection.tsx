"use client";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import React, { FC } from "react";

import { cn } from "@/src/utils/cn";

import { NAVMENU } from "@/modules/shared/header/constants";
import Link from "next/link";

const SidebarSection: FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 flex !top-[-30px] !bottom-[-30px] transition-all duration-300 z-40",
        isOpen ? "" : "opacity-0 pointer-events-none",
      )}
    >
      <div
        className={cn(
          "bg-white w-[80%] flex flex-col justify-between h-full gap-2 px-3 py-10 transition-transform duration-300 transform",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className=" ">
          <button className="mb-7 w-full" onClick={() => setIsOpen(!isOpen)}>
            <div className=" py-[55px] pl-[25px]">
              <div className="w-[130px]">
                <Image
                  src={logo}
                  alt="logo"
                  width={0}
                  height={0}
                  loading="eager"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </button>
          <nav className=" pl-[25px] items-center ">
            <ul className="flex flex-col gap-7.5">
              {NAVMENU.map((nav) => (
                <li key={nav.name} onClick={() => setIsOpen(!isOpen)}>
                  <Link
                    href={nav.link}
                    className="text-primary/80 text-lg font-bold hover:text-primary"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mx-5 mb-12.5 flex flex-col items-center justify-center bg-[#72FF31] hover:bg-[#021713] hover:text-[#72FF31] border border-green text-primary font-bold rounded-[10px] px-5 py-2 max-h-13.75">
          <p className="text-sm">কল করুন</p>
          <a href="tel:+8801940970488" className="leading-5 text-xl">
            ০১৯৪০-৯৭০৪৮৮
          </a>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className="bg-black/40 opacity-100 w-[20%]"
      ></button>
    </div>
  );
};

export default SidebarSection;
