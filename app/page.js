"use client";
import { TypeAnimation } from "react-type-animation";
import Topbar from "@/components/Dashboard/Topbar";
import ImageCarousel from "@/components/Dashboard/ImageCarousel";
import ListingsOverview from "@/components/Dashboard/ListingsOverview";
import SalesOverview from "@/components/Dashboard/SalesOverview";

export default function Home() {
  const body = [
    { text: "Total", number: "1.8k" },
    { text: "Active", number: "80" },
    { text: "Archived", number: "1k" },
  ];

  const body2 = [
    { text: "Total", number: "20.7k" },
    { text: "Riders", number: "8.5k" },
    { text: "Subscribers", number: "7.5k" },
  ];

  return (
    <div>
      <Topbar />

      <TypeAnimation
        sequence={["Welcome, Ahmed", 1000]}
        wrapper="p"
        speed={50}
        className="my-3 text-lg font-bold"
        repeat={0}
      />

      <div className="lg:flex gap-5 ">
        <SalesOverview />
        <div>
          <ListingsOverview
            heading={"Listings Overview"}
            body={body}
            icon="/icons/home-linear.svg"
          />
          <ListingsOverview
            heading={"Users Overview"}
            body={body2}
            icon="/icons/profilel.svg"
          />
        </div>
      </div>

      <div className="my-5 lg:flex gap-3  ">
        <ImageCarousel
          title={"Most Clicked"}
          subtitle={"Urban Prime Plaza Premiere"}
        />
        <ImageCarousel
          src={"/img2.jpg"}
          title={"Most WatchListed"}
          subtitle={"Urban Prime Plaza Premiere"}
        />
        <ImageCarousel
          src={"/img3.jpg"}
          title={"Hottest Listing"}
          subtitle={"Urban Prime Plaza Premiere"}
        />
      </div>
    </div>
  );
}
