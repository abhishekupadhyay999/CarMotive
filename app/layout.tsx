import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { CarProvider } from "@/components/context/CarContext";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* =========================================================
   SITE CONFIG
========================================================= */

const siteUrl = "https://car-motive.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Carmotive India | Multi-Brand Car Dealer in Virar",
    template: "%s | Carmotive India",
  },

  description:
    "Carmotive India is a multi-brand car dealership in Virar, Maharashtra. Explore new cars, car finance, vehicle exchange, latest car offers and more.",

  applicationName: "Carmotive India",

  authors: [
    {
      name: "Carmotive India",
      url: siteUrl,
    },
  ],

  creator: "Carmotive India",
  publisher: "Carmotive India",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  keywords: [
    "car dealer in Virar",
    "car dealership in Virar",
    "multi brand car dealer Virar",
    "car showroom Virar",
    "cars in Virar",
    "new cars in Virar",
    "car dealer Vasai",
    "car dealer Nalasopara",
    "Vasai Virar car dealer",
    "car exchange Virar",
    "car finance Virar",
    "Carmotive India",
  ],

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,

    siteName: "Carmotive India",

    title:
      "Carmotive India | Multi-Brand Car Dealer in Virar",

    description:
      "Explore cars from leading brands, flexible car finance, vehicle exchange and the latest car updates from Carmotive India.",

    images: [
      {
        url: "/images/og/carmotive-og.jpg",
        width: 1200,
        height: 630,
        alt: "Carmotive India - Multi-Brand Car Dealer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Carmotive India | Multi-Brand Car Dealer in Virar",

    description:
      "Explore cars, finance, vehicle exchange and the latest car updates from Carmotive India.",

    images: ["/images/og/carmotive-og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider>
          <CarProvider>
            {children}
          </CarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}