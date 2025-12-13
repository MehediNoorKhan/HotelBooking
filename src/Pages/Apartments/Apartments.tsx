import FeaturedProperties from "../../_Components/Home/FeaturedProperties";
import ApartmentSearch from "../../_Components/Shared_Component/ApartmentSearch";
import image from "../../images/apartmentImage.png";
import propertiesData from "../../data/featuredProperties.json";

const Apartments = () => {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="pt-15 pb-25 flex flex-col items-center justify-center px-4 md:px-10 lg:px-20">
        <div className="text-center flex flex-col gap-6 px-4 md:px-0">
          <h1 className="text-muted font-display text-[54px] font-bold">
            Explore Our Luxury Apartments in New York
          </h1>
          <p className="text-muted text-base font-normal font-stretch-normal">
            Browse our curated collection of fully furnished, premium residences
            located in the most desirable neighborhoods of New York City.
            Designed for style, comfort, and effortless living.
          </p>
        </div>
        <div className="rounded-tl-[150px] rounded-br-[150px] overflow-hidden my-10">
          <img src={image} alt="" />
        </div>
        {/* Searching */}
        <ApartmentSearch></ApartmentSearch>
      </section>

      <div>
        {/* Featured Properties */}
        <div className="py-12">
            <div>

          <FeaturedProperties
            properties={propertiesData}
            title={"Apartment Listing"}
            subTitle={
                "Handpicked apartments that embody sophistication and comfort in New York's most prestigious locations."
            }
            ></FeaturedProperties>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
