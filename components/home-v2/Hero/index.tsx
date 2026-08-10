"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CarFront,
  ShieldCheck,
  Truck,
  Headphones,
  Award,
} from "lucide-react";

/* =========================================================
   HERO FEATURES
========================================================= */

const features = [
  "20+ Brands",
  "Best Prices",
  "Easy Finance",
  "PAN India Delivery",
];

/* =========================================================
   HERO STATS
========================================================= */

const stats = [
  {
    icon: CarFront,
    value: "1000+",
    label: "Happy Customers",
  },
  {
    icon: CarFront,
    value: "20+",
    label: "Brands",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Verified Cars",
  },
  {
    icon: Truck,
    value: "PAN India",
    label: "Delivery",
  },
  {
    icon: Headphones,
    value: "After Sales",
    label: "Support",
  },
  {
    icon: Award,
    value: "Best Price",
    label: "Guarantee",
  },
];

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white text-gray-900 dark:bg-[#050505] dark:text-white"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Image
          src="/images/Hero/hero-bg.png"
          alt="Carmotive India premium cars"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* =====================================================
          DARK MODE OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 hidden bg-black/35 dark:block" />

      <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/45 to-transparent dark:block" />

      {/* =====================================================
          LIGHT MODE OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 block bg-white/55 dark:hidden" />

      <div className="absolute inset-0 block bg-gradient-to-r from-white/95 via-white/60 to-transparent dark:hidden" />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-32 pt-32 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-[560px]"
        >
          {/* =================================================
              HEADING
          ================================================= */}

          <h1 className="leading-[0.95]">
            {/* Drive Your */}

            <span className="block text-4xl font-black uppercase tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Drive Your
            </span>

            {/* Dream Car */}

            <span className="mt-2 block text-6xl font-black uppercase tracking-tight text-[#E50914] md:text-7xl lg:text-8xl">
              Dream Car
            </span>

            {/* Subtitle */}

            <span className="mt-6 block text-lg font-bold uppercase tracking-wide text-gray-900 dark:text-white md:text-2xl lg:text-3xl">
              From India's Leading
            </span>

            <span className="block text-lg font-bold uppercase tracking-wide text-gray-900 dark:text-white md:text-2xl lg:text-3xl">
              Multi-Brand Car Dealer
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg">
            Discover premium cars, competitive deals, easy finance and
            complete car buying assistance — all under one roof.
          </p>

          {/* =================================================
              PREMIUM CHIPS
          ================================================= */}

          <div className="mt-8 flex flex-wrap gap-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="
                  rounded-full
                  border border-gray-300
                  bg-white/70
                  px-5 py-2
                  text-sm font-medium
                  text-gray-800
                  shadow-sm
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-[#E50914]
                  hover:bg-[#E50914]/10

                  dark:border-white/10
                  dark:bg-white/10
                  dark:text-white
                  dark:shadow-none
                  dark:hover:bg-[#E50914]/20
                "
              >
                {feature}
              </div>
            ))}
          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div className="mt-10 flex flex-wrap gap-4">
            {/* Explore Cars */}

            <Link
              href="#featured-cars"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#E50914] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_15px_35px_rgba(229,9,20,0.3)]"
            >
              Explore Cars

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Book Test Drive */}

            <Link
              href="#contact"
              className="
                rounded-xl
                border border-gray-300
                bg-white/70
                px-8 py-4
                font-semibold
                text-gray-900
                shadow-sm
                backdrop-blur-xl
                transition-all duration-300
                hover:border-[#E50914]
                hover:bg-white

                dark:border-white/20
                dark:bg-white/10
                dark:text-white
                dark:shadow-none
                dark:hover:bg-white/20
              "
            >
              Book Test Drive
            </Link>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          PREMIUM STATS
      ===================================================== */}

      <div className="absolute bottom-16 left-0 z-30 hidden w-full xl:block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-6 gap-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  className="
                    rounded-2xl
                    border border-gray-300
                    bg-white/75
                    p-5
                    shadow-lg
                    backdrop-blur-xl
                    transition-all duration-300

                    dark:border-white/10
                    dark:bg-white/10
                    dark:shadow-none
                  "
                >
                  {/* Icon */}

                  <Icon
                    className="mb-4 text-[#E50914]"
                    size={28}
                  />

                  {/* Value */}

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </h3>

                  {/* Label */}

                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-6 left-1/2 z-40 hidden -translate-x-1/2 xl:flex"
      >
        <div className="flex flex-col items-center">
          <span className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-600 dark:text-gray-400">
            Scroll
          </span>

          <div className="flex h-14 w-8 justify-center rounded-full border border-gray-400 dark:border-white/20">
            <motion.div
              animate={{
                y: [5, 24, 5],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="mt-2 h-2 w-2 rounded-full bg-[#E50914]"
            />
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div className="absolute bottom-0 left-0 z-10 h-44 w-full bg-gradient-to-t from-white via-white/60 to-transparent dark:from-[#050505] dark:via-[#050505]/70 dark:to-transparent" />
    </section>
  );
}