import Image from "next/image";
import React from "react";
import logo from "@/public/assets/images/logo-white.png";
import { CONTACT_INFO, FOOTER_LINKS } from "../constants";
import Link from "next/link";

const FooterMobile = () => {
  return (
    <footer className="bg-footer text-white ">
      <div className="container mx-auto">
        <div className="flex justify-center pb-13 pt-12.5">
          <div className="w-42.75 ">
            <Image
              src={logo}
              alt="alt"
              width={100}
              height={100}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between   pb-5 border-b border-[rgba(255,255,255,0.30)]">
          <div className="flex flex-col gap-5">
            <ul className="flex items-center">
              {FOOTER_LINKS.slice(0, 3).map((link, index, arr) => (
                <li key={link.title}>
                  <Link href={link.href} className="font-bold text-nowrap">
                    {link.title}
                  </Link>
                  {index < arr.length - 1 && (
                    <span className="mx-6.25">&bull;</span>
                  )}
                </li>
              ))}
            </ul>
            <ul className="flex items-center w-full justify-center">
              {FOOTER_LINKS.slice(3, 6).map((link, index, arr) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="font-bold text-nowrap text-center"
                  >
                    {link.title}
                  </Link>
                  {index < arr.length - 1 && (
                    <span className="mx-6.25">&bull;</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-col mt-9 items-start  ">
            <li key={CONTACT_INFO.email}>
              <span className="mr-6.25">&bull;</span>
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-normal"
              >
                {CONTACT_INFO.email}
              </Link>
            </li>
            <li>
              <span className="mr-6.25">&bull;</span>
              <a href={`tel:+8801940970488`} className="font-bold">
                {CONTACT_INFO.phone}
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col items-center gap-3.75 py-5">
          <div className="flex flex-col justify-between items-center w-full ">
            <div className="flex  justify-between items-center w-full ">
              <p className="font-normal text-center  ">
                স্বত্ব © খুলনা টিউশন সার্ভিস
              </p>

              <ul className="flex items-center font-bold gap-3.75 w-[128px] justify-center">
                <li>
                  <Link
                    href="https://www.facebook.com/share/1CPEFgkU3C/"
                    className="uppercase"
                  >
                    ফেসবুক
                  </Link>
                </li>
                <span className="w-[5px] h-[5px] bg-[rgba(255,255,255,0.9)] rounded-full"></span>
                <li>
                  {/* <Link href="#" className="uppercase"> */}
                  ইউটিউব
                  {/* </Link> */}
                </li>
              </ul>
            </div>
            <p className="font-normal text-center pt-3.75 pb-5">
              <Link
                href="https://www.bikiran.com/"
                target="blank"
                className="text-[#FFF200] underline"
              >
                বিকিরন
              </Link>
              -এর ভালোবাসা ও যত্নে তৈরি ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
