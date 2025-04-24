// app/(public)/vehicles/_components/VehicleDetails.tsx
"use client";

import { useState } from "react";
import { 
  Users, 
  DoorOpen, 
  Gauge, 
  Fuel, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  ChevronRight,
  Repeat,
  BarChart3,
  Timer,
  MapPin,
  Car,
  Battery
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Car as CarType } from "@/types/car";
import Button from "@/components/ui/Button";
import ImageCarousel from "./ImageCarousel";
import StarRating from "@/components/ui/StarRating";
import PriceDisplay from "@/components/ui/PriceDisplay";
import WhatsappBooking from "./WhatsappBooking";
import ShareButton from "./ShareButton";

interface VehicleDetailsProps {
  car: CarType;
}

export default function VehicleDetails({ car }: VehicleDetailsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'specs'>('description');
  
  // This is now handled by the WhatsappBooking component

  // Create an array of specification items for display
  const specificationItems = [
    { 
      icon: <Car className="w-5 h-5" />, 
      label: "Engine", 
      value: car.specs?.engine || "N/A" 
    },
    { 
      icon: <Zap className="w-5 h-5" />, 
      label: "Power", 
      value: car.specs?.power || "N/A" 
    },
    { 
      icon: <BarChart3 className="w-5 h-5" />, 
      label: "Torque", 
      value: car.specs?.torque || "N/A" 
    },
    { 
      icon: <Timer className="w-5 h-5" />, 
      label: "0-100 km/h", 
      value: car.specs?.acceleration || "N/A" 
    },
    { 
      icon: <Gauge className="w-5 h-5" />, 
      label: "Top Speed", 
      value: car.specs?.topSpeed || "N/A" 
    },
    { 
      icon: <Fuel className="w-5 h-5" />, 
      label: "Fuel Type", 
      value: car.specs?.fuelType || "N/A" 
    },
    { 
      icon: car.specs?.fuelType === "Electric" ? <Battery className="w-5 h-5" /> : <Fuel className="w-5 h-5" />, 
      label: car.specs?.fuelType === "Electric" ? "Range" : "Fuel Consumption", 
      value: car.specs?.fuelType === "Electric" 
        ? car.specs?.range || "N/A" 
        : car.specs?.fuelConsumption || "N/A" 
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      label: "Drive", 
      value: car.specs?.driveTrain || "N/A" 
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-secondary-600 dark:text-secondary-400">
          <ol className="flex items-center flex-wrap">
            <li className="flex items-center">
              <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 mx-1" />
            </li>
            <li className="flex items-center">
              <Link href="/vehicles" className="hover:text-primary-600 dark:hover:text-primary-400">
                Vehicles
              </Link>
              <ChevronRight className="w-4 h-4 mx-1" />
            </li>
            <li className="text-secondary-900 dark:text-white font-medium truncate">{car.name}</li>
          </ol>
        </nav>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            <ImageCarousel 
              images={car.images || [car.image]} 
              altText={car.name} 
            />
          </div>
          
          {/* Right Column - Car Info */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-sm p-6 border border-secondary-200 dark:border-secondary-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                    {car.name}
                  </h1>
                  <div className="flex items-center">
                    <StarRating 
                      rating={car.rating} 
                      showRating={true} 
                      showCount={true} 
                      count={car.reviews} 
                    />
                  </div>
                </div>
                <ShareButton car={car} />
              </div>
              
              {/* Quick Info */}
              <div className="border-t border-b border-secondary-200 dark:border-secondary-800 py-4 my-4 grid grid-cols-2 gap-y-3">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" />
                  <span className="text-secondary-700 dark:text-secondary-300">
                    {car.passengers} Passengers
                  </span>
                </div>
                <div className="flex items-center">
                  <DoorOpen className="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" />
                  <span className="text-secondary-700 dark:text-secondary-300">
                    {car.doors} Doors
                  </span>
                </div>
                <div className="flex items-center">
                  <Gauge className="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" />
                  <span className="text-secondary-700 dark:text-secondary-300">
                    {car.transmission}
                  </span>
                </div>
                <div className="flex items-center">
                  <Fuel className="w-5 h-5 text-primary-500 dark:text-primary-400 mr-2" />
                  <span className="text-secondary-700 dark:text-secondary-300">
                    {car.airConditioning ? "A/C" : "No A/C"}
                  </span>
                </div>
              </div>
              
              {/* Pricing and Booking */}
              <div className="mb-6">
                <div className="flex items-end justify-between mb-2">
                  <PriceDisplay 
                    amount={car.price} 
                    currency="USD" 
                    period="day" 
                    size="xl" 
                    className="text-primary-600 dark:text-primary-400"
                  />
                  <div className="text-secondary-600 dark:text-secondary-400 text-sm">
                    +$20 booking fee
                  </div>
                </div>
                
                <div className="space-y-4 mt-6">
                  <WhatsappBooking car={car} />
                  
                  <Button
                    variant="outline"
                    fullWidth
                    icon={<Repeat className="w-5 h-5" />}
                  >
                    Compare Vehicles
                  </Button>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="mt-0.5 mr-2 text-primary-500 dark:text-primary-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-secondary-700 dark:text-secondary-300">
                    <strong>24/7 Customer Support</strong>
                    <p className="text-secondary-600 dark:text-secondary-400 text-xs mt-0.5">
                      Assistance whenever you need it
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-0.5 mr-2 text-primary-500 dark:text-primary-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="text-secondary-700 dark:text-secondary-300">
                    <strong>Comprehensive Insurance</strong>
                    <p className="text-secondary-600 dark:text-secondary-400 text-xs mt-0.5">
                      All rentals include basic insurance
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-0.5 mr-2 text-primary-500 dark:text-primary-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-secondary-700 dark:text-secondary-300">
                    <strong>Instant Confirmation</strong>
                    <p className="text-secondary-600 dark:text-secondary-400 text-xs mt-0.5">
                      Booking confirmed immediately via WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs for Description and Specifications */}
        <div className="mt-10">
          <div className="border-b border-secondary-200 dark:border-secondary-800">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'description'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-secondary-700 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-white'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'specs'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-secondary-700 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-white'
                }`}
              >
                Specifications
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  About this vehicle
                </h2>
                <p className="text-secondary-700 dark:text-secondary-300">
                  {car.description || `The ${car.name} offers a premium driving experience with its powerful engine, comfortable interior, and cutting-edge technology. Whether you're looking for a vehicle for business travel or a weekend getaway, this car delivers performance, style, and reliability.`}
                </p>
                
                {car.specs?.features && car.specs.features.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {car.specs.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="text-primary-500 dark:text-primary-400 mr-2 mt-1">
                            <Star className="w-4 h-4" />
                          </div>
                          <span className="text-secondary-700 dark:text-secondary-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'specs' && (
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  Technical Specifications
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {specificationItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg border border-secondary-200 dark:border-secondary-700"
                    >
                      <div className="flex items-center mb-2">
                        <div className="mr-2 text-primary-500 dark:text-primary-400">
                          {item.icon}
                        </div>
                        <h3 className="text-sm font-medium text-secondary-500 dark:text-secondary-400">
                          {item.label}
                        </h3>
                      </div>
                      <p className="text-lg font-semibold text-secondary-900 dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
