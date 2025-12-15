
import DashboardLayout from "@/_Components/Dashboard/DashboardLayout";
import StayCard from "@/_Components/Dashboard/StayCard";
import { recentInquiries, upcomingStay } from "@/data/stays";
import { dashboardStats } from "@/data/Stats";
import StatsCard from "@/_Components/Dashboard/StatsCard";

const DashboardHome = () => {
  return (
    <DashboardLayout>
      <div className="max-h-screen bg-foreground text-muted">
        {/* Header */}
        <div className="mb-8">
          <p className="text-primary text-base">Welcome back</p>
          <h1 className="text-[34px] font-semibold leading-[120%] text-muted">
            Alexandra Whitmore
          </h1>
          <p className="text-muted/50">
            Manage your luxury stays and inquiries in one place
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {dashboardStats.map((stat) => (
            <StatsCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Upcoming Stay */}
        <div className="mb-7.5">
          <div className="mb-5">
            <h1 className="text-[34px] font-semibold leading-[120%] text-muted">
              Upcoming Stay
            </h1>
            <div className="h-0.5 w-20 bg-primary mt-1"></div>
          </div>
          <StayCard stay={upcomingStay} />
        </div>

        {/* Recent Inquiries */}
        <div>
          <div className="mb-5">
            <h1 className="text-[34px] font-semibold leading-[120%] text-muted">
              Recent Inquiries
            </h1>
            <div className="h-0.5 w-20 bg-primary mt-1"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recentInquiries.map((stay) => (
              <StayCard key={stay.id} stay={stay} variant="small" />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
