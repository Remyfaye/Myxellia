"use client";
import React, { useState } from "react";
import Icon from "../ui/Icon";

const Topbar = () => {
  const navItems = [
    {
      route: "",
      icon: "/icons/bell.svg",
    },
    {
      route: "",
      icon: "/icons/bud.svg",
    },
    {
      route: "",
      icon: "/icons/calendar.svg",
    },
    {
      route: "",
      icon: "/icons/message.svg",
    },
    {
      route: "",
      icon: "/icons/profile2.svg",
    },
  ];

  return (
    <div className="bg-[#191919] cursor-pointer  h-[78px] flex justify-between items-center lg:px-[78px] px-5">
      <Icon w={153.23} h={26} src={"/icons/logo.svg"} />
      <div className="hidden lg:flex gap-[24px] items-center">
        {navItems.map((item, index) => (
          <Icon
            key={index}
            style={"hover-animate"}
            src={item.icon}
            w={32}
            h={32}
          />
        ))}
      </div>
    </div>
  );
};

export default Topbar;
