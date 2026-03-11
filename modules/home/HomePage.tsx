"use client";
import HeroSection from "./HeroSection";
import HomeInfoSection from "./HomeInfoSection";
import HomeSubjectSection from "./HomeSubjectSection";
import HomeInstituteSection from "./HomeInstituteSection";
import HomeClassSection from "./HomeClassSection";
import HomeTutorSection from "./HomeTutorSection";
import HomeCommentSection from "./layouts/HomeCommentSection";
import HomeTutorSearchSection from "./layouts/HomeTutorSearchSection";
import { HomeDataProvider } from "./context/HomeDataProvider";

const HomePage = () => {
  return (
    <HomeDataProvider>
      <section>
        <HeroSection />
        <HomeInfoSection />
        <HomeSubjectSection />
        <HomeInstituteSection />
        <HomeClassSection />
        <HomeTutorSection />
        <HomeCommentSection />
        <HomeTutorSearchSection />
      </section>
    </HomeDataProvider>
  );
};

export default HomePage;
