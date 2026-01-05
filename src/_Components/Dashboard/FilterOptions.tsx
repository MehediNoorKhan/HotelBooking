import type { FilterProps, InquiryStatus } from "@/types";

const FILTER_OPTIONS: { label: string; value: InquiryStatus }[] = [
  { label: "All Inquiries", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Approved", value: "approved" },
  { label: "Completed", value: "completed" },
];

export default function InquiryFilter({ value, onChange }: FilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {FILTER_OPTIONS.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`
            px-4 py-2 rounded-[10px] text-sm font-normal transition-colors duration-200 text-muted
            ${
              value === option.value
                ? "bg-primary text-foreground"
                : "bg-accent/50  hover:bg-primary/30 hover:text-foreground"
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
