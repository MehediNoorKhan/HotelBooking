import { motion } from "framer-motion";
import { Link } from "react-router";
import type { LovedApartment } from "@/features/apartments/type";

import locationicon from "../../images/locationIconCardgray.png";
import guesticon from "../../images/guesticonCardgray.png";
import bathroomicon from "../../images/bathroomiconCardgray.png";
import wifiicon from "../../images/wifiiconCardgray.png";
import acicon from "../../images/aciconCardgray.png";
import kitchenicon from "../../images/kitcheniconCardgray.png";
import gymicon from "../../images/gymiconCardgray.png";

import { useState } from "react";

interface Props {
  item: LovedApartment;
  index: number;
}

export default function SavePropertyCard({ item, index }: Props) {
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

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  const showControls = images.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.2 }}
      className="bg-background rounded-[12px] overflow-hidden border border-border shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Image Carousel */}
      <div className="relative w-full h-[250px] group">
        <img
          loading="lazy"
          src={images[currentImage]}
          alt={item.name}
          className="w-full h-full object-cover rounded-t-[12px]"
        />

        {/* Price tag - stays the same */}
        <div className="absolute top-2.5 right-2.5 bg-background px-2 py-1.5 rounded-full text-[14px]">
          ${item.pricing.nightly}/<span className="text-[12px]">night</span>
        </div>

        {/* Navigation Arrows - appear on hover */}
        {showControls && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 
                       bg-black/40 text-white w-6 h-6 rounded-full 
                       flex items-center justify-center opacity-0 group-hover:opacity-80
                       transition-opacity duration-200 hover:bg-black/60"
              aria-label="Previous image"
            >
              ←
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 
                       bg-black/40 text-white w-6 h-6 rounded-full 
                       flex items-center justify-center opacity-0 group-hover:opacity-80
                       transition-opacity duration-200 hover:bg-black/60"
              aria-label="Next image"
            >
              →
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToImage(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    idx === currentImage
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content - remains completely unchanged */}
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
          to={`/apartment/${item.apartment_id}`}
          className="block text-center border border-primary/40 py-2.5 rounded-xl hover:bg-primary hover:text-muted transition"
        >
          See details...
        </Link>
      </div>
    </motion.div>
  );
}