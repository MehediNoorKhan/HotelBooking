import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import herobg from "../../images/herobg.png";
import locationIcon from "../../images/locationIcon.png";
import checkinIcon from "../../images/checkinIcon.png";
import { useSearchApartmentsMutation } from "@/features/apartments/apartmentAPI";
import type { Apartment } from "@/features/apartments/type";
import { usePageBanner } from "@/Hooks/usePageBanner";

export default function Banner() {
  const navigate = useNavigate();

  const [location] = useState("New York");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [searchResults, setSearchResults] = useState<Apartment[]>([]);

  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const [showResults, setShowResults] = useState(false);

  const [searchApartments, { isLoading }] = useSearchApartmentsMutation();

  const { bannerData } = usePageBanner("home_banner");

  const handleSearch = async () => {
    if (!location) return;

    try {
      const result = await searchApartments({
        location,
        check_in_date: checkIn || undefined,
        check_out_date: checkOut || undefined,
      }).unwrap();

      setSearchResults(result);
      setShowResults(true);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  // Helper to show nice date format
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  return (
    <>
      <div
        className="bg-cover bg-top bg-no-repeat min-h-screen relative -mt-30
        flex flex-col items-start justify-start
        px-4 md:px-6 lg:px-10 xl:px-[100px]
        pt-44 pb-32 md:py-64 lg:py-76 xl:py-92"
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
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <h1 className="text-background font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-normal drop-shadow-lg ">
            {bannerData?.data?.title}
          </h1>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-light">
            {bannerData?.data?.short_description}
          </p>

          {/* Search Bar */}
          <div className="relative mt-10 md:mt-14 max-w-4xl xl:max-w-5xl mx-auto">
            <div
              className="
                bg-white/10 backdrop-blur-xl 
                border border-white/25 
                rounded-3xl 
                shadow-2xl 
                p-5 sm:p-6 md:p-7 lg:p-8
              "
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Location */}
                <div
                  className="
    flex items-center gap-3.5 px-5 py-4.5
    bg-white/10 rounded-2xl
    border border-white/25
    cursor-not-allowed
  "
                >
                  <img src={locationIcon} className="w-5.5 h-5.5" alt="" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-white/60 mb-0.5">Location</div>
                    <input
                      value="New York"
                      readOnly
                      className="
        bg-transparent outline-none
        text-white text-center font-medium
        w-full text-[15px] md:text-base
        cursor-not-allowed
      "
                    />
                  </div>
                </div>

                {/* Check-in */}
                <div
                  onClick={() => checkInRef.current?.showPicker()}
                  className="
                    flex items-center gap-3.5 px-5 py-4.5
                    bg-white/8 rounded-2xl
                    border border-white/20 hover:border-white/40
                    transition-all duration-200 cursor-pointer
                    relative
                  "
                >
                  <img src={checkinIcon} className="w-5.5 h-5.5" alt="" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-white/60 mb-0.5">Check-in</div>
                    <div className="text-white text-[15px] md:text-base">
                      {checkIn ? formatDate(checkIn) : "Select date"}
                    </div>
                  </div>
                  <input
                    ref={checkInRef}
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>

                {/* Check-out */}
                <div
                  onClick={() => checkOutRef.current?.showPicker()}
                  className="
                    flex items-center gap-3.5 px-5 py-4.5
                    bg-white/8 rounded-2xl
                    border border-white/20 hover:border-white/40
                    transition-all duration-200 cursor-pointer
                    relative
                  "
                >
                  <img src={checkinIcon} className="w-5.5 h-5.5" alt="" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-white/60 mb-0.5">
                      Check-out
                    </div>
                    <div className="text-white text-[15px] md:text-base">
                      {checkOut ? formatDate(checkOut) : "Select date"}
                    </div>
                  </div>
                  <input
                    ref={checkOutRef}
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  disabled={isLoading}
                  className="
                    bg-primary hover:bg-primary/90 active:bg-primary/80
                    text-white font-semibold
                    rounded-2xl py-4.5 px-8
                    transition-all duration-200
                    shadow-lg hover:shadow-xl
                    text-base
                  "
                >
                  {isLoading ? "Searching..." : "Search"}
                </button>
              </div>
            </div>

            {/* SEARCH RESULT DROPDOWN - now perfectly aligned with search bar */}
            {showResults && (
              <div
                className="
      mt-3 bg-background rounded-2xl shadow-xl
      border border-border/60
      w-full absolute left-0 right-0
      max-h-[360px] overflow-y-auto
    "
              >
                {searchResults.length > 0 ? (
                  searchResults.map((apt) => (
                    <div
                      key={apt.id}
                      onClick={() => {
                        setShowResults(false);
                        navigate(`/apartment/${apt.id}`);
                      }}
                      className="flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-muted/40 transition"
                    >
                      <img
                        src={apt.images?.[0] ?? "/placeholder.jpg"}
                        alt={apt.name}
                        className="w-14 h-14 rounded-lg object-cover shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm md:text-base truncate">
                          {apt.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {apt.full_address}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-10 text-center">
                    <p className="text-sm font-medium ">No apartments found</p>
                    <p className="text-xs  mt-1">
                      Try adjusting your dates or check availability later.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
