import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import inquiryimg from "../../images/inquiryimg.png"

export default function Inquiry() {
  return (
    <section className="relative w-full bg-[#0F0F0F] text-white px-4 md:px-10 lg:px-20 py-28">

      {/* Page Title */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold lg:ml-8">Send Us an Inquiry</h2>
        <p className="mt-3 text-[13px] md:text-base text-gray-300 max-w-md lg:ml-8">
          Tell us about your stay, and our team will get back to you shortly.
        </p>
      </div>

      {/* FRAME39 Background behind everything */}
      <div
        className="
          absolute left-0 right-0 mx-auto
          w-full md:w-[90%] lg:w-[85%]
          h-[650px] md:h-[700px] lg:h-[580px]
          bg-[#ffffff]/9
          z-0
          rounded-xl
        "
      ></div>

      {/* ---------- MOBILE & TABLET LAYOUT (STACKED) ---------- */}
      <div className="flex flex-col lg:hidden relative z-10 px-4">

        {/* Image */}
        <img
          src={inquiryimg}
          alt="Inquiry"
          className="
            w-full
            max-h-[380px]
            relative
            top-16
            object-cover
            rounded-md
            mb-24
          "
        />

        {/* Form */}
        <form className="space-y-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">

          <Input
            placeholder="Name"
            className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-gray-300 focus-visible:ring-0"
          />

          <Input
            placeholder="Email"
            className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-gray-300 focus-visible:ring-0"
          />

          <Input
            placeholder="Subject"
            className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-gray-300 focus-visible:ring-0"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="bg-transparent w-full border-0 border-b border-white rounded-none text-white placeholder:text-gray-300 focus-visible:ring-0"
          />

          <Button
            type="submit"
            className="w-full border border-white rounded-md bg-transparent text-white hover:bg-white hover:text-black transition cursor-pointer"
          >
            Submit
          </Button>
        </form>

        {/* Bottom Text */}
        <p className="mt-10 text-gray-300 text-[16px] md:text-base max-w-md mx-auto">
          We’re here to help you find the perfect luxury apartment. Fill out the details
          below, and we’ll reach out with availability and pricing.
        </p>
      </div>

      {/* ---------- DESKTOP LAYOUT (LAYERED) ---------- */}
      <div className="hidden lg:block relative z-10 min-h-[650px]">

        {/* Image (left) */}
        <img
          src={inquiryimg}
          alt="Inquiry Preview"
          className="
      relative z-10
      ml-16
      w-[42%]
      h-[520px]
      xl:left-12 2xl:left-24
      top-40
      object-cover rounded-md
    "
        />

        {/* Right Side Form */}
        <div
          className="
      absolute -top-36 right-4 xl:right-20 2xl:right-36
      w-[400px]
      bg-white/5 backdrop-blur-md
      border border-white/10
      rounded-lg p-6
      z-20
    "
        >
          <form className="space-y-6">
            <Input
              placeholder="Name"
              className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-gray-300 focus-visible:ring-0"
            />

            <Input
              placeholder="Email"
              className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-gray-300 focus-visible:ring-0"
            />

            <Input
              placeholder="Subject"
              className="bg-transparent border-0 border-b border-white rounded-none text-white placeholder:text-gray-300 focus-visible:ring-0"
            />

            <textarea
              placeholder="Message"
              rows={4}
              className="bg-transparent w-full border-0 border-b border-white rounded-none text-white placeholder:text-gray-300"
            />

            <Button
              type="submit"
              className="w-full border border-white rounded-md bg-transparent text-white hover:bg-white hover:text-black transition cursor-pointer"
            >
              Submit
            </Button>
          </form>
        </div>

        {/* Bottom Right Text (Fixed Positioning) */}
        <div className="absolute right-8 -bottom-6 xl:right-24 2xl:right-42 z-10 w-[380px]">
          <p className="text-gray-300 text-base leading-relaxed">
            We’re here to help you find the perfect luxury apartment in New York.
            Fill out the details below, and we’ll reach out with availability and pricing.
          </p>
        </div>
      </div>

    </section>
  )
}



