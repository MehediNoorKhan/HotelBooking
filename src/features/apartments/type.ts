
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
  images?: string[];
  amenities: {
    id: number;
    name: string;
    icon: string;
  }[];
  latitude: string;
  longitude: string;
}
export interface LApartment {
  id: number;
  name: string;
  love_id?: number;
  short_description: string;
  full_address: string;
  bedrooms: number;
  bathrooms: string;
  description: string;
  max_guests: number;
  square_feet: number;
  status: string;
  is_featured: boolean;
  price: {
    nightly: number;
    monthly: number;
  };
  images?: string[];
  amenities: {
    id: number;
    name: string;
    icon: string;
  }[];
  latitude: string;
  longitude: string;
}


export interface singleApartment {
  id: number;
  name: string;
  is_loved?: number;
  short_description: string;
  full_address: string;
  bedrooms: number;
  bathrooms: string;
  description: string;
  max_guests: number;
  square_feet: number;
  status: string;
  is_featured?: boolean;
  price: { nightly: number; monthly: number };
  images?: string[];
  amenities_by_category?: {
    [category: string]: {
      id: number;
      name: string;
      icon: string;
    }[];
  };
  latitude: string;
  longitude: string;
}

export interface ApartmentPrice {
  nightly: number;
  monthly: number;
}

export interface ApartmentAmenity {
  id: number;
  name: string;
  icon: string;
}
export interface LovedApartment {
  love_id: number;
  user_id: number;
  apartment_id: number;

  name: string;
  short_description: string;
  description: string;
  full_address: string;

  bedrooms: number;
  bathrooms: string;
  max_guests: number;
  square_feet: number;

  price: ApartmentPrice;
  status: "active" | "inactive";

  images: string[];
  amenities: ApartmentAmenity[];

  latitude: string;
  longitude: string;
}
export interface LovedApartmentsResponse {
  status: boolean;
  message: string;
  data: LovedApartment[];
}
