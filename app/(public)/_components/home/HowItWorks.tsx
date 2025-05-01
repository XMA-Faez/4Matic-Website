// app/(public)/_components/home/HowItWorks.tsx
import { CheckCircle, CalendarDays, Car } from "lucide-react";
import Button from "@/components/ui/Button";
import { SiMercedes, SiBentley, SiRollsroyce, SiBmw, SiLamborghini, SiPorsche } from "react-icons/si";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

interface Brand {
  name: string;
  logo: React.ReactNode;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: 1,
      icon: <CheckCircle className="text-primary-500 w-full" />,
      title: "Select Your Vehicle",
      description: "Browse our collection of premium and luxury vehicles to find the perfect match for your needs."
    },
    {
      number: 2,
      icon: <CalendarDays className="text-primary-500 w-full" />,
      title: "Choose Your Dates",
      description: "Select your preferred pickup and return dates and times that suit your schedule."
    },
    {
      number: 3,
      icon: <Car className="text-primary-500 w-full" />,
      title: "Enjoy Your Experience",
      description: "Complete your booking and enjoy our premium delivery and concierge services."
    }
  ];

  const carClassName = "w-full h-20";

  const brands: Brand[] = [
    { name: "Mercedes-Benz", logo: <SiMercedes className={carClassName} /> },
    { name: "Bentley", logo: <SiBentley className={carClassName} /> },
    { name: "Rolls-Royce", logo: <SiRollsroyce className={carClassName} /> },
    { name: "BMW", logo: <SiBmw className={carClassName} /> },
    { name: "Lamborghini", logo: <SiLamborghini className={carClassName} /> },
    { name: "Porsche", logo: <SiPorsche className={carClassName} /> }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-secondary-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Seamless Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
            Luxury Made Simple in Three Steps
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 text-lg">
            Our premium rental process is designed to be effortless, allowing you to focus on what matters—enjoying the extraordinary.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              {/* Step connection line */}
              {step.number < 3 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-secondary-200 dark:bg-secondary-700 -z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary-500"></div>
                </div>
              )}
              
              {/* Card */}
              <div className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-8 border border-secondary-200 dark:border-secondary-700 h-full transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 bg-primary-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="bg-primary-100 dark:bg-primary-900/40 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-secondary-600 dark:text-secondary-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 md:p-10 shadow-lg">
          <div className="mb-6 md:mb-0 text-white">
            <h3 className="text-2xl font-bold mb-2">Ready to experience luxury?</h3>
            <p className="text-primary-100 max-w-md">
              Book your premium vehicle today and elevate your journey with our exceptional service and attention to detail.
            </p>
          </div>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-primary-100 text-primary-950 hover:bg-primary-200"
            asLink
            href="/vehicles"
          >
            Browse Our Collection
          </Button>
        </div>

        {/* Brands Section */}
        <div className="mt-24">
          <h3 className="text-center text-xl font-semibold text-secondary-900 dark:text-white mb-8">
            The World's Finest Automobile Brands
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand) => (
              <div 
                key={brand.name} 
                className="flex items-center justify-center p-6 rounded-lg border border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-800 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="transition-all">
                  {brand.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
