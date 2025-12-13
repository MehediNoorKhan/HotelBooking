
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, className }) => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className={`relative w-full bg-foreground p-7.5 ${className || ""}`}>
      {/* Aspect Ratio Wrapper */}
      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
        <img
          src={images[current]}
          alt="carousel-image"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Left Button */}
      <button
        onClick={prev}
        className="
          absolute 
          left-10 top-1/2 -translate-y-1/2 
          bg-background hover:bg-background/60 
          text-foreground p-2 rounded-full 
          backdrop-blur-sm transition
        "
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Right Button */}
      <button
        onClick={next}
        className="
          absolute 
          right-10 top-1/2 -translate-y-1/2 
          bg-background hover:bg-background/60 
          text-foreground p-2 rounded-full
          backdrop-blur-sm transition
        "
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-2 w-2 rounded-full cursor-pointer transition-all 
              ${current === index ? "bg-background scale-125" : "bg-background/50 hover:bg-background"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
