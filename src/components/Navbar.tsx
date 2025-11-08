"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/pages/about" },
    {
      name: "Products",
      href: "#",
      dropdown: [
        { name: "Handicraft Items", href: "/pages/products/handicrafts" },
        { name: "Home Decor", href: "/pages/products/home-decor" },
        { name: "Custom Creations", href: "/pages/products/custom" },
        { name: "Gift Collections", href: "/pages/products/gifts" },
      ],
    },
    { name: "Gallery", href: "/pages/gallery" },
    { name: "Contact", href: "/pages/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed w-full z-50 mobile-navbar-adjust">
      {/* 🔹 Top Bar */}
      <div className="hidden md:block bg-[#0e1a18] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center py-2 gap-2 md:gap-0">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <a href="tel:+917062844125" className="flex items-center gap-1 hover:text-emerald-400 transition">
              <Phone size={14} /> +91 70628 44125 
            </a>
            <a href="https://wa.me/917062844125" target="_blank" className="flex items-center gap-1 hover:text-emerald-400 transition">
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a href="mailto:info@poojaartcraft.com" className="flex items-center gap-1 hover:text-emerald-400 transition">
              <Mail size={14} /> info@poojaartcraft.com
            </a>
          </div>

          <div className="text-center md:text-right text-gray-300">
            GSTIN: 08JMQPS6920A1ZM
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#0e1a18]/90 shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex items-center justify-between h-16 md:mt-0 mt-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo.jpg"
              alt="Pooja Art & Craft Logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <Link
              href="/"
              className="hidden md:block text-2xl md:text-3xl font-extrabold text-white"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Pooja Art & Craft
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8 text-lg items-center text-white">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 transition-colors hover:text-emerald-500 ${
                    isActive(item.href)
                      ? "text-emerald-400 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                  {item.dropdown && <FiChevronDown className="mt-1" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 bg-[#0e1a18]/95 border border-gray-700 rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 shadow-lg z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`block px-4 py-2 transition-colors ${
                          isActive(sub.href)
                            ? "text-emerald-400 font-semibold"
                            : "text-gray-300 hover:text-emerald-500"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() =>
                document.getElementById("globalQuoteButton")?.click()
              }
              className="border border-white text-white px-5 py-2 rounded-lg hover:bg-white hover:text-[#0e1a18] transition-all duration-300"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Logo + Toggle */}
          <div className="flex md:hidden flex-1 justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-white mx-auto pr-5"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Pooja Art & Craft
            </Link>
            <button
              className="text-2xl text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden bg-[#0e1a18]/95 text-white px-6 py-4 space-y-2 backdrop-blur-sm rounded-b-md shadow-lg">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="w-full flex justify-between items-center py-2 hover:text-emerald-500 transition-colors"
                      onClick={toggleProducts}
                    >
                      {item.name}{" "}
                      <FiChevronDown
                        className={`ml-1 transition-transform ${
                          isProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isProductsOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block py-2 transition-colors ${
                              isActive(sub.href)
                                ? "text-emerald-400 font-semibold"
                                : "hover:text-emerald-500"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-2 transition-colors ${
                      isActive(item.href)
                        ? "text-emerald-400 font-semibold"
                        : "hover:text-emerald-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4">
              <Link
                href="/pages/contact"
                className="block text-center border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#0e1a18] transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
