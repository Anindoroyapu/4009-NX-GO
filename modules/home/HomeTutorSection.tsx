"use client";
import { SIZE_LG, useLayout } from "@/context/LayoutProvider";
import HomeTutorMobileSection from "./layouts/HomeTutorMobileSection";
import HomeWebTutorSection from "./layouts/HomeWebTutorSection";

const HomeTutorSection = () => {
  const { windowWidth } = useLayout();

  if (windowWidth < SIZE_LG) {
    return <HomeTutorMobileSection />;
  }
  return <HomeWebTutorSection />;
};

export default HomeTutorSection;
