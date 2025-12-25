import { rtkApi } from "./rtkApi";

export const apartmentShareApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getApartmentShare: builder.query<
      {
        data: {
          share_url: string;
        };
      },
      number | string
    >({
      query: (apartmentId) => `/apartment/share/${apartmentId}`,
    }),
  }),
});

export const { useLazyGetApartmentShareQuery } = apartmentShareApi;
