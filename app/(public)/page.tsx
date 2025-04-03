import Image from "next/image";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import HowItWorks from "./_components/home/HowItWorks";
import WhyChooseUs from "./_components/home/WhyChooseUs";
import PopularDeals from "./_components/home/PopularDeals";
import Testimonials from "./_components/home/Testimonials";

export default function Home() {
  return (
    <div className="w-full h-full bg-secondary-950">
      {/* Navigation bar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center">
          <Image
            src="/logo.jpg" // Replace with your actual logo
            alt="4MATIC Logo"
            width={140}
            height={40}
            className="mr-8"
          />
        </div>

        <div className="flex items-center space-x-6">
          <a href="#" className="text-white hover:text-primary-400 transition">
            Become a renter
          </a>
          <a href="#" className="text-white hover:text-primary-400 transition">
            Rental deals
          </a>
          <a href="#" className="text-white hover:text-primary-400 transition">
            How it work
          </a>
          <a href="#" className="text-white hover:text-primary-400 transition">
            Why choose us
          </a>
          <a
            href="#"
            className="text-white hover:text-primary-400 transition ml-4"
          >
            Sign in
          </a>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition">
            Sign up
          </button>
        </div>
      </nav>

      {/* Main section with content and car image */}
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        {/* Hero section with car image */}
        <div className="relative xl:pl-64 flex grow">
          {/* Left content */}
          <div className="w-1/2 flex flex-col justify-center px-8">
            <h1 className="text-5xl font-bold text-white mb-2">
              Find, book and
              <br />
              rent a car <span className="text-primary-500">Easily</span>
            </h1>
            <p className="text-white mt-4">
              Get a car wherever and whenever you
              <br />
              need it with your iOS and Android device.
            </p>
          </div>

          {/* Right side car image */}
          <div className="w-1/2 relative overflow-hidden">
            <div className="absolute top-0 -right-1/4 w-full h-full">
              <Image
                src="/car-blue-porsche.png"
                alt="Blue sports car"
                fill
                priority
                className="object-cover object-left-top"
                style={{ clipPath: "inset(0 0 0 0)" }}
              />
            </div>
          </div>
        </div>

        {/* Search form section - below the hero and car */}
        <div className="w-full px-8 py-8 bg-secondary-950">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 bg-secondary-950 bg-opacity-60 p-4 rounded border border-secondary-800">
                <MapPinIcon className="text-white h-6 w-6" />
                <div className="flex flex-col">
                  <span className="text-white text-xs">Location</span>
                  <span className="text-white text-sm font-medium">
                    Search your location
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-secondary-950 bg-opacity-60 p-4 rounded border border-secondary-800">
                <CalendarIcon className="text-white h-6 w-6" />
                <div className="flex flex-col">
                  <span className="text-white text-xs">Pickup date</span>
                  <span className="text-white text-sm font-medium">
                    Tue 15 Feb, 09:00
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-secondary-950 bg-opacity-60 p-4 rounded border border-secondary-800">
                <CalendarIcon className="text-white h-6 w-6" />
                <div className="flex flex-col">
                  <span className="text-white text-xs">Return date</span>
                  <span className="text-white text-sm font-medium">
                    Thu 18 Feb, 11:00
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium w-40 py-3 rounded transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <HowItWorks />
      <WhyChooseUs />
      <PopularDeals />
      <Testimonials />
    </div>
  );
}
