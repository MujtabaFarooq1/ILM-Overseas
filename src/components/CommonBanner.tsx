import React from "react";

interface BannerProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  bannerClass?: string;
  contentClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  buttonClass?: string;
  colortitle:string;
}

const Banner: React.FC<BannerProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
  bannerClass,
  contentClass,
  titleClass,
  descriptionClass,
  buttonClass,
  colortitle
}) => {
  return (
    <div
      className={`relative max-w-11/12 m-auto rounded-3xl flex bg-left  px-2 my-8 ${bannerClass} overflow-hidden m px-2`}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 h-full flex items-center bg-black/80 ">
        <div className={`text-center text-white ${contentClass}`}>
          <span
            className={`py-2  md:text-xl text-lg font-bold text-white rounded ${buttonClass}`}
          >
            {buttonText}
          </span>
          <h2
            className={`md:text-5xl text-3xl font-bold mb-2 ${titleClass}`}
          >
            {title}
           <span className="text-[#32B22E]">{colortitle}</span>
          </h2>
          <p className={`md:text-lg  mb-4 ${descriptionClass}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
