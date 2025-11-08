"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#0e1a18]/95 text-gray-200 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Business Info */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logo.jpg"
                alt="Pooja Art & Craft Logo"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <span
              className="text-3xl md:text-3xl font-bold text-white"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Pooja Art & Craft
            </span>
          </Link>

          <p className="text-gray-400 text-[15px] md:text-[16px] leading-relaxed">
            India&apos;s leading Handicraft &amp; Home Décor manufacturer,
            creating premium handcrafted items that reflect traditional artistry
            and modern elegance. Every product is made with love and precision.
          </p>

          <p className="text-gray-400 text-[15px]">GSTIN: 08JMQPS6920A1ZM</p>

          {/* Socials */}
          <div className="flex space-x-4 mt-3 text-lg md:text-xl">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md hover:scale-110 transition-all duration-500 hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E1306C] text-white shadow-md hover:scale-110 transition-all duration-500 hover:-translate-y-1"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077B5] text-white shadow-md hover:scale-110 transition-all duration-500 hover:-translate-y-1"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/917062844125"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:scale-110 transition-all duration-500 hover:-translate-y-1"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links & Categories combined for mobile */}
        <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-2">
          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3
              className="text-2xl md:text-3xl font-semibold text-white"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2 text-[15px] md:text-[16px] text-gray-400">
              <li>
                <Link href="/" className="hover:text-emerald-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-emerald-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="flex flex-col space-y-3">
            <h3
              className="text-2xl md:text-3xl font-semibold text-white"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Our Creations
            </h3>
            <ul className="space-y-2 text-[15px] md:text-[16px] text-gray-400">
              <li>
                <Link
                  href="/products/handicrafts"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Handcrafted Items
                </Link>
              </li>
              <li>
                <Link
                  href="/products/home-decor"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Home Décor
                </Link>
              </li>
              <li>
                <Link
                  href="/products/custom-designs"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Custom Craft Designs
                </Link>
              </li>
              <li>
                <Link
                  href="/products/gift-items"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Gift Items
                </Link>
              </li>
              <li>
                <Link
                  href="/products/traditional-art"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Traditional Art Pieces
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-3">
          <h3
            className="text-2xl md:text-3xl font-bold text-white"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Contact Info
          </h3>

          <p className="flex items-start gap-3 text-gray-400 text-[15px] hover:text-emerald-500 transition-colors">
            <FiMapPin className="text-emerald-500 text-2xl flex-shrink-0 mt-1" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              NEW RIICO INDUSTRIAL AREA ,BASSI, JAIPUR 
            </a>
          </p>

          <p className="flex items-center gap-3 text-gray-400 text-[15px] hover:text-emerald-500 transition-colors">
            <FiPhone className="text-emerald-500 text-2xl flex-shrink-0" />
            <a href="tel:+917062844125" className="hover:underline">
              +91 70628 44125
            </a>
          </p>

          <p className="flex items-center gap-3 text-gray-400 text-[15px] hover:text-emerald-500 transition-colors">
            <FiMail className="text-emerald-500 text-2xl flex-shrink-0" />
            <a href="mailto:info@poojaartcraft.com" className="hover:underline">
              info@poojaartcraft.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm md:text-[15px] space-y-1">
        <p>
          &copy; {new Date().getFullYear()} Pooja Art &amp; Craft. All Rights Reserved.
          <br />
          Developed by{" "}
          <span className="text-white font-medium">
            <Link href="https://business-growth-nine.vercel.app/" target="_blank">
              Ashutosh Sharma
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
