import { FAQComponent } from "@/_Components/FAQ/FaqSection";
import type { FAQSection } from "@/_Components/FAQ/FaqSection";
import { useGetFaqsQuery } from "@/features/common/commonApi";
import { usePageBanner } from "@/Hooks/usePageBanner";

const FaqPage = () => {
  const { data, isLoading, isError } = useGetFaqsQuery();

  const { bannerData } = usePageBanner("faq_page");

  console.log(bannerData)

  if (isLoading ) {
    return (
      <p className="text-center mt-20 text-muted">
        Loading FAQs...
      </p>
    );
  }

  if (isError  || !data?.data) {
    return (
      <p className="text-center mt-20 text-primary">
        Failed to load FAQs.
      </p>
    );
  }

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
          {bannerData?.data?.short_description}
        </p>

        <div className="w-full h-[250px] overflow-hidden rounded-tl-[80px] rounded-br-[80px] sm:rounded-tl-[120px] sm:rounded-br-[120px] my-10 bg-gray-100">
          <img
            src={bannerData?.data?.image}
            alt={bannerData?.data?.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <FAQComponent sections={faqSections} />
    </div>
  );
};

export default FaqPage;
