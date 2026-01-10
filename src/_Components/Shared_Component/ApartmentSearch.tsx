import { MapPin, Calendar } from "lucide-react";
import { useState, useRef } from "react";
import { format } from "date-fns";

interface SearchData {
  location: string;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  min_price: string;
  max_price: string;
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
    min_price: "",
    max_price: "",
  });

  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  const handleChange = (key: keyof SearchData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    onSearch?.(form);
  };

  const formatDateDisplay = (dateString: string) => {
    if (!dateString) return undefined;
    try {
      return format(new Date(dateString), "MMM d, yyyy");
    } catch {
      return undefined;
    }
  };

  return (
    <div className="w-full container mx-auto bg-primary-foreground rounded-3xl p-5 sm:p-6 lg:p-8 xl:pt-[30px] xl:pb-[50px] xl:px-[50px]">
      <h3 className="text-muted font-semibold text-base sm:text-lg mb-5 lg:mb-6">
        Book your apartment
      </h3>

      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-stretch">
        <div className="flex flex-col lg:flex-row flex-1 lg:rounded-2xl overflow-hidden border border-border/40  backdrop-blur-sm">
          {/* Location */}
          <div className="flex items-center gap-3 px-5 py-5 border-b border-border/50 lg:border-b-0 lg:border-r flex-1">
            <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
            <div className="flex-1">
              <label className="text-xs text-muted-foreground block mb-0.5">Location</label>
              <input
                type="text"
                placeholder="New York"
                value={form.location}
                onChange={(e) => handleChange("location", e.target.value)}
                className="bg-transparent text-background placeholder:text-muted-foreground/60 outline-none w-full text-base"
              />
            </div>
          </div>

          {/* Check-in */}
          <div
            onClick={() => checkInRef.current?.showPicker?.()}
            className="relative flex items-center gap-3 px-5 py-5 border-b border-border/50 lg:border-b-0 lg:border-r flex-1 cursor-pointer group"
          >
            <Calendar className="w-5 h-5 text-muted-foreground shrink-0" />
            <div className="flex-1">
              <label className="text-xs text-muted-foreground block mb-0.5">Check-in</label>
              {form.checkIn ? (
                <p className=" font-medium text-base text-background">
                  {formatDateDisplay(form.checkIn)}
                </p>
              ) : (
                <p className="text-muted-foreground/70 text-base">Add date</p>
              )}
            </div>
            <input
              ref={checkInRef}
              type="date"
              value={form.checkIn}
              onChange={(e) => handleChange("checkIn", e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

          {/* Check-out */}
          <div
            onClick={() => checkOutRef.current?.showPicker?.()}
            className="relative flex items-center gap-3 px-5 py-5 border-b border-border/50 lg:border-b-0 lg:border-r flex-1 cursor-pointer group"
          >
            <Calendar className="w-5 h-5 text-muted-foreground shrink-0" />
            <div className="flex-1">
              <label className="text-xs text-muted-foreground block mb-0.5">Check-out</label>
              {form.checkOut ? (
                <p className="text-background font-medium text-base">
                  {formatDateDisplay(form.checkOut)}
                </p>
              ) : (
                <p className="text-muted-foreground/70 text-base">Add date</p>
              )}
            </div>
            <input
              ref={checkOutRef}
              type="date"
              value={form.checkOut}
              onChange={(e) => handleChange("checkOut", e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

          {/* Price Range - combined visually */}
          <div className="flex flex-col sm:flex-row border-b border-border/50 lg:border-b-0 lg:border-r flex-1 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
            <div className="flex items-center gap-3 px-5 py-5 flex-1">
              <div className="flex-1">
                <label className="text-xs text-muted-foreground block mb-0.5">Min Price</label>
                <input
                  type="text"
                  placeholder="$ Min"
                  value={form.min_price}
                  onChange={(e) => handleChange("min_price", e.target.value)}
                  className="bg-transparent text-background placeholder:text-muted-foreground/60 outline-none w-full text-base"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-5 flex-1">
              <div className="flex-1">
                <label className="text-xs text-muted-foreground block mb-0.5">Max Price</label>
                <input
                  type="text"
                  placeholder="$ Max"
                  value={form.max_price}
                  onChange={(e) => handleChange("max_price", e.target.value)}
                  className="bg-transparent text-background placeholder:text-muted-foreground/60 outline-none w-full text-base"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-5 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg w-full lg:w-auto lg:ml-5 lg:self-stretch text-base"
        >
          Search Apartments
        </button>
      </div>
    </div>
  );
}