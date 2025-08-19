import Image from "next/image";
import React from "react";

const Icon = ({ w, h, style, src }) => {
  return (
    <div>
      <Image
        className={`object-center ${style}`}
        width={w || 24}
        height={h || 24}
        src={src || "/icons/toolbox.svg"}
        alt="img"
      />
    </div>
  );
};

export default Icon;
