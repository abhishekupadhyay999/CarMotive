import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CarProvider } from "@/components/context/CarContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carmotive India | Premium Multi-Brand Car Dealer in Mumbai",

  description:
    "Carmotive India is a premium multi-brand car dealer in Mumbai. Buy, sell and exchange premium pre-owned cars with finance assistance and expert support.",

  keywords: [
    "Carmotive India",
    "premium cars in Mumbai",
    "used cars in Mumbai",
    "pre-owned cars Mumbai",
    "multi-brand car dealer Mumbai",
    "buy used cars Mumbai",
    "sell your car Mumbai",
    "car exchange Mumbai",
    "car finance Mumbai",
  ],

  authors: [
    {
      name: "Carmotive India",
    },
  ],

  openGraph: {
    title: "Carmotive India | Premium Multi-Brand Car Dealer",
    description:
      "Buy, sell and exchange premium  cars in Mumbai with Carmotive India.",
    type: "website",
    locale: "en_IN",
    siteName: "Carmotive India",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <CarProvider>{children}</CarProvider>
      </body>
    </html>
  );
}