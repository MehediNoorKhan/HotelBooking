import { rtkApi } from "@/services/rtkApi";


export const bookingApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation<any, CreateBookingPayload>({
      query: (body) => ({
        url: "/apartment/booking/store",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;




export interface CreateBookingPayload {
  apartment_id: number;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  check_in_date: string;
  check_out_date: string;
  base_price: number;
  tax: number;
  total_price: number;
  messege?: string;
}