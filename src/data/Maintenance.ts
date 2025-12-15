import type { SampleDataItem } from "@/types";

export const sampleData: SampleDataItem[] = [
  {
    title: "Home Appliances",
    location: "Central Park View Suite",
    bookingId: "#b265416",
    description: "Thermostat display showing error code. Unable to adjust temperature.",
    submittedDate: "Jan 6, 2024",
    resolvedDate: "Jan 7, 2024",
    status: "resolved"
  },
  {
    title: "Plumbing Issue",
    location: "Downtown Loft",
    bookingId: "#b265417",
    description: "Kitchen sink faucet is leaking continuously. Needs immediate attention.",
    submittedDate: "Jan 8, 2024",
    status: "in-progress"
  },
  {
    title: "Electrical Problem",
    location: "Beachside Villa",
    bookingId: "#b265418",
    description: "Living room lights flickering intermittently. Main bedroom outlet not working.",
    submittedDate: "Jan 9, 2024",
    status: "pending"
  }
];
