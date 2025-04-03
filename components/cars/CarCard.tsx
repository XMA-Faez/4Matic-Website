// components/cars/CarCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Star, Users, Fuel, Gauge, DoorOpen, ArrowRight } from "lucide-react";

interface Car {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  passengers: number;
  airConditioning: boolean;
  doors: number;
  transmission: string;
  price: number;
}

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="group relative bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      {/* Accent top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600"></div>
      
      {/* Car Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-b from-secondary-100 to-white dark:from-secondary-700 dark:to-secondary-800">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary-500/10 transition-opacity duration-300"></div>
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Rating badge */}
        <div className="absolute top-3 left-3 flex items-center bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-secondary-900 dark:text-white text-xs font-medium">{car.rating}</span>
          <span className="text-secondary-500 text-xs ml-1">({car.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Car Name */}
        <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {car.name}
        </h3>
        
        {/* Car Features */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-3 mb-4">
          <div className="flex items-center">
            <Users className="w-4 h-4 text-secondary-500 dark:text-secondary-400 mr-2 flex-shrink-0" />
            <span className="text-secondary-700 dark:text-secondary-300 text-sm">{car.passengers} Seats</span>
          </div>
          <div className="flex items-center">
            <DoorOpen className="w-4 h-4 text-secondary-500 dark:text-secondary-400 mr-2 flex-shrink-0" />
            <span className="text-secondary-700 dark:text-secondary-300 text-sm">{car.doors} Doors</span>
          </div>
          <div className="flex items-center">
            <Gauge className="w-4 h-4 text-secondary-500 dark:text-secondary-400 mr-2 flex-shrink-0" />
            <span className="text-secondary-700 dark:text-secondary-300 text-sm">{car.transmission}</span>
          </div>
          <div className="flex items-center">
            <Fuel className="w-4 h-4 text-secondary-500 dark:text-secondary-400 mr-2 flex-shrink-0" />
            <span className="text-secondary-700 dark:text-secondary-300 text-sm">A/C</span>
          </div>
        </div>
        
        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Price and Action */}
        <div className="flex justify-between items-center pt-4 mt-2 border-t border-secondary-200 dark:border-secondary-800">
          <div>
            <span className="block text-2xl font-bold text-secondary-900 dark:text-white">${car.price}</span>
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">per day</span>
          </div>
          <Link
            href={`/cars/${car.id}`}
            className="inline-flex items-center justify-center bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium px-3 py-2 rounded-md hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
          >
            View details
            <ArrowRight className="ml-1.5 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
