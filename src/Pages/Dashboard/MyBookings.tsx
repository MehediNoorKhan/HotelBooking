import InquiryFilter from "@/_Components/Dashboard/FilterOptions";
// import StayCard from "@/_Components/Dashboard/StayCard";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { recentInquiries } from "@/data/stays";
import type { InquiryStatus } from "@/types";
import { useState } from "react";

const DashboardHome = () => {

    const [filter, setFilter] = useState<InquiryStatus>("all");

  return (
    <ScrollArea className="flex-1">
      <div className="max-h-screen bg-foreground text-muted">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[34px] font-semibold leading-[120%] text-muted">
            My Bookings
          </h1>
          <p className="text-muted/50">
            View and track all your inquiries and confirmed stays
          </p>
        </div>

        {/* Filter part */}
        <InquiryFilter value={filter} onChange={setFilter} />

        {/* Card */}
        <div>
          <div className="mb-5">
            <h1 className="text-[34px] font-semibold leading-[120%] text-muted">
              Recent Inquiries
            </h1>
            <div className="h-0.5 w-20 bg-primary mt-1"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* {recentInquiries.map((stay) => (
              <StayCard key={stay.id} stay={stay} variant="small" />
            ))} */}
          </div>
        </div>
      </div>
      </ScrollArea>
  );
};

export default DashboardHome;
