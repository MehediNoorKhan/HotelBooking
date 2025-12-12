
import  { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar as CalendarIcon, Mail, Phone, UserRound } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Calendar } from "../../components/ui/calendar";

interface BookingFormProps {
  monthlyRate?: string;
  minimumStay?: string;
  onSubmit?: (data: BookingFormData) => void;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  fullName: string;
  email: string;
  phone: string;
  message?: string;
}

// Zod validation schema
const bookingSchema = z
  .object({
    checkIn: z.string().nonempty("Check-in date is required"),
    checkOut: z.string().nonempty("Check-out date is required"),
    fullName: z.string().nonempty("Full name is required"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email format"),
    phone: z.string().nonempty("Phone number is required"),
    message: z.string().optional().default(""),
  })
  .refine((data) => new Date(data.checkOut) > new Date(data.checkIn), {
    message: "Check-out must be after Check-in",
    path: ["checkOut"],
  });

const BookingForm: React.FC<BookingFormProps> = ({
  monthlyRate = "$12,500",
  minimumStay = "30 days",
  onSubmit,
}) => {
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  // Local state for Calendar popup
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();

  const submitHandler = (data: BookingFormData) => {
    if (onSubmit) onSubmit(data);
    else alert("Booking request submitted!");
  };

  return (
    <div
      className="
      flex-1 min-w-[320px] max-w-[500px] max-h-fit
      bg-primary-foreground border border-foreground 
      rounded-2xl p-8  top-10
    "
    >
      <h2 className="text-primary text-[20px] font-normal mb-6 tracking-wide">
        Request to Book
      </h2>

      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(submitHandler)}
      >
        {/* Check-in */}
        <div className="flex flex-col gap-2">
          <label className="text-[#888] text-[13px] flex gap-1.5 items-center">
            <CalendarIcon className="text-primary w-4 h-4" /> Check-in Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg 
                           p-[14px_16px] text-white text-[14px] text-left outline-none 
                           transition-colors focus:border-[#c9a961]"
              >
                {checkInDate
                  ? format(checkInDate, "yyyy-MM-dd")
                  : "Select date"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={(date: Date | undefined) => {
                  setCheckInDate(date);
                  setValue("checkIn", date ? format(date, "yyyy-MM-dd") : "");
                }}
              />
            </PopoverContent>
          </Popover>
          {errors.checkIn && (
            <p className="text-red-400 text-xs">{errors.checkIn.message}</p>
          )}
        </div>

        {/* Check-out */}
        <div className="flex flex-col gap-2">
          <label className="text-[#888] text-[13px] flex gap-1.5 items-center">
            <CalendarIcon className="text-primary w-4 h-4" /> Check-out Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg 
                           p-[14px_16px] text-white text-[14px] text-left outline-none 
                           transition-colors focus:border-[#c9a961]"
              >
                {checkOutDate
                  ? format(checkOutDate, "yyyy-MM-dd")
                  : "Select date"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={(date: Date | undefined) => {
                  setCheckOutDate(date || undefined);
                  setValue("checkOut", date ? format(date, "yyyy-MM-dd") : "");
                }}
              />
            </PopoverContent>
          </Popover>
          {errors.checkOut && (
            <p className="text-red-400 text-xs">{errors.checkOut.message}</p>
          )}
        </div>

        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-[#888] text-[13px] flex gap-1.5 items-center">
            <UserRound className="text-primary w-4 h-4" /> Full Name
          </label>
          <input
            type="text"
            placeholder="Name"
            {...register("fullName")}
            className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg 
                      p-[14px_16px] text-white text-[14px] outline-none 
                      transition-colors focus:border-[#c9a961]"
          />
          {errors.fullName && (
            <p className="text-red-400 text-xs">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-[#888] text-[13px] flex gap-1.5 items-center">
            <Mail className="text-primary w-4 h-4" /> Email Address
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            {...register("email")}
            className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg 
                      p-[14px_16px] text-white text-[14px] outline-none 
                      transition-colors focus:border-[#c9a961]"
          />
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-[#888] text-[13px] flex gap-1.5 items-center">
            <Phone className="text-primary w-4 h-4" /> Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 123-4567"
            {...register("phone")}
            className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg 
                      p-[14px_16px] text-white text-[14px] outline-none 
                      transition-colors focus:border-[#c9a961]"
          />
          {errors.phone && (
            <p className="text-red-400 text-xs">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-[#888] text-[13px]">Message (Optional)</label>
          <textarea
            {...register("message")}
            rows={4}
            className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg 
                      p-[14px_16px] text-white text-[14px] resize-y outline-none 
                      transition-colors focus:border-[#c9a961]"
            placeholder="Tell us about your stay requirements..."
          />
        </div>

        {/* Pricing Info */}
        <div className="p-4 ">
          <div className="flex justify-between mb-2">
            <span className="text-[#888] text-[14px]">Monthly Rate</span>
            <span className="text-primary text-[18px] font-normal">
              {monthlyRate}
            </span>
          </div>
          <div className="text-[#666] text-[12px]">
            Minimum stay: {minimumStay}
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="
            bg-foreground border border-border/30 text-muted 
            rounded-lg py-4 text-[16px] font-medium mt-2
            hover:bg-primary hover:border-primary transition
          "
        >
          Booking
        </button>

        {/* Disclaimer */}
        <div className="text-[#888] text-[12px] text-center leading-normal">
          You won't be charged yet. Our team will contact you within 24 hours.
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
