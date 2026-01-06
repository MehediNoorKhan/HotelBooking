import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="p-6 space-y-10">
      {/* ================= HEADER ================= */}
      <div className="space-y-3">
        <Skeleton className="h-5 w-32" /> {/* Welcome back */}
        <Skeleton className="h-8 w-64" /> {/* User name */}
        <Skeleton className="h-4 w-80" /> {/* Subtitle */}
      </div>

      {/* ================= STATS CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="border border-border/40 rounded-2xl p-6 space-y-4"
          >
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-10 rounded-lg" />
            </div>

            <Skeleton className="h-10 w-12" />
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </div>

      {/* ================= UPCOMING BOOKINGS ================= */}
      <div className="space-y-6">
        {/* Section title */}
        <Skeleton className="h-7 w-56" />

        {/* Booking cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="border border-border/40 rounded-2xl p-4 flex gap-4"
            >
              {/* Image */}
              <Skeleton className="h-32 w-40 rounded-xl shrink-0" />

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-5 w-20 rounded-full" />
                </div>

                <Skeleton className="h-4 w-56" />
                <Skeleton className="h-4 w-64" />

                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
