import type { StatsCardData } from "@/types";

interface StatsCardProps extends StatsCardData {}

export default function StatsCard({
  label,
  value,
  helperText,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div className="bg-black border border-gray-800 rounded-2xl p-6 flex justify-between items-start">
      <div>
        <p className="text-gray-400 text-sm mb-2">{label}</p>
        <p className="text-5xl font-bold mb-1">{value}</p>
        <p className="text-gray-500 text-sm">{helperText}</p>
      </div>

      <div className="bg-gray-800 rounded-xl p-3">
        <Icon className="text-gray-300" size={24} />
      </div>
    </div>
  );
}
