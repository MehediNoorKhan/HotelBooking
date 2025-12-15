import { useState } from "react";
import DashboardLayout from "@/_Components/Dashboard/DashboardLayout";
import MaintenanceCard from "@/_Components/Dashboard/MaintenanceCard";

import { ScrollArea } from "@/components/ui/scroll-area";
import { sampleData } from "@/data/Maintenance";
import { PlusIcon } from "lucide-react";
import MaintenanceForm from "@/_Components/Dashboard/MaintenanceForm";

const Maintenance = () => {
  const [showForm, setShowForm] = useState(false);
  const [requests, setRequests] = useState(sampleData);

  const handleNewRequest = () => {
    setShowForm(true);
  };

  const handleSubmitForm = (data: any) => {
    // Add new request to the list
    setRequests((prev) => [
      {
        title: data.title || data.category,
        location: data.location || "",
        submittedDate: new Date().toISOString(),
        status: "pending",
        bookingId: `#b${Math.floor(Math.random() * 1000000)}`,
        ...data,
      },
      ...prev,
    ]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <DashboardLayout>
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
              onClick={handleNewRequest}
              className="inline-flex items-center gap-2 bg-primary text-background hover:bg-primary/90 px-4 py-2 rounded-lg font-medium"
            >
              <PlusIcon /> New Request
            </button>
          </div>

          {/* Conditional Form */}
          {showForm && (
            <div className="mb-6 w-full">
              <MaintenanceForm
                bookings={requests.map((r) => ({ id: r.bookingId, name: r.title }))}
                categories={["Plumbing", "Electrical", "Appliances", "Other"]}
                onSubmit={handleSubmitForm}
                onCancel={handleCancel}
              />
            </div>
          )}

          {/* Maintenance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requests.map((item) => (
              <MaintenanceCard key={item.bookingId} data={item} />
            ))}
          </div>
        </div>
      </ScrollArea>
    </DashboardLayout>
  );
};

export default Maintenance;
