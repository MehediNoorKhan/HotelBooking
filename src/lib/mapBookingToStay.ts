import type { Booking, Stay } from "@/types";

export function mapBookingToStay(booking: Booking): Stay {
  return {
    id: booking.booking_id,
    title: booking.title,
    image: booking.image,
    address: booking.address,
    invoice: booking.booking_invoice,
    status: booking.status,
    nights: booking.nights,
    dateRange: `${booking.check_in_date} - ${booking.check_out_date}`,
    monthlyPrice: booking.price_per_month,
    totalPrice: booking.total_price,
  };
}
