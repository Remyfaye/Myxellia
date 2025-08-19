import React from "react";
import Icon from "../ui/Icon";

const ListingsOverview = ({ heading, body, icon }) => {
  return (
    <div className="border rounded-2xl lg:w-[280px] bg-[#F9FAFB] mb-5  lg:mt-0 mt-5">
      <div className="border-b-[2px] p-3 border-[#F4F4F5] flex items-center justify-between gap-10">
        <div className="flex items-center gap-2">
          <Icon src={icon} />
          <p>{heading}</p>
        </div>
        <div className="flex items-center ">
          <p className="text-[12px] text-[#4545FE]">View All</p>
          <Icon w={10} h={10} src="/icons/view.svg" />
        </div>
      </div>

      <div className="bg-white flex gap-10 p-5 rounded-b-2xl">
        {body?.map((item, index) => (
          <div key={index}>
            <p>{item.text}</p>
            <p className="font-bold text-lg">{item.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingsOverview;
