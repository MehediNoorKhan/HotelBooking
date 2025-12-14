import image from "@/images/apartmentImage.png";
import image2 from "@/images/aboutImage2.png";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted mb-4">
          About Us
        </h1>

        <p className="text-base sm:text-lg text-muted max-w-2xl">
          Your trusted partner for authentic NYC apartment experiences since
          2018
        </p>

        {/* Full-width hero image */}
        <div className="w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px] sm:rounded-tl-[120px] sm:rounded-br-[120px] my-10">
          <img src={image} alt="Apartment" className="w-full object-cover" />
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

          <p className="text-base sm:text-lg text-muted leading-relaxed">
            RoveTravel was born from a simple belief: travelers deserve more
            than just a place to sleep. They deserve to experience New York City
            like a local—waking up in vibrant neighborhoods, making coffee in a
            real kitchen, and discovering hidden gems around every corner.
            <br />
            <br />
            Founded by a team of lifelong New Yorkers, we've spent years
            building relationships with property owners who share our vision of
            authentic hospitality. Every apartment in our collection is
            personally vetted to ensure it meets our exacting standards for
            comfort, cleanliness, and character.
            <br />
            <br />
            Today, we've helped over 50,000 travelers create unforgettable NYC
            memories, and we're just getting started.
          </p>

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

      {/* Core Value */}
      <div className="mt-20">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5 items-center text-center mb-12">
          <span className="bg-primary h-7.5 px-4 py-0.5 text-base font-medium rounded-full">
            What we Stand for
          </span>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[120%] text-muted">
            Our Core Values
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <div className="bg-background p-6 rounded-2xl flex flex-col gap-4">
            <div className="w-[60px] h-[60px] bg-primary rounded-[10px]" />

            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[120%]">
              Trust & Security
            </h3>

            <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[120%] text-foreground/50">
              Every listing is personally verified. Your safety and peace of
              mind are our top priorities.
            </p>
          </div>

          {/* Card */}
          <div className="bg-background p-6 rounded-2xl flex flex-col gap-4">
            <div className="w-[60px] h-[60px] bg-primary rounded-[10px]" />

            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[120%]">
              Authentic Living
            </h3>

            <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[120%] text-foreground/50">
              Experience NYC like a local with real homes in real neighborhoods.
            </p>
          </div>

          {/* Card */}
          <div className="bg-background p-6 rounded-2xl flex flex-col gap-4">
            <div className="w-[60px] h-[60px] bg-primary rounded-[10px]" />

            <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[120%]">
              Quality First
            </h3>

            <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[120%] text-foreground/50">
              Every apartment is vetted for comfort, cleanliness, and character.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
