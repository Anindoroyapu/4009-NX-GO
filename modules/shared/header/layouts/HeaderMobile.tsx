import { icons } from "@/src/libs/icon";
import Image from "next/image";
import { FC, useState } from "react";
import logo from "@/public/assets/images/logo.png";
import SidebarSection from "@/src/utils/sidebar/SidebarSection";
import Link from "next/link";

const HeaderMobile: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-5 py-2.5 z-50 flex items-center justify-between w-full fixed top-0 bg-white">
      <button className="size-11.25 h-full" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={icons.sidebar}
          alt="Sidebar Icon"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </button>
      <div className="flex-1 flex justify-center">
        <Link href={"/"} className="w-[130px]">
          <Image
            src={logo}
            alt="logo"
            width={0}
            height={0}
            loading="eager"
            sizes="100vw"
            className="w-full h-auto"
          />
        </Link>
      </div>
      <a href="tel:+8801940970488" className="size-11.25 h-full">
        <Image
          src={icons.call}
          alt="Call Icon"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </a>
      <SidebarSection isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default HeaderMobile;
