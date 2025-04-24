// app/(public)/vehicles/_components/WhatsappBooking.tsx
"use client";

import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { Car } from "@/types/car";

interface WhatsappBookingProps {
  car: Car;
  className?: string;
}

export default function WhatsappBooking({ car, className = "" }: WhatsappBookingProps) {
  // Function to generate the WhatsApp link with template message
  const handleWhatsAppBooking = () => {
    // The phone number should be replaced with your actual business phone number
    // Format: Country code without + and then the number, e.g., 1XXXXXXXXXX for US
    const phoneNumber = "1234567890"; 
    
    // Create a template message with the car details
    const message = `
Hello! I'm interested in renting the ${car.name}.

*Vehicle Details:*
- ID: ${car.id}
- Price: $${car.price}/day
- Passengers: ${car.passengers}
- Transmission: ${car.transmission}
- Doors: ${car.doors}

Please let me know about availability and the booking process.
    `.trim();
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // Generate the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <Button
      variant="primary"
      fullWidth
      size="lg"
      icon={<Phone className="w-5 h-5" />}
      onClick={handleWhatsAppBooking}
      className={className}
    >
      Book via WhatsApp
    </Button>
  );
}
