"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  CarFront,
  BadgeIndianRupee,
  ArrowLeftRight,
  Calculator,
  ShieldCheck,
  Truck,
  UserCheck,
} from "lucide-react";

import FeatureCard from "./FeaturedCard";

const features = [
  {
    icon: Building2,
    title: "All Leading Brands Under One Roof",
    description:
      "Compare multiple brands, models and variants at one destination and choose the car that truly suits you.",
  },
  {
    icon: CarFront,
    title: "Ready Stock. No Unnecessary Waiting.",
    description:
      "Get access to cars in ready stock and experience faster deliveries without unnecessary waiting periods.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Best Possible Deals",
    description:
      "Our team works hard to bring you competitive pricing, attractive offers and maximum value on your purchase.",
  },
  {
    icon: ArrowLeftRight,
    title: "Best Exchange Value",
    description:
      "Upgrade your existing car with competitive exchange valuations and make your new-car purchase even more convenient.",
  },
  {
    icon: Calculator,
    title: "Easy Finance & EMI",
    description:
      "Explore multiple finance options, attractive interest rates and flexible EMI solutions to suit your budget.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Buying Experience",
    description:
      "No hidden surprises. Clear quotations, transparent documentation and complete assistance throughout your purchase.",
  },
  {
    icon: Truck,
    title: "PAN India Delivery",
    description:
      "Your dream car doesn't have to be limited by your location. We facilitate vehicle deliveries across India.",
  },
  {
    icon: UserCheck,
    title: "Expert Car Buying Assistance",
    description:
      "Our experienced team helps you understand features, variants, pricing and ownership considerations so you can make an informed decision.",
  },
];

const stats = [
  {
    number: "1,000+",
    label: "Happy Customers",
  },
  {
    number: "500+",
    label: "Premium Cars",
  },
  {
    number: "4.9★",
    label: "Google Rating",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fff5f5_0%,#ffffff_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#E50914]/20 bg-[#E50914]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#E50914]">
            Why Choose CARMOTIVE INDIA?
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            A Smarter Way to Buy Your Next Car
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            At <strong>CARMOTIVE INDIA</strong>, we bring multiple leading car
            brands, competitive deals and a seamless buying experience together
            under one roof. From choosing the right car to driving it home, our
            team is with you at every step.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  index={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            {/* Promise */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="mt-12"
            >
              <div className="rounded-3xl border border-[#E50914]/10 bg-[#E50914]/5 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E50914]">
                  1000+ Happy Customers. One Promise.
                </p>

                <h3 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
                  The Right Car.
                  <br />
                  The Right Deal.
                  <br />
                  The Right Experience.
                </h3>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-[32px] border border-gray-200 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/Whychoose/bmw.jpeg"
                alt="Carmotive India premium car"
                width={900}
                height={900}
                className="h-[640px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="absolute bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl"
            >
              <div className="grid grid-cols-3 gap-6">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="text-center"
                  >
                    <h3 className="text-3xl font-bold text-[#E50914]">
                      {item.number}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}