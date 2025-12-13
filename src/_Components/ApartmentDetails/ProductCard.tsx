"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import locationicon from "../../images/locationIconCardgray.png";
import guesticon from "../../images/guesticonCardgray.png";
import bathroomicon from "../../images/bathroomiconCardgray.png";
import wifiicon from "../../images/wifiiconCardgray.png";
import acicon from "../../images/aciconCardgray.png";
import kitchenicon from "../../images/kitcheniconCardgray.png";
import gymicon from "../../images/gymiconCardgray.png";
import type { Properties } from "../../types";

interface ProductCardProps {
  properties: Properties[];
}

const ProductCard: React.FC<ProductCardProps> = ({ properties }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, properties.length - itemsToShow));
  };

  const visibleProperties = properties.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="relative bg-[#161616]  py-[30px] sm:px-5 sm:py-10 md:px-10">
      
      {/* Title */}
      <div className="flex flex-col justify-center items-center text-center gap-3 mb-[30px] xl:mb-[50px]">
        <span className="bg-[#F4F5F7] text-black text-[14px] sm:text-[16px] px-3.5 py-2 rounded-2xl xl:text-[18px] xl:px-5 xl:py-2.5]">
          Featured Properties
        </span>
        <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] xl:text-[16px]">
          Handpicked apartments that embody sophistication and comfort in New York’s most prestigious locations.
        </p>
      </div>

      {/* Slider */}
      <div className="relative flex items-center">
        {/* Left Button */}
        {properties.length > itemsToShow && (
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-full hover:bg-primary transition z-10"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
        )}

        {/* Cards */}
        <div className="flex gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 overflow-hidden w-full">
          {visibleProperties.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[12px] overflow-hidden border border-[#E5E5E5] shadow-sm transition-all duration-200 hover:shadow-lg min-w-[300px]"
            >
              {/* Image */}
              <div className="relative w-full" style={{ height: "200px" }}>
                <img
                  src={item.image}
                  className="w-full h-full object-cover rounded-t-[12px]"
                  alt={item.title}
                />
                <div className="absolute top-2.5 right-2.5 bg-white px-2 py-1.5 rounded-full text-[14px] sm:top-3 sm:right-3 sm:text-[15px] md:text-[16px] xl:top-3 xl:right-3 xl:px-[9px] xl:py-[9px] xl:text-[16px]">
                  ${item.price}/<span className="text-[12px]">mo</span>
                </div>
              </div>

              {/* Content */}
              <div className="px-3.5 pt-3 pb-[18px] sm:px-4 md:px-[18px] xl:px-4 xl:pt-3 xl:pb-5">
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] text-[#222] mt-2.5 mb-1.5 font-medium xl:text-[18px]">
                  {item.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5">
                  <img src={locationicon} className="w-4 h-4" alt="location" />
                  <p className="text-[#4A5565] text-[14px] sm:text-[15px] xl:text-[14px]">
                    {item.location}
                  </p>
                </div>

                {/* Beds & Baths */}
                <div className="flex items-center gap-4 sm:gap-4 md:gap-4 mb-4">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <img src={guesticon} className="w-4 h-4" alt="bedroom" />
                    <p className="text-[#4A5565] text-[14px] sm:text-[15px] xl:text-[14px]">
                      {item.bedroom} Bedrooms
                    </p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <img src={bathroomicon} className="w-4 h-4" alt="bathroom" />
                    <p className="text-[#4A5565] text-[14px] sm:text-[15px] xl:text-[14px]">
                      {item.bathroom} Bathrooms
                    </p>
                  </div>
                </div>

                {/* Facilities */}
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-[18px] md:gap-[22px] xl:gap-[30px] mb-2.5">
                  {item.facilities.includes("WiFi") && (
                    <div className="flex items-center gap-2">
                      <img src={wifiicon} className="w-4 h-4" alt="wifi" />
                      <p className="text-[#4A5565] text-[14px]">WiFi</p>
                    </div>
                  )}
                  {item.facilities.includes("AC") && (
                    <div className="flex items-center gap-2">
                      <img src={acicon} className="w-4 h-4" alt="ac" />
                      <p className="text-[#4A5565] text-[14px]">AC</p>
                    </div>
                  )}
                  {item.facilities.includes("Kitchen") && (
                    <div className="flex items-center gap-2">
                      <img src={kitchenicon} className="w-4 h-4" alt="kitchen" />
                      <p className="text-[#4A5565] text-[14px]">Kitchen</p>
                    </div>
                  )}
                  {item.facilities.includes("Gym") && (
                    <div className="flex items-center gap-2">
                      <img src={gymicon} className="w-4 h-4" alt="gym" />
                      <p className="text-[#4A5565] text-[14px]">Gym</p>
                    </div>
                  )}
                </div>

                {/* Button */}
                <button className="mt-3.5 w-full border border-[#EBE0CA] text-black py-2.5 rounded-xl text-[14px] sm:text-[15px] md:text-[16px] font-medium transition hover:bg-[#D4BB8C] hover:text-white xl:py-2 xl:px-[137px] cursor-pointer">
                  See details...
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        {properties.length > itemsToShow && (
          <button
            onClick={next}
            disabled={currentIndex >= properties.length - itemsToShow}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-full hover:bg-primary transition z-10"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
