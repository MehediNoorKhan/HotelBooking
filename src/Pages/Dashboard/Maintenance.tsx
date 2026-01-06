import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusIcon } from "lucide-react";

import MaintenanceCard from "@/_Components/Dashboard/MaintenanceCard";
import MaintenanceForm from "@/_Components/Dashboard/MaintenanceForm";
import { useGetAllMaintenanceRequestsQuery } from "@/features/dashboard/maintance";
import DashboardSkeleton from "@/_Components/Shared_Component/DashboardSkeleton";

const Maintenance = () => {
  const [showForm, setShowForm] = useState(false);

  const { data: requests = [], isLoading } =
    useGetAllMaintenanceRequestsQuery();

 // SHOW SKELETON WHILE LOADING
  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <ScrollArea className="flex-1">
      <div className="bg-foreground text-muted p-6">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-[34px] font-semibold leading-[120%] text-muted">
              Maintenance
            </h1>
            <p className="text-muted/50">
              Report issues and track service requests for your stays
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-primary text-background hover:bg-primary/90 rounded-lg font-medium px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base"
          >
            <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>New Request</span>
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="mb-6 w-full">
            <MaintenanceForm onCancel={() => setShowForm(false)} />
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((item) => (
            <MaintenanceCard key={item.bookingId} data={item} />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default Maintenance;
