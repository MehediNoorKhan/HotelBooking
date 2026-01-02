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
      className={`
        bg-accent-foreground
        border border-border/50
        rounded-2xl
        p-4 sm:p-6
        flex flex-col sm:flex-row
        gap-4 sm:gap-6
      `}
    >
      {/* Image */}
      <img
        src={stay.image}
        alt={stay.title}
        className={`
          object-cover
          rounded-xl
          w-full
          h-48
          sm:h-auto
          ${
            isLarge
              ? "sm:w-48 sm:h-48"
              : "sm:w-32 sm:h-32"
          }
        `}
      />

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Title + Status */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
            <h3
              className={
                isLarge
                  ? "text-lg sm:text-xl font-bold"
                  : "text-base sm:text-lg font-bold"
              }
            >
              {stay.title}
            </h3>

            <span
              className={`self-start px-3 py-1 rounded-full text-xs ${statusStyles[stay.status]}`}
            >
              {stay.status}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted/60 text-sm mb-2">
            <MapPin size={14} className="sm:hidden" />
            <MapPin size={16} className="hidden sm:block" />
            <span>{stay.address}</span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-muted/60 text-sm mb-3">
            <Calendar size={14} className="sm:hidden" />
            <Calendar size={16} className="hidden sm:block" />
            <span>
              {stay.dateRange} • {stay.nights} nights
            </span>
          </div>

          {/* Price */}
          <div className="text-muted/60 text-sm mb-1">
            {stay.monthlyPrice} / month
          </div>
          <div
            className={
              isLarge
                ? "text-xl sm:text-2xl font-bold font-display"
                : "text-lg sm:text-xl font-bold font-display"
            }
          >
            {stay.totalPrice}
          </div>
        </div>

        {/* Action */}
        <div className="flex justify-end mt-4">
          <button className="text-primary hover:text-muted/50 flex items-center gap-2 text-sm">
            View Details <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
