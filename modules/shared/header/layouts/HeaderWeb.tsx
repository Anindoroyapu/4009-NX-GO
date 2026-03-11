import { NAVMENU } from "../constants";
import { MainLogo } from "@/public/assets/icons/icon-as-svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderWeb() {
  const pathname = usePathname();

  return (
    <header className="flex fixed top-0 left-0 right-0 bg-white z-50 items-center justify-center h-[79px] border-b border-[#021713]/10">
      <div className="container flex  w-full">
        <Link href={"/"} className="w-47 flex items-center">
          <MainLogo />
        </Link>
        <nav className="flex-1 flex justify-center items-center ">
          <ul className="flex gap-11.25">
            {NAVMENU.map((nav) => (
              <li key={nav.name}>
                <Link
                  href={nav.link}
                  className={` text-xl font-bold  ${pathname === nav.link ? "text-[#FF81E4] border-b border-[#FF81E4]" : "text-primary/80 hover:text-primary"}`}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center justify-center bg-[#72FF31] hover:bg-[#021713] hover:text-[#72FF31] border border-green text-primary font-bold rounded-[10px] px-5 py-2 max-h-13.75">
          <p className="text-sm">কল করুন</p>
          <a href="tel:+8801940970488" className="leading-5 text-xl">
            ০১৯৪০-৯৭০৪৮৮
          </a>
        </div>
      </div>
    </header>
  );
}
