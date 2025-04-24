// types/car.ts

export interface CarSpecs {
  engine: string;
  power: string;
  torque: string;
  acceleration: string;
  topSpeed: string;
  fuelType: string;
  fuelConsumption?: string;
  range?: string; // For electric vehicles
  driveTrain: string;
  features: string[];
}

export interface Car {
  id: number;
  name: string;
  image: string;
  images?: string[]; // Array of image URLs for the car gallery
  rating: number;
  reviews: number;
  passengers: number;
  airConditioning: boolean;
  doors: number;
  transmission: string;
  price: number;
  category: string;
  brand: string;
  description?: string;
  specs?: CarSpecs;
}

export interface CarFilters {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  passengers?: number;
  sort?: 'recommended' | 'price-asc' | 'price-desc' | 'rating-desc';
  page?: number;
  pageSize?: number;
}
