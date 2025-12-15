import type { Stay } from "@/types";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

interface StayCardProps {
  stay: Stay;
  variant?: "large" | "small";
}

const statusStyles: Record<Stay["status"], string> = {
  approved: "bg-teal-500/20 text-teal-400",
  pending: "bg-yellow-500/20 text-yellow-400",
  rejected: "bg-red-500/20 text-red-400",
};

export default function StayCard({
  stay,
  variant = "large",
}: StayCardProps) {
  const isLarge = variant === "large";

  return (
    <div
      className={`bg-accent-foreground border border-border/50 rounded-2xl p-6 flex gap-6 ${
        isLarge ? "" : "gap-4"
      }`}
    >
      <img
        src={stay.image}
        alt={stay.title}
        className={`object-cover rounded-xl ${
          isLarge ? "w-48 h-48" : "w-32 h-32"
        }`}
      />

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className={isLarge ? "text-xl font-bold" : "text-lg font-bold"}>
              {stay.title}
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-xs ${statusStyles[stay.status]}`}
            >
              {stay.status}
            </span>
          </div>

          <div className="flex items-center gap-2 text-muted/50 text-sm mb-2">
            <MapPin size={isLarge ? 16 : 14} />
            <span>{stay.address}</span>
          </div>

          <div className="flex items-center gap-2 text-muted/50 text-sm mb-3">
            <Calendar size={isLarge ? 16 : 14} />
            <span>
              {stay.dateRange} • {stay.nights} nights
            </span>
          </div>

          <div className="text-muted/50 text-sm mb-1">
            {stay.monthlyPrice} / month
          </div>
          <div className={isLarge ? "text-2xl font-bold font-display" : "text-xl font-bold font-display"}>
            {stay.totalPrice}
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <button className="text-primary hover:text-muted/50 flex items-center gap-2 text-sm">
            View Details <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
