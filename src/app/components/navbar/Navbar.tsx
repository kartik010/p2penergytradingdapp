"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for Glassmorphic Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/50 shadow-md"
          : "bg-white shadow"
      }`}
    >
      <div className=" px-6 py-4 flex items-center">
       <div className="logo flex justify-content"> <Sun className="h-8 w-8 text-energy-primary text-green-400" />
        <Link href="/">
          <h1 className="text-2xl font-bold w text-gray-700 ml-2">Energy Trade</h1>
        </Link>
       </div> 
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center ml-auto text-md">
          <Link href="/" className="text-gray-500 hover:text-gray-500 hover:text-gray-900">Home</Link>
          <Link href='#FeatureCards'  className="text-gray-500 hover:text-gray-500 hover:text-gray-900">Features</Link>
          <Link href="#FeaturesSection"  className="text-gray-500 hover:text-gray-500 hover:text-gray-900">Snart Grid</Link>
          <Link href="#Installationsetup"  className="text-gray-500 hover:text-gray-500 hover:text-gray-900">Trading Platform</Link>
          <Link href="/trade"  className="px-4 py-2 rounded-lg bg-[#34D399] text-white shadow-md hover:bg-[#2ca583] transition-all duration-300"> Get Started </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md py-4">
          <Link href="/" className="py-2 text-lg text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="py-2 text-lg text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="/services" className="py-2 text-lg text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Smart Grid</Link>
          <Link href="/contact" className="py-2 text-lg text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Trading Platform</Link>
          <Link href="/trade" className="px-4 py-2 rounded-lg bg-[#34D399] text-white font-semibold shadow-md hover:bg-[#2ca583] transition-all duration-300" onClick={() => setIsOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
