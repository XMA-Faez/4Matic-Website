// app/(public)/_components/home/PopularDeals.tsx
import { ArrowRight } from "lucide-react";
import CarCard from "@/components/cars/CarCard";
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

export default function PopularDeals() {
  // Sample car data - in a real app, this would come from an API or props
  const popularCars: Car[] = [
    {
      id: 1,
      name: "Jaguar XE L P250",
      image: "/cars/jaguar-xe.png",
      rating: 4.8,
      reviews: 2435,
      passengers: 4,
      airConditioning: true,
      doors: 4,
      transmission: "Auto",
      price: 1800,
    },
    {
      id: 2,
      name: "Audi R8",
      image: "/cars/audi-r8.png",
      rating: 4.6,
      reviews: 1936,
      passengers: 2,
      airConditioning: true,
      doors: 2,
      transmission: "Auto",
      price: 2100,
    },
    {
      id: 3,
      name: "BMW M3",
      image: "/cars/bmw-m3.png",
      rating: 4.5,
      reviews: 2036,
      passengers: 4,
      airConditioning: true,
      doors: 4,
      transmission: "Auto",
      price: 1600,
    },
    {
      id: 4,
      name: "Lamborghini Huracan",
      image: "/cars/lamborghini-huracan.png",
      rating: 4.3,
      reviews: 2236,
      passengers: 2,
      airConditioning: true,
      doors: 2,
      transmission: "Auto",
      price: 2300,
    },
  ];

  return (
    <section className="bg-secondary-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 font-medium tracking-wider text-sm uppercase mb-3">
            Popular Rental Deals
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
            Most Popular Cars Rental Deals
          </h2>
        </div>

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="mt-16 text-center">
          <Link
            href="/vehicles"
            className="inline-flex items-center border border-gray-700 bg-transparent hover:bg-gray-800 text-white text-base font-medium px-8 py-4 rounded-md transition-colors"
          >
            Show all vehicles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
