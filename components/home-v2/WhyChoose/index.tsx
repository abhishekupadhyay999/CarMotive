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
  CheckCircle2,
} from "lucide-react";

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
    <section
      id="why-choose"
      className="
        relative overflow-hidden
        bg-white py-24
        text-gray-900
        transition-colors duration-300
        dark:bg-black
        dark:text-white
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0">
        <Image
          src="/images/Whychoose/whychoose.png"
          alt="Carmotive India premium cars"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* =====================================================
          LIGHT MODE OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-white/75 dark:hidden" />

      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/40 dark:hidden" />

      {/* =====================================================
          DARK MODE OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 hidden bg-black/70 dark:block" />

      <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/85 to-black/45 dark:block" />

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent dark:from-black" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-4xl"
        >
          {/* Badge */}

          <span
            className="
              inline-flex rounded-full
              border border-[#E50914]/50
              bg-[#E50914]/10
              px-5 py-2
              text-xs font-semibold
              uppercase tracking-[0.35em]
              text-[#E50914]
              backdrop-blur-sm
            "
          >
            Why Choose CARMOTIVE INDIA?
          </span>

          {/* Heading */}

          <h2
            className="
              mt-7 max-w-4xl
              text-4xl font-bold
              leading-tight
              text-gray-900
              md:text-5xl
              lg:text-6xl
              dark:text-white
            "
          >
            A Smarter Way to Buy
            <br />

            <span className="text-[#E50914]">
              Your Next Car
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-7 max-w-3xl
              text-base leading-8
              text-gray-700
              md:text-lg
              dark:text-gray-300
            "
          >
            At{" "}
            <strong className="text-gray-900 dark:text-white">
              CARMOTIVE INDIA
            </strong>
            , we bring multiple leading car brands, competitive deals and a
            seamless buying experience together under one roof. From choosing
            the right car to driving it home, our team is with you at every
            step.
          </p>
        </motion.div>

        {/* =================================================
            BENEFITS
        ================================================= */}

        <div className="mt-16 grid gap-x-16 gap-y-0 lg:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="
                  group
                  border-b
                  border-gray-300
                  py-6
                  dark:border-white/15
                "
              >
                <div className="flex gap-5">
                  {/* Number */}

                  <div className="flex-shrink-0">
                    <span className="text-sm font-semibold tracking-widest text-[#E50914]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}

                  <div
                    className="
                      flex h-11 w-11
                      flex-shrink-0
                      items-center justify-center
                      rounded-xl
                      border border-gray-300
                      bg-white/70
                      backdrop-blur-md
                      transition-all duration-300

                      group-hover:border-[#E50914]/50
                      group-hover:bg-[#E50914]/10

                      dark:border-white/10
                      dark:bg-black/40
                    "
                  >
                    <Icon
                      size={21}
                      className="text-[#E50914]"
                    />
                  </div>

                  {/* Content */}

                  <div className="pb-1">
                    <h3
                      className="
                        text-lg font-semibold
                        text-gray-900
                        transition-colors duration-300
                        group-hover:text-[#E50914]
                        md:text-xl
                        dark:text-white
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-2 max-w-xl
                        text-sm leading-6
                        text-gray-600
                        md:text-base
                        dark:text-gray-400
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =================================================
            STATS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-16 overflow-hidden
            rounded-3xl
            border border-gray-300
            bg-white/75
            shadow-xl
            backdrop-blur-xl

            dark:border-white/15
            dark:bg-black/55
            dark:shadow-none
          "
        >
          <div className="grid md:grid-cols-3">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`
                  relative
                  px-6 py-8
                  text-center
                  md:py-10
                  ${
                    index !== stats.length - 1
                      ? "border-b border-gray-200 md:border-b-0 md:border-r dark:border-white/10"
                      : ""
                  }
                `}
              >
                <h3 className="text-4xl font-bold text-[#E50914] md:text-5xl">
                  {item.number}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            FINAL PROMISE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-12 flex
            flex-col items-start
            justify-between gap-6
            border-t border-gray-300
            pt-10

            md:flex-row
            md:items-center

            dark:border-white/15
          "
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E50914]">
              1000+ Happy Customers. One Promise.
            </p>

            <h3
              className="
                mt-3
                text-2xl font-bold
                text-gray-900
                md:text-3xl
                dark:text-white
              "
            >
              The Right Car.{" "}
              <span className="text-gray-500 dark:text-gray-400">
                The Right Deal.
              </span>{" "}
              <span className="text-gray-900 dark:text-white">
                The Right Experience.
              </span>
            </h3>
          </div>

          {/* Trust points */}

          <div className="flex flex-wrap gap-4">
            {[
              "Trusted Dealer",
              "Transparent Deals",
              "Expert Assistance",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex items-center gap-2
                  text-sm
                  text-gray-700
                  dark:text-gray-300
                "
              >
                <CheckCircle2
                  size={17}
                  className="text-[#E50914]"
                />

                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}