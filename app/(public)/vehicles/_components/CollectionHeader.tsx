// app/(public)/vehicles/_components/CollectionHeader.tsx
import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CollectionHeader() {
  return (
    <div className="relative py-16 bg-secondary-900 dark:bg-secondary-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-800 via-secondary-900 to-black opacity-95"></div>
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: "url('/grid-pattern.svg')", 
            backgroundSize: "30px 30px"
          }}
        ></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-600/30 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary-700/20 rounded-full blur-[120px] -z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader
          title="Explore Our Vehicle Collection"
          description="Browse our premium selection of vehicles and find the perfect car for your needs. Use the filters to narrow down your search and find your dream ride."
          align="center"
          className="max-w-3xl mx-auto"
          titleClassName="text-white"
          descriptionClassName="text-secondary-300 text-lg"
        />
      </div>
    </div>
  );
}
