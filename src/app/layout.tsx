import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔹 Add Dancing Script for Hero Section
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["700"],
});

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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased`}
      >
        <Navbar />
        {children}

        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
