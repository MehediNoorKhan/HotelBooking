import type { StatsCardData } from "@/types";

interface StatsCardProps extends StatsCardData {}

export default function StatsCard({
  label,
  value,
  helperText,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div className="bg-accent-foreground border border-border/70 rounded-2xl p-6 flex justify-between items-start">
      <div>
        <p className="text-muted/50 mb-1 font-medium text-xl">{label}</p>
        <p className="text-5xl font-bold mb-2 font-display">{value}</p>
        <p className="text-muted/60 text-base">{helperText}</p>
      </div>

      <div className="bg-gray-500 rounded-xl p-3">
        <Icon className="text-foreground" size={24} />
      </div>
    </div>
  );
}
