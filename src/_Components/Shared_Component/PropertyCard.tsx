import { motion } from "framer-motion";
import { Link } from "react-router";
import type { Apartment } from "@/features/apartments/type";

import locationicon from "../../images/locationIconCardgray.png";
import guesticon from "../../images/guesticonCardgray.png";
import bathroomicon from "../../images/bathroomiconCardgray.png";
import wifiicon from "../../images/wifiiconCardgray.png";
import acicon from "../../images/aciconCardgray.png";
import kitchenicon from "../../images/kitcheniconCardgray.png";
import gymicon from "../../images/gymiconCardgray.png";
import { useEffect, useState } from "react";

interface Props {
  item: Apartment;
  index: number;
}

export default function PropertyCard({ item, index }: Props) {
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

  const images = item.images?.length ? item.images : ["/images/placeholder.jpg"];
const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  if (images.length <= 1) return;

  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 3000); // change image every 3s

  return () => clearInterval(interval);
}, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.1, duration: 0.2 }}
      className="bg-background rounded-[12px] overflow-hidden border border-border shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative w-full h-[250px]">
        <img
  src={images[currentImage]}
  alt={item.name}
  className="w-full h-full object-cover rounded-t-[12px]"
  loading="lazy"
/>
        <div className="absolute top-2.5 right-2.5 bg-background px-2 py-1.5 rounded-full text-[14px]">
          ${item.pricing.nightly}/<span className="text-[12px]">night</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-3.5 pt-3 pb-[18px]">
        <h3 className="text-[18px] font-medium">{item.name}</h3>

        <div className="flex items-center gap-2 mb-2">
          <img src={locationicon} className="w-4 h-4" />
          <p className="text-foreground/60 text-[14px]">
            {item.full_address}
          </p>
        </div>

        <div className="flex gap-4 mb-2">
          <div className="flex gap-2">
            <img src={guesticon} className="w-4 h-4" />
            <p className="text-[14px]">{item.bedrooms} Bedrooms</p>
          </div>
          <div className="flex gap-2">
            <img src={bathroomicon} className="w-4 h-4" />
            <p className="text-[14px]">{item.bathrooms} Bathrooms</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-3">
          {item.amenities.map((a) => {
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

        <Link
          to={`/apartment/${item.id}`}
          className="block text-center border border-primary/40 py-2.5 rounded-xl hover:bg-primary hover:text-muted transition"
        >
          See details...
        </Link>
      </div>
    </motion.div>
  );
}
