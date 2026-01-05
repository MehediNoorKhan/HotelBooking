import { useRef, useState } from "react";
import herobg from "../../images/herobg.png";
import locationIcon from "../../images/locationIcon.png";
import checkinIcon from "../../images/checkinIcon.png";
import { useSearchApartmentsMutation } from "@/features/apartments/apartmentAPI";

export default function Banner() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const locationRef = useRef<HTMLInputElement>(null);
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  const [searchApartments, { isLoading }] =
    useSearchApartmentsMutation();

  const handleSearch = () => {
    if (!location) return;

    searchApartments({
      location,
      check_in_date: checkIn || undefined,
      check_out_date: checkOut || undefined,
    });
  };

  return (
    <div
      className="
        bg-cover bg-top bg-no-repeat 
        min-h-screen relative -mt-30
        flex flex-col items-start justify-start
        px-4 md:px-6 lg:px-10 xl:px-[100px]
        pt-44 pb-32 md:py-64 lg:py-76 xl:py-92
        shadow-lg
      "
      style={{
        backgroundImage: `
          linear-gradient(
            180deg,
            rgba(0,0,0,0.15) 0%,
            rgba(0,0,0,0.25) 40%,
            rgba(0,0,0,0.50) 75%,
            rgba(0,0,0,0.50) 100%
          ),
          url(${herobg})
        `,
      }}
    >
      <div className="max-w-7xl mx-auto text-center space-y-3">
        <h1 className="xl:w-7xl text-background font-bold leading-tight text-2xl md:text-4xl lg:text-5xl xl:text-[64px] font-display">
          Experience Luxury Living in New York
        </h1>

        <p className="text-muted opacity-90 mt-4 text-base md:text-lg lg:text-[18px] xl:text-[20px] xl:w-7xl xl:mt-6 xl:mb-12">
          Discover our curated collection of premium apartments in Manhattan’s
          most exclusive neighborhoods. Refined elegance meets exceptional
          service.
        </p>

        {/* Booking Box */}
        <div className="mx-auto rounded-3xl bg-muted-foreground/50 backdrop-blur-[15.3px] p-5 md:p-6 lg:p-8 xl:pt-[30px] xl:pb-[50px] xl:px-[50px]">
          <h3 className="text-muted text-start font-bold text-lg md:text-xl xl:text-[20px] mb-2 md:mb-3 xl:mb-5">
            Book your apartment
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location */}
            <div
              onClick={() => locationRef.current?.focus()}
              className="flex items-center gap-2 border border-border/50 text-white/35 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-xl xl:px-[18px] xl:py-[21px] cursor-text"
            >
              <img src={locationIcon} className="w-6 h-6" />
              <input
                ref={locationRef}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="flex-1 bg-transparent outline-none text-muted text-sm md:text-base lg:text-lg xl:text-[18px]"
              />
            </div>

            {/* Check-in */}
            <div
              onClick={() => checkInRef.current?.showPicker()}
              className="flex items-center gap-2 border border-white/35 text-white/35 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-xl xl:px-[18px] xl:py-[21px] cursor-pointer"
            >
              <img src={checkinIcon} className="w-6 h-6" />
              <input
                ref={checkInRef}
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="flex-1 bg-transparent outline-none text-muted text-sm md:text-base lg:text-lg xl:text-[18px]"
              />
            </div>

            {/* Check-out */}
            <div
              onClick={() => checkOutRef.current?.showPicker()}
              className="flex items-center gap-2 border border-white/35 text-white/35 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-xl xl:px-[18px] xl:py-[21px] cursor-pointer"
            >
              <img src={checkinIcon} className="w-6 h-6" />
              <input
                ref={checkOutRef}
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="flex-1 bg-transparent outline-none text-muted text-sm md:text-base lg:text-lg xl:text-[18px]"
              />
            </div>

            {/* Search */}
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="bg-primary/90 text-muted font-bold py-3 md:py-4 lg:py-5 rounded-xl cursor-pointer text-base md:text-lg lg:text-xl xl:text-[20px] xl:px-[87px] xl:py-[26px]"
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
