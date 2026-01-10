import { useGetPrivacyPolicyQuery } from "@/features/common/commonApi";
import image from "@/images/apartmentImage.png";
import parse from "html-react-parser";

const Policy = () => {
  const { data, isLoading, isError } = useGetPrivacyPolicyQuery();

  if (isLoading) {
    return <p className="text-center mt-20 text-muted">Loading Privacy Policy...</p>;
  }

  if (isError || !data?.data?.privacy) {
    return <p className="text-center mt-20 text-primary">Failed to load privacy policy.</p>;
  }

  const policy = data.data.privacy;

  return (
    <div className="container mx-auto max-w-7xl px-6 mt-20">
      {/* -------------------- Header -------------------- */}
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center justify-center h-8 w-16 bg-background rounded-full font-medium">
          <p>Legal</p>
        </div>

        <h1 className="text-background font-display font-medium text-3xl">
          {policy.title}
        </h1>

        <p className="text-sm text-background">
          <span className="font-semibold">Last Updated:</span>{" "}
          {new Date(policy.updated_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="w-full h-[250px] overflow-hidden rounded-tl-[80px] rounded-br-[80px] my-5">
          <img src={image} alt="Privacy Policy" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* -------------------- Content -------------------- */}
      <div className="mt-15 text-background space-y-12 ">
        <div className="border border-primary rounded-[20px] py-12 px-6">
         <p>At our luxury apartment rental platform, your privacy is fundamental to our relationship with you. We are committed to protecting your personal information and being transparent about how we collect,use,and safeguard your data. This Privacy Policy explains our practices in clear, straightforward language. If you have any questions or concerns, we're here to help-please reach out to us at privacy@luxurystays.com</p>
        </div>
        <div className="space-y-6 leading-relaxed text-base wrap-break-word overflow-hidden max-w-full">
           {parse(policy.content)}
        </div>
      </div>
    </div>
  );
};

export default Policy;
