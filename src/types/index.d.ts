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
  id: number;
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
  resolvedDate?: string; // optional 
  status: Inquiry;
}

export interface UserProfile {
  id: number;
  first_name: string;
  last_name: string;
  image: string | null;
  email: string;
  phone: string;
  address: string | null;
  emaergency_contact_name: string | null;
  emaergency_contact_number: string | null;
}

// src/types/userTypes.ts

export interface ProfileData {
  first_name: string;
  last_name: string;
  email: string; // not sent in update
  phone: string;
  address: string;
  emaergency_contact_name: string;
  emaergency_contact_number: string;
  profile_image: string | ArrayBuffer | null;
}

export interface PasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
export type BookingStatus = "approved" | "pending" | "rejected";
export interface Booking {
  image: string;
  title: string;
  address: string;
  check_in_date: string;
  check_out_date: string;
  nights: number;
  booking_invoice: string;
  price_per_month: string;
  total_price: string;
  status: BookingStatus;
  guest_name: string;
  booking_id: number;
}

export interface Stats {
  total_inquiries: number;
  pending_inquiries: number;
  confirmed_inquiries: number;
}

export interface DashboardMessage {
  stats: Stats;
  upcoming_bookings: Booking[];
  recent_bookings: Booking[];
}

export interface DashboardResponse {
  status: boolean;
  message: DashboardMessage;
  data: string;
}
