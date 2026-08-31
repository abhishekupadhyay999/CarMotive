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

const siteUrl = "https://carmotiveindia.com";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Carmotive India | Multi-Brand Car Dealer in Virar",
    template:
      "%s | Carmotive India",
  },

  description:
    "Carmotive India is a multi-brand car dealership in Virar, Maharashtra. Explore cars from leading brands, car finance, vehicle exchange, latest car updates and more.",

  applicationName:
    "Carmotive India",

  authors: [
    {
      name: "Carmotive India",
      url: siteUrl,
    },
  ],

  creator:
    "Carmotive India",

  publisher:
    "Carmotive India",

  /* =======================================================
     CANONICAL
  ======================================================= */

  alternates: {
    canonical: "/",
  },

  /* =======================================================
     ROBOTS
  ======================================================= */

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

  /* =======================================================
     KEYWORDS
  ======================================================= */

  keywords: [
    "Carmotive India",
    "car dealer in Virar",
    "car dealership in Virar",
    "multi brand car dealer Virar",
    "car showroom Virar",
    "cars in Virar",
    "new cars in Virar",
    "car dealer in Vasai",
    "car dealer in Nalasopara",
    "Vasai Virar car dealer",
    "car exchange in Virar",
    "car finance in Virar",
    "multibrand car dealer in Virar",
  ],

  /* =======================================================
     OPEN GRAPH
  ======================================================= */

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: siteUrl,

    siteName:
      "Carmotive India",

    title:
      "Carmotive India | Multi-Brand Car Dealer in Virar",

    description:
      "Explore cars from leading brands, flexible car finance, vehicle exchange and the latest car updates from Carmotive India.",

    /* Add an OG image here later once the final asset exists. */
  },

  /* =======================================================
     TWITTER / SOCIAL
  ======================================================= */

  twitter: {
    card: "summary_large_image",

    title:
      "Carmotive India | Multi-Brand Car Dealer in Virar",

    description:
      "Explore cars, finance, vehicle exchange and the latest car updates from Carmotive India.",
  },

  /* =======================================================
     ICON
  ======================================================= */

  icons: {
    icon: "/favicon.ico",
  },

  category:
    "automotive",
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

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