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
  title: {
    default: "Pooja Art & Craft | India’s Finest Handicraft Manufacturer",
    template: "%s | Pooja Art & Craft",
  },
  description:
    "Pooja Art & Craft is India’s leading handicraft manufacturer, creating premium handmade wooden, metal, and decorative art pieces that celebrate Indian tradition, craftsmanship, and design excellence.",
  keywords: [
    "Pooja Art & Craft",
    "Handicraft Manufacturer",
    "Indian Handicrafts",
    "Wooden Handicrafts",
    "Metal Handicrafts",
    "Decorative Items",
    "Home Decor",
    "Traditional Art",
    "Handmade Products",
    "Gift Items",
    "Art and Craft",
    "Craft Exporter",
    "Made in India",
    "Luxury Handicrafts",
    "Indian Artisan Work",
  ],
  authors: [{ name: "Pooja Art & Craft", url: "https://pooja-art-craft.vercel.app/" }],
  creator: "Pooja Art & Craft",
  publisher: "Pooja Art & Craft",

  metadataBase: new URL("https://pooja-art-craft.vercel.app/"),
  alternates: {
    canonical: "https://pooja-art-craft.vercel.app/",
  },

  openGraph: {
    title: "Pooja Art & Craft | India’s Finest Handicraft Manufacturer",
    description:
      "Discover handcrafted wooden, metal, and decorative art pieces from Pooja Art & Craft — where Indian tradition meets modern design. Proudly Made in India.",
    url: "https://pooja-art-craft.vercel.app/",
    siteName: "Pooja Art & Craft",
    images: [
      {
        url: "https://pooja-art-craft.vercel.app/images/og.png",
        width: 1200,
        height: 630,
        alt: "Pooja Art & Craft - Indian Handicraft Manufacturer",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pooja Art & Craft | India’s Finest Handicraft Manufacturer",
    description:
      "Premium handmade Indian handicrafts — elegant wooden, metal, and decorative art crafted by skilled artisans.",
    images: ["https://pooja-art-craft.vercel.app/images/og.png"],
    creator: "@poojaartcraft", // optional if you have a Twitter handle
  },

  category: "Handicrafts",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
