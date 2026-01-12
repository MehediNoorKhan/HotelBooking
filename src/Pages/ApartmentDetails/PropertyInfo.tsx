import { BathIcon, BedDouble, DollarSign, MoveDiagonal, MapPin, UsersRoundIcon } from "lucide-react";
import React from "react";
import StatCard from "./StatCardProps";

interface Amenity {
  id: number;
  name: string;
  icon?: string;
}

interface AmenitiesByCategory {
  [category: string]: Amenity[];
}

interface PropertyInfoProps {
  monthlyRate?: string;
  bedrooms?: string;
  bathrooms?: string;
  guestCapacity?: string;
  squareFootage?: string;
  location?: string;
  description: string;
  amenitiesByCategory?: AmenitiesByCategory;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({
  monthlyRate = "",
  bedrooms = "",
  bathrooms = "",
  guestCapacity = "",
  squareFootage = "",
  location = "",
  description = "",
 amenitiesByCategory = {},
}) => {




  return (
    <div className="flex flex-col gap-6 flex-1 min-w-[320px]">
      {/* Property Overview Section */}
      <div className="bg-primary-foreground border border-primary rounded-2xl p-8">
        <h2 className="text-primary text-[20px] font-normal mb-6 tracking-wide">
          Property Overview
        </h2>

        <div className="flex flex-wrap gap-3">
          <StatCard icon={<DollarSign className="text-primary w-6 h-6" />} label="Monthly Rate" value={monthlyRate} />
          <StatCard icon={<BedDouble className="text-primary w-6 h-6" />} label="Bedrooms" value={bedrooms} />
          <StatCard icon={<BathIcon className="text-primary w-6 h-6" />} label="Bathrooms" value={bathrooms} />
          <StatCard icon={<UsersRoundIcon className="text-primary w-6 h-6" />} label="Guest Capacity" value={guestCapacity} />
          <StatCard icon={<MoveDiagonal className="text-primary w-6 h-6" />} label="Square Footage" value={squareFootage} />
          <StatCard icon={<MapPin className="text-primary w-6 h-6" />} label="Location" value={location} />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-primary-foreground border border-primary rounded-2xl p-8">
        <h2 className="text-primary text-[20px] font-normal mb-6 tracking-wide">
          About This Residence
        </h2>

        <div className="text-muted leading-[1.8]">
          <p className="mb-4 text-[14px]">{description}</p>
        </div>
      </div>

      {/* Amenities Section */}
      {amenitiesByCategory &&
  Object.entries(amenitiesByCategory).map(([category, amenities]) => {
    if (!amenities || amenities.length === 0) return null;

    return (
      <div
        key={category}
        className="bg-primary-foreground border border-primary rounded-2xl p-8"
      >
        <h2 className="text-primary text-[20px] font-normal mb-6 tracking-wide">
          {category} Amenities
        </h2>

        <div className="flex flex-wrap gap-3">
          {amenities.map((a) => (
            <StatCard
              key={a.id}
              icon={
                a.icon ? (
                  <img
                    src={a.icon}
                    alt={a.name}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <BedDouble className="text-primary w-6 h-6" />
                )
              }
              label={a.name}
            />
          ))}
        </div>
      </div>
    );
  })}
    </div>
  );
};

export default PropertyInfo;
