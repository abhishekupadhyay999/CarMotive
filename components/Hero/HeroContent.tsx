"use client";

import { motion } from "framer-motion";
import { ArrowRight, CarFront, CalendarCheck } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-8 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl"
      >
        Find Your
        <br />

        <span className="text-[#FF5A1F]">
          Dream Car
        </span>

        <br />

        From India's
        <br />

        Leading Brands.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-8 max-w-xl text-lg leading-8 text-gray-300"
      >
        Explore 20+ leading automotive brands with transparent pricing,
        competitive finance options, attractive exchange offers and
        complete documentation support—all under one roof.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10 flex flex-wrap gap-5"
      >
        {/* Primary Button */}
        <a
          href="#brands"
          className="group flex items-center gap-3 rounded-full bg-[#FF5A1F] px-8 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#E64A19]"
        >
          <CarFront size={20} />

          Explore Cars

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

        {/* Secondary Button */}
        <a
          href="#contact"
          className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
        >
          <CalendarCheck size={20} />

          Book Test Drive
        </a>
      </motion.div>

      {/* Trust Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-16 grid grid-cols-3 gap-6 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"
      >
        <div className="text-center">
          <h3 className="text-3xl font-black text-white">
            1000+
          </h3>

          <p className="mt-2 text-sm text-gray-300">
            Happy Customers
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-black text-white">
            20+
          </h3>

          <p className="mt-2 text-sm text-gray-300">
            Car Brands
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-black text-white">
            Fast
          </h3>

          <p className="mt-2 text-sm text-gray-300">
            Finance Assistance
          </p>
        </div>
      </motion.div>

    </div>
  );
}