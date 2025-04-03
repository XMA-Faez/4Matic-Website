// app/(public)/_components/home/WhyChooseUs.tsx
import { Briefcase, User, Car, Headset } from 'lucide-react';
import Image from 'next/image';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  const features: Feature[] = [
    {
      icon: <Briefcase className="text-primary-400 h-6 w-6" />,
      title: "Best price guaranteed",
      description: "Find a lower price? We'll refund you 100% of the difference."
    },
    {
      icon: <User className="text-primary-400 h-6 w-6" />,
      title: "Experience driver",
      description: "Don't have driver? Don't worry, we have many experienced driver for you."
    },
    {
      icon: <Car className="text-primary-400 h-6 w-6" />,
      title: "24 hour car delivery",
      description: "Book your car anytime and we will deliver it directly to you."
    },
    {
      icon: <Headset className="text-primary-400 h-6 w-6" />,
      title: "24/7 technical support",
      description: "Have a question? Contact Rentcars support any time when you have problem."
    }
  ];

  return (
    <div className="relative bg-[#0b102b] min-h-[600px] overflow-hidden">
      {/* Car absolute positioned at bottom left */}
      <div className="hidden lg:block absolute bottom-0 left-0 z-10">
        <Image
          src="/Audi 1.png"
          alt="Luxury Car"
          width={900}
          height={500}
          priority
          className="object-contain"
        />
      </div>
      
      {/* Diagonal background shape */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            clipPath: 'polygon(0 30%, 40% 0, 40% 100%, 0% 100%)',
            background: 'linear-gradient(135deg, #131c3f 0%, #0d1229 100%)',
            opacity: 0.8
          }}
        ></div>
      </div>
      
      {/* Content container - positioned to the right */}
      <div className="max-w-7xl mx-auto px-4 py-24 relative z-20">
        <div className="flex justify-end">
          <div className="w-full lg:w-1/2 lg:pl-12">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-block bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-md uppercase tracking-wider mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
                We offer the best experience with our rental deals
              </h2>
            </div>
            
            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-white rounded-lg p-3 mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile car image */}
        <div className="lg:hidden mt-12">
          <Image
            src="/blue-lambo.jpg"
            alt="Luxury Car"
            width={600}
            height={300}
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
