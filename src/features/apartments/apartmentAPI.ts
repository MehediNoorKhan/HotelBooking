import { rtkApi } from "@/services/rtkApi";
import type { Apartment, singleApartment } from "./type";

export const apartmentsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllApartments: builder.query<Apartment[], void>({
      query: () => "/apartments/list",
      transformResponse: (response: any) => response.data,
      providesTags: ["Apartments"],
    }),

    //  Get single apartment details
    getApartmentDetails: builder.query<singleApartment, string>({
      query: (id) => `/apartment/details/${id}`,
      transformResponse: (response: any) => response.data,
      providesTags: (_result, _error, id) => [{ type: "Apartments", id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllApartmentsQuery,
  useGetApartmentDetailsQuery,
} = apartmentsApi;
