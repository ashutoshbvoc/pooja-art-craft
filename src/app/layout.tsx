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
    "Pooja Art & Craft is one of India’s leading handicraft manufacturers...",
  openGraph: {
    title: "Pooja Art & Craft - India’s Finest Handicraft Manufacturer",
    description:
      "Discover premium handmade wooden, metal, and decorative art pieces...",
    url: "http://localhost:3000//",
    siteName: "Pooja Art & Craft",
    images: [
      {
        url: "http://localhost:3000//images/og/og.jpg",
        width: 1200,
        height: 630,
        alt: "Pooja Art & Craft - Indian Handicraft Manufacturer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pooja Art & Craft - India’s Finest Handicraft Manufacturer",
    description:
      "Premium handmade Indian handicrafts — wooden, metal, and decorative art pieces.",
    images: ["http://localhost:3000//images/og/og.jpg"],
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
