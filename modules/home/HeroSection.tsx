import { FC } from "react";
import { SIZE_LG, useLayout } from "@/context/LayoutProvider";
import HeroMobileSection from "./layouts/HeroMobileSection";
import HeroWebSection from "./layouts/HeroWebSection";

const HeroSection: FC = () => {
  const { windowWidth } = useLayout();

  if (windowWidth < SIZE_LG) {
    return <HeroMobileSection />;
  }
  return <HeroWebSection />;
};

export default HeroSection;
