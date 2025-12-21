import { useState } from "react";
import type { Apartment } from "@/features/apartments/type";
import PropertyCard from "../Shared_Component/PropertyCard";
import { ChevronDown } from "lucide-react";

interface FeaturedPropertiesProps {
  properties: Apartment[];
  isLoading: boolean;
  isError: boolean;
  title: string;
  subTitle: string;
}

export default function FeaturedProperties({
  properties,
  isLoading,
  isError,
  title,
  subTitle,
}: FeaturedPropertiesProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleProperties = properties.slice(0, visibleCount);

  return (
    <section className="container mx-auto py-12">
      {/* Title */}
      <div className="flex flex-col justify-center items-center text-center gap-3 mb-[30px] xl:mb-[50px]">
        <span className="bg-background text-foreground font-medium text-[18px] sm:text-[16px] px-3.5 py-2 rounded-2xl xl:text-[18px] xl:px-5 xl:py-2.5">
          {title}
        </span>
        <p className="text-muted text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] xl:text-[16px]">
          {subTitle}
        </p>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-[320px] rounded-xl bg-muted/20 animate-pulse"
            />
          ))}
        </div>
      )}

      {/* Error */}
      {isError && (
        <p className="text-center text-red-500">
          Failed to load featured properties
        </p>
      )}

      {/* Data */}
      {!isLoading && !isError && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10">
            {visibleProperties.map((item, index) => (
              <PropertyCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {visibleCount < properties.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setVisibleCount((p) => p + 6)}
                className="mt-12 flex gap-2 items-center bg-background text-foreground py-2 px-6 rounded-lg hover:bg-primary/90 transition"
              >
                See More Apartments <ChevronDown />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
