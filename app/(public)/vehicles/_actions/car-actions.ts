// app/(public)/vehicles/_actions/car-actions.ts
"use server";

import { Car } from "@/types/car";

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

// This is a mock database for demo purposes
// In a real application, you would connect to your CMS here
const carsDatabase: Car[] = [
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
    category: "luxury",
    brand: "jaguar"
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
    category: "sports",
    brand: "audi"
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
    category: "sports",
    brand: "bmw"
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
    category: "sports",
    brand: "lamborghini"
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
    category: "suv",
    brand: "tesla"
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
    category: "economy",
    brand: "toyota"
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
    category: "suv",
    brand: "range-rover"
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
    category: "economy",
    brand: "honda"
  },
  {
    id: 9,
    name: "Mercedes-Benz S-Class",
    image: "/cars/mercedes-s-class.png",
    rating: 4.9,
    reviews: 1654,
    passengers: 5,
    airConditioning: true,
    doors: 4,
    transmission: "Auto",
    price: 220,
    category: "luxury",
    brand: "mercedes"
  },
  {
    id: 10,
    name: "Ford Mustang",
    image: "/cars/ford-mustang.png",
    rating: 4.4,
    reviews: 3256,
    passengers: 4,
    airConditioning: true,
    doors: 2,
    transmission: "Auto",
    price: 150,
    category: "sports",
    brand: "ford"
  },
  {
    id: 11,
    name: "Volkswagen Golf",
    image: "/cars/volkswagen-golf.png",
    rating: 4.3,
    reviews: 2987,
    passengers: 5,
    airConditioning: true,
    doors: 4,
    transmission: "Auto",
    price: 85,
    category: "economy",
    brand: "volkswagen"
  },
  {
    id: 12,
    name: "Porsche 911",
    image: "/cars/porsche-911.png",
    rating: 4.8,
    reviews: 1843,
    passengers: 2,
    airConditioning: true,
    doors: 2,
    transmission: "Auto",
    price: 240,
    category: "sports",
    brand: "porsche"
  },
  {
    id: 13,
    name: "Toyota RAV4",
    image: "/cars/toyota-rav4.png",
    rating: 4.4,
    reviews: 3125,
    passengers: 5,
    airConditioning: true,
    doors: 5,
    transmission: "Auto",
    price: 110,
    category: "suv",
    brand: "toyota"
  },
  {
    id: 14,
    name: "Audi A4",
    image: "/cars/audi-a4.png",
    rating: 4.5,
    reviews: 2365,
    passengers: 5,
    airConditioning: true,
    doors: 4,
    transmission: "Auto",
    price: 140,
    category: "luxury",
    brand: "audi"
  },
  {
    id: 15,
    name: "BMW X5",
    image: "/cars/bmw-x5.png",
    rating: 4.7,
    reviews: 1965,
    passengers: 5,
    airConditioning: true,
    doors: 5,
    transmission: "Auto",
    price: 190,
    category: "suv",
    brand: "bmw"
  },
  {
    id: 16,
    name: "Tesla Model 3",
    image: "/cars/tesla-3.png",
    rating: 4.6,
    reviews: 2438,
    passengers: 5,
    airConditioning: true,
    doors: 4,
    transmission: "Auto",
    price: 160,
    category: "electric",
    brand: "tesla"
  },
  {
    id: 17,
    name: "Mercedes-Benz G-Class",
    image: "/cars/mercedes-g-class.png",
    rating: 4.5,
    reviews: 1325,
    passengers: 5,
    airConditioning: true,
    doors: 5,
    transmission: "Auto",
    price: 250,
    category: "suv",
    brand: "mercedes"
  },
  {
    id: 18,
    name: "Honda Accord",
    image: "/cars/honda-accord.png",
    rating: 4.3,
    reviews: 3042,
    passengers: 5,
    airConditioning: true,
    doors: 4,
    transmission: "Auto",
    price: 90,
    category: "economy",
    brand: "honda"
  }
];

export async function getCars(params: GetCarsParams) {
  // Destructure params
  const {
    category,
    brand,
    minPrice = 0,
    maxPrice = 500,
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
    filteredCars = filteredCars.filter(car => {
      if (passengers === 6) {
        return car.passengers >= 6; // 6+ passengers
      }
      return car.passengers === passengers;
    });
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
        return b.rating * 0.7 + (1 - b.price / 300) * 0.3 - (a.rating * 0.7 + (1 - a.price / 300) * 0.3);
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
