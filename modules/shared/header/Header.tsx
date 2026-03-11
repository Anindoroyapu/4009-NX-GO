"use client";
import { FC } from "react";
import HeaderMobile from "./layouts/HeaderMobile";
import { SIZE_LG, useLayout } from "@/context/LayoutProvider";
import HeaderWeb from "./layouts/HeaderWeb";

const Header: FC = () => {
  const { windowWidth } = useLayout();

  if (windowWidth < SIZE_LG) {
    return <HeaderMobile />;
  }
  return <HeaderWeb />;
};

export default Header;
