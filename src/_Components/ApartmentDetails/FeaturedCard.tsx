import locationicon from "../../images/locationIconCardgray.png";
import guesticon from "../../images/guesticonCardgray.png";
import bathroomicon from "../../images/bathroomiconCardgray.png";
import wifiicon from "../../images/wifiiconCardgray.png";
import acicon from "../../images/aciconCardgray.png";
import kitchenicon from "../../images/kitcheniconCardgray.png";
import gymicon from "../../images/gymiconCardgray.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import type { Apartment } from "@/features/apartments/type";

interface FeaturedPropertiesProps {
  properties: Apartment[] ;
  title?: string;
  subTitle?: string;
}

export default function FeaturedCard({
  properties = [],
  title,
  subTitle,
}: FeaturedPropertiesProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleProperties = properties.slice(0, visibleCount);

  const mapAmenityToIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "wifi":
      case "free wifi":
        return wifiicon;
      case "ac":
      case "air conditioner":
        return acicon;
      case "kitchen":
        return kitchenicon;
      case "gym":
        return gymicon;
      default:
        return null;
    }
  };

  return (
    <div className="bg-foreground px-3 py-7.5">
      {/* Title */}
      {(title || subTitle) && (
        <div className="flex flex-col items-center text-center gap-3 mb-[30px] xl:mb-[50px]">
          {title && (
            <span className="bg-background text-foreground font-medium text-[18px] px-3.5 py-2 rounded-2xl">
              {title}
            </span>
          )}
          {subTitle && (
            <p className="text-muted text-[14px] sm:text-[15px]">
              {subTitle}
            </p>
          )}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 xl:gap-10">
        {visibleProperties.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.25 }}
            className="bg-background rounded-[12px] overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <div className="relative w-full h-[200px]">
              <img
                src={item.images?.[0] || "/placeholder.jpg"}
                className="w-full h-full object-cover rounded-t-[12px]"
                alt={item.name}
              />

              {/* Price badge */}
              <div className="absolute top-3 right-3 bg-background px-2 py-1.5 rounded-full text-[16px]">
                ${item.pricing?.nightly}/
                <span className="text-[12px]">night</span>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 pt-4 pb-5">
              <h3 className="text-[18px] font-medium mb-1.5">
                {item.name}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-2 mb-1.5">
                <img src={locationicon} className="w-4 h-4" />
                <p className="text-foreground/60 text-[14px]">
                  {item.full_address}
                </p>
              </div>

              {/* Beds & Baths */}
              <div className="flex gap-5 mb-2">
                <div className="flex items-center gap-2">
                  <img src={guesticon} className="w-4 h-4" />
                  <p className="text-[14px]">
                    {item.bedrooms} Bedrooms
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <img src={bathroomicon} className="w-4 h-4" />
                  <p className="text-[14px]">
                    {item.bathrooms} Bathrooms
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-4 mb-3">
                {(item.amenities ?? []).map((a) => {
                  const icon = mapAmenityToIcon(a.name);
                  return (
                    icon && (
                      <div key={a.id} className="flex items-center gap-2">
                        <img src={icon} className="w-4 h-4" />
                        <p className="text-[14px]">{a.name}</p>
                      </div>
                    )
                  );
                })}
              </div>

              {/* Button */}
              <Link
                to={`/apartment/${item.id}`}
                className="block w-full border border-primary/40 py-2.5 rounded-xl text-center font-medium hover:bg-primary hover:text-muted transition"
              >
                See details...
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load more */}
      {visibleCount < properties.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((p) => p + 6)}
            className="flex items-center gap-2 bg-background px-6 py-2 rounded-lg hover:bg-primary/90 transition"
          >
            See More Apartments <ChevronDown />
          </button>
        </div>
      )}
    </div>
  );
}
