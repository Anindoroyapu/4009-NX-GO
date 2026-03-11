"use client";
import { FC } from "react";
import FooterWeb from "./layouts/FooterWeb";
import { SIZE_LG, useLayout } from "@/context/LayoutProvider";
import FooterMobile from "./layouts/FooterMobile";

const Footer: FC = () => {
  const { windowWidth } = useLayout();

  if (windowWidth < SIZE_LG) {
    return <FooterMobile />;
  }
  return <FooterWeb />;
};

export default Footer;
