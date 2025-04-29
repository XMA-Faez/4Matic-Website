// app/(public)/vehicles/_components/vehicle-details/VehicleTabs.tsx
import { Dispatch, SetStateAction } from "react";
import {
  BarChart3,
  Battery,
  Car,
  Fuel,
  Gauge,
  MapPin,
  Star,
  Timer,
  Zap,
} from "lucide-react";
import { Car as CarType } from "@/types/car";

interface VehicleTabsProps {
  car: CarType;
  activeTab: "description" | "specs";
  setActiveTab: Dispatch<SetStateAction<"description" | "specs">>;
}

export default function VehicleTabs({
  car,
  activeTab,
  setActiveTab,
}: VehicleTabsProps) {
  // Create an array of specification items for display
  const specificationItems = [
    {
      icon: <Car className="w-5 h-5" />,
      label: "Engine",
      value: car.specs?.engine || "N/A",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: "Power",
      value: car.specs?.power || "N/A",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Torque",
      value: car.specs?.torque || "N/A",
    },
    {
      icon: <Timer className="w-5 h-5" />,
      label: "0-100 km/h",
      value: car.specs?.acceleration || "N/A",
    },
    {
      icon: <Gauge className="w-5 h-5" />,
      label: "Top Speed",
      value: car.specs?.topSpeed || "N/A",
    },
    {
      icon: <Fuel className="w-5 h-5" />,
      label: "Fuel Type",
      value: car.specs?.fuelType || "N/A",
    },
    {
      icon:
        car.specs?.fuelType === "Electric" ? (
          <Battery className="w-5 h-5" />
        ) : (
          <Fuel className="w-5 h-5" />
        ),
      label: car.specs?.fuelType === "Electric" ? "Range" : "Fuel Consumption",
      value:
        car.specs?.fuelType === "Electric"
          ? car.specs?.range || "N/A"
          : car.specs?.fuelConsumption || "N/A",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Drive",
      value: car.specs?.driveTrain || "N/A",
    },
  ];

  return (
    <div className="mt-10">
      <div className="border-b border-secondary-200 dark:border-secondary-800">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-4 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "description"
                ? "border-primary-500 text-primary-600 dark:text-primary-400"
                : "border-transparent text-secondary-700 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-white"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`py-4 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "specs"
                ? "border-primary-500 text-primary-600 dark:text-primary-400"
                : "border-transparent text-secondary-700 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-white"
            }`}
          >
            Specifications
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-8">
        {activeTab === "description" && (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              About this vehicle
            </h2>
            <p className="text-secondary-700 dark:text-secondary-300">
              {car.description ||
                `The ${car.name} offers a premium driving experience with its powerful engine, comfortable interior, and cutting-edge technology. Whether you're looking for a vehicle for business travel or a weekend getaway, this car delivers performance, style, and reliability.`}
            </p>

            {car.specs?.features && car.specs.features.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {car.specs.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-primary-500 dark:text-primary-400 mr-2 mt-1">
                        <Star className="w-4 h-4" />
                      </div>
                      <span className="text-secondary-700 dark:text-secondary-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "specs" && (
          <div>
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
              Technical Specifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specificationItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg border border-secondary-200 dark:border-secondary-700"
                >
                  <div className="flex items-center mb-2">
                    <div className="mr-2 text-primary-500 dark:text-primary-400">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-medium text-secondary-500 dark:text-secondary-400">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-secondary-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
