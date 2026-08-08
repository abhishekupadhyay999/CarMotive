"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeIndianRupee,
  Search,
  FileCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: BadgeIndianRupee,
    title: "Best Exchange Value",
    description:
      "Get the highest market value for your current vehicle with a transparent valuation process.",
  },
  {
    icon: Search,
    title: "Free Inspection",
    description:
      "Our experts inspect your vehicle at no extra cost for an accurate exchange quote.",
  },
  {
    icon: FileCheck,
    title: "Loan Assistance",
    description:
      "Complete documentation support including loan closure and ownership transfer.",
  },
  {
    icon: Zap,
    title: "Instant Valuation",
    description:
      "Receive your exchange estimate quickly and upgrade without unnecessary delays.",
  },
];

export default function ExchangeSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1b1b1b_0%,#050505_75%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="inline-flex rounded-full border border-[#E50914]/30 bg-[#E50914]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#E50914]">
            Vehicle Exchange
          </span>

          {/* Heading */}
          <h2 className="mt-7 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Exchange Your Car
            <br />
            <span className="text-[#E50914]">
              For A Better Drive
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
            Upgrade to your dream car with confidence. Get a fair market value
            for your existing vehicle, enjoy a hassle-free exchange process,
            quick documentation, finance assistance and exclusive dealer
            benefits—all under one roof.
          </p>

          {/* Features */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#E50914]/40 hover:shadow-[0_20px_50px_rgba(229,9,20,0.15)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E50914]/10">
                    <Icon
                      size={24}
                      className="text-[#E50914]"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap gap-4">
            {/* Google Form */}
            <a
              href="https://forms.gle/fUsBh9wLhjo2Tpg29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#E50914] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(229,9,20,0.35)]"
            >
              Get Free Valuation
            </a>

            {/* Talk to Expert */}
            <button className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#E50914] hover:bg-white/10">
              Talk to Expert

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Trust Strip */}
          <div className="mt-10 flex flex-wrap gap-6">
            {[
              "Dealer Verified",
              "Transparent Process",
              "Instant Quote",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-gray-300"
              >
                <CheckCircle2
                  size={18}
                  className="text-green-500"
                />

                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] shadow-2xl">
            <Image
              src="/images/home/exchange.png"
              alt="Exchange Your Car"
              width={900}
              height={700}
              priority
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-8 -left-8 hidden rounded-3xl border border-white/10 bg-[#111111] p-6 shadow-2xl lg:block"
          >
            <p className="text-sm text-gray-400">
              Successful Exchanges
            </p>

            <h3 className="mt-2 text-5xl font-bold text-[#E50914]">
              500+
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Happy customers upgraded their cars with Carmotive
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}