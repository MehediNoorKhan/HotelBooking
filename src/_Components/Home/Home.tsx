import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Discover from "./Discover";
import Inquiry from "./Inquiry";
import { useGetFeaturedApartmentsQuery } from "@/features/apartments/featuredApartmentsApi";
import FeaturedProperties from "./FeaturedPropertiesCard";

export default function Home() {
  const {
    data: featuredApartments = [],
    isLoading,
    isError,
  } = useGetFeaturedApartmentsQuery();

  return (
    <>
      {/* Always visible */}
      <Banner />

      {/* Handles its own loading & error */}
      <FeaturedProperties
        properties={featuredApartments}
        isLoading={isLoading}
        isError={isError}
        title="Featured Properties"
        subTitle="Handpicked apartments that embody sophistication and comfort in New York's most prestigios locations."
      />

      {/* Always visible */}
      <ChooseUs />
      <Discover />
      <Inquiry />
    </>
  );
}
