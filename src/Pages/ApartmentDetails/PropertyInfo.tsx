import { BathIcon, BedDouble, DollarSign, MoveDiagonal, MapPin, UsersRoundIcon } from "lucide-react";
import React from "react";
import StatCard from "./StatCardProps";

interface PropertyInfoProps {
  monthlyRate?: string;
  bedrooms?: string;
  bathrooms?: string;
  guestCapacity?: string;
  squareFootage?: string;
  location?: string;
  description:string;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({
  monthlyRate = "",
  bedrooms = "",
  bathrooms = "",
  guestCapacity = "",
  squareFootage = "",
  location = "",
  description=''
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
          <p className="mb-4 text-[14px]">
            {description}
          </p>
        </div>
      </div>

      {/* Apartment Amenities Section */}
      <div className="bg-primary-foreground border border-primary rounded-2xl p-8">
        <h2 className="text-primary text-[20px] font-normal mb-6 tracking-wide">
          Apartment Amenities
        </h2>

        <div className="flex flex-wrap gap-3">
          <StatCard icon={<BedDouble className="text-primary w-6 h-6" />} label="Bedrooms" />
          <StatCard icon={<BathIcon className="text-primary w-6 h-6" />} label="Bathrooms" />
          <StatCard icon={<UsersRoundIcon className="text-primary w-6 h-6" />} label="Guest Capacity" />
          <StatCard icon={<MoveDiagonal className="text-primary w-6 h-6" />} label="Square Footage" />
          <StatCard icon={<MapPin className="text-primary w-6 h-6" />} label="Location"/>
          <StatCard icon={<BedDouble className="text-primary w-6 h-6" />} label="Bedrooms" />
          <StatCard icon={<BathIcon className="text-primary w-6 h-6" />} label="Bathrooms" />
          <StatCard icon={<UsersRoundIcon className="text-primary w-6 h-6" />} label="Guest Capacity" />
          <StatCard icon={<MoveDiagonal className="text-primary w-6 h-6" />} label="Square Footage" />
        </div>
      </div>

      {/* Building Amenities */}
      <div className="bg-primary-foreground border border-primary rounded-2xl p-8">
        <h2 className="text-primary text-[20px] font-normal mb-6 tracking-wide">
          Building Amenities
        </h2>

        <div className="flex flex-wrap gap-3">
          <StatCard icon={<BedDouble className="text-primary w-6 h-6" />} label="Bedrooms" />
          <StatCard icon={<BathIcon className="text-primary w-6 h-6" />} label="Bathrooms"/>
          <StatCard icon={<UsersRoundIcon className="text-primary w-6 h-6" />} label="Guest Capacity"/>
          <StatCard icon={<MoveDiagonal className="text-primary w-6 h-6" />} label="Square Footage" />
          <StatCard icon={<MapPin className="text-primary w-6 h-6" />} label="Location"/>
          <StatCard icon={<MoveDiagonal className="text-primary w-6 h-6" />} label="Square Footage" />
          <StatCard icon={<MapPin className="text-primary w-6 h-6" />} label="Location"/>
        </div>
      </div>

      
    </div>
  );
};

export default PropertyInfo;
