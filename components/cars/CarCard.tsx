// components/cars/CarCard.tsx
import Image from "next/image";
import { Star, Users, Wind, DoorOpen } from "lucide-react";
import Link from "next/link";

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
    <div className="bg-secondary-900 rounded-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-1">
      {/* Car Image with Overlay Gradient */}
      <div className="relative h-20 py-20 overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-105 p-2"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-900"></div>
        
        {/* Rating in image */}
        <div className="absolute top-3 left-3 flex items-center bg-black/60 px-2 py-1 rounded-md">
          <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 mr-1" />
          <span className="text-white text-xs font-medium">{car.rating}</span>
        </div>
      </div>

      {/* Car Details */}
      <div className="p-5">
        {/* Car Name */}
        <h3 className="text-white text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
          {car.name}
        </h3>

        {/* Car Features */}
        <div className="flex justify-between mb-5">
          <div className="flex items-center">
            <Users className="w-4 h-4 text-secondary-400 mr-2" />
            <span className="text-secondary-300 text-sm">{car.passengers} People</span>
          </div>
          <div className="flex items-center">
            <DoorOpen className="w-4 h-4 text-secondary-400 mr-2" />
            <span className="text-secondary-300 text-sm">{car.doors} Doors</span>
          </div>
          <div className="flex items-center">
            <Wind className="w-4 h-4 text-secondary-400 mr-2" />
            <span className="text-secondary-300 text-sm">{car.transmission}</span>
          </div>
        </div>

        {/* Price and Book Button */}
        <div className="flex justify-between items-center pt-4 border-t border-secondary-800">
          <div>
            <span className="block text-white text-2xl font-bold">${car.price}</span>
            <span className="text-primary-300 text-sm">per day</span>
          </div>
          <Link
            href={`/cars/${car.id}`}
            className="bg-primary-700 hover:bg-primary-600 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Rent Now
          </Link>
        </div>
      </div>
    </div>
  );
}
