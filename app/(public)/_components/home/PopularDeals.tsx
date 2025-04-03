// app/(public)/_components/home/PopularDeals.tsx
"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import CarCard from "@/components/cars/CarCard";
import Button from "@/components/ui/Button";

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
  category: string;
}

type CategoryType = "all" | "luxury" | "suv" | "sports" | "economy";

export default function PopularDeals() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  // Sample car data
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
      price: 180,
      category: "luxury"
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
      price: 210,
      category: "sports"
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
      price: 160,
      category: "sports"
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
      price: 230,
      category: "sports"
    },
    {
      id: 5,
      name: "Tesla Model X",
      image: "/cars/tesla-x.png",
      rating: 4.7,
      reviews: 1895,
      passengers: 7,
      airConditioning: true,
      doors: 5,
      transmission: "Auto",
      price: 190,
      category: "suv"
    },
    {
      id: 6,
      name: "Toyota Corolla",
      image: "/cars/toyota-corolla.png",
      rating: 4.2,
      reviews: 3542,
      passengers: 5,
      airConditioning: true,
      doors: 4,
      transmission: "Auto",
      price: 70,
      category: "economy"
    },
    {
      id: 7,
      name: "Range Rover Sport",
      image: "/cars/range-rover.png",
      rating: 4.6,
      reviews: 1736,
      passengers: 5,
      airConditioning: true,
      doors: 5,
      transmission: "Auto",
      price: 200,
      category: "suv"
    },
    {
      id: 8,
      name: "Honda Civic",
      image: "/cars/honda-civic.png",
      rating: 4.1,
      reviews: 2865,
      passengers: 5,
      airConditioning: true,
      doors: 4,
      transmission: "Auto",
      price: 65,
      category: "economy"
    }
  ];

  const categories = [
    { id: "all", label: "All Vehicles" },
    { id: "luxury", label: "Luxury" },
    { id: "sports", label: "Sports" },
    { id: "suv", label: "SUVs" },
    { id: "economy", label: "Economy" },
  ];

  const filteredCars = activeCategory === "all" 
    ? popularCars
    : popularCars.filter(car => car.category === activeCategory);

  return (
    <section className="py-24 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Popular Vehicles
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
            Most Popular Rental Vehicles
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 text-lg">
            Choose from our selection of premium vehicles at competitive rates
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="inline-flex bg-secondary-100 dark:bg-secondary-800 p-1 rounded-lg shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as CategoryType)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm"
                    : "text-secondary-700 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredCars.slice(0, 4).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Controls and CTA */}
        <div className="flex justify-between items-center">
          {/* Pagination */}
          <div className="hidden md:flex space-x-2">
            <button className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-500 dark:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-500 dark:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* View all button */}
          <div className="mx-auto md:mx-0">
            <Button
              variant="outline"
              size="lg"
              icon={<ArrowRight />}
              iconPosition="right"
              asLink
              href="/vehicles"
            >
              View All Vehicles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
