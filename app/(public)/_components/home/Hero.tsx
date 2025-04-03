// app/(public)/_components/home/Hero.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarIcon, MapPinIcon, Clock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <div className="relative pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-950 to-black opacity-95"></div>
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: "url('/grid-pattern.svg')", 
            backgroundSize: "30px 30px"
          }}
        ></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-600/30 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary-700/20 rounded-full blur-[120px] -z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start py-12 md:py-20 lg:py-28">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-900/30 border border-primary-700/40 text-primary-300 text-sm mb-3">
              <span className="bg-primary-500 rounded-full w-2 h-2 mr-2"></span>
              Premium Car Rental Service
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Find and book your <span className="text-primary-400 relative">
                perfect car
                <svg className="absolute bottom-0 left-0 w-full h-3 text-primary-500/30" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C32 2.5 62 1 153.5 5.5C245 10 283 10.5 299 8.5" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-secondary-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              Experience the freedom of the road with our premium selection of vehicles. 
              Quick booking, transparent pricing, no hidden fees.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button 
                variant="primary" 
                size="lg" 
                icon={<ArrowRight />}
              >
                Browse Vehicles
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-secondary-700 hover:bg-secondary-800"
              >
                How It Works
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8">
              <div className="flex items-center">
                <div className="bg-primary-900/50 p-2 rounded-full mr-3">
                  <Clock className="h-5 w-5 text-primary-300" />
                </div>
                <div>
                  <p className="text-white font-medium">24/7 Support</p>
                  <p className="text-secondary-400 text-sm">Always available</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary-900/50 p-2 rounded-full mr-3">
                  <MapPinIcon className="h-5 w-5 text-primary-300" />
                </div>
                <div>
                  <p className="text-white font-medium">100+ Locations</p>
                  <p className="text-secondary-400 text-sm">Across the country</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-72 sm:h-96 md:h-[500px] w-full">
              <Image
                src="/car-blue-porsche.avif"
                alt="Luxury Sports Car"
                fill
                priority
                className="object-contain z-10"
              />
              
              {/* Circular background for the car */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full bg-gradient-to-r from-primary-900/20 to-primary-700/20 blur-lg"></div>
              
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="relative -mt-8 mb-16 z-20">
          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <label className="block text-secondary-500 text-sm font-medium mb-2">Location</label>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400" />
                  <input
                    type="text"
                    placeholder="Where do you need a car?"
                    className="w-full py-3 pl-10 pr-3 bg-secondary-50 dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-600 dark:focus:border-primary-600 transition-colors"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-secondary-500 text-sm font-medium mb-2">Pick-up Date</label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400" />
                  <input
                    type="date"
                    className="w-full py-3 pl-10 pr-3 bg-secondary-50 dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-600 dark:focus:border-primary-600 transition-colors"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-secondary-500 text-sm font-medium mb-2">Return Date</label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400" />
                  <input
                    type="date"
                    className="w-full py-3 pl-10 pr-3 bg-secondary-50 dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-600 dark:focus:border-primary-600 transition-colors"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="primary" size="lg" className="w-full md:w-auto">
                Search Available Cars
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
