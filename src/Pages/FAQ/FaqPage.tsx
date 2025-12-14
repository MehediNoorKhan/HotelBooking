import { FAQComponent } from "@/_Components/FAQ/FaqSection";
import { faqSections } from "@/data";
import image from "@/images/apartmentImage.png";


const FaqPage = () => {

    const data = faqSections;
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Hero Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted mb-4">
          Frequently Asked
        </h1>

        <p className="text-base sm:text-lg text-muted max-w-2xl">
          Everything you need to know about booking and staying in our NYC apartments. Can't find what you're looking for? We're here to help.
        </p>

        {/* Full-width hero image */}
        <div className="w-full h-[250px] overflow-hidden rounded-tl-[80px] rounded-br-[80px] sm:rounded-tl-[120px] sm:rounded-br-[120px] my-10">
          <img src={image} alt="Apartment" className="w-full object-contain" />
        </div>
      </div>
        {/* FAQ Section */}
        <div>
        <FAQComponent sections={data} />
        </div>
    </div>
  )
}

export default FaqPage