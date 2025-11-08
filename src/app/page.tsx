// app/page.tsx


import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaAward, FaRulerCombined, } from "react-icons/fa";
import { FiCheckCircle, FiUsers } from "react-icons/fi";
import CounterSection from "@/components/Main/CounterSection";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Pooja Art & Craft",
  description:
    "Pooja Art & Craft is one of India’s leading handicraft manufacturers, creating exquisite handmade wooden, metal, and decorative art pieces that reflect the beauty of Indian tradition and craftsmanship.",
  keywords: [
    "Pooja Art & Craft",
    "Handicraft Manufacturer",
    "Indian Handicrafts",
    "Wooden Handicrafts",
    "Metal Handicrafts",
    "Home Decor",
    "Traditional Art",
    "Handmade Products",
    "Gift Items",
    "Art and Craft",
    "Decorative Items",
    "Craft Exporter",
    "Made in India",
  ],
  authors: [
    { name: "Pooja Art & Craft", url: "https://pooja-art-craft.vercel.app/" },
  ],
  creator: "Pooja Art & Craft",
  publisher: "Pooja Art & Craft",
  metadataBase: new URL("https://pooja-art-craft.vercel.app/"), // canonical base URL
  alternates: {
    canonical: "https://pooja-art-craft.vercel.app/",
  },

  openGraph: {
    title: "Pooja Art & Craft - India’s Finest Handicraft Manufacturer",
    description:
      "Discover premium handmade wooden, metal, and decorative art pieces crafted by skilled artisans at Pooja Art & Craft. Redefining traditional craftsmanship with modern elegance.",
    url: "https://pooja-art-craft.vercel.app/",
    siteName: "Pooja Art & Craft",
    images: [
      {
        url: "https://pooja-art-craft.vercel.app/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Pooja Art & Craft - Indian Handicraft Manufacturer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};


export default function Home() {
  return (
    <main className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/1.jpg"
            alt="Custom Interior Hero"
            fill
            priority
            className="object-cover brightness-[0.45] transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-green-500/3 pointer-events-none"></div>

        <div className="relative mt-20 z-10 px-6 sm:px-8 max-w-3xl flex flex-col items-center justify-center animate-fadeIn">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-snug text-white drop-shadow-md"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Rajasthan’s Finest Handicrafts & Home Decor  <br className="hidden sm:block" />

          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-white font-light leading-relaxed max-w-2xl animate-fadeIn delay-150">
            Discover the best of Rajasthan's handicrafts and home decor, handcrafted to perfection by Pooja Art & Craft – where tradition meets elegance.

          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl animate-fadeIn delay-150">GSTIN: 07BFJPK7708E1ZE</p>

          <div className="mt-10 w-full flex justify-center animate-fadeIn delay-300">
            <Link
              href="#creations"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg px-8 py-3 rounded-md shadow-md transition-transform transform hover:scale-105"
            >
              Explore Our Designs
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#e9f7f7] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="md:w-1/2 w-full text-center md:text-left animate-fadeInLeft">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug"
              style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
            >
              Crafting Exquisite Handicrafts <br /> with Rajasthani Tradition
            </h2>

            <p className="text-gray-800 text-base sm:text-[17px] leading-relaxed">
              At Pooja Art & Craft, we take pride in creating the finest handcrafted products that bring the rich traditions of Rajasthan to life.
              Our expert artisans specialize in crafting intricate home decor pieces, furniture, and unique decor items that infuse your spaces with elegance and cultural richness. Based in Rajasthan, we are dedicated to offering the highest quality, blending timeless craftsmanship with modern aesthetics.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <div className="text-emerald-500 mt-1">
                  <FiCheckCircle size={20} />
                </div>
                <span className="text-gray-700">Handcrafted with love & care</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-emerald-500 mt-1">
                  <FiUsers size={20} />
                </div>
                <span className="text-gray-700">Skilled local artisans</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-emerald-500 mt-1">
                  <FaAward size={20} />
                </div>
                <span className="text-gray-700">Premium materials & finishes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-emerald-500 mt-1">
                  <FaRulerCombined size={20} />
                </div>
                <span className="text-gray-700">Custom designs for every space</span>
              </li>
            </ul>

            <div className="mt-8 flex gap-4">
              <Link
                href="#contact"
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md shadow"
              >
                Get In Touch
              </Link>
              <Link
                href="#gallery"
                className="inline-block bg-white border border-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-md shadow"
              >
                Explore Our Creations
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 w-full flex justify-center animate-fadeInRight">
            <div className="w-full md:w-[550px] h-[500px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/1.jpg"
                alt="Rajasthani Handicraft"
                width={550}
                height={550}
                className="object-cover w-full h-full object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />



      {/* Services Section */}
      <section className="bg-[#e9f7f7] py-20 px-6 md:px-12 lg:px-20" id="services">
        <div className="text-center mb-14 animate-fadeIn">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Handcrafted Home Decors
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-[17px] leading-relaxed">
            Explore our range of bespoke handcrafted home decor solutions, tailored to transform your living spaces with the finest Rajasthani craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              img: "/images/2.jpg",
              title: "Custom Handcrafted Furniture",
              desc: "Elevate your interiors with our custom-designed, handcrafted furniture pieces that combine traditional techniques with modern flair.",
            },
            {
              img: "/images/3.jpg",
              title: "Traditional Rajasthani Carvings",
              desc: "Bring the rich heritage of Rajasthan into your home with our intricately carved woodwork, perfect for adding an artistic touch to any room.",
            },
            {
              img: "/images/4.jpg",
              title: "Handmade Wall Decor & Embroidery",
              desc: "Transform your walls with unique, handcrafted wall hangings and embroidered decor, designed to add warmth and elegance to your space.",
            },
          ].map((service, i) => (
            <div key={i} className="flex flex-col items-center text-center animate-fadeIn delay-[${i*150}ms]">
              <div className="w-full overflow-hidden rounded-[1.5rem] shadow-md transition-transform duration-500 hover:scale-105">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={280}
                  className="w-full h-[280px] object-cover"
                />
              </div>
              <h3
                className="text-3xl font-bold mt-6 text-gray-900"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2 text-[16px] max-w-xs">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* Gallery Section */}
      <section id="gallery" className="bg-[#f3fdfa] py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto text-center animate-fadeIn">
          <h2
            className="text-4xl md:text-5xl font-bold mb-10 text-gray-900"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Our Elegant Creations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] animate-fadeIn"
              >
                <Image
                  src={`/images/${i + 1}.jpg`}
                  alt={`Gallery Image ${i + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px] rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="bg-[#e9f7f7] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
          >
            Our Crafting Process
          </h2>
          <p className="text-gray-900 text-lg max-w-3xl mx-auto mb-16 font-light">
            Every creation at Pooja Art & Craft is a blend of heritage, skill, and imagination —
            handcrafted to perfection with care, precision, and timeless artistry.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Concept & Inspiration",
                desc: "Each design begins with a creative idea inspired by Indian culture, tradition, and modern aesthetics.",
                icon: "Lightbulb",
              },
              {
                title: "Material Selection",
                desc: "We carefully choose premium-quality woods, metals, fabrics, and eco-friendly materials for durability and beauty.",
                icon: "Layers",
              },
              {
                title: "Handcrafting by Artisans",
                desc: "Our skilled artisans bring each concept to life with intricate handwork, carving, painting, and detailing.",
                icon: "Hammer",
              },
              {
                title: "Design Refinement",
                desc: "Finishing, polishing, and color enhancements are done with precision to highlight the true craftsmanship.",
                icon: "Brush",
              },
              {
                title: "Quality Check",
                desc: "Every piece goes through a detailed inspection to ensure flawless finish and premium quality standards.",
                icon: "CheckCircle",
              },
              {
                title: "Customization",
                desc: "We tailor designs to meet client preferences — be it size, color, texture, or personalized branding.",
                icon: "Settings",
              },
              {
                title: "Packaging & Branding",
                desc: "Each handicraft is packed with care using protective materials and branded packaging for safe delivery.",
                icon: "Package",
              },
              {
                title: "Delivery & Delight",
                desc: "Your handcrafted product is shipped securely and on time — spreading the art and beauty of Indian craft worldwide.",
                icon: "Truck",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#00a6a6]/10 p-5 rounded-full mb-6 group-hover:bg-[#00a6a6]/20 transition-colors duration-300">
                    {React.createElement(require("lucide-react")[step.icon] || require("lucide-react")["Home"], {
                      size: 40,
                      color: "#00a6a6",
                      strokeWidth: 1.5,
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="bg-[#eff9f8] py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto text-center animate-fadeIn">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Hear From Our Happy Customers
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-14 text-base md:text-lg">
            Pooja Art & Craft has been spreading the beauty of Indian craftsmanship
            through unique, handmade creations that bring warmth and character to every home.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                img: "/images/clients/2.jpg",
                name: "Rahul Verma",
                text: "“I ordered wooden home décor from Pooja Art & Craft, and it completely transformed my living room! The detailing, finishing, and quality are top-notch. You can truly feel the handmade love in every piece.”",
              },
              {
                img: "/images/clients/3.jpg",
                name: "Neha Sharma ",
                text: "“Their handicrafts are not just products — they are pure art. The team was very cooperative and even customized the designs as per my request. Highly recommend Pooja Art & Craft for authentic Indian crafts!”",
              },
              {
                img: "/images/clients/4.jpg",
                name: "Arav Mehta",
                text: "“I purchased metal and wooden showpieces for gifting, and everyone absolutely loved them! Pooja Art & Craft’s work is elegant, traditional, and beautifully made with attention to detail.”",
              },
            ].map((client, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-left hover:-translate-y-1 animate-fadeIn delay-[${i*100}ms]"
              >
                <div className="flex justify-center mb-6">
                  <div className="rounded-full overflow-hidden border-4 border-[#e3f4f3] shadow-md w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto">
                    <Image
                      src={client.img}
                      alt={client.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-gray-800 leading-relaxed mb-6 text-[15px] italic">{client.text}</p>
                <p className="text-sm text-gray-600 font-semibold text-center">— {client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL IMAGE SECTION */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/6.jpg"
          alt="Interior Fullscreen"
          fill
          priority
          className="object-cover object-center"
        />
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Frequently Asked Questions
          </h2>

          {/* FAQ List */}
          <div className="space-y-6">
            {[
              {
                q: "What products does Pooja Art & Craft manufacture?",
                a: "Pooja Art & Craft manufactures a wide range of handcrafted home décor, wooden and metal handicrafts, wall hangings, showpieces, gift items, and custom event décor. Each product is handmade by skilled artisans with attention to detail.",
              },
              {
                q: "Do you accept custom or bulk orders?",
                a: "Yes — we take custom orders and bulk/manufacturing orders for retailers, corporate gifting, and events. Customization options include size, finish, colors, motifs, and packaging. For bulk orders we provide samples and a production plan before starting.",
              },

              {
                q: "Do you ship across India and internationally?",
                a: "Yes — we ship pan-India and handle international shipments. For exports we assist with packaging, documentation, and logistics. Shipping charges and delivery time vary by destination and order size.",
              },
              {
                q: "What materials and quality standards do you follow?",
                a: "We use high-quality sustainable materials — selected woods, metals, natural dyes, and eco-friendly finishes wherever possible. Every piece goes through quality checks for durability, finish, and artisan workmanship before dispatch.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <details className="group">
                  <summary
                    className="flex justify-between items-center text-gray-900 cursor-pointer list-none select-none text-2xl md:text-3xl font-semibold"
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                  >
                    {faq.q}
                    <span className="transition-transform duration-300 group-open:rotate-180 text-emerald-500 text-2xl">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Call-To-Action Section */}
      <section className="bg-[#0e1a18] py-20 px-4 flex justify-center items-center">
        <div className="bg-[#46504f] text-center rounded-3xl px-8 md:px-16 py-16 max-w-5xl w-full shadow-lg">

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Bring Artistry to Your Space
          </h2>

          {/* Paragraph */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Add a touch of tradition and creativity to your home or workplace with
            Pooja Art & Craft&apos;s handcrafted decor.
            Each piece is designed by skilled artisans to reflect India&apos;s rich
            cultural heritage and timeless beauty — perfect for gifting or decorating
            your favorite spaces.
          </p>

          {/* Button */}
          <Link
            href="#contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg px-8 py-3 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>


      {/* Get In Touch */}
      <section
        className="bg-[#e9f7f7] py-20 px-6 md:px-12 lg:px-20"
        id="contact"
        style={{
          colorScheme: "light", // ✅ dark mode ke effect ko disable karta hai
          backgroundColor: "#e9f7f7",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-gray-900">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Get In Touch
            </h2>
            <p className="text-gray-700 mb-8 text-[16px] leading-relaxed">
              We’d love to hear from you! Share your design dreams and let’s make
              them reality together.
            </p>

            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white text-gray-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white text-gray-900"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white text-gray-900"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white text-gray-900"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col justify-center space-y-10">
            <h3
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Contact Details
            </h3>

            {/* Contact Cards */}
            <div className="space-y-5">
              {/* Call */}
              <a
                href="tel:+917062844125"
                className="group flex items-center gap-5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1 text-gray-900"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-[15px] text-gray-600">Call Us</h4>
                  <p className="text-lg text-gray-900">+91 70628 44125</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917062844125"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1 text-gray-900"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <FaWhatsapp />
                </div>
                <div>
                  <h4 className="text-[15px] text-gray-600">WhatsApp</h4>
                  <p className="text-lg text-gray-900">+91 70628 44125</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@poojaartcraft.com"
                className="group flex items-center gap-5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1 text-gray-900"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4285F4] text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-[15px] text-gray-600">Email</h4>
                  <p className="text-lg text-gray-900">
                    info@poojaartcraft.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1 text-gray-900"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-[15px] text-gray-600">Our Location</h4>
                  <p className="text-lg text-gray-900">
                    NEW RIICO INDUSTRIAL AREA ,BASSI, JAIPUR
                  </p>
                </div>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-8">
              <h4
                className="text-3xl font-semibold mb-4 text-gray-900"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Connect With Us
              </h4>
              <div className="flex gap-6">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md hover:scale-110 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
                >
                  <FaFacebookF />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] text-white shadow-md hover:scale-110 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
                >
                  <FaInstagram />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917088444125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:scale-110 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 px-6 sm:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Find Us on Map
          </h2>

          {/* Map Container */}
          <div className="relative w-full h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0895034657897!2d76.03322!3d26.837105400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc1880b2bfc0b%3A0x5cde888b9a03480b!2sPooja%20art%20and%20craft%20company!5e0!3m2!1sen!2sin!4v1762614966706!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jiya Enterprises Location"
            ></iframe>

            {/* Overlay hover animation */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* Address */}
          <p className="text-center mt-6 text-gray-700 text-lg md:text-xl">
            We&apos;re Located At  <strong>NEW RIICO INDUSTRIAL AREA ,BASSI, JAIPUR</strong>
          </p>
        </div>
      </section>



    </main>
  );
}
