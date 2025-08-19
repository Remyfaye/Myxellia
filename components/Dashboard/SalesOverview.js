import React from "react";
import Icon from "../ui/Icon";
import Image from "next/image";

const SalesOverview = () => {
  const salesItem = [
    {
      number: "₦120,000,000.00",
      subtext: "Total Inflow",
      percent: "2.5%",
      textColor: "text-[#4545FE]",
      percentColor: "text-[#12B76A]",
      icon: "/icons/frame.svg",
    },
    {
      number: "₦50,000,000.00",
      subtext: "MRR",
      percent: "2.5%",
      textColor: "text-[#12B76A]",
      icon: "/icons/frame.svg",
      percentColor: "text-[#12B76A]",
    },
    {
      number: "₦200,000,000.00",
      subtext: "Commission Revenue",
      percent: "0.5%",
      textColor: "text-[#14B8A6]",
      icon: "/icons/frame.svg",
      percentColor: "text-[#14B8A6]",
    },
    {
      number: "₦100,000,000.00",
      subtext: "GMV",
      percent: "0.5%",
      textColor: "text-[#F04438]",
      icon: "/icons/frame2.svg",
      percentColor: "text-[#F04438]",
    },
  ];
  const chartColItem = [
    {
      icon: "/grp1.png",
      height: "h-[99px]",
      date: "jan",
    },
    {
      icon: "/grp1.png",
      height: "h-[78px]",
      date: "feb",
    },
    {
      icon: "/mar.png",
      height: "h-[42px]",
      date: "mar",
    },
    {
      icon: "/apr.png",
      height: "h-[73px]",
      date: "apr",
    },
    {
      icon: "/may.png",
      height: "h-[30px]",
      date: "may ",
    },
    {
      icon: "/grp1.png",
      height: "h-[136px]",
      date: "jun",
    },
    {
      icon: "/grp1.png",
      height: "h-[104px]",
      date: "jul",
    },
    {
      icon: "/grp1.png",
      height: "h-[69px]",
      date: "aug",
    },
    {
      icon: "/grp1.png",
      height: "h-[104px]",
      date: "jan",
    },
  ];
  return (
    <div className="border rounded-2xl bg-white lg:w-[80%] lg:h-[300px]">
      <div className="border-b-[2px] border-[#F4F4F5] lg:flex justify-between  p-3">
        <div>
          <b>Sales Overview</b>
          <p>Showing overview Jan 2022 - Sep 2022</p>
        </div>
        <div>
          <p className="border my-5 lg:my-0 rounded-3xl px-3 py-2 text-[12px] text-center">
            View Transactions
          </p>
          <div className="flex gap-5 items-center mt-3">
            <span>1 Week</span>
            <span>1 Month</span>
            <b className="bg-[#F5F5F5] rounded-[8px] py-1 px-3">1 Year</b>
          </div>
        </div>
      </div>

      <div className="lg:flex p-3">
        <div className="lg:w-[45%] w-full flex gap-3 items-end ">
          {/* <Icon
            h={18}
            w={18}
            src={"/icons/left.svg"}
            style={"flex items-center justify-center h-[150px]"}
          /> */}
          <Image
            className={`object-center `}
            width={26}
            height={148}
            src="/meter.png"
            alt="img"
          />
          <Image
            className={`object-center `}
            width={2}
            height={10}
            src="/line.png"
            alt="img"
          />
          {chartColItem.map((item, index) => (
            <ChartCol key={index} item={item} />
          ))}
        </div>

        <div className="lg:w-[53%] lg:my-0 my-5 grid grid-cols-2 gap-3   shadow-x-lg">
          {salesItem.map((item, index) => (
            <div key={index} className="border rounded-2xl px-4 py-2">
              <p className={`text-[17px] font-bold ${item.textColor}`}>
                {item.number}
              </p>
              <div className="flex gap-2 mt-1 items-center">
                <p className="w-[500] text-[10px] font-semibold">
                  {item.subtext}
                </p>
                <Icon w={14} h={14} src={item.icon} />
                <p
                  className={`${item.percentColor} font-bold text-[10px] ${
                    index === 3 && "animate-pulse"
                  }`}
                >
                  {item.percent}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;

export const ChartCol = ({ item }) => {
  return (
    <div>
      <Image
        className={`object-center  ${item.height} `}
        width={18}
        height={100}
        src={item.icon}
        alt="img"
      />
      <small className="capitalize">{item.date}</small>
    </div>
  );
};
