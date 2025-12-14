import locationicon from "../../images/locationIconCardgray.png";
import guesticon from "../../images/guesticonCardgray.png";
import bathroomicon from "../../images/bathroomiconCardgray.png";
import wifiicon from "../../images/wifiiconCardgray.png";
import acicon from "../../images/aciconCardgray.png";
import kitchenicon from "../../images/kitcheniconCardgray.png";
import gymicon from "../../images/gymiconCardgray.png";
import { motion } from "framer-motion";

import type { Properties } from "../../types";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

interface ProductCardProps {
  properties: Properties[];
  title?: string;
  subTitle?: string;
}

export default function FeaturedProperties({
  properties,
  title,
  subTitle,
}: ProductCardProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); // show 6 more cards
  };

  const visibleProperties = properties.slice(0, visibleCount);

  return (
    <div className="bg-foreground px-3 py-7.5">
      {/* Title */}
      <div className="flex flex-col justify-center items-center text-center gap-3 mb-[30px] xl:mb-[50px]">
        <span className="bg-background text-foreground font-medium text-[18px] sm:text-[16px] px-3.5 py-2 rounded-2xl xl:text-[18px] xl:px-5 xl:py-2.5">
          {title}
        </span>

        <p className="text-muted text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] xl:text-[16px]">
          {subTitle}
        </p>
      </div>

      {/* Grid */}
      <div
        className="
                grid grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10
            "
      >
        {visibleProperties.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: index * 0.1, duration: 0.2 }}
            className="
        bg-background rounded-[12px] overflow-hidden
        border border-border
        shadow-sm transition-shadow hover:shadow-lg
      "
          >
            {/* Image */}
            <div
              className="relative w-full"
              style={{
                height: "200px",
              }}
            >
              <img
                src={item.image}
                className="w-full h-full object-cover rounded-t-[12px]"
                alt={item.title}
              />

              {/* Price badge */}
              <div
                className="
                                    absolute top-2.5 right-2.5
                                    bg-background px-2 py-1.5 rounded-full text-[14px]
                                    sm:top-3 sm:right-3 sm:text-[15px]
                                    md:text-[16px]
                                    xl:top-3 xl:right-3 xl:px-[9px] xl:py-[9px] xl:text-[16px]
                                "
              >
                ${item.price}/<span className="text-[12px]">mo</span>
              </div>
            </div>

            {/* Content */}
            <div className="px-3.5 pt-3 pb-[18px] sm:px-4 md:px-[18px] xl:px-4 xl:pt-4 xl:pb-5">
              {/* Title */}
              <h3 className="text-[16px] sm:text-[17px] md:text-[18px] text-foreground mt-2.5 mb-1.5 font-medium xl:text-[18px]">
                {item.title}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-2 sm:gap-2.5 mb-1,5">
                <img src={locationicon} className="w-4 h-4" alt="location" />
                <p className="text-foreground/60 text-[14px] sm:text-[15px] xl:text-[14px]">
                  {item.location}
                </p>
              </div>

              {/* Beds & Baths */}
              <div className="flex items-center gap-4 sm:gap-5 md:gap-6 mb-2">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <img src={guesticon} className="w-4 h-4" alt="bedroom" />
                  <p className="text-foreground/70 text-[14px] sm:text-[15px] xl:text-[14px]">
                    {item.bedroom} Bedrooms
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <img src={bathroomicon} className="w-4 h-4" alt="bathroom" />
                  <p className="text-foreground/70 text-[14px] sm:text-[15px] xl:text-[14px]">
                    {item.bathroom} Bathrooms
                  </p>
                </div>
              </div>

              {/* Facilities */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-[18px] md:gap-[22px] xl:gap-[30px] mb-2.5">
                {item.facilities.includes("WiFi") && (
                  <div className="flex items-center gap-2">
                    <img src={wifiicon} className="w-4 h-4" alt="wifi" />
                    <p className="text-foreground/70 text-[14px]">WiFi</p>
                  </div>
                )}

                {item.facilities.includes("AC") && (
                  <div className="flex items-center gap-2">
                    <img src={acicon} className="w-4 h-4" alt="ac" />
                    <p className="text-foreground/70 text-[14px]">AC</p>
                  </div>
                )}

                {item.facilities.includes("Kitchen") && (
                  <div className="flex items-center gap-2">
                    <img src={kitchenicon} className="w-4 h-4" alt="kitchen" />
                    <p className="text-foreground/70 text-[14px]">Kitchen</p>
                  </div>
                )}

                {item.facilities.includes("Gym") && (
                  <div className="flex items-center gap-2">
                    <img src={gymicon} className="w-4 h-4" alt="gym" />
                    <p className="text-foreground/70 text-[14px]">Gym</p>
                  </div>
                )}
              </div>

              {/* Button */}
              <Link
                to={`/apartment/${item.id}`}
                className="
    mt-3.5 w-full border border-primary/40 text-foreground
    py-2.5 rounded-xl text-[14px] sm:text-[15px] md:text-[16px]
    font-medium transition hover:bg-primary hover:text-muted
    xl:py-2 xl:px-[137px] cursor-pointer
    text-center block
  "
              >
                See details...
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      {visibleCount < properties.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="mt-12 flex gap-2 items-center bg-background text-foreground py-2 px-6 rounded-lg hover:bg-primary/90 transition"
          >
            See More Apartments <ChevronDown />
          </button>
        </div>
      )}
    </div>
  );
}
