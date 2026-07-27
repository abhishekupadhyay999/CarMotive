"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  BadgeCheck,
  Wallet,
  FileCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Landmark,
    title: "Low Interest Rates",
    description:
      "Get attractive interest rates from India's leading banks and NBFCs.",
  },
  {
    icon: BadgeCheck,
    title: "Fast Loan Approval",
    description:
      "Quick eligibility checks and faster approvals to help you drive sooner.",
  },
  {
    icon: Wallet,
    title: "Flexible EMI Options",
    description:
      "Choose repayment plans that suit your monthly budget and financial goals.",
  },
  {
    icon: FileCheck,
    title: "100% Documentation Support",
    description:
      "Our experts assist you through every step of the finance documentation process.",
  },
];

export default function FinanceBenefits() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FF5A1F]">
            WHY FINANCE WITH US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Finance Made{" "}
            <span className="text-[#FF5A1F]">Simple & Hassle-Free</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We work with trusted banks and NBFCs to provide quick approvals,
            competitive interest rates, flexible EMI options and complete
            assistance throughout your financing journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:border-[#FF5A1F] hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition-all duration-300 group-hover:bg-[#FF5A1F]">
                  <Icon className="h-8 w-8 text-[#FF5A1F] transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {benefit.description}
                </p>

                <div className="mt-8 h-1 w-14 rounded-full bg-orange-200 transition-all duration-300 group-hover:w-24 group-hover:bg-[#FF5A1F]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}