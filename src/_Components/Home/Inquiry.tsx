import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import inquiryimg from "../../images/inquiryimg.jpg";
import { sendInquiry } from "@/services/contactServices";
import { toast } from "sonner";

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await sendInquiry(formData);

      if (res?.status) {
        toast.success(res.message);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-[#0F0F0F] text-muted px-4 md:px-10 lg:px-20 py-28">

      {/* Page Title */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold lg:ml-8">
          Send Us an Inquiry
        </h2>
        <p className="mt-3 text-[13px] md:text-base text-gray-300 max-w-md lg:ml-8">
          Tell us about your stay, and our team will get back to you shortly.
        </p>
      </div>

      {/* Background Frame */}
      <div className="mx-auto absolute left-0 right-0 w-full md:w-[90%] lg:w-[85%] h-[650px] md:h-[700px] lg:h-[580px] bg-[#ffffff]/9 z-0 rounded-xl"></div>

      {/* ---------- DESKTOP ---------- */}
      <div className="hidden lg:block relative z-10 min-h-[650px]">

        <img
          src={inquiryimg}
          alt="Inquiry Preview"
          className="relative z-10 ml-16 w-[42%] h-[520px] top-40 object-cover rounded-md"
        />

        <div className="absolute -top-36 right-4 xl:right-20 w-[400px] bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 z-20">
          <form className="space-y-6" onSubmit={handleSubmit}>

            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-gray-300 focus-visible:ring-0"
            />

            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-gray-300 focus-visible:ring-0"
            />

            <Input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-gray-300 focus-visible:ring-0"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Message"
              className="bg-transparent w-full border-0 border-b border-white rounded-none text-white placeholder:text-gray-300"
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full border border-white rounded-md bg-transparent text-white hover:bg-white hover:text-black transition cursor-pointer"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>

            {success && <p className="text-green-400 text-sm">{success}</p>}
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </form>
        </div>
        <div className="absolute w-[400px] right-25 -bottom-8">
          <p>We are here to help you find the perfect luxury apartment in New York. Fill out the details below, and we we'll reach out with availability and pricing.</p>
        </div>
      </div>

      {/* ---------- MOBILE & TABLET ---------- */}
      <div className="flex flex-col lg:hidden relative z-10 px-4">

        <img
          src={inquiryimg}
          alt="Inquiry"
          className="w-full max-h-[380px] relative top-16 object-cover rounded-md mb-24"
        />

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
        >
          <Input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Message"
            className="bg-transparent w-full border-0 border-b border-white rounded-none text-white"
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full border border-white rounded-md bg-transparent text-white hover:bg-white hover:text-black"
          >
            {loading ? "Sending..." : "Submit"}
          </Button>

          {success && <p className="text-green-400 text-sm">{success}</p>}
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </form>
      </div>
    </section>
  );
}
