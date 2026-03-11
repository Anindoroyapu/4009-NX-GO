import AddTutorsInfoSection from "./AddTutorsInfoSection";
import AddTutorsFormSection from "./AddTutorsFormSection";

const AddTutorsPage = () => {
  return (
    <div className="lg:pb-44 lg:w-full w-full mx-0 lg:mx-auto">
      <div className=" absolute hidden lg:block rounded-full -z-20 top-44 left-64 blur-[300px] w-60 h-60 bg-[#06C9FF]" />
      <div className=" absolute hidden lg:block rounded-full -z-20 top-250 left-44 blur-[400px] w-80 h-80 bg-[#FF48D7]" />
      <div className="absolute hidden lg:block rounded-full -z-20 top-300 right-0 blur-[300px] w-60 h-60 bg-[#06C9FF]" />
      <div className=" absolute hidden lg:block rounded-full -z-20 top-64 right-0 blur-[330px] w-100 h-100 bg-[#FFDD00]" />
      <div className="lg:flex grid lg:justify-between gap-7.5 lg:gap-15 lg:p-2.5 bg-white rounded-[60px] lg:w-330 mt-5 lg:mt-17.5 mx-5 lg:mx-auto shadow-[0_0_50px_0_rgba(138,56,245,0.05)]">
        <AddTutorsInfoSection />
        <AddTutorsFormSection />
      </div>
    </div>
  );
};

export default AddTutorsPage;
