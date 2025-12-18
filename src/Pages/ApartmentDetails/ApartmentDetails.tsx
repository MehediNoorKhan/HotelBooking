import Carousel from "./Carousel";
import { Heart, Send, Share2 } from "lucide-react";
import PropertyInfo from "./PropertyInfo";
import BookingForm, { type BookingFormData } from "./BookingForm";
// import FeaturedProperties from "../../_Components/Home/FeaturedProperties";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ApartmentDetailsSkeleton from "../../_Components/ApartmentDetails/ApartmentDetailsSkeleton";
import ctaBg from "@/images/CTA image.png";
import type { Apartment } from "@/features/apartments/type";
import { getApartmentDetails } from "@/features/apartments/apartmentAPI";
import FeaturedCard from "@/_Components/ApartmentDetails/FeaturedCard";

const ApartmentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [apartment, setApartment] = useState<Apartment | null>(null);

  useEffect(() => {
    if (!id) return;

    window.scrollTo(0, 0);

    const fetchApartment = async () => {
      try {
        setLoading(true);

        const res = await getApartmentDetails(id);
        setApartment(res.data.data);
      } catch (error) {
        console.error("Failed to load apartment details", error);
        setApartment(null);
      } finally {
        setLoading(false);
      }
    };

    fetchApartment();
  }, [id]);

  const handleBookingSubmit = (data: BookingFormData) => {
    console.log("Booking submitted:", data);
    alert(
      "Booking request submitted! Our team will contact you within 24 hours."
    );
  };

  if (loading) return <ApartmentDetailsSkeleton />;

  if (!apartment) {
    return <div className="p-10 text-center text-muted mb-[110px]">Apartment not found</div>;
  }

  return (
    <div className="bg-foreground">
      {/* Image Carousel */}
      <div className="container mx-auto px-2 sm:px-0">
        <Carousel images={apartment.images ?? []} />
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="pt-7.5 pb-2.5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left Content */}
          <div>
            {apartment.is_featured && (
              <span className="inline-block h-[30px] px-3 py-1.5 rounded-[92px] bg-primary text-accent-foreground text-[14px] font-medium">
                Featured Property
              </span>
            )}

            <h2 className="mt-3.5 text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-muted">
              {apartment.name}
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="h-[45px] px-5 bg-background rounded-2xl flex gap-2 items-center">
              <Heart size={18} /> Save
            </button>
            <button className="h-[45px] px-5 bg-background rounded-2xl flex gap-2 items-center">
              <Share2 size={18} /> Share
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted leading-[1.7] text-[14px] sm:text-[16px]">
          {apartment.short_description ||
            "No description available for this apartment."}
        </p>
      </div>

      {/* Info Section */}
      <div className="container mx-auto pb-[50px] px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 flex-wrap">
          <PropertyInfo
            monthlyRate={`$${apartment.pricing.monthly}`}
            bedrooms={String(apartment.bedrooms)}
            bathrooms={String(apartment.bathrooms)}
            guestCapacity={String(apartment.max_guests)}
            squareFootage={`${apartment.square_feet} sq ft`}
            location={apartment.full_address}
          />

          <BookingForm
            monthlyRate={`$${apartment.pricing.monthly}`}
            minimumStay="30 days"
            onSubmit={handleBookingSubmit}
          />
        </div>
      </div>

      {/* Featured Properties */}
      <div className="container mx-auto pb-[50px]">
        <FeaturedCard
          properties={[apartment]}
          title="Featured Property"
          subTitle="Handpicked apartments that embody sophistication and comfort."
        />
      </div>

      {/* CTA */}
      <div
        className="container mx-auto relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-muted text-center px-6">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Ready to Reserve This Apartment?
          </h1>
          <p className="mt-4 max-w-3xl mx-auto">
            Experience luxury living at its finest. Our concierge team is
            available 24/7.
          </p>
          <button className="mt-6 bg-primary px-6 py-3 rounded-xl flex items-center gap-2 mx-auto">
            <Send size={18} /> Send Inquiry Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
