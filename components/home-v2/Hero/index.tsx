"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CarFront,
  Truck,
  Headphones,
  Award,
} from "lucide-react";

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
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        text-gray-900
        dark:bg-[#050505]
        dark:text-white
      "
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

      <div
        className="
          absolute
          inset-0
          hidden
          bg-black/35
          dark:block
        "
      />

      <div
        className="
          absolute
          inset-0
          hidden
          bg-gradient-to-r
          from-black
          via-black/45
          to-transparent
          dark:block
        "
      />

      {/* =====================================================
          LIGHT MODE OVERLAY
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          block
          bg-white/10
          dark:hidden
        "
      />

      <div
        className="
          absolute
          inset-0
          block
          bg-gradient-to-r
          from-white/25
          via-white/5
          to-transparent
          dark:hidden
        "
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-start
          px-6
          pb-32
          pt-10
          lg:px-8
          lg:pt-12
        "
      >
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
            <span
              className="
                block
                text-4xl
                font-black
                uppercase
                tracking-tight
                text-gray-900
                dark:text-white
                md:text-5xl
                lg:text-6xl
              "
            >
              Drive Your
            </span>

            <span
              className="
                mt-2
                block
                text-6xl
                font-black
                uppercase
                tracking-tight
                text-[#E50914]
                md:text-7xl
                lg:text-8xl
              "
            >
              Dream Car
            </span>

            <span
              className="
                mt-6
                block
                text-lg
                font-bold
                uppercase
                tracking-wide
                text-gray-900
                dark:text-white
                md:text-2xl
                lg:text-3xl
              "
            >
              From India's Leading
            </span>

            <span
              className="
                block
                text-lg
                font-bold
                uppercase
                tracking-wide
                text-gray-900
                dark:text-white
                md:text-2xl
                lg:text-3xl
              "
            >
              Multi-Brand Car Dealer
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-gray-700
              dark:text-gray-300
              md:text-lg
            "
          >
            Discover premium cars, competitive deals, easy finance and
            complete car buying assistance — all under one roof.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          PREMIUM STATS
      ===================================================== */}

      <div className="absolute bottom-16 left-0 z-30 hidden w-full xl:block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-5 gap-4">
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
                    border
                    border-gray-200
                    bg-white
                    p-5
                    shadow-xl
                    transition-all
                    duration-300

                    hover:border-[#E50914]/30

                    dark:border-white/10
                    dark:bg-[#151515]
                    dark:shadow-[0_15px_40px_rgba(0,0,0,0.35)]
                    dark:hover:border-[#E50914]/40
                  "
                >
                  {/* ICON */}

                  <Icon
                    className="mb-4 text-[#E50914]"
                    size={28}
                  />

                  {/* VALUE */}

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {item.value}
                  </h3>

                  {/* LABEL */}

                  <p
                    className="
                      mt-1
                      text-sm
                      text-gray-600
                      dark:text-gray-300
                    "
                  >
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-10
          h-44
          w-full
          bg-gradient-to-t
          from-white
          via-white/20
          to-transparent
          dark:from-[#050505]
          dark:via-[#050505]/70
          dark:to-transparent
        "
      />
    </section>
  );
}