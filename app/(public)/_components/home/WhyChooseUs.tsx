// app/(public)/_components/home/WhyChooseUs.tsx
import { Briefcase, User, Car, Headset, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitItem {
  text: string;
}

export default function WhyChooseUs() {
  const features: Feature[] = [
    {
      icon: <Briefcase className="text-primary-500 h-6 w-6" />,
      title: "Best Price Guaranteed",
      description: "Find a lower price? We'll refund you 100% of the difference."
    },
    {
      icon: <User className="text-primary-500 h-6 w-6" />,
      title: "Experienced Drivers",
      description: "Need a driver? We have experienced chauffeurs available at competitive rates."
    },
    {
      icon: <Car className="text-primary-500 h-6 w-6" />,
      title: "24-Hour Delivery",
      description: "Book anytime and we'll deliver your vehicle directly to your location."
    },
    {
      icon: <Headset className="text-primary-500 h-6 w-6" />,
      title: "24/7 Customer Support",
      description: "Our support team is always available to assist with any questions or concerns."
    }
  ];

  const benefits: BenefitItem[] = [
    { text: "No hidden fees or charges" },
    { text: "Free cancellation up to 48 hours before pickup" },
    { text: "All vehicles are thoroughly cleaned and sanitized" },
    { text: "Comprehensive insurance included" },
    { text: "Roadside assistance available 24/7" },
    { text: "Flexible pickup and return locations" }
  ];

  return (
    <section className="py-24 bg-secondary-50 dark:bg-secondary-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5 dark:opacity-10" 
          style={{ 
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)", 
            backgroundSize: "20px 20px" 
          }}
        ></div>
        
        {/* Accent corners */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {/* Section header */}
            <div className="mb-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
                Premium Experience with Every Rental
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400 text-lg">
                We provide exceptional service and premium vehicles to ensure your journey is comfortable, safe, and memorable.
              </p>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-700 dark:text-secondary-300">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button 
              variant="primary" 
              size="lg"
              className="mt-4"
            >
              Explore Our Fleet
            </Button>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-w-4 aspect-h-3 w-full">
                  <Image
                    src="/car-blue-porsche.png"
                    alt="Luxury vehicle"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Features on the image */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="grid grid-cols-2 gap-4">
                    {features.slice(0, 2).map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white/90 dark:bg-secondary-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-secondary-200/50 dark:border-secondary-700/50"
                      >
                        <div className="flex items-center mb-2">
                          <div className="bg-primary-100 dark:bg-primary-900/40 rounded-full p-2 mr-3">
                            {feature.icon}
                          </div>
                          <h3 className="font-bold text-secondary-900 dark:text-white">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Secondary floating cards */}
              <div className="absolute -bottom-12 -right-6 md:-right-12 w-64 bg-white dark:bg-secondary-800 rounded-lg shadow-xl p-4 border border-secondary-200 dark:border-secondary-700">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 dark:bg-primary-900/40 rounded-full p-2">
                    {features[2].icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900 dark:text-white text-sm">
                      {features[2].title}
                    </h3>
                    <p className="text-xs text-secondary-600 dark:text-secondary-400 mt-1">
                      {features[2].description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-10 -left-6 md:-left-12 w-64 bg-white dark:bg-secondary-800 rounded-lg shadow-xl p-4 border border-secondary-200 dark:border-secondary-700">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 dark:bg-primary-900/40 rounded-full p-2">
                    {features[3].icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900 dark:text-white text-sm">
                      {features[3].title}
                    </h3>
                    <p className="text-xs text-secondary-600 dark:text-secondary-400 mt-1">
                      {features[3].description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
              <div className="absolute -z-10 -top-4 -right-4 w-32 h-32 bg-primary-600/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
