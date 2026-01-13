import type { Stay } from "@/types";
import { Calendar, Mail, MapPin } from "lucide-react";

interface StayCardProps {
  stay: Stay;
  variant?: "large" | "small";
}

const statusStyles: Record<Stay["status"], string> = {
  completed: "bg-teal-500/20 text-teal-400",
  approved: "bg-teal-500/20 text-teal-400",
  pending: "bg-yellow-500/20 text-yellow-400",
  rejected: "bg-red-500/20 text-red-400",
  cancelled: "bg-red-500/20 text-red-400",
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
        overflow-hidden
        p-4 sm:p-5 md:p-6
        flex flex-col gap-5
        lg:flex-row lg:items-start
        transition-all duration-200
      `}
    >
      {/* Image */}
      <div
        className={`
          shrink-0
          overflow-hidden rounded-xl
          ${isLarge ? "w-full lg:w-56" : "w-full lg:w-44"}
        `}
      >
        <img
          src={stay.image}
          alt={stay.title}
          className={`
            object-cover w-full 
            ${isLarge ? "h-56 lg:h-48" : "h-52 lg:h-44"}
            rounded-xl
          `}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex flex-col gap-3 flex-1">
          {/* Title + Status */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2.5">
            <h3
              className={`
                font-bold leading-tight
                ${isLarge ? "text-lg sm:text-xl" : "text-base sm:text-lg"}
              `}
            >
              {stay.title}
            </h3>

            <span
              className={`
                self-start px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap
                ${statusStyles[stay.status]}
              `}
            >
              {stay.status.charAt(0).toUpperCase() + stay.status.slice(1)}
            </span>
          </div>
                {/* Invoice */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Mail size={14} className="shrink-0" />
            <span className="font-medium">Invoice: {stay.invoice}</span>
                </div>
          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin size={14} className="shrink-0" />
            <span className="truncate">{stay.address}</span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar size={14} className="shrink-0" />
            <span className="truncate">
              {stay.dateRange} • {stay.nights} nights
            </span>
          </div>

          {/* Price */}
          <div className="mt-auto pt-2">
            <div className="text-sm text-muted-foreground">
              {stay.monthlyPrice} / month
            </div>
            <div
              className={`
                font-bold font-display tracking-tight
                ${isLarge ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}
              `}
            >
              {stay.totalPrice}
            </div>
          </div>
        </div>

        {/* Action area */}
        <div className="flex justify-end mt-4 lg:mt-0">
          {/* Buttons go here later if needed */}
        </div>
      </div>
    </div>
  );
}