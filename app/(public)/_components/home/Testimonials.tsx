// app/(public)/_components/home/Testimonials.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  name: string;
  location: string;
  image: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showNavigation, setShowNavigation] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 4.9,
      text: "I've been using your services for years. Your service is great, I will continue to use your service.",
      name: "James Wilson",
      location: "New York, US",
      image: "/testimonials/person1.jpg",
    },
    {
      id: 2,
      rating: 5.0,
      text: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
      name: "Charlie Johnson",
      location: "New York, US",
      image: "/testimonials/person2.jpg",
    },
    {
      id: 3,
      rating: 4.8,
      text: "The rental process was smooth and the car was in excellent condition. I would definitely recommend their services to anyone looking for a reliable rental.",
      name: "Emma Davis",
      location: "Los Angeles, US",
      image: "/testimonials/person3.jpg",
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section 
      className="bg-secondary-950 py-24 relative overflow-hidden"
      onMouseEnter={() => setShowNavigation(true)}
      onMouseLeave={() => setShowNavigation(false)}
    >
      {/* Background quotes */}
      <div className="absolute top-10 left-10 opacity-5 text-[200px] font-serif leading-none select-none z-0">
        "
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 text-[200px] font-serif leading-none select-none z-0">
        "
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-blue-400 font-medium tracking-wider text-sm uppercase mb-3">
            Testimonials
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
            What People Say About Us
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-in-out"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="bg-gray-900 rounded-lg p-10 shadow-2xl">
                    {/* Quote mark */}
                    <div className="text-5xl font-serif text-blue-300 opacity-20 leading-none mb-6">
                      "
                    </div>
                    
                    <p className="text-white text-xl leading-relaxed mb-8 italic">
                      {testimonial.text}
                    </p>
                    
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(testimonial.rating) 
                              ? "text-blue-300 fill-blue-300" 
                              : "text-gray-700"
                          }`}
                        />
                      ))}
                      <span className="text-white font-bold ml-2">
                        {testimonial.rating}
                        <span className="text-gray-400 text-sm font-normal">/5</span>
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-blue-800">
                        <Image 
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-bold">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400">
                          From {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className={`absolute top-1/2 left-4 -translate-y-1/2 bg-blue-900/80 hover:bg-blue-800 text-white p-4 rounded-full transition-all ${
              showNavigation ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className={`absolute top-1/2 right-4 -translate-y-1/2 bg-blue-900/80 hover:bg-blue-800 text-white p-4 rounded-full transition-all ${
              showNavigation ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1.5 transition-all duration-300 focus:outline-none ${
                  currentIndex === index 
                    ? "w-8 h-2 bg-blue-500 rounded-full" 
                    : "w-2 h-2 bg-gray-700 rounded-full"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
