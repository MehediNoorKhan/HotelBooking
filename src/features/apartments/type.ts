
export interface Apartment {
  id: number;
  name: string;
  short_description: string;
  full_address: string;
  bedrooms: number;
  bathrooms: string;
  description: string;
  max_guests: number;
  square_feet: number;
  status: string;
  is_featured: boolean;
  pricing: {
    nightly: number;
    monthly: number;
  };
  images: string[];
  amenities: {
    id: number;
    name: string;
    icon: string;
  }[];
  latitude: string;
  longitude: string;
}