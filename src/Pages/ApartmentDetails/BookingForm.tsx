import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar as CalendarIcon, Mail, Phone, UserRound } from "lucide-react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { Calendar } from "../../components/ui/calendar";
import { RippleButton, RippleButtonRipples } from "../../components/animate-ui/components/buttons/ripple";
import { toast } from "sonner";

import { useCreateBookingMutation } from "@/features/bookingApartment/bookingApi";
import { useGetApartmentCalendarQuery } from "@/features/apartments/apartmentAPI";
import type { BookingFormData, BookingFormProps } from "@/types";
import { data } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { useNavigate, useLocation } from "react-router-dom";

const BookingForm: React.FC<BookingFormProps> = ({ apartmentId, monthlyPrice }) => {
  const { data: calendarData } = useGetApartmentCalendarQuery(apartmentId);
  console.log(data);
  const calendar = calendarData || { unavailable_dates: [], minimum_stay: 30 };
  const MIN_STAY_DAYS = calendarData?.minimum_stay || 30;
  const [checkInPopoverOpen, setCheckInPopoverOpen] = useState(false);
  const [checkOutPopoverOpen, setCheckOutPopoverOpen] = useState(false);
  


  // Convert unavailable dates to a Set for fast lookup
const unavailableDates = useMemo(() => new Set(calendar.unavailable_dates), [calendar]);
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(
      z.object({
        checkIn: z.string().nonempty("Check-in date is required"),
        checkOut: z.string().nonempty("Check-out date is required"),
        fullName: z.string().nonempty("Full name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().nonempty("Phone number is required"),
        message: z.string().optional(),
      })
      .refine(d => new Date(d.checkOut) > new Date(d.checkIn), {
        path: ["checkOut"],
        message: "Check-out must be after check-in",
      })
      .refine(d => {
        const start = new Date(d.checkIn);
        const end = new Date(d.checkOut);
        const diffDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
        return diffDays >= MIN_STAY_DAYS;
      }, {
        path: ["checkOut"],
        message: `Minimum stay is ${MIN_STAY_DAYS} days`,
      })
    ),
  });

  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [createBooking, { isLoading }] = useCreateBookingMutation();
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.user);
  const navigate = useNavigate();
const location = useLocation();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Reset checkout if it becomes invalid
  useEffect(() => {
    if (checkInDate && checkOutDate && checkOutDate <= checkInDate) {
      setCheckOutDate(undefined);
      setValue("checkOut", "");
    }
  }, [checkInDate, checkOutDate, setValue]);

  const submitHandler = async (data: BookingFormData) => {
    // stop booking until logged in
     if (!isAuthenticated) {
    navigate("/signin", { state: { from: location.pathname } });
    return; 
  }
    const start = new Date(data.checkIn);
    const end = new Date(data.checkOut);

    const months = Math.max(
      1,
      (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    );
    const base_price = months * monthlyPrice;
    const tax = base_price * 0.1;
    const total_price = base_price + tax;

    try {
      await createBooking({
        apartment_id: apartmentId,
        guest_name: data.fullName,
        guest_email: data.email,
        guest_phone: data.phone,
        check_in_date: data.checkIn,
        check_out_date: data.checkOut,
        base_price,
        tax,
        total_price,
        messege: data.message,
      }).unwrap();

      toast.success("Booking request submitted! Our team will contact you within 24 hours.");
      reset();
      setCheckInDate(undefined);
      setCheckOutDate(undefined);
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  // Check if a date is unavailable for selection
  const isDateUnavailable = (date: Date) => {
    const formatted = format(date, "yyyy-MM-dd");
    return unavailableDates.has(formatted) || date < today;
  };

  // Additional check for check-out: min stay + unavailable dates
  const isCheckOutDateUnavailable = (date: Date) => {
    if (!checkInDate) return true;
    const minCheckout = new Date(checkInDate);
    minCheckout.setDate(minCheckout.getDate() + MIN_STAY_DAYS);
    return date < minCheckout || isDateUnavailable(date);
  };

  return (
    <div className="flex-1 min-w-[320px] max-w-[500px] max-h-fit bg-primary-foreground border border-primary rounded-2xl p-8 top-10">
      <h2 className="text-primary text-[20px] font-normal mb-6 tracking-wide">Request to Book</h2>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(submitHandler)}>
        {/* Check-in */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-[13px] flex gap-1.5 items-center">
            <CalendarIcon className="text-primary w-4 h-4" /> Check-in Date
          </label>
          <Popover open={checkInPopoverOpen} onOpenChange={setCheckInPopoverOpen}>
  <PopoverTrigger asChild>
    <button
      type="button"
      className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-[14px_16px] text-muted text-[14px] text-left outline-none transition-colors focus:border-[#c9a961]"
      onClick={() => setCheckInPopoverOpen(true)}
    >
      {checkInDate ? format(checkInDate, "yyyy-MM-dd") : "Select date"}
    </button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <Calendar
      mode="single"
      selected={checkInDate}
      disabled={isDateUnavailable}
      onSelect={(date) => {
        setCheckInDate(date);
        setValue("checkIn", date ? format(date, "yyyy-MM-dd") : "");
        setCheckInPopoverOpen(false); // ✅ close on select
      }}
    />
  </PopoverContent>
</Popover>

          {errors.checkIn && <p className="text-red-400 text-xs">{errors.checkIn.message}</p>}
        </div>

        {/* Check-out */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-[13px] flex gap-1.5 items-center">
            <CalendarIcon className="text-primary w-4 h-4" /> Check-out Date
          </label>
          <Popover open={checkOutPopoverOpen} onOpenChange={setCheckOutPopoverOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-[14px_16px] text-white text-[14px] text-left outline-none transition-colors focus:border-[#c9a961]"
              >
                {checkOutDate ? format(checkOutDate, "yyyy-MM-dd") : "Select date"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkOutDate}
                disabled={isCheckOutDateUnavailable}
                onSelect={(date) => {
                  setCheckOutDate(date || undefined);
                  setValue("checkOut", date ? format(date, "yyyy-MM-dd") : "");
                   setCheckOutPopoverOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
          {errors.checkOut && <p className="text-red-400 text-xs">{errors.checkOut.message}</p>}
        </div>

        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-[13px] flex gap-1.5 items-center">
            <UserRound className="text-primary w-4 h-4" /> Full Name
          </label>
          <input
            type="text"
            placeholder="Name"
            {...register("fullName")}
            className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-[14px_16px] text-white text-[14px] outline-none transition-colors focus:border-[#c9a961]"
          />
          {errors.fullName && <p className="text-red-400 text-xs">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-[13px] flex gap-1.5 items-center">
            <Mail className="text-primary w-4 h-4" /> Email Address
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            {...register("email")}
            className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-[14px_16px] text-white text-[14px] outline-none transition-colors focus:border-[#c9a961]"
          />
          {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-[13px] flex gap-1.5 items-center">
            <Phone className="text-primary w-4 h-4" /> Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 123-4567"
            {...register("phone")}
            className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-[14px_16px] text-white text-[14px] outline-none transition-colors focus:border-[#c9a961]"
          />
          {errors.phone && <p className="text-red-400 text-xs">{errors.phone.message}</p>}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-muted text-[13px]">Message (Optional)</label>
          <textarea
            {...register("message")}
            rows={4}
            className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-[14px_16px] text-white text-[14px] resize-y outline-none transition-colors focus:border-[#c9a961]"
            placeholder="Tell us about your stay requirements..."
          />
        </div>

        {/* Pricing Info */}
        <div className="p-4">
          <div className="flex justify-between mb-2">
            <span className="text-muted text-[14px]">Monthly Rate</span>
            <span className="text-primary text-[18px] font-normal">${monthlyPrice}</span>
          </div>
          <div className="text-muted text-[12px]">Minimum stay: {MIN_STAY_DAYS} Days</div>
        </div>

        {/* Submit button */}
        <RippleButton
          type="submit"
          disabled={isLoading}
          className="h-14 bg-foreground border border-border/30 text-muted rounded-lg py-4 text-[16px] font-medium mt-2 hover:bg-primary hover:border-primary transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Booking..." : "Booking"}
          <RippleButtonRipples />
        </RippleButton>

        {/* Disclaimer */}
        <div className="text-muted text-[12px] text-center leading-normal">
          You won't be charged yet. Our team will contact you within 24 hours.
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
