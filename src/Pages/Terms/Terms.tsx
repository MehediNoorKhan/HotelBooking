import { useGetTermsOfServiceQuery } from "@/features/common/commonApi";
import { usePageBanner } from "@/Hooks/usePageBanner";
import image from "@/images/apartmentImage.png";
import parse from "html-react-parser";

const Terms = () => {
  const { data, isLoading, isError } = useGetTermsOfServiceQuery();
const { bannerData } = usePageBanner("terms");
  if (isLoading) {
    return <p className="text-center mt-20 text-muted">Loading Terms of Service...</p>;
  }

  if (isError || !data?.data?.term_condition) {
    return <p className="text-center mt-20 text-primary">Failed to load Terms of Service.</p>;
  }

  const terms = data.data.term_condition;

  return (
    <div className="container mx-auto max-w-7xl px-6 mt-20">
      {/* -------------------- Header -------------------- */}
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center justify-center h-8 w-16 bg-background rounded-full font-medium">
          <p>Legal</p>
        </div>

        <h1 className="text-background font-display font-medium text-3xl">
          {terms.title}
        </h1>

        <p className="text-sm text-background">
          <span className="font-semibold">Last Updated:</span>{" "}
          {new Date(terms.updated_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="w-full h-[250px] overflow-hidden rounded-tl-[80px] rounded-br-[80px] my-5">
          <img
            src={bannerData?.data?.image || image}
            alt="Terms of Service"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* -------------------- Content -------------------- */}
      <div className="mt-15 text-background space-y-12">
        {/* Intro */}
        <div className="border border-primary rounded-[20px] py-12 px-6">
          <p>
            {bannerData?.data?.short_description  || "Welcome to our Terms of Service. Please read these terms carefully before using our services."}
          </p>
        </div>

        {/* Parsed HTML content from API */}
        <div className="space-y-6 leading-relaxed text-base wrap-break-word overflow-hidden max-w-full">
          {parse(terms.content)}
        </div>
      </div>
    </div>
  );
};

export default Terms;
