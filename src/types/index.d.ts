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

export type StayStatus = "approved" | "pending" | "rejected"|"cancelled"|"completed";

export interface Stay {
  id: number;
  title: string;
  image: string;
  address: string;
  invoice: string;
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
export interface BookingResponse {
  status: boolean;
  message: string;
  data: Booking[];
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


interface BookingFormProps {
  apartmentId: number;
  monthlyPrice: number;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  fullName: string;
  email: string;
  phone: string;
  message?: string;
}

export interface ApartmentSearchPayload {
  location?: string;
  check_in_date?: string;
  check_out_date?: string;
  min_price?: number;
  max_price?: number;
  price_type?: "daily" | "weekly" | "monthly";
}

export interface MaintenanceApiItem {
  booking_invoice: string;
  apartment_title: string;
  booking_id: number;
  amenity_category_id: string;
  description: string;
  status: "pending" | "resolved" | "in-progress";
  submitted_at: string;
  resolved_at: string | null;
}

// API response
export interface MaintenanceApiResponse {
  status: boolean;
  message: string;
  data: MaintenanceApiItem[];
}

export interface MaintenanceUIItem {
  title: string;
  location: string;
  bookingId: string;
  description: string;
  submittedDate: string;
  resolvedDate?: string;
  status: "pending" | "resolved" | "in-progress";
}


// Maintance
export interface InvoiceApiItem {
  booking_invoice: string;
  booking_id: number;
}

export interface InvoiceApiResponse {
  status: boolean;
  message: string;
  data: InvoiceApiItem[];
}

export interface AmenityCategoryApiItem {
  category_id: number;
  category_name: string;
}

export interface AmenityCategoryApiResponse {
  status: boolean;
  message: string;
  data: AmenityCategoryApiItem[];
}

// POST payload
export interface CreateMaintenancePayload {
  invoice_number: string;
  amenity_category_id: number;
  description: string;
}



// Common data types
export interface PrivacyPolicyData {
  id: number;
  slug: string;
  title: string;
  content: string; // HTML content
  status: number;
  created_at: string;
  updated_at: string;
}

export interface PrivacyPolicyResponse {
  status: boolean;
  message: string;
  data: {
    privacy: PrivacyPolicyData;
  };
}


interface TermConditionData {
  id: number;
  slug: string;
  title: string;
  content: string;
  status: number;
  created_at: string;
  updated_at: string;
}

interface TermConditionResponse {
  status: boolean;
  message: string;
  data: {
    term_condition: TermConditionData;
  };
}


interface AboutUsData {
  id: number;
  slug: string;
  title: string;
  content: string;
  status: number;
  created_at: string;
  updated_at: string;
}

interface AboutUsResponse {
  status: boolean;
  message: string;
  data: {
    aboutUs: AboutUsData;
  };
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
}

export interface FAQResponse {
  status: boolean;
  message: string;
  data: FAQ[];
}