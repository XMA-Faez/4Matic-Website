// app/(public)/_components/home/PopularDeals.tsx
"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import CarCard from "@/components/cars/CarCard";
import Button from "@/components/ui/Button";
import { carsDatabase } from "@/app/(public)/vehicles/_actions/car-database";

type CategoryType = "all" | "luxury" | "suv" | "sports" | "economy" | "minivan";

export default function PopularDeals() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const [popularCars, setPopularCars] = useState(carsDatabase.slice(0, 8));

  // Categories for the filter buttons
  const categories = [
    { id: "all", label: "All Vehicles" },
    { id: "luxury", label: "Luxury" },
    { id: "suv", label: "SUVs" },
    { id: "sports", label: "Sports" },
    { id: "economy", label: "Economy" },
    { id: "minivan", label: "Minivans" },
  ];

  // Effect to filter cars based on selected category
  useEffect(() => {
    let filtered = carsDatabase;
    
    if (activeCategory !== "all") {
      filtered = carsDatabase.filter(car => car.category === activeCategory);
    }
    
    // Sort by rating and limit to 8 cars
    setPopularCars(
      filtered
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8)
    );
  }, [activeCategory]);

  return (
    <section className="py-24 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Featured Vehicles
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
            Our Premium Fleet Selection
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 text-lg">
            Experience the epitome of luxury and performance with our carefully curated vehicle collection
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
          {popularCars.slice(0, 4).map((car) => (
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
              Explore Complete Fleet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
