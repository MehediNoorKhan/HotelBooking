import StayCard from "@/_Components/Dashboard/StayCard";
import StatsCard from "@/_Components/Dashboard/StatsCard";
import { useGetDashboardDataQuery } from "@/features/dashboard/mainDashboard";
import type { Booking, StatsCardData } from "@/types";
import { FileText, Clock, Calendar } from "lucide-react";
import { mapBookingToStay } from "@/lib/mapBookingToStay";
import { useGetUserProfileQuery } from "@/features/user/userAPI";
import DashboardSkeleton from "@/_Components/Shared_Component/DashboardSkeleton";

const DashboardHome = () => {

  
  // Fetch dashboard data
  const { data, isLoading, error } = useGetDashboardDataQuery();
  const { data:Profiledata, } = useGetUserProfileQuery();

  // Handle loading state
// SHOW SKELETON WHILE LOADING
  if (isLoading) {
    return <DashboardSkeleton />;
  }  
  if (error) return <p>Error...</p>;
  if (!data?.message) return <p>Invalid data</p>;

  // Extract data safely
  const stats = data.message.stats;
  const upcomingBookings: Booking[] = data.message.upcoming_bookings ?? [];
  const recentBookings: Booking[] = data.message.recent_bookings || [];

  // Map API stats to include icons
  const statsCards: StatsCardData[] = [
    {
      label: "Total Inquiries",
      value: stats.total_inquiries,
      helperText: "All time",
      icon: FileText,
    },
    {
      label: "Pending Inquiries",
      value: stats.pending_inquiries,
      helperText: "Awaiting review",
      icon: Clock,
    },
    {
      label: "Confirmed Stays",
      value: stats.confirmed_inquiries,
      helperText: "Upcoming",
      icon: Calendar,
    },
  ];




  return (
    // <DashboardLayout>
      <div className="max-h-screen bg-foreground text-muted p-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-primary text-base">Welcome back</p>
          <h1 className="text-[34px] font-semibold leading-[120%] text-muted">
           {Profiledata?.first_name} {Profiledata?.last_name}
          </h1>
          <p className="text-muted/50">
            Manage your luxury stays and inquiries in one place
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {statsCards.map((stat) => (
            <StatsCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Upcoming Bookings */}
        <div className="mb-7.5">
          <div className="mb-5">
            <h2 className="text-[34px] font-semibold leading-[120%] text-muted">
              Upcoming Bookings
            </h2>
            <div className="h-0.5 w-20 bg-primary mt-1"></div>
          </div>

          {upcomingBookings.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingBookings.map((booking) => (
                <StayCard key={booking.booking_id} stay={mapBookingToStay(booking)}
      variant="large" />
              ))}
            </div>
          ) : (
            <p className="text-muted/50">No upcoming bookings.</p>
          )}
        </div>

        {/* Recent Bookings */}
        <div>
          <div className="mb-5">
            <h2 className="text-[34px] font-semibold leading-[120%] text-muted">
              Recent Bookings
            </h2>
            <div className="h-0.5 w-20 bg-primary mt-1"></div>
          </div>

          {recentBookings.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recentBookings.map((booking) => (
                <StayCard key={booking.booking_id} stay={mapBookingToStay(booking)} variant="small" />
              ))}
            </div>
          ) : (
            <p className="text-muted/50">No recent bookings.</p>
          )}
        </div>
      </div>
    // </DashboardLayout>
  );
};

export default DashboardHome;
