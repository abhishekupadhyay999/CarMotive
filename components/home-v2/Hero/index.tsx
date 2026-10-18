
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CarFront,
  Truck,
  Headphones,
  Award,
} from "lucide-react";

const stats = [
  { icon: CarFront, value: "1000+", label: "Happy Customers" },
  { icon: CarFront, value: "20+", label: "Brands" },
  { icon: Truck, value: "PAN India", label: "Delivery" },
  { icon: Headphones, value: "After Sales", label: "Support" },
  { icon: Award, value: "Best Price", label: "Guarantee" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative isolate
        h-[calc(100svh-160px)]
        min-h-[620px]
        max-h-[820px]
        overflow-hidden
        bg-white text-gray-950
        dark:bg-[#050505] dark:text-white
      "
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={{ scale: [1, 1.025, 1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Image
          src="/images/Hero/hero-bg.png"
          alt="Premium cars at Carmotive India"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark mode overlays */}
      <div className="absolute inset-0 -z-10 hidden bg-black/35 dark:block" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black via-black/45 to-transparent dark:block" />

      {/* Light mode overlays — original image appearance */}
      <div className="absolute inset-0 -z-10 bg-white/10 dark:hidden" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/25 via-white/5 to-transparent dark:hidden" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-white/20 dark:hidden" />

      {/* Hero heading and description */}
      <div className="relative z-10 mx-auto h-full max-w-7xl px-6 pt-8 sm:pt-10 lg:px-8 lg:pt-8">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[650px]"
        >
          <h1 className="leading-[0.95]">
            <span className="block text-4xl font-black uppercase tracking-tight text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.45)] dark:text-white dark:drop-shadow-none sm:text-5xl lg:text-6xl xl:text-7xl">
              Drive Your
            </span>

            <span className="mt-2 block text-5xl font-black uppercase tracking-tight text-[#E50914] sm:text-6xl lg:text-7xl xl:text-8xl">
              Dream Car
            </span>

            <span className="mt-5 block text-base font-extrabold uppercase tracking-wide text-black dark:text-white sm:text-xl lg:text-2xl xl:text-3xl">
              From India's Leading
            </span>

            <span className="mt-1 block text-base font-extrabold uppercase tracking-wide text-black dark:text-white sm:text-xl lg:text-2xl xl:text-3xl">
              Multi-Brand Car Dealer
            </span>
          </h1>

          <p className="mt-4 max-w-[600px] text-sm font-bold leading-6 text-black dark:font-medium dark:text-gray-300 sm:text-base sm:leading-7 lg:text-lg">
            Discover premium cars, competitive deals, easy finance
            and complete car buying assistance — all under one roof.
          </p>
        </motion.div>
      </div>

      {/* Stats cards — positioned higher within the hero */}
      <div
        className="
          absolute
          inset-x-0
          bottom-15
          z-20
          w-full
          px-4
          sm:bottom-15
          sm:px-6
          lg:bottom-20
          lg:px-8
        "
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5 xl:gap-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.08,
                    duration: 0.45,
                  }}
                  whileHover={{ y: -4 }}
                  className="
                    min-w-0
                    rounded-xl
                    border border-gray-200/90
                    bg-white/95
                    p-3
                    shadow-lg
                    backdrop-blur-md
                    transition-colors duration-300
                    hover:border-[#E50914]/40
                    sm:p-4
                    xl:rounded-2xl xl:p-5
                    dark:border-white/10
                    dark:bg-[#151515]/95
                    dark:shadow-[0_15px_40px_rgba(0,0,0,0.35)]
                  "
                >
                  <Icon
                    className="mb-2 text-[#E50914] sm:mb-3"
                    size={25}
                  />

                  <h2 className="text-lg font-bold text-gray-950 dark:text-white sm:text-xl xl:text-2xl">
                    {item.value}
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300 sm:text-sm">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
