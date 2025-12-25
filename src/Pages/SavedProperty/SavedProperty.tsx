import FeaturedProperties from "@/_Components/Home/FeaturedPropertiesCard";
import { useGetFeaturedApartmentsQuery } from "@/features/apartments/featuredApartmentsApi";
import image from "@/images/apartmentImage.png";



const SavedProperty = () => {
    
  const {
    data: apartments = [],
    isLoading,
    isError,
  } = useGetFeaturedApartmentsQuery();

  return (
    <div className="container mx-auto max-w-7xl px-6">
      {/* -------------------- Header -------------------- */}
<div className="text-center">
    
         <h1 className="text-background font-display font-medium text-3xl">
          Saved Properties
        </h1>
</div>
      <div className="w-full h-[250px] overflow-hidden rounded-tl-[80px] rounded-br-[80px] my-10">
          <img src={image} alt="Apartment" className="w-full h-full object-cover" />
        </div>

      {/* -------------------- Content -------------------- */}
      <section className="py-12 sm:py-16 lg:py-20">
              <FeaturedProperties
                properties={apartments}
                isLoading={isLoading}
              isError={isError}
                title=" Explore Favourite Properties"
              />
            </section>
    </div>
  )
}

export default SavedProperty