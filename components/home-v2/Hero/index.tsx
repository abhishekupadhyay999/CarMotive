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

const features = [
  "20+ Brands",
  "Best Prices",
  "Easy Finance",
  "PAN India Delivery",
];

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

export default function Hero() {return (
  <section
    id="home"
    className="relative h-screen min-h-[850px] scroll-mt-28 overflow-hidden bg-[#050505]"
  >
    {/* Background */}

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
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />
    </motion.div>

    {/* Overlays */}

    <div className="absolute inset-0 bg-black/20" />

    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-transparent" />

    {/* Hero Content */}

    <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="max-w-[560px]"
      >

        {/* Heading */}

        <h1 className="leading-[0.95]">

          <span className="block text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Drive Your
          </span>

          <span className="mt-2 block text-6xl font-black uppercase tracking-tight text-[#E50914] md:text-7xl lg:text-8xl">
            Dream Car
          </span>

          <span className="mt-6 block text-lg font-bold uppercase tracking-wide text-white md:text-2xl lg:text-3xl">
            From India's Leading
          </span>

          <span className="block text-lg font-bold uppercase tracking-wide text-white md:text-2xl lg:text-3xl">
            Multi-Brand Car Dealer
          </span>

        </h1>

        {/* Description */}

        
        {/* Premium Chips */}

        <div className="mt-8 flex flex-wrap gap-3">

          {features.map((feature) => (

            <div
              key={feature}
              className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[#E50914] hover:bg-[#E50914]/20"
            >
              {feature}
            </div>

          ))}

        </div>

        {/* CTA Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="#featured-cars"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#E50914] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
          >
            Explore Cars

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="#contact"
            className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[#E50914] hover:bg-white/20"
          >
            Book Test Drive
          </Link>

        </div>

      </motion.div>

    </div>      {/* Premium Stats */}

      <div  className="mt-16 hidden xl:grid grid-cols-6 gap-5">

        <div className="grid grid-cols-6 gap-5">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
              >
                <Icon
                  className="mb-4 text-[#E50914]"
                  size={28}
                />

                <h3 className="text-2xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-1 text-sm text-gray-300">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}

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

          <span className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-400">
            Scroll
          </span>

          <div className="flex h-14 w-8 justify-center rounded-full border border-white/20">

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

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-44 w-full bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />

    </section>
  );
}