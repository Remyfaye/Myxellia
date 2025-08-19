"use client";
import React, { useState } from "react";
import Icon from "../ui/Icon";

const Topbar = () => {
  const navItems = [
    {
      label: "Dashboard",
      route: "",
      icon: "/icons/home.svg",
    },
    {
      label: "Listings",
      route: "",
      icon: "/icons/toolbox.svg",
    },
    {
      label: "Users",
      route: "",
      icon: "/icons/profile.svg",
    },
    {
      label: "Request",
      route: "",
      icon: "/icons/article.svg",
    },
    {
      label: "Applications",
      route: "",
      icon: "/icons/scroll.svg",
    },
  ];

  const [active, setActive] = useState("Dashboard");
  return (
    <div className="bg-white h-[67px] -mx-[78px] px-[78px] justify-between items-center  border-[1px] border-[#F4F4F5] hidden lg:flex">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 ${
            active === item.label &&
            "bg-[#F5F5F5] h-[38px] font-bold flex rounded-xl justify-center"
          } cursor-pointer hover-two px-7 `}
          onClick={() => setActive(item.label)}
        >
          <Icon src={item.icon} />
          {item.label}
        </div>
      ))}

      <div className="rounded-2xl border bg-gray-50 h-[43px] px-4 gap-2 flex items-center">
        <Icon src={"/icons/search.svg"} />
        <p className="font-euclid">Search listings, users here...</p>
      </div>
    </div>
  );
};

export default Topbar;
