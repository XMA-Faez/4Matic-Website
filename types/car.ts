// types/car.ts

export interface Car {
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
  brand: string;
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
