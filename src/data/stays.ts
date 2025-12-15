import type { Stay } from "@/types";

export const upcomingStay: Stay = {
  id: "1",
  title: "The Gramercy Penthouse",
  image:
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
  address: "45 Gramercy Park North",
  dateRange: "Feb 15 — Mar 15, 2024",
  nights: 33,
  monthlyPrice: "$18,250",
  totalPrice: "$19,500",
  status: "approved",
};

export const recentInquiries: Stay[] = [
  upcomingStay,
  {
    ...upcomingStay,
    id: "2",
    status: "pending",
  },
];
