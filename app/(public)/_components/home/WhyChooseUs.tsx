// app/(public)/_components/home/WhyChooseUs.tsx
import Image from 'next/image';
import { Briefcase, User, Car, Headset } from 'lucide-react';
import { ReactNode } from 'react';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  const features: Feature[] = [
    {
      icon: <Briefcase className="text-blue-400 h-6 w-6" />,
      title: "Best price guaranteed",
      description: "Find a lower price? We'll refund you 100% of the difference."
    },
    {
      icon: <User className="text-blue-400 h-6 w-6" />,
      title: "Experience driver",
      description: "Don't have driver? Don't worry, we have many experienced driver for you."
    },
    {
      icon: <Car className="text-blue-400 h-6 w-6" />,
      title: "24 hour car delivery",
      description: "Book your car anytime and we will deliver it directly to you."
    },
    {
      icon: <Headset className="text-blue-400 h-6 w-6" />,
      title: "24/7 technical support",
      description: "Have a question? Contact Rentcars support any time when you have problem."
    }
  ];

  return (
    <section className="bg-secondary-950 relative py-24 overflow-hidden">
      {/* Background Element - Diagonal Shape */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-40"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #000000 100%)',
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          }}
        ></div>
      </div>
      
      <div className="px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Car Image */}
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
            <div className="">
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-blue-900 rounded-full opacity-30 blur-lg"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-900 rounded-full opacity-30 blur-lg"></div>
              
              <div className="absolute left-0 top-1/3 rounded-lg overflow-hidden">
                <Image
                  src="/Audi 1.png" 
                  alt="Luxury Audi Car"
                  width={650}
                  height={400}
                  className="object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 lg:pl-16">
            {/* Header */}
            <div className="mb-12">
              <span className="inline-block text-blue-400 font-medium tracking-wider text-sm uppercase mb-3">
                Why Choose Us
              </span>
              <h2 className="text-white text-4xl md:text-5xl font-bold max-w-xl">
                We offer the best experience with our rental deals
              </h2>
            </div>
            
            {/* Features List */}
            <div className="space-y-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-gray-900 p-4 rounded-lg mr-5 shadow-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
