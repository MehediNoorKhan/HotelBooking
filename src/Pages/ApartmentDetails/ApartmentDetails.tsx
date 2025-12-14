import img1 from "../../images/apartmentdetails.png";
import Carousel from "./Carousel";
import { Heart, Share2 } from "lucide-react";
import PropertyInfo from "./PropertyInfo";
import BookingForm, { type BookingFormData } from "./BookingForm";

import propertiesData from "../../data/featuredProperties.json";
import FeaturedProperties from "../../_Components/Home/FeaturedProperties";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ApartmentDetailsSkeleton from "../../_Components/ApartmentDetails/ApartmentDetailsSkeleton";

const ApartmentDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  // find the apartment by id
  const apartment = propertiesData.find((item) => item.id === Number(id));

  const handleBookingSubmit = (data: BookingFormData) => {
    console.log("Booking submitted:", data);
    alert(
      "Booking request submitted! Our team will contact you within 24 hours."
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ApartmentDetailsSkeleton />;
  }

  if (!apartment) {
    return <div className="p-10 text-center">Apartment not found</div>;
  }

  return (
    <div className="bg-foreground">
      {/* Image Carousel */}
      <div className="container mx-auto px-2 sm:px-0">
        <Carousel images={[img1]} />
      </div>
      {/* Details Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-7.5 pb-[50px]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-4">
            {/* Left Content */}
            <div className="w-full lg:w-auto">
              <span className="inline-block h-[30px] px-3 py-1.5 rounded-[92px] bg-primary text-accent-foregroun font-poppins text-[14px] font-medium leading-[120%]">
                Featured Property
              </span>
              <h2 className="mt-3.5 font-poppins text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[120%] text-muted">
                The Tribeca Grand Penthouse
              </h2>
            </div>

            {/* Right Buttons */}
            <div className="flex gap-3 items-center w-full sm:w-auto justify-start sm:justify-end">
              <button className="flex-1 sm:flex-none sm:w-[103px] h-[45px] bg-background px-5 flex gap-2 items-center justify-center rounded-2xl hover:bg-opacity-80 transition-all">
                <Heart className="w-5 h-5" />
                <span className="font-poppins text-[14px] font-medium leading-[120%]">
                  Save
                </span>
              </button>

              <button className="flex-1 sm:flex-none sm:w-[103px] h-[45px] bg-background px-5 flex gap-2 items-center justify-center rounded-2xl hover:bg-opacity-80 transition-all">
                <Share2 className="w-5 h-5" />
                <span className="font-poppins text-[14px] font-medium leading-[120%]">
                  Share
                </span>
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <p className="text-justify text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[1.7] text-muted">
              Welcome to your dream home! This stunning property features a
              spacious open floor plan, perfect for entertaining. The modern
              kitchen boasts stainless steel appliances and a large island,
              while the cozy living room invites relaxation with its warm
              fireplace. Enjoy the serene backyard, ideal for summer barbecues
              and outdoor gatherings. Located in a friendly neighborhood with
              great schools, this home is a perfect blend of comfort and style.
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto pb-[50px] px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 flex-wrap">
          <PropertyInfo
            monthlyRate="$12,500"
            bedrooms="03"
            bathrooms="2.5"
            guestCapacity="$12,500"
            squareFootage="2400 sq ft"
            location="Tribeca, NY"
          />
          <BookingForm
            monthlyRate="$12,500"
            minimumStay="30 days"
            onSubmit={handleBookingSubmit}
          />
        </div>
      </div>
      {/* Feature Card */}
      <div className="container mx-auto pb-[50px]">
        <FeaturedProperties properties={propertiesData.slice(0, 3)} title={"Featured Property"} subTitle={"Handpicked apartments that embody sophistication and comfort in New York's most prestigious locations."} />
      </div>
      {/* Reserve Aprtment CTA */}
      <div>
        {/* Here Figma file needed to improve , Can't Download Image */}
      </div>
    </div>
  );
};

export default ApartmentDetails;
