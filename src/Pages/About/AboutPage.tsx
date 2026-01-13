import image2 from "@/images/aboutImage2.png";
import ctaBg from "@/images/CTA image.png";
import quality from "@/assets/Icons/Check.svg"
import frame from "@/assets/Icons/Frame.svg"
import home from "@/assets/Icons/Home.svg"
import avatar from "@/assets/Icons/avater.svg"
import eye from "@/assets/Icons/eye.svg"
import { Send } from "lucide-react";
import { useGetAboutUsQuery} from "@/features/common/commonApi";
import parse from "html-react-parser";
import { usePageBanner } from "@/Hooks/usePageBanner";

const AboutPage = () => {
const { data, isLoading, isError } = useGetAboutUsQuery();
const { bannerData } = usePageBanner("about_page");

  if (isLoading) {
    return <p className="text-center mt-20 text-muted">Loading About Us...</p>;
  }

  if (isError || !data?.data?.aboutUs) {
    return <p className="text-center mt-20 text-primary">Failed to load About Us.</p>;
  }

  const about = data.data.aboutUs;


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-muted mb-4">
          About Us
        </h1>

        <p className="text-base sm:text-lg text-muted max-w-2xl">
         {bannerData?.data?.short_description}
        </p>

        {/* Full-width hero image */}
        <div className="w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px] sm:rounded-tl-[120px] sm:rounded-br-[120px] my-10">
          <img src={bannerData?.data?.image} alt="Apartment" className="w-full h-[500px] object-cover" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center mt-10 lg:mt-25">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center justify-center h-7 px-4 mb-4 bg-primary rounded-full text-sm font-medium">
            Our Story
          </div>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[120%] text-muted mb-4">
            Redefining NYC
          </h2>
 <div className="text-background space-y-6 leading-relaxed text-base wrap-break-word overflow-hidden max-w-full">
           {parse(about.content)}
        </div>

          {/* Secondary Image */}
          <div className="overflow-hidden my-10">
            <img
              src={image2}
              alt="Apartment interior"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>

        {/* Mission & Vission */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
          {/* Card */}
          <div className="bg-black p-6 border border-primary rounded-2xl flex flex-col gap-4 text-muted">
      
            <div className="w-[60px] h-[60px] bg-primary rounded-[10px] flex items-center justify-center">
              <img src={frame}>
              </img>
            </div>

            <h3 className=" text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[120%]">
             Our Mission
            </h3>

            <p className=" text-base leading-[120%]">
              To provide descerning individuals with access to exceptional living spaces that blend luxury, comfort and convenience. We're committed to delivering a seamless, personalized experience from inquiry to move-in and beyond.
            </p>
          </div>

          {/* Card */}
          <div className="bg-black p-6 border border-primary rounded-2xl flex flex-col gap-4 text-muted">
            <div className="w-[60px] h-[60px] bg-primary rounded-[10px] flex items-center justify-center">
             <img src={eye}>
              </img>
            </div>

            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[120%]">
              Our Vision
            </h3>

            <p className="text-base leading-[120%] text-muted">
              To become the most trusted name in luxury apartment rentails, know for our unwavering commitment to quality, integrity and hospitality. We envision a future where every guest finds not just an apartment, but a true home.
            </p>
          </div>
        </div>

      {/* Core Value */}
      <div className="mt-20">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5 items-center text-center mb-12">
          <span className="bg-primary h-7.5 px-4 py-0.5 text-base font-medium rounded-full">
            Our Process
          </span>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[120%] text-muted">
            How We Work
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
          {/* Card */}
          <div className="bg-black p-6 border border-primary rounded-2xl flex flex-col gap-4 text-muted">
            <div className="w-[60px] h-[60px] bg-primary rounded-[10px] flex items-center justify-center">
              <img src={home}>
              </img>
            </div>

            <h3 className=" text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[120%]">
              Property Curation
            </h3>

            <p className=" text-base leading-[120%]">
              We personally select and inspect every property, ensuring it meets our strict criteria for location, design and quality before welcoming guests.
            </p>
          </div>

          {/* Card */}
          <div className="bg-black p-6 border border-primary rounded-2xl flex flex-col gap-4 text-muted">
            <div className="w-[60px] h-[60px] bg-primary rounded-[10px] flex items-center justify-center">
              <img src={quality}>
              </img>
            </div>

            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[120%]">
              Quality Standards
            </h3>

            <p className="text-base leading-[120%]">
              Each apartment is held to the highest standards of cleanliness, functionality and aesthetics. We conduct regular inspections to maintain excellence.
            </p>
          </div>
          {/* Card */}
          <div className="bg-black p-6 border border-primary rounded-2xl flex flex-col gap-4 text-muted">
            <div className="w-[60px] h-[60px] bg-primary rounded-[10px] flex items-center justify-center">
              <img src={avatar}></img>
            </div>

            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[120%]">
              Personalize Service
            </h3>

            <p className="text-base leading-[120%]">
             From your first inquiry to move-in day and throughout your stay, our dedicated team provides tailored support and guidence every step of the way.
            </p>
          </div>
        </div>
        </div>
        {/* CTA */}
      <div
        className="container mx-auto relative h-80 md:h-80 rounded-3xl overflow-hidden flex items-center justify-center mt-20"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-muted text-center px-6">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Ready to Reserve This Apartment?
          </h1>
          <p className="mt-4 max-w-3xl mx-auto">
            Experience luxury living at its finest. Our concierge team is
            available 24/7.
          </p>
          <button className="mt-6 bg-primary px-6 py-3 rounded-xl flex items-center gap-2 mx-auto">
            <Send size={18} /> Send Inquiry Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
