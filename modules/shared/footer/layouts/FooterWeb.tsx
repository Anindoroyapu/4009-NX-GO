import Image from "next/image";
import logo from "@/public/assets/images/logo-white.png";
import { FC } from "react";
import { CONTACT_INFO, FOOTER_LINKS } from "../constants";
import Link from "next/link";

const FooterWeb: FC = () => {
  return (
    <footer className="bg-footer text-white text-lg">
      <div className="container">
        <div className="flex justify-center pb-20 pt-25">
          <div className="w-[257px]">
            <Image
              src={logo}
              alt="alt"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex justify-between items-center pb-7.5 border-b border-[rgba(255,255,255,0.30)]">
          <ul className="flex items-center">
            {FOOTER_LINKS.map((link, index, arr) => (
              <li key={link.title}>
                <Link href={link.href} className="font-bold">
                  {link.title}
                </Link>
                {index < arr.length - 1 && (
                  <span className="mx-6.25">&bull;</span>
                )}
              </li>
            ))}
          </ul>
          <ul className="flex items-center">
            <li>
              <a href={`tel:+8801940970488`} className="font-bold">
                {CONTACT_INFO.phone}
              </a>
              <span className="mx-6.25">&bull;</span>
            </li>
            <li key={CONTACT_INFO.email}>
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-normal"
              >
                {CONTACT_INFO.email}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center py-7.5">
          <p className="font-normal">স্বত্ব © খুলনা টিউশন সার্ভিস</p>
          <p className="font-normal">
            <Link
              href="https://www.bikiran.com/"
              target="blank"
              className="text-[#FFF200]"
            >
              বিকিরন
            </Link>
            -এর ভালোবাসা ও যত্নে তৈরি ❤️
          </p>
          <ul className="flex items-center font-bold">
            <li>
              <Link href="https://www.facebook.com/share/1CPEFgkU3C/">
                ফেসবুক
              </Link>
            </li>
            <span className="mx-6.25">&bull;</span>
            <li>
              {/* <Link href="https://www.youtube.com/@bikiranofficial"> */}
              ইউটিউব
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterWeb;
