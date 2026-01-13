import { useState } from "react";
import { Mail, Phone, MapPin,  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import image from "@/images/apartmentImage.png";
import { sendInquiry } from "@/services/contactServices";
import { toast } from "sonner";
import { usePageBanner } from "@/Hooks/usePageBanner";

const InquiryPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
const { bannerData } = usePageBanner("inquiry_page");

  /* -------------------- helpers -------------------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* -------------------- submit -------------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await sendInquiry(formData);

      if (res?.status) {
        toast.success(res.message || "Message sent successfully");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto pb-12 px-4 text-muted pt-10 font-medium lg:py-20">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{bannerData?.data?.title}</h1>
        <p className="max-w-2xl mx-auto">
          {bannerData?.data?.short_description || "Get in touch with us for any inquiries or assistance. We're here to help you find your perfect apartment in NYC."}
        </p>

        <div className="w-full h-[250px] overflow-hidden rounded-tl-[80px] rounded-br-[80px] my-10">
          <img src={bannerData?.data?.image||image} alt="Apartment" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex flex-wrap gap-8 mt-16 justify-center">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 min-w-[300px] bg-foreground border border-primary rounded-lg p-8 space-y-5"
        >
          <h2 className="text-2xl font-semibold">Send Us a Message</h2>

          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <InputField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <TextareaField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full py-6 text-base font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {/* Contact Info */}
        <div className="max-w-[320px] h-[450px] bg-[#E2D1B2] rounded-2xl p-8 text-foreground">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          <ContactItem icon={Mail} title="Email" value="contact@company.com" />
          <ContactItem icon={Phone} title="Phone" value="+9888 0024574" />
          <ContactItem icon={MapPin} title="Location" value="New York, NY" />

          <div className="h-px bg-background my-6" />

          <p className="text-lg font-medium">
           Our support is available Monday through Friday, 9.00 AM - 6:00 PM EST.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;

/* -------------------- small components -------------------- */

const InputField = ({ label, error, ...props }: any) => (
  <div>
    <label className="block mb-2 text-sm">{label}</label>
    <Input {...props} className="bg-transparent border border-primary/50" />
    {error && <p className="text-primary text-xs mt-1">{error}</p>}
  </div>
);

const TextareaField = ({ label, error, ...props }: any) => (
  <div>
    <label className="block mb-2 text-sm">{label}</label>
    <Textarea {...props} className="bg-transparent min-h-[140px] border border-primary/50" />
    {error && <p className="text-primary text-xs mt-1">{error}</p>}
  </div>
);

const ContactItem = ({ icon: Icon, title, value }: any) => (
  <div className="flex gap-4 items-start mb-4">
    <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div>
      <p className="font-medium">{title}</p>
      <p>{value}</p>
    </div>
  </div>
);
