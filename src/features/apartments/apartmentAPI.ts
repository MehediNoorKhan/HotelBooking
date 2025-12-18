import { api } from "@/services/api";




import type { Apartment } from "./type";
export const getAllApartments = async (): Promise<Apartment[]> => {
  const res = await api.get("/apartments/list"); 
  return res.data.data; 
};

// Single Apartment Details
export const getApartmentDetails = (id: string) =>
  api.get(`/apartment/details/${id}`);