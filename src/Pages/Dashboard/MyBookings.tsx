import InquiryFilter from "@/_Components/Dashboard/FilterOptions";
import StayCard from "@/_Components/Dashboard/StayCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { InquiryStatus, Booking } from "@/types";
import { useState } from "react";
import { mapBookingToStay } from "@/lib/mapBookingToStay";
import { useGetUserBookingDataQuery } from "@/features/dashboard/booking";

const MyBooking = () => {
  const [filter, setFilter] = useState<InquiryStatus>("all");

  const {
    data,
    isLoading,
    isError,
  } = useGetUserBookingDataQuery(filter);

  const bookings: Booking[] = data?.data ?? [];

  return (
    <ScrollArea className="flex-1">
      <div className="max-h-screen bg-foreground text-muted">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[34px] font-semibold">My Bookings</h1>
          <p className="text-muted/50">
            View and track all your inquiries and confirmed stays
          </p>
        </div>

        {/* Filter */}
        <InquiryFilter value={filter} onChange={setFilter} />

        {/* Cards */}
        {isLoading && <p>Loading bookings...</p>}
        {isError && <p>Failed to load bookings.</p>}
        {!isLoading && !isError && bookings.length === 0 && (
          <p>No bookings found.</p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <StayCard
              key={booking.booking_id}
              stay={mapBookingToStay(booking)}
              variant="small"
            />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default MyBooking;
