import { useState } from 'react';
import { Mail, Phone, MapPin, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import image from "@/images/apartmentImage.png";


const InquiryPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="container mx-auto pb-[50px] px-4 text-muted">

         {/* Hero Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted mb-4">
          Get in Touch
        </h1>

        <p className="text-base sm:text-lg text-muted max-w-2xl">
Have a Question or need assistance? We're here to help. Send us a message and our team will respond within 24 hours.
        </p>

        {/* Full-width hero image */}
        <div className="w-full h-[250px] overflow-hidden rounded-tl-[80px] rounded-br-[80px] sm:rounded-tl-[120px] sm:rounded-br-[120px] my-10">
          <img src={image} alt="Apartment" className="w-full object-contain" />
        </div>
      </div>

      <div className="flex gap-6 flex-wrap mt-20 justify-center">
        {/* Left side - Contact Form */}
        <div className="flex flex-col gap-6 flex-1 min-w-[300px]">
          <div className="bg-foreground border border-primary rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            <div className="space-y-5">
              {/* Name Input */}
              <div>
                <label className="block text-sm mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full bg-transparent border border-border/60 rounded-lg px-4 py-3 placeholder:text-gray-500 focus:border-gray-500 focus:ring-0"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full bg-transparent border border-border/60 rounded-lg px-4 py-3  placeholder:text-gray-500 focus:border-gray-500 focus:ring-0"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-sm mb-2">Subject</label>
                <Input
                  type="text"
                  placeholder="Write your subject here"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className="w-full bg-transparent border border-border/60 rounded-lg placeholder:text-gray-500 focus:border-gray-500 focus:ring-0"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm mb-2">Message</label>
                <Textarea
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-full bg-transparent border border-border/60 rounded-lg px-4 py-3 text-muted placeholder:text-gray-500 focus:border-gray-500 focus:ring-0 min-h-[140px] resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                className="w-full bg-primary hover:bg-primary/90 text-muted font-semibold py-6 rounded-lg transition-colors"
              >
                Send Message
              </Button>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-black border border-gray-700 rounded-lg p-6 ">
            <div className="flex items-start gap-3 text-primary">
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-base mb-2 font-display">
                  Interested in a Specific Property?
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  For property-specific inquiries, booking requests, or viewing appointments, please visit the property details page and submit an inquiry form directly. This helps us serve you faster with relevant information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Contact Information */}
        <div className="flex-1 max-w-[320px] max-h-fit
      bg-primary rounded-2xl p-8  top-10">
          <h2 className="text-foreground text-[20px] font-medium mb-6 tracking-wide">
            Contact Information
          </h2>

          <div className="space-y-5">
            {/* Phone 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-base font-medium text-foreground">Phone</p>
                <p className="text-base text-foreground">+9888 0024574</p>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-base font-medium text-foreground">Phone</p>
                <p className="text-base text-foreground">+9888 0024574</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-base font-medium text-foreground">Location</p>
                <p className="text-base text-foreground">New York, NY</p>
              </div>
            </div>
          </div>
            <div className='h-px bg-background w-full my-7'></div>
          <div className="">
            <p className="text-base text-foreground leading-relaxed">
              Our support team is available Monday through Friday, 9:00 AM - 6:00 PM EST.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;