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
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({
  monthlyRate = "$12,500",
  bedrooms = "03",
  bathrooms = "2.5",
  guestCapacity = "$12,500",
  squareFootage = "2400 sq ft",
  location = "Tribeca, NY",
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
            Step into a world of refined elegance at The Tribeca Grand Penthouse, where contemporary luxury meets timeless sophistication. This meticulously curated three-bedroom residence offers an unparalleled living experience in one of Manhattan's most coveted neighborhoods.
          </p>

          <p className="mb-4 text-[14px]">
            Floor-to-ceiling windows frame breathtaking views of the Hudson River and the iconic New York skyline, flooding the expansive 2,400 square foot space with natural light. The open-concept living area features museum-quality finishes, custom millwork, and designer furnishings carefully selected to create an atmosphere of understated luxury.
          </p>

          <p className="mb-4 text-[14px]">
            The chef's kitchen is a masterpiece of Italian craftsmanship, showcasing Carrara marble countertops, custom cabinetry, and top-of-the-line Miele appliances. Whether preparing an intimate dinner or entertaining guests, this space seamlessly blends form and function.
          </p>

          <p className="mb-4 text-[14px]">
            The master suite serves as a private sanctuary, complete with a spa-inspired bathroom featuring heated marble floors, a soaking tub, and a rain shower. Two additional bedrooms offer generous proportions and elegant en-suite bathrooms, ensuring comfort and privacy for family or guests.
          </p>

          <p className="mb-4 text-[14px]">
            Your exclusive private terrace extends the living space outdoors, providing a serene retreat above the city with panoramic views and sophisticated outdoor furnishings—perfect for morning coffee or evening cocktails while watching the sunset over the Hudson.
          </p>

          <p className="mb-4 text-[14px]">
            Every detail has been thoughtfully considered to provide a seamless luxury living experience, from the integrated smart home technology to the curated art pieces adorning the walls. This is more than an apartment—it's a lifestyle statement in the heart of Tribeca.
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
          Apartment Amenities
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
