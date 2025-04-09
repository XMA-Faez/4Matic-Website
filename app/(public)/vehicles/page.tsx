// app/(public)/vehicles/page.tsx
import { Metadata } from "next";
import { Suspense } from "react";
import CarCollection from "./_components/CarCollection";
import FilterSidebar from "./_components/FilterSidebar";
import CollectionHeader from "./_components/CollectionHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loading from "./_components/Loading";

export const metadata: Metadata = {
  title: "4MATIC | Browse Our Vehicle Collection",
  description: "Explore our premium selection of vehicles. Find the perfect car for your needs with our easy-to-use filtering options.",
};

interface VehiclesPageProps {
  searchParams: {
    category?: string;
    brand?: string;
    minPrice?: string;
    maxPrice?: string;
    passengers?: string;
    sort?: string;
    page?: string;
  };
}

export default function VehiclesPage({ searchParams }: VehiclesPageProps) {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-secondary-950">
      <Header />
      <main className="pt-24">
        {/* Page Header */}
        <CollectionHeader />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-1/4">
              <FilterSidebar />
            </div>
            
            {/* Car Collection */}
            <div className="w-full lg:w-3/4">
              <Suspense fallback={<Loading />}>
                <CarCollection searchParams={searchParams} />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
