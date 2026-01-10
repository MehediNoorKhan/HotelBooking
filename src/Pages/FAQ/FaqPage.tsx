import { FAQComponent} from "@/_Components/FAQ/FaqSection";
import type { FAQSection } from "@/_Components/FAQ/FaqSection";
import { useGetFaqsQuery } from "@/features/common/commonApi";
import image from "@/images/apartmentImage.png";

const FaqPage = () => {
  const { data, isLoading, isError } = useGetFaqsQuery();

  if (isLoading) {
    return <p className="text-center mt-20 text-muted">Loading FAQs...</p>;
  }

  if (isError || !data?.data) {
    return <p className="text-center mt-20 text-primary">Failed to load FAQs.</p>;
  }

  // Convert API data to the section structure expected by FAQComponent
  const faqSections: FAQSection[] = [
    {
      title: "General Questions",
      faqs: data.data.map((faq) => ({
        question: faq.question,
        answer: faq.answer,
      })),
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-muted mb-4">
          Frequently Asked
        </h1>

        <p className="text-base sm:text-lg text-muted max-w-2xl">
          Everything you need to know about booking and staying in our NYC apartments. Can't find what you're looking for? We're here to help.
        </p>

        <div className="w-full h-[250px] overflow-hidden rounded-tl-[80px] rounded-br-[80px] sm:rounded-tl-[120px] sm:rounded-br-[120px] my-10">
          <img src={image} alt="Apartment" className="w-full object-contain" />
        </div>
      </div>

      {/* FAQ Section */}
      <FAQComponent sections={faqSections} />
    </div>
  );
};

export default FaqPage;
