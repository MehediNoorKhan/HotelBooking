import type { StatsCardData } from "@/types";
import { FileText, Clock, Calendar, Wrench } from "lucide-react";

export const dashboardStats: StatsCardData[] = [
  {
    label: "Total Inquiries",
    value: 4,
    helperText: "All time",
    icon: FileText,
  },
  {
    label: "Pending",
    value: 1,
    helperText: "Awaiting review",
    icon: Clock,
  },
  {
    label: "Confirmed Stays",
    value: 4,
    helperText: "Upcoming",
    icon: Calendar,
  },
  {
    label: "Maintenance",
    value: 4,
    helperText: "Open requests",
    icon: Wrench,
  },
];
