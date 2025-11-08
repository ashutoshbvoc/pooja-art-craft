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
  title: "Jiya Enterprises",
  description:
    "Transform your spaces with Jiya Enterprises. Luxury interior design services across India, including Residential, Office, and Boutique Hotel Interiors.",
  keywords: [
    "Jiya Enterprises",
    "Interior Design",
    "Luxury Interiors",
    "Home Decor",
    "Residential Interiors",
    "Office Interiors",
    "Hotel Interior Design",
    "India",
    "Bespoke Interiors",
    "Modern Interior Design",
  ],
  authors: [
    { name: "Jiya Enterprises", url: "https://jiya-enterprises.vercel.app/" },
  ],
  creator: "Jiya Enterprises",
  publisher: "Jiya Enterprises",
  metadataBase: new URL("https://jiya-enterprises.vercel.app/"), // canonical base URL
  alternates: {
    canonical: "https://jiya-enterprises.vercel.app/",
  },

  openGraph: {
    title: "Jiya Enterprises",
    description:
      "Transform your spaces with Jiya Enterprises. Luxury interior design services across India.",
    url: "https://jiya-enterprises.vercel.app/",
    siteName: "Jiya Enterprises",
    images: [
      {
        url: "https://jiya-enterprises.vercel.app/images/interior/og.jpg",
        width: 1200,
        height: 630,
        alt: "Jiya Enterprises - Luxury Interior Design",
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
