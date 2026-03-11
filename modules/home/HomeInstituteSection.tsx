import Marquee from "react-fast-marquee";
import Image from "next/image";
import KU from "../../public/assets/images/KU_logo.png";
import Kuet from "../../public/assets/images/KUET_logo.png";
import Ntd from "../../public/assets/images/Notre_Dame.png";
import BAF from "../../public/assets/images/BAFShahin.png";
import ARKK from "../../public/assets/images/bl_collage.png";
import BL from "../../public/assets/images/BL College.png";
import {
  BlackStarIcon,
  ColorStarIcon,
  ColorStarIcon02,
  ColorStarIcon03,
  ColorStarIcon04,
} from "@/public/assets/icons/icon-as-svg";

const HomeInstituteSection = () => {
  return (
    <Marquee className=" " speed={30} gradient={false}>
      <div className="py-7 lg:py-15 flex items-center gap-6.25 lg:gap-[50px]   relative  marquee w-full">
        <div className=" absolute top-0 w-full h-1.5 bg-gradient-to-r from-[#8A38F5]/10 via-[#C02C9D]/10 to-[#51218F]/10" />
        <div className=" absolute bottom-0 w-full h-1.5 bg-gradient-to-r from-[#8A38F5]/10 via-[#C02C9D]/10 to-[#51218F]/10" />
        <div className="h-10 lg:h-15 ml-[50px] ">
          <Image
            src={Kuet}
            alt="KU"
            width={100}
            height={100}
            sizes="100vw"
            className="w-auto h-full mx-auto"
          />
        </div>
        <ColorStarIcon className="lg:size-8.75 size-6.25 animate-spin  [animation-duration:15s]" />
        <div className="h-10 lg:h-15">
          <Image
            src={Ntd}
            alt="Ntd"
            width={100}
            height={100}
            sizes="100vw"
            className="w-auto h-full mx-auto"
          />
        </div>
        <ColorStarIcon02 className="lg:size-8.75 size-6.25 animate-spin  [animation-duration:15s]" />
        <div className="h-10 lg:h-15">
          <Image
            src={KU}
            alt="KU"
            width={100}
            height={100}
            sizes="100vw"
            className="w-auto h-full mx-auto"
          />
        </div>
        <ColorStarIcon03 className="lg:size-8.75 size-6.25 animate-spin  [animation-duration:15s]" />
        <div className="h-10 lg:h-15">
          <Image
            src={BAF}
            alt="KU"
            width={100}
            height={100}
            sizes="100vw"
            className="w-auto h-full mx-auto"
          />
        </div>
        <ColorStarIcon04 className="lg:size-8.75 size-6.25 animate-spin  [animation-duration:15s]" />
        <div className="h-10 lg:h-15">
          <Image
            src={BL}
            alt="KU"
            width={100}
            height={100}
            sizes="100vw"
            className="w-auto h-full mx-auto"
          />
        </div>
        <BlackStarIcon className="lg:size-8.75 size-6.25 animate-spin  [animation-duration:15s]" />
        <div className="h-10 lg:h-15">
          <Image
            src={ARKK}
            alt="KU"
            width={100}
            height={100}
            sizes="100vw"
            className="w-auto h-full mx-auto"
          />
        </div>
        <ColorStarIcon02 className="lg:size-8.75 size-6.25 animate-spin  [animation-duration:15s]" />
      </div>
    </Marquee>
  );
};

export default HomeInstituteSection;
