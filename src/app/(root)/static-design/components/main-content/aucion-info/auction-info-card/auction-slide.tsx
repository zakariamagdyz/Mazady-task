"use client";
import React from "react";
import carSlideImage from "@/assets/images/cars/car-slide.jpg";
import { Eye, Flag, Heart, Share2 } from "lucide-react";
import LiveIconAnimation from "@/assets/animations/live-animation.json";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";

const ICONS = [
  { Component: Flag, label: "Flag" },
  { Component: Heart, label: "Heart" },
  { Component: Share2, label: "Share" },
];

const AuctionSlide = () => {
  const renderIconButtons = () =>
    ICONS.map(({ Component, label }) => (
      <Button
        key={label}
        size={"icon"}
        variant={"link"}
        className="shadow-md w-12 h-12 rounded-full bg-[#6E6B6B]"
      >
        <Component className="w-6 h-6 text-white" />
      </Button>
    ));
  return (
    <figure
      style={{ backgroundImage: `url(${carSlideImage.src})` }}
      className={`h-[380px] bg-cover bg-no-repeat bg-center`}
    >
      <section className="flex items-center justify-between ">
        <div className="flex max-sm:self-start text-white rounded-lg m-2 md:m-5 overflow-hidden">
          <div className="p-2 w-16  bg-white relative">
            <div className="h-3 absolute -top-[10px] left-1/2 -translate-x-1/2 w-24">
              <Lottie animationData={LiveIconAnimation} loop={true} />
            </div>
          </div>
          <div className="p-2 py-[6px] flex  bg-[#6E6B6B]  ">
            <div className=" border-l-2 border-[#FEFEFE]/30 flex items-center px-3   ">
              <time className="text-lg leading-[0] mt-1">02:00</time>
            </div>

            <div className=" p-2 py-[6px] flex items-center gap-1 ">
              <Eye className="w-6 h-6 " />
              <span className="leading-none text-sm mt-1">3000</span>
            </div>
          </div>
        </div>

        <div className="max-sm:flex-col  m-2 md:m-5  flex items-center gap-3">
          {renderIconButtons()}
        </div>
      </section>
    </figure>
  );
};

export default AuctionSlide;
