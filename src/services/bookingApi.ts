import { rtkApi } from "./rtkApi";

export const bookingApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation<
      { message: string }, // API success response type (adjust later)
      {
        check_in: string;
        check_out: string;
        full_name: string;
        email: string;
        phone: string;
        message?: string;
      }
    >({
      query: (body) => ({
        url: "/apartment/booking/store",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;
