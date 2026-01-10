// utils/mapLovedApartment.ts
import type { LApartment } from "@/features/apartments/type";
import type { LovedApartment } from "@/features/apartments/type";

export const mapLovedToApartment = (
  loved: LovedApartment
): LApartment => ({
  id: loved.apartment_id,
  name: loved.name,
  short_description: loved.short_description,
  description: loved.description,
  full_address: loved.full_address,

  bedrooms: loved.bedrooms,
  bathrooms: loved.bathrooms,
  max_guests: loved.max_guests,
  square_feet: loved.square_feet,

  price: loved.price, // ✅ guaranteed now
  status: loved.status,

  images: loved.images,
  amenities: loved.amenities,

  latitude: loved.latitude,
  longitude: loved.longitude,

  // optional / defaults
  love_id: loved.love_id,
  is_featured: false,
});
