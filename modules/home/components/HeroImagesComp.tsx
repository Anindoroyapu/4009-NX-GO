import Image from "next/image";
import { FC, useEffect, useState } from "react";
import heroImage1 from "@/public/assets/images/hero-01.png";
import heroImage2 from "@/public/assets/images/hero-02.png";
import heroImage3 from "@/public/assets/images/hero-03.png";
import heroImage4 from "@/public/assets/images/hero-04.png";
import heroImage5 from "@/public/assets/images/hero-05.png";

const HeroImagesComp: FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mx-auto flex gap-15 justify-center pt-4.25">
      {[heroImage1, heroImage2, heroImage3, heroImage4, heroImage5].map(
        (img, i) => (
          <div
            key={i}
            className={`
              w-75 
              ${i === 0 || i === 4 ? "h-100" : "h-87.5"}
              ${i === 1 || i === 3 ? "mt-21.25" : ""}
              ${i === 2 ? "mt-36.25 h-74!   " : ""}
              transition-all duration-700 ease-out
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]"}
            `}
            style={{
              transitionDelay: `${
                i === 0 || i === 4
                  ? "120ms"
                  : i === 1 || i === 3
                    ? "320ms"
                    : "520ms"
              }`,
            }}
          >
            <Image
              src={img}
              alt="hero"
              width={100}
              height={100}
              sizes="100vw"
              className="w-full h-full object-cover rounded-[30px]"
            />
          </div>
        ),
      )}
    </div>
  );
};

export default HeroImagesComp;
