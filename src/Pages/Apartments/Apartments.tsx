import { useState } from "react";
import {
  useGetAllApartmentsQuery,
  useSearchApartmentsMutation,
} from "@/features/apartments/apartmentAPI";

import ApartmentSearch from "../../_Components/Shared_Component/ApartmentSearch";
import FeaturedProperties from "@/_Components/Home/FeaturedPropertiesCard";
import image from "../../images/apartmentImage.png";
import type { Apartment } from "@/features/apartments/type";
import { buildSearchPayload } from "@/Helper/builSearchPayload";

const Apartments = () => {
  const [searchedApartments, setSearchedApartments] =
    useState<Apartment[] | null>(null);

  const {
    data: allApartments = [],
    isLoading,
    isError,
  } = useGetAllApartmentsQuery(undefined);

  const [searchApartments, { isLoading: isSearching }] =
    useSearchApartmentsMutation();

  const handleSearch = async (formData: any) => {
  const payload = buildSearchPayload(formData);

  // If user clicks search with no filters → reset
  if (Object.keys(payload).length === 0) {
    setSearchedApartments(null);
    return;
  }

  try {
    const result = await searchApartments(payload).unwrap();
    setSearchedApartments(result);
  } catch (error) {
    console.error("Search failed", error);
    setSearchedApartments([]);
  }
};

  const apartmentsToShow =
    searchedApartments !== null ? searchedApartments : allApartments;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="pt-16 pb-20 flex flex-col items-center">
        <div className="text-center max-w-7xl flex flex-col gap-6">
          <h1 className="text-muted font-bold text-[32px] sm:text-[40px] lg:text-[54px]">
            Explore Our Luxury Apartments in New York
          </h1>
          <p className="text-muted text-base w-3/4 self-center">
            Browse our curated collection of premium residences.
          </p>
        </div>

        <div className="w-full my-10 overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
          <img
            src={image}
            alt="Luxury Apartment"
            className="w-full h-[220px] sm:h-[360px] lg:h-[450px] object-cover"
          />
        </div>

        {/* Search */}
        <ApartmentSearch onSearch={handleSearch} />
      </section>

      {/* Listings */}
      <section className="">
        <FeaturedProperties
          properties={apartmentsToShow}
          isLoading={isLoading || isSearching}
          isError={isError}
          title="Apartment Listing"
          subTitle="Handpicked apartments that embody sophistication and comfort in most prestigious locations."
        />
      </section>
    </div>
  );
};

export default Apartments;
