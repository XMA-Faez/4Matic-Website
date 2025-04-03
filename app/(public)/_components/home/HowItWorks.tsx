// app/(public)/_components/home/HowItWorks.tsx
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { CheckCircle, CalendarDays, Car } from "lucide-react";

interface CarBrand {
  name: string;
  logo: string;
}

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

export default function HowItWorks() {
  const carBrands: CarBrand[] = [
    { name: "Honda", logo: "/logos/honda.png" },
    { name: "Jaguar", logo: "/logos/jaguar.png" },
    { name: "Nissan", logo: "/logos/nissan.png" },
    { name: "Volvo", logo: "/logos/volvo.png" },
    { name: "Audi", logo: "/logos/audi.png" },
    { name: "Acura", logo: "/logos/acura.png" },
  ];

  const steps: Step[] = [
    {
      number: 1,
      icon: <CheckCircle className="text-blue-400 w-8 h-8" />,
      title: "Choose Location",
      description: "Choose your location and find your best car"
    },
    {
      number: 2,
      icon: <CalendarDays className="text-blue-400 w-8 h-8" />,
      title: "Pick-up Date",
      description: "Select your pick up date and time to book your car"
    },
    {
      number: 3,
      icon: <Car className="text-blue-400 w-8 h-8" />,
      title: "Book Your Car",
      description: "Book your car and we will deliver it directly to you"
    }
  ];

  return (
    <section className="bg-secondary-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-blue-400 font-medium tracking-wider text-sm uppercase mb-3">
            How It Works
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
            Rent with 3 Simple Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              {/* Step Number */}
              <div className="absolute -top-8 -left-6 text-8xl font-bold text-blue-900/20 group-hover:text-blue-800/20 transition-colors duration-500">
                {step.number}
              </div>
              
              {/* Step Card */}
              <div className="relative z-10 bg-gray-900 rounded-lg p-8 h-full shadow-xl transition-transform duration-300 group-hover:translate-y-[-8px]">
                {/* Blue glow effect behind icon */}
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-blue-900/10 blur-xl"></div>
                
                <div className="relative bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 border border-blue-800/20">
                  {step.icon}
                </div>
                
                <h3 className="text-white text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-400">
                  {step.description}
                </p>
                
                {/* Subtle accent line */}
                <div className="w-12 h-1 bg-blue-700/30 mt-6"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Marquee with subtle border */}
        <div className="border-t border-blue-900/20 pt-16">
          <h3 className="text-center text-2xl font-bold text-white mb-10">
            Trusted by Leading Brands
          </h3>
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="py-6"
          >
            {carBrands.map((brand, index) => (
              <div 
                key={index} 
                className="mx-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={40}
                  className="object-contain grayscale brightness-200"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
