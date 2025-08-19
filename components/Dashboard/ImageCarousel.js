import Image from "next/image";
import React from "react";

const ImageCarousel = ({ title, subtitle, style, w, h, src }) => {
  return (
    <div className="relative lg:w-[418px] h-[286px] my-5 lg:my-0">
      {/* Background Image */}
      <Image
        className={`object-cover object-top rounded-[12px] ${style} h-[286px]`}
        width={w || 418}
        height={h || 286}
        src={src || "/img1.jpg"}
        alt="img"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 rounded-[12px] z-10"></div>

      {/* Text on top of overlay */}
      <div className="absolute bottom-5 left-5 text-white z-20">
        <h2 className="text-[14px]">{title}</h2>
        <b className="text-[16px]">{subtitle}</b>
      </div>
    </div>
  );
};

export default ImageCarousel;
