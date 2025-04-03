// components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  CreditCard,
  ShieldCheck,
  Clock,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Vehicles", href: "/vehicles" },
    { name: "Pricing", href: "/pricing" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact-us" },
  ];
  
  const vehicleTypes = [
    { name: "Economy Cars", href: "/vehicles/economy" },
    { name: "SUVs", href: "/vehicles/suv" },
    { name: "Luxury Cars", href: "/vehicles/luxury" },
    { name: "Sports Cars", href: "/vehicles/sports" },
    { name: "Vans", href: "/vehicles/vans" },
    { name: "Electric Vehicles", href: "/vehicles/electric" },
  ];
  
  const customerSupport = [
    { name: "FAQ", href: "/faq" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Rental Policy", href: "/policy" },
    { name: "Insurance", href: "/insurance" },
    { name: "Roadside Assistance", href: "/roadside-assistance" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-white dark:bg-secondary-950 border-t border-secondary-200 dark:border-secondary-800">
      {/* Trust badges section */}
      <div className="border-b border-secondary-200 dark:border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-100 dark:bg-primary-900/40 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-medium text-secondary-900 dark:text-white">Secure Payments</h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">All major cards accepted</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-primary-100 dark:bg-primary-900/40 p-3 rounded-full">
                <ShieldCheck className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-medium text-secondary-900 dark:text-white">Full Insurance</h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">All rentals fully covered</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-primary-100 dark:bg-primary-900/40 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-medium text-secondary-900 dark:text-white">24/7 Support</h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Help whenever you need it</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-primary-100 dark:bg-primary-900/40 p-3 rounded-full">
                <CheckCircle2 className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-medium text-secondary-900 dark:text-white">Free Cancellation</h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Up to 48 hours before</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <Image 
                src="/logo.jpg" 
                alt="4MATIC Logo" 
                width={130} 
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Premium car rental service offering a wide selection of vehicles for business and leisure travel. Experience the road with comfort and style.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
                <span className="text-secondary-600 dark:text-secondary-400">+1 (888) 123-4567</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
                <span className="text-secondary-600 dark:text-secondary-400">contact@4matic.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
                <span className="text-secondary-600 dark:text-secondary-400">123 Rental Street, NY 10001, USA</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Vehicle Types */}
          <div>
            <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-6">Vehicle Types</h3>
            <ul className="space-y-3">
              {vehicleTypes.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support & Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-6">Customer Support</h3>
            <ul className="space-y-3 mb-8">
              {customerSupport.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-3">Newsletter</h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow px-3 py-2 bg-secondary-50 dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="bg-secondary-50 dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-800 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-4 md:mb-0">
            © {currentYear} 4MATIC Car Rentals. All rights reserved.
          </p>
          
          {/* Social links */}
          <div className="flex space-x-4">
            <a href="#" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
