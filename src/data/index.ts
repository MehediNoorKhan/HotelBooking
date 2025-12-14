import type { FAQSection } from "@/_Components/FAQ/FaqSection";

export const faqSections: FAQSection[] = [
    {
      title: "Booking & Reservations",
      faqs: [
        {
          question: "How do I book an apartment?",
          answer: "Booking is simple! Browse our listings, select your desired dates, and complete the checkout process. You'll receive instant confirmation via email with all the details you need for your stay."
        },
        {
          question: "Can I modify or cancel my reservation?",
          answer: "Yes, you can modify or cancel your reservation through your account dashboard. Cancellation policies vary by property, so please review the specific terms when booking. Most properties offer free cancellation up to 48 hours before check-in."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, and bank transfers. Payment is processed securely through our encrypted payment gateway."
        },
        {
          question: "Is there a minimum stay requirement?",
          answer: "Minimum stay requirements vary by property and season. Most apartments have a 2-night minimum, but some may require longer stays during peak seasons or holidays. Check the property details for specific requirements."
        }
      ]
    },
    {
      title: "Property Information",
      faqs: [
        {
          question: "Are pets allowed in the apartments?",
          answer: "Pet policies vary by property. Some apartments are pet-friendly while others are not. You can filter for pet-friendly properties using our search filters, and specific pet policies will be listed in each property's details."
        },
        {
          question: "What amenities are included?",
          answer: "Amenities vary by property but commonly include WiFi, fully equipped kitchens, linens and towels, heating/AC, and basic toiletries. Each listing provides a detailed amenities list so you know exactly what to expect."
        }
      ]
    }
  ];