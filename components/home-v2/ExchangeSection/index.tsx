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
    <section className="relative overflow-hidden bg-[#F8F8F8] py-28">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffe7e7_0%,transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}

          <span className="inline-flex rounded-full border border-red-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#E50914] shadow-sm">
            Vehicle Exchange Program
          </span>

          {/* Heading */}

          <h2 className="mt-7 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Upgrade Your Car
            <br />
            <span className="text-[#E50914]">
              Without the Hassle
            </span>
          </h2>

          {/* Description */}

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            Exchange your existing vehicle for a newer one with complete
            transparency. Our experts provide fair market valuation, free
            inspection, quick paperwork, loan closure assistance and exclusive
            exchange offers through our trusted dealer network.
          </p>

          {/* Feature Grid */}

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
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#E50914]/20 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                    <Icon
                      size={24}
                      className="text-[#E50914]"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
                    {/* CTA Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#E50914] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl">
              Get Free Valuation
            </button>

            <button className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition-all duration-300 hover:border-[#E50914] hover:text-[#E50914] hover:shadow-lg">
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
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <CheckCircle2
                  size={18}
                  className="text-green-600"
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
          <div className="overflow-hidden rounded-[32px] border border-white bg-white shadow-2xl">
            <Image
              src="/images/home/exchange.png"
              alt="Exchange Your Car"
              width={900}
              height={700}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
              priority
            />
          </div>

          {/* Floating Card */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 -left-8 hidden rounded-3xl bg-white p-6 shadow-2xl lg:block"
          >
            <p className="text-sm text-gray-500">
              Successful Exchanges
            </p>

            <h3 className="mt-1 text-4xl font-bold text-[#E50914]">
              1000+
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Happy customers upgraded
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}