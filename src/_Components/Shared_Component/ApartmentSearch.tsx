import { MapPin, Calendar } from "lucide-react";
import { useState } from "react";

interface SearchData {
  location: string;
  checkIn: string;
  checkOut: string;
  priceRange: string;
}

export default function ApartmentSearch({
  onSearch,
}: {
  onSearch?: (data: SearchData) => void;
}) {
  const [form, setForm] = useState<SearchData>({
    location: "",
    checkIn: "",
    checkOut: "",
    priceRange: "",
  });

  const handleChange = (key: keyof SearchData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    console.log("🔍 Search Payload:", form);
    onSearch?.(form);
  };

  return (
    <div className="w-full container mx-auto bg-primary-foreground rounded-3xl p-5 sm:p-6 lg:p-8 xl:pt-[30px] xl:pb-[50px] xl:px-[50px]">
      <h3 className="text-muted font-semibold text-base sm:text-lg mb-4">
        Book your apartment
      </h3>

      <div className="flex flex-col gap-1 lg:gap-0 lg:flex-row flex-wrap lg:flex-nowrap">
        {/* Location */}
        <div className="flex items-center gap-3 bg-transparent border border-border/50 px-4 py-4 md:rounded-l-2xl md:border-r-0 rounded-t-2xl md:rounded-tr-none border-b-0 md:border-b flex-1">
          <MapPin className="w-5 h-5 text-muted/50" />
          <input
            type="text"
            placeholder="New York"
            value={form.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className="bg-transparent text-muted placeholder-muted/50 outline-none flex-1 text-sm sm:text-base"
          />
        </div>

        {/* Check-in */}
        <div className="flex items-center gap-3 bg-transparent border border-border/50 px-4 py-4 md:border-r-0 border-b-0 md:border-b flex-1">
          <Calendar className="w-5 h-5 text-muted/50" />
          <input
            type="date"
            value={form.checkIn}
            onChange={(e) => handleChange("checkIn", e.target.value)}
            className="bg-transparent text-muted/50 outline-none flex-1 text-sm sm:text-base"
          />
        </div>

        {/* Check-out */}
        <div className="flex items-center gap-3 bg-transparent border border-border/50 px-4 py-4 md:border-r-0 border-b-0 md:border-b flex-1">
          <input
            type="date"
            value={form.checkOut}
            onChange={(e) => handleChange("checkOut", e.target.value)}
            className="bg-transparent text-muted/50 outline-none flex-1 text-sm sm:text-base"
          />
        </div>

        {/* Price Range */}
        <div className="flex items-center gap-3 bg-transparent border border-border/50 px-4 py-4 md:rounded-r-2xl rounded-b-2xl md:rounded-bl-none flex-1">
          <input
            type="text"
            placeholder="Price Range"
            value={form.priceRange}
            onChange={(e) => handleChange("priceRange", e.target.value)}
            className="bg-transparent text-muted/50 outline-none flex-1 text-sm sm:text-base"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-primary hover:bg-primary/90 text-foreground font-semibold px-8 sm:px-12 py-4 rounded-2xl mt-4 md:mt-0 md:ml-4 w-full md:w-auto transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
}
