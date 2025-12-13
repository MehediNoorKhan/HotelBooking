// ReserveApartmentCTA.tsx
import React from 'react';
import { Send } from 'lucide-react';

interface ReserveApartmentCTAProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ReserveApartmentCTA: React.FC<ReserveApartmentCTAProps> = ({
  backgroundImage = '', 
  title = 'Ready to Reserve This Apartment?',
  subtitle = 'Experience luxury living at its finest. Our concierge team is available 24/7 to assist with your reservation and answer any questions about this exceptional property.',
  buttonText = 'Send Inquiry Now',
  onButtonClick,
}) => {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      console.log('Inquiry button clicked');
      // Add your default action here
    }
  };

  return (
    <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[220px] rounded-2xl overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-poppins text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-[120%] text-white mb-2 sm:mb-3">
          {title}
        </h2>
        <p className="font-poppins text-[12px] sm:text-[13px] lg:text-[14px] font-normal leading-[140%] text-muted/90 mb-4 sm:mb-5 max-w-[90%] sm:max-w-[600px]">
          {subtitle}
        </p>
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-Primary hover:bg-primary text-muted font-poppins text-[14px] font-medium leading-[120%] rounded-lg transition-all duration-300 hover:scale-105"
        >
          <Send className="w-4 h-4" />
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export default ReserveApartmentCTA;

// ========================================
// USAGE EXAMPLE IN YOUR APARTMENT DETAILS COMPONENT
// ========================================

/*
import ReserveApartmentCTA from './ReserveApartmentCTA';
import ctaImage from '@/images/apartment-cta.jpg'; // Your image path

// Inside your component:
<div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-[50px]">
  <ReserveApartmentCTA 
    backgroundImage={ctaImage}
    onButtonClick={() => {
      // Handle inquiry action
      // Could open a modal, scroll to form, etc.
      console.log('Opening inquiry form...');
    }}
  />
</div>
*/