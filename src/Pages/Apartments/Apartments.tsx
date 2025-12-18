import { useEffect, useState } from "react";
import FeaturedProperties from "../../_Components/Home/FeaturedProperties";
import ApartmentSearch from "../../_Components/Shared_Component/ApartmentSearch";
import image from "../../images/apartmentImage.png";
import { getAllApartments} from "@/features/apartments/apartmentAPI";
import type { Apartment } from "@/features/apartments/type";

const Apartments = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const data = await getAllApartments();
        setApartments(data);
      } catch (err) {
        console.error("Failed to fetch apartments", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApartments();
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-20 flex flex-col items-center">
        {/* Text */}
        <div className="text-center max-w-7xl flex flex-col gap-6">
          <h1 className="text-muted font-display font-bold 
                         text-[32px] sm:text-[40px] lg:text-[54px] leading-[120%]">
            Explore Our Luxury Apartments in New York
          </h1>

          <p className="text-muted text-base w-3/4 sm:text-lg leading-relaxed self-center">
            Browse our curated collection of fully furnished, premium residences
            located in the most desirable neighborhoods of New York City.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px] sm:rounded-tl-[120px] sm:rounded-br-[120px] my-10">
          <img
            src={image}
            alt="Luxury Apartment"
            className="w-full h-[220px] sm:h-[360px] lg:h-[450px] object-cover"
          />
        </div>

        {/* Search */}
        <ApartmentSearch />
      </section>

      {/* Featured Properties */}
      <section className="py-12 sm:py-16 lg:py-20">
        {loading ? (
          <p className="text-center text-muted">Loading apartments...</p>
        ) : (
          <FeaturedProperties
            properties={apartments}
            title="Apartment Listing"
            subTitle="Handpicked apartments that embody sophistication and comfort in New York's most prestigious locations."
          />
        )}
      </section>
    </div>
  );
};

export default Apartments;
