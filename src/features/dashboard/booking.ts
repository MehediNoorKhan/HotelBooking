import { rtkApi } from "@/services/rtkApi";
import type { BookingResponse, InquiryStatus } from "@/types";

export const userBookingApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserBookingData: builder.query<BookingResponse, InquiryStatus>({
      query: (status) => ({
        url: `/my/bookings/${status}`,
      }),
      providesTags: ["Dashboard"],
      keepUnusedDataFor: 30,
    }),
  }),
});

export const { useGetUserBookingDataQuery } = userBookingApi;
