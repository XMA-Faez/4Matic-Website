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
    images: [
      "/cars/jaguar-xe-1.jpg",
      "/cars/jaguar-xe-2.jpg",
      "/cars/jaguar-xe-3.jpg",
      "/cars/jaguar-xe-4.jpg",
    ],
    rating: 4.8,
    reviews: 2435,
    passengers: 4,
    airConditioning: true,
    doors: 4,
    transmission: "Auto",
    price: 180,
    category: "luxury",
    brand: "jaguar",
    description: "Experience luxury and performance with the Jaguar XE L P250. This premium sedan combines elegant design with powerful performance and advanced technology for an exceptional driving experience.",
    specs: {
      engine: "2.0L Turbocharged",
      power: "250 hp",
      torque: "365 Nm",
      acceleration: "6.5 sec (0-100 km/h)",
      topSpeed: "242 km/h",
      fuelType: "Gasoline",
      fuelConsumption: "7.5 L/100km",
      driveTrain: "RWD",
      features: [
        "Premium leather seats",
        "Panoramic sunroof",
        "Meridian sound system",
        "10-inch touchscreen",
        "Navigation system",
        "Apple CarPlay & Android Auto",
        "Wireless charging",
        "Driver assistance package"
      ]
    }
  },
  {
    id: 2,
    name: "Audi R8",
    image: "/cars/audi-r8.png",
    images: [
      "/cars/audi-r8-1.jpg",
      "/cars/audi-r8-2.jpg",
      "/cars/audi-r8-3.jpg",
      "/cars/audi-r8-4.jpg",
    ],
    rating: 4.6,
    reviews: 1936,
    passengers: 2,
    airConditioning: true,
    doors: 2,
    transmission: "Auto",
    price: 210,
    category: "sports",
    brand: "audi",
    description: "The Audi R8 is a true supercar that delivers breathtaking performance and head-turning design. With its mid-mounted V10 engine and quattro all-wheel drive, it offers an exhilarating driving experience like no other.",
    specs: {
      engine: "5.2L V10",
      power: "540 hp",
      torque: "540 Nm",
      acceleration: "3.7 sec (0-100 km/h)",
      topSpeed: "320 km/h",
      fuelType: "Gasoline",
      fuelConsumption: "13.3 L/100km",
      driveTrain: "AWD",
      features: [
        "Carbon fiber interior",
        "Bang & Olufsen sound",
        "Virtual cockpit",
        "Nappa leather",
        "LED headlights",
        "Magnetic ride suspension",
        "Front and rear parking sensors",
        "Sport exhaust system"
      ]
    }
  },
  {
    id: 3,
    name: "BMW M3",
    image: "/cars/bmw-m3.png",
    images: [
      "/cars/bmw-m3-1.jpg",
      "/cars/bmw-m3-2.jpg",
      "/cars/bmw-m3-3.jpg",
      "/cars/bmw-m3-4.jpg",
    ],
    rating: 4.5,
    reviews: 2036,
    passengers: 4,
    airConditioning: true,
    doors: 4,
    transmission: "Auto",
    price: 160,
    category: "sports",
    brand: "bmw",
    description: "The BMW M3 is the high-performance version of the 3 Series, offering an ideal blend of everyday usability and track-ready performance. With its powerful engine and precise handling, it delivers a driving experience that's both exhilarating and refined.",
    specs: {
      engine: "3.0L Twin-Turbo Inline-6",
      power: "473 hp",
      torque: "550 Nm",
      acceleration: "4.1 sec (0-100 km/h)",
      topSpeed: "290 km/h",
      fuelType: "Gasoline",
      fuelConsumption: "10.2 L/100km",
      driveTrain: "RWD",
      features: [
        "M Sport differential",
        "Adaptive M suspension",
        "M Sport seats",
        "Harman Kardon audio",
        "Head-up display",
        "Ambient lighting",
        "BMW Live Cockpit Professional",
        "M Drive Professional"
      ]
    }
  },
  {
    id: 4,
    name: "Lamborghini Huracan",
    image: "/cars/lamborghini-huracan.png",
    images: [
      "/cars/lamborghini-huracan-1.jpg",
      "/cars/lamborghini-huracan-2.jpg",
      "/cars/lamborghini-huracan-3.jpg",
      "/cars/lamborghini-huracan-4.jpg",
    ],
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    airConditioning: true,
    doors: 2,
    transmission: "Auto",
    price: 230,
    category: "sports",
    brand: "lamborghini",
    description: "The Lamborghini Huracan is the epitome of Italian supercar excellence, combining aggressive styling with phenomenal performance. Its naturally aspirated V10 engine delivers a visceral experience that will leave you breathless.",
    specs: {
      engine: "5.2L V10",
      power: "630 hp",
      torque: "600 Nm",
      acceleration: "2.9 sec (0-100 km/h)",
      topSpeed: "325 km/h",
      fuelType: "Gasoline",
      fuelConsumption: "14.5 L/100km",
      driveTrain: "AWD",
      features: [
        "Carbon ceramic brakes",
        "Magnetorheological suspension",
        "LDVI dynamic control system",
        "8.4-inch touchscreen",
        "Apple CarPlay",
        "Alcantara interior",
        "Lamborghini telemetry",
        "Launch control"
      ]
    }
  },
  {
    id: 5,
    name: "Tesla Model X",
    image: "/cars/tesla-x.png",
    images: [
      "/cars/tesla-x-1.jpg",
      "/cars/tesla-x-2.jpg",
      "/cars/tesla-x-3.jpg",
      "/cars/tesla-x-4.jpg",
    ],
    rating: 4.7,
    reviews: 1895,
    passengers: 7,
    airConditioning: true,
    doors: 5,
    transmission: "Auto",
    price: 190,
    category: "suv",
    brand: "tesla",
    description: "The Tesla Model X is a fully electric SUV that combines cutting-edge technology, exceptional performance, and innovative design. With its distinctive falcon-wing doors and spacious interior, it offers a unique blend of practicality and luxury.",
    specs: {
      engine: "Dual Electric Motors",
      power: "670 hp",
      torque: "750 Nm",
      acceleration: "3.9 sec (0-100 km/h)",
      topSpeed: "250 km/h",
      fuelType: "Electric",
      range: "560 km",
      driveTrain: "AWD",
      features: [
        "17-inch touchscreen",
        "Autopilot",
        "Falcon wing doors",
        "HEPA air filtration",
        "Premium audio system",
        "Wireless charging",
        "Glass panoramic roof",
        "Adaptive air suspension"
      ]
    }
  },
  {
    id: 6,
    name: "Toyota Corolla",
    image: "/cars/toyota-corolla.png",
    images: [
      "/cars/toyota-corolla-1.jpg",
      "/cars/toyota-corolla-2.jpg",
      "/cars/toyota-corolla-3.jpg",
      "/cars/toyota-corolla-4.jpg",
    ],
    rating: 4.2,
    reviews: 3542,
    passengers: 5,
    airConditioning: true,
    doors: 4,
    transmission: "Auto",
    price: 70,
    category: "economy",
    brand: "toyota",
    description: "The Toyota Corolla is one of the world's most popular compact cars, known for its reliability, efficiency, and value. With its comfortable interior and modern features, it's an excellent choice for everyday driving.",
    specs: {
      engine: "1.8L Inline-4",
      power: "139 hp",
      torque: "172 Nm",
      acceleration: "10.5 sec (0-100 km/h)",
      topSpeed: "180 km/h",
      fuelType: "Gasoline",
      fuelConsumption: "6.2 L/100km",
      driveTrain: "FWD",
      features: [
        "Toyota Safety Sense",
        "8-inch touchscreen",
        "Apple CarPlay & Android Auto",
        "Automatic climate control",
        "LED headlights",
        "60/40 split rear seats",
        "Smart key with push button start",
        "Backup camera"
      ]
    }
  },
  {
    id: 7,
    name: "Range Rover Sport",
    image: "/cars/range-rover.png",
    images: [
      "/cars/range-rover-1.jpg",
      "/cars/range-rover-2.jpg",
      "/cars/range-rover-3.jpg",
      "/cars/range-rover-4.jpg",
    ],
    rating: 4.6,
    reviews: 1736,
    passengers: 5,
    airConditioning: true,
    doors: 5,
    transmission: "Auto",
    price: 200,
    category: "suv",
    brand: "range-rover",
    description: "The Range Rover Sport combines luxury, performance, and off-road capability in a sleek, dynamic package. With its sophisticated design and advanced technology, it delivers a premium driving experience both on and off the road.",
    specs: {
      engine: "3.0L MHEV Inline-6",
      power: "355 hp",
      torque: "500 Nm",
      acceleration: "6.2 sec (0-100 km/h)",
      topSpeed: "225 km/h",
      fuelType: "Gasoline",
      fuelConsumption: "9.8 L/100km",
      driveTrain: "4WD",
      features: [
        "Terrain Response 2",
        "Meridian sound system",
        "Pivi Pro infotainment",
        "Interactive driver display",
        "Windsor leather seats",
        "Adaptive dynamics",
        "All-terrain progress control",
        "ClearSight ground view"
      ]
    }
  },
  {
    id: 8,
    name: "Honda Civic",
    image: "/cars/honda-civic.png",
    images: [
      "/cars/honda-civic-1.jpg",
      "/cars/honda-civic-2.jpg",
      "/cars/honda-civic-3.jpg",
      "/cars/honda-civic-4.jpg",
    ],
    rating: 4.1,
    reviews: 2865,
    passengers: 5,
    airConditioning: true,
    doors: 4,
    transmission: "Auto",
    price: 65,
    category: "economy",
    brand: "honda",
    description: "The Honda Civic is a versatile and fuel-efficient compact car that offers a surprisingly spacious interior and engaging driving dynamics. With its modern design and comprehensive feature set, it's a standout in its class.",
    specs: {
      engine: "1.5L Turbocharged Inline-4",
      power: "158 hp",
      torque: "240 Nm",
      acceleration: "8.2 sec (0-100 km/h)",
      topSpeed: "210 km/h",
      fuelType: "Gasoline",
      fuelConsumption: "6.5 L/100km",
      driveTrain: "FWD",
      features: [
        "Honda Sensing safety suite",
        "7-inch touchscreen",
        "Apple CarPlay & Android Auto",
        "Multi-angle rearview camera",
        "Automatic climate control",
        "Remote engine start",
        "Honda LaneWatch",
        "Adaptive cruise control"
      ]
    }
  },
  {
    id: 9,
    name: "Mercedes-Benz S-Class",
    image: "/cars/mercedes-s-class.png",
    images: [
      "/cars/mercedes-s-class-1.jpg",
      "/cars/mercedes-s-class-2.jpg",
      "/cars/mercedes-s-class-3.jpg",
      "/cars/mercedes-s-class-4.jpg",
    ],
    rating: 4.9,
    reviews: 1654,
    passengers: 5,
    airConditioning: true,
    doors: 4,
    transmission: "Auto",
    price: 220,
    category: "luxury",
    brand: "mercedes",
    description: "The Mercedes-Benz S-Class represents the pinnacle of luxury and technology in the automotive world. With its opulent interior, cutting-edge features, and exceptional comfort, it delivers an unmatched premium experience.",
    specs: {
      engine: "3.0L Inline-6 with EQ Boost",
      power: "429 hp",
      torque: "520 Nm",
      acceleration: "4.9 sec (0-100 km/h)",
      topSpeed: "250 km/h",
      fuelType: "Gasoline",
      fuelConsumption: "8.2 L/100km",
      driveTrain: "AWD",
      features: [
        "MBUX with augmented reality",
        "Burmester 4D surround sound",
        "Active ambient lighting",
        "E-Active body control",
        "Rear-wheel steering",
        "Digital Light headlights",
        "Executive rear seats",
        "Interior assistant"
      ]
    }
  },
  {
    id: 10,
    name: "Ford Mustang",
    image: "/cars/ford-mustang.png",
    images: [
      "/cars/ford-mustang-1.jpg",
      "/cars/ford-mustang-2.jpg",
      "/cars/ford-mustang-3.jpg",
      "/cars/ford-mustang-4.jpg",
    ],
    rating: 4.4,
    reviews: 3256,
    passengers: 4,
    airConditioning: true,
    doors: 2,
    transmission: "Auto",
    price: 150,
    category: "sports",
    brand: "ford",
    description: "The Ford Mustang is an American icon that continues to deliver thrilling performance and unmistakable style. With its powerful engine options and athletic handling, it offers an authentic muscle car experience with modern technology.",
    specs: {
      engine: "5.0L V8",
      power: "460 hp",
      torque: "570 Nm",
      acceleration: "4.5 sec (0-100 km/h)",
      topSpeed: "250 km/h",
      fuelType: "Gasoline",
      fuelConsumption: "12.5 L/100km",
      driveTrain: "RWD",
      features: [
        "Track Apps",
        "SYNC 3 infotainment",
        "Digital instrument cluster",
        "MagneRide damping system",
        "Active valve performance exhaust",
        "Recaro sport seats",
        "Launch control",
        "Line-lock (track use only)"
      ]
    }
  },
  {
    id: 11,
    name: "Volkswagen Golf",
    image: "/cars/volkswagen-golf.png",
    images: [
      "/cars/volkswagen-golf-1.jpg",
      "/cars/volkswagen-golf-2.jpg",
      "/cars/volkswagen-golf-3.jpg",
      "/cars/volkswagen-golf-4.jpg",
    ],
    rating: 4.3,
    reviews: 2987,
    passengers: 5,
    airConditioning: true,
    doors: 4,
    transmission: "Auto",
    price: 85,
    category: "economy",
    brand: "volkswagen",
    description: "The Volkswagen Golf is a versatile compact car that offers a premium feel at an accessible price point. With its refined driving dynamics, high-quality interior, and practicality, it's a benchmark in its segment.",
    specs: {
      engine: "1.4L Turbocharged Inline-4",
      power: "147 hp",
      torque: "250 Nm",
      acceleration: "8.5 sec (0-100 km/h)",
      topSpeed: "220 km/h",
      fuelType: "Gasoline",
      fuelConsumption: "6.5 L/100km",
      driveTrain: "FWD",
      features: [
        "Digital cockpit",
        "8-inch touchscreen",
        "Apple CarPlay & Android Auto",
        "Adaptive cruise control",
        "Lane assist",
        "Blind spot monitoring",
        "Dual-zone climate control",
        "LED headlights"
      ]
    }
  },
  {
    id: 12,
    name: "Porsche 911",
    image: "/cars/porsche-911.png",
    images: [
      "/cars/porsche-911-1.jpg",
      "/cars/porsche-911-2.jpg",
      "/cars/porsche-911-3.jpg",
      "/cars/porsche-911-4.jpg",
    ],
    rating: 4.8,
    reviews: 1843,
    passengers: 2,
    airConditioning: true,
    doors: 2,
    transmission: "Auto",
    price: 240,
    category: "sports",
    brand: "porsche",
    description: "The Porsche 911 is the definitive sports car, combining timeless design with exhilarating performance. With its rear-engine layout and precise handling, it delivers a driving experience that's been refined over decades of engineering excellence.",
    specs: {
      engine: "3.0L Twin-Turbocharged Flat-6",
      power: "379 hp",
      torque: "450 Nm",
      acceleration: "4.0 sec (0-100 km/h)",
      topSpeed: "293 km/h",
      fuelType: "Gasoline",
      fuelConsumption: "9.4 L/100km",
      driveTrain: "RWD",
      features: [
        "Porsche Communication Management",
        "Sport Chrono Package",
        "Porsche Active Suspension Management",
        "Bose surround sound",
        "Adaptive sports seats",
        "Sport exhaust system",
        "Porsche Torque Vectoring",
        "Wet mode"
      ]
    }
  }
];

export async function getCars(params: GetCarsParams) {
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

// Get a specific car by ID
export async function getCar(id: number) {
  // Simulate database request latency
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Find the car by ID
  return carsDatabase.find(car => car.id === id) || null;
}

// Get related cars based on category
export async function getRelatedCars(currentCarId: number, category: string, limit: number = 4) {
  // Simulate database request latency
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Find cars in the same category, excluding the current car
  const relatedCars = carsDatabase
    .filter(car => car.category === category && car.id !== currentCarId)
    .sort(() => Math.random() - 0.5) // Simple random sorting
    .slice(0, limit);
  
  return relatedCars;
}
