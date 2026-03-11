import Image from "next/image";
import { FC, useEffect, useState } from "react";

import heroImage2 from "@/public/assets/images/hero-02.png";
import heroImage3 from "@/public/assets/images/hero-03.png";
import heroImage4 from "@/public/assets/images/hero-04.png";

const HeroMobileImagesComp: FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mx-auto flex gap-2.5 justify-center pt-4.25">
      {[heroImage2, heroImage3, heroImage4].map((img, i) => (
        <div
          key={i}
          className={`
              w-30 
              ${i === 0 || i === 2 ? "h-38  mt-21" : "h-38"}
              ${i === 1 ? "mt-26" : ""}
               
              transition-all duration-700 ease-out
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"}
            `}
          style={{
            transitionDelay: `${
              i === 0 || i === 2 ? "120ms" : i === 1 ? "320ms" : "520ms"
            }`,
          }}
        >
          <Image
            src={img}
            alt="hero"
            width={100}
            height={100}
            sizes="100vw"
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroMobileImagesComp;
