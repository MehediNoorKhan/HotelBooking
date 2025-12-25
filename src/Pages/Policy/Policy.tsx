import image from "@/images/apartmentImage.png";

/* -------------------- dummy data (API-ready) -------------------- */


const Policy = () => {
  return (
    <div className="container mx-auto max-w-7xl px-6 mt-20">
      {/* -------------------- Header -------------------- */}
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center justify-center h-8 w-16 bg-background rounded-full font-medium">
          <p>{termsData.meta.category}</p>
        </div>

        <h1 className="text-background font-display font-medium text-3xl">
         Pivacy Policy
        </h1>

        <p className="text-sm text-background">
          <span className="font-semibold">Last Updated:</span>{" "}
          {termsData.meta.lastUpdated}
        </p>

        <div className="w-full h-[250px] overflow-hidden rounded-tl-[80px] rounded-br-[80px] my-10">
          <img src={image} alt="Apartment" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* -------------------- Content -------------------- */}
      <div className="mt-24 text-background space-y-12">
        {/* Intro */}
        <div className="border border-primary rounded-[20px] py-12 px-6">
          <p>{termsData.meta.description}</p>
        </div>

        {/* Sections */}
        {termsData.sections.map((section) => (
          <div key={section.id} className="space-y-3">
            <h4 className="font-medium text-lg">{section.title}</h4>
            <p className="text-base leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;





const termsData = {
  meta: {
    category: "Legal",
    title: "Privacy Policy",
    lastUpdated: "December 21, 2024",
    description:
      "Welcome to our luxury apartment rental platform. These Terms of Service ('Terms') govern your access to and use of our website and services.",
  },
  sections: [
    {
      id: 1,
      title: "Acceptance of Terms",
      content:
        "By accessing or using our platform, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must not use our services.",
    },
    {
      id: 2,
      title: "Use of Services",
      content:
        "Our platform allows users to browse, inquire, and book luxury apartment rentals. You agree to use the services only for lawful purposes and in compliance with all applicable laws.",
    },
    {
      id: 3,
      title: "User Responsibilities",
      content:
        "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
    },
    {
      id: 4,
      title: "Limitation of Liability",
      content:
        "We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform or inability to access the services.",
    },
  ],
};