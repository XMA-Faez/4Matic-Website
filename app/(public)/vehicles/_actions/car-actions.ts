// app/(public)/vehicles/_actions/car-actions.ts
"use server";

import { carsDatabase } from "./car-database";
import { MAX_PRICE } from "./car-config";

interface GetCarsParams {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  passengers?: number;
  sort?: string;
  page?: number;
  pageSize?: number;
}

export async function getCars(params: GetCarsParams) {
  const { 
    category, 
    brand, 
    minPrice = 0, 
    maxPrice = MAX_PRICE, // Use MAX_PRICE from config
    passengers, 
    sort = "recommended", 
    page = 1, 
    pageSize = 9 
  } = params;
  
  // Simulate database request latency
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Filter cars based on criteria
  let filteredCars = [...carsDatabase];
  
  // Apply category filter
  if (category && category !== "all") {
    filteredCars = filteredCars.filter(car => car.category === category);
  }
  
  // Apply brand filter
  if (brand && brand !== "all") {
    filteredCars = filteredCars.filter(car => car.brand === brand);
  }
  
  // Apply price range filter
  filteredCars = filteredCars.filter(car => car.price >= minPrice && car.price <= maxPrice);
  
  // Apply passengers filter
  if (passengers) {
    if (passengers === 6) {
      filteredCars = filteredCars.filter(car => car.passengers >= 6); // 6+ passengers
    } else {
      filteredCars = filteredCars.filter(car => car.passengers === passengers);
    }
  }
  
  // Apply sorting
  filteredCars.sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating-desc":
        return b.rating - a.rating;
      default:
        // Default "recommended" sort - could be a weighted score in a real app
        // Modified to use MAX_PRICE instead of hardcoded value
        return b.rating * 0.7 + (1 - b.price / MAX_PRICE) * 0.3 - (a.rating * 0.7 + (1 - a.price / MAX_PRICE) * 0.3);
    }
  });
  
  // Count total cars before pagination
  const totalCars = filteredCars.length;
  
  // Apply pagination
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedCars = filteredCars.slice(start, end);
  
  return {
    cars: paginatedCars,
    totalCars
  };
}

// Get a specific car by ID
export async function getCar(id: string) {
  // Simulate database request latency
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Find the car by ID
  return carsDatabase.find(car => car.id === id) || null;
}

// Get related cars based on category
export async function getRelatedCars(currentCarId: string, category: string, limit: number = 4) {
  // Simulate database request latency
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Find cars in the same category, excluding the current car
  const relatedCars = carsDatabase
    .filter(car => car.category === category && car.id !== currentCarId)
    .sort(() => Math.random() - 0.5) // Simple random sorting
    .slice(0, limit);
  
  return relatedCars;
}
