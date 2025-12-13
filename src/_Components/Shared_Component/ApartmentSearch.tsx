import { MapPin, Calendar } from "lucide-react";

export default function ApartmentSearch() {
  return (
    <div className="w-full container mx-auto bg-primary-foreground rounded-2xl p-6">
      <h3 className="text-muted font-semibold text-lg mb-4">
        Book your apartment
      </h3>

      <div className="flex flex-col md:flex-row gap-0">
        {/* Location Input */}
        <div className="flex items-center gap-3 bg-transparent border border-border/50 px-4 py-4 md:rounded-l-lg md:border-r-0 rounded-t-lg md:rounded-tr-none border-b-0 md:border-b flex-1">
          <MapPin className="w-5 h-5 text-muted/50" />
          <input
            type="text"
            placeholder="New York"
            className="bg-transparent text-muted placeholder-muted/50 outline-none flex-1 text-sm"
          />
        </div>

        {/* Check-in */}
        <div className="flex items-center gap-3 bg-transparent border border-border/50 px-4 py-4 md:border-r-0 border-b-0 md:border-b flex-1">
          <Calendar className="w-5 h-5 text-muted/50" />
          <input
            type="text"
            placeholder="Check-in"
            className="bg-transparent text-muted/50 outline-none flex-1 text-sm"
          />
        </div>

        {/* Check-out */}
        <div className="flex items-center gap-3 bg-transparent border border-border/50 px-4 py-4 md:border-r-0 border-b-0 md:border-b flex-1">
          <input
            type="text"
            placeholder="Check-out"
            className="bg-transparent text-muted/50 outline-none flex-1 text-sm"
          />
        </div>

        {/* Price Range */}
        <div className="flex items-center gap-3 bg-transparent border border-border/50 px-4 py-4 md:rounded-r-lg rounded-b-lg md:rounded-bl-none flex-1">
          <input
            type="text"
            placeholder="Price Range"
            className="bg-transparent text-muted/50 outline-none flex-1 text-sm"
          />
        </div>

        {/* Search Button */}
        <button className="bg-primary hover:bg-primary/90 text-foreground font-semibold px-12 py-4 rounded-lg mt-4 md:mt-0 md:ml-4 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
}

// Reusable version with props
export function ApartmentSearchReusable({
  title = "Book your apartment",
  locationPlaceholder = "New York",
  onSearch,
  className = ""
}: {
  title?: string;
  locationPlaceholder?: string;
  onSearch?: (data: SearchData) => void;
  className?: string;
}) {
  const handleSearch = () => {
    if (onSearch) {
      onSearch({
        location: locationPlaceholder,
        checkIn: "",
        checkOut: "",
        priceRange: ""
      });
    }
  };

  return (
    <div className={`container mx-auto bg-primary-foreground rounded-2xl p-6 ${className}`}>
      <h3 className="text-muted font-semibold text-lg mb-4">
        {title}
      </h3>

      <div className="flex flex-col md:flex-row gap-0">
        <SearchInput
          icon={<MapPin className="w-5 h-5 text-muted/50" />}
          placeholder={locationPlaceholder}
          className="md:rounded-l-lg md:border-r-0 rounded-t-lg md:rounded-tr-none border-b-0 md:border-b"
        />
        
        <SearchInput
          icon={<Calendar className="w-5 h-5 text-muted/50" />}
          placeholder="Check-in"
          className="md:border-r-0 border-b-0 md:border-b"
        />
        
        <SearchInput
          placeholder="Check-out"
          className="md:border-r-0 border-b-0 md:border-b"
        />
        
        <SearchInput
          placeholder="Price Range"
          className="md:rounded-r-lg rounded-b-lg md:rounded-bl-none"
        />

        <button 
          onClick={handleSearch}
          className="bg-primary hover:bg-primary/90 text-foreground font-semibold px-12 py-4 rounded-lg mt-4 md:mt-0 md:ml-4 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
}

// Reusable SearchInput component
function SearchInput({
  icon,
  placeholder,
  className = ""
}: {
  icon?: React.ReactNode;
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 bg-transparent border border-zinc-600 px-4 py-4 flex-1 ${className}`}>
      {icon}
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-zinc-400 placeholder-zinc-400 outline-none flex-1 text-sm"
      />
    </div>
  );
}

// Type definition for search data
interface SearchData {
  location: string;
  checkIn: string;
  checkOut: string;
  priceRange: string;
}