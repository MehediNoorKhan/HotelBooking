import { rtkApi } from "@/services/rtkApi";
import type { Apartment } from "@/features/apartments/type";

export const featuredApartmentsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getFeaturedApartments: builder.query<Apartment[], void>({
      query: () => "/featured/apartments",
      transformResponse: (response: any) => response.data, // extract the array
      providesTags: ["FeaturedApartments"], // use base API tag
    }),
  }),
  overrideExisting: false,
});





export const { useGetFeaturedApartmentsQuery } = featuredApartmentsApi;
