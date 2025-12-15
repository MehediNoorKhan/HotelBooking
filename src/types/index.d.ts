import { LucideIcon } from "lucide-react";

export interface Properties {
    id: number;
    title: string;
    location: string;
    bedroom: number;
    bathroom: number;
    price: number;
    facilities: string[];
    image: string;
}

export type StayStatus = "approved" | "pending" | "rejected";

export interface Stay {
  id: string;
  title: string;
  image: string;
  address: string;
  dateRange: string;
  nights: number;
  monthlyPrice: string;
  totalPrice: string;
  status: StayStatus;
}


export interface StatsCardData {
  label: string;
  value: number | string;
  helperText: string;
  icon: LucideIcon;
}


export type InquiryStatus = "all" | "pending" | "approved" | "completed" | "unavailable";

export interface FilterProps {
  value: InquiryStatus;
  onChange: (status: InquiryStatus) => void;
}


export type Inquiry = "resolved" | "in-progress" | "pending";

export interface SampleDataItem {
  title: string;
  location: string;
  bookingId: string;
  description: string;
  submittedDate: string;
  resolvedDate?: string; // optional because not all have it
  status: Inquiry;
}
