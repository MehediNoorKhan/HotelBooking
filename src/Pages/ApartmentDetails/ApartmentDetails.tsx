import Carousel from "./Carousel";
import { Heart, Send, Share2 } from "lucide-react";
import PropertyInfo from "./PropertyInfo";
import BookingForm from "./BookingForm";
import { useParams } from "react-router";
import ApartmentDetailsSkeleton from "../../_Components/ApartmentDetails/ApartmentDetailsSkeleton";
import ctaBg from "@/images/CTA image.png";
import FeaturedCard from "@/_Components/ApartmentDetails/FeaturedCard";
import { useLazyGetApartmentShareQuery } from "@/services/apartmentShareApi";
import { toast } from "sonner";
import { useGetApartmentDetailsQuery } from "@/features/apartments/apartmentAPI";
import { useGetFeaturedApartmentsQuery } from "@/features/apartments/featuredApartmentsApi";

const ApartmentDetails = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: apartment,
    isLoading,
    isError,
  } = useGetApartmentDetailsQuery(id!, {
    skip: !id,
  });

  const { data: apartments = [] } = useGetFeaturedApartmentsQuery();

  const [getShareUrl, { isFetching: isSharing }] =
    useLazyGetApartmentShareQuery();

  const handleShare = async () => {
    if (!apartment?.id) return;

    try {
      const res = await getShareUrl(apartment.id).unwrap();
      await navigator.clipboard.writeText(res.data.share_url);
      toast.success("Share link copied to clipboard!");
    } catch {
      toast.error("Failed to copy share link");
    }
  };

  if (isLoading) return <ApartmentDetailsSkeleton />;

  if (isError || !apartment) {
    return (
      <div className="p-10 text-center text-muted mb-[110px]">
        Apartment not found
      </div>
    );
  }

  const amenities = Object.values(apartment.amenities_by_category ?? {}).flat();

  return (
    <div className="bg-foreground">
      {/* Image Carousel */}
      <div className="container mx-auto px-2 sm:px-0">
        <Carousel images={apartment.images ?? []} />
      </div>

      {/* Details */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="pt-7.5 pb-2.5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
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

          <div className="flex gap-3">
            <button className="h-[45px] px-5 bg-background rounded-2xl flex gap-2 items-center">
              <Heart size={18} /> Save
            </button>

            <button
              onClick={handleShare}
              disabled={isSharing}
              className="h-[45px] px-5 bg-background rounded-2xl flex gap-2 items-center
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Share2 size={18} />
              {isSharing ? "Sharing..." : "Share"}
            </button>
          </div>
        </div>

        <p className="text-muted leading-[1.7] text-[14px] sm:text-[16px]">
          {apartment.short_description ||
            "No description available for this apartment."}
        </p>
      </div>

      {/* Info */}
      <div className="container mx-auto pb-[50px] px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 flex-wrap">
          <PropertyInfo
            monthlyRate={`$${apartment.price.monthly}`}
            bedrooms={String(apartment.bedrooms)}
            bathrooms={String(apartment.bathrooms)}
            guestCapacity={String(apartment.max_guests)}
            squareFootage={`${apartment.square_feet} sq ft`}
            location={apartment.full_address}
            description={apartment.description}
            amenities={amenities}
          />

          <BookingForm
            apartmentId={apartment.id}
            monthlyPrice={apartment.price.monthly}
          />
        </div>
      </div>

      {/* Featured */}
      <div className="container mx-auto pb-[50px] sm:px-4">
        <FeaturedCard
          properties={apartments}
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
