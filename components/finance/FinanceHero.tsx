"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  BadgeCheck,
  Landmark,
  Wallet,
} from "lucide-react";
import Link from "next/link";

export default function FinanceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-white pt-36 pb-24">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-100 blur-3xl" />

      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-[#FF5A1F] shadow-sm">
              🚗 CAR FINANCE SOLUTIONS
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
              Drive Your Dream Car
              <br />
              With{" "}
              <span className="text-[#FF5A1F]">
                Easy Finance
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Compare finance offers from India's leading banks and NBFCs.
              Enjoy quick approvals, competitive interest rates, flexible EMI
              options, and complete assistance from our finance experts.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#finance-form"
                className="inline-flex items-center rounded-full bg-[#FF5A1F] px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
              >
                Apply for Finance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="#emi"
                className="inline-flex items-center rounded-full border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:border-[#FF5A1F] hover:text-[#FF5A1F]"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate EMI
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                "Quick Loan Approval",
                "Low Interest Rates",
                "Documentation Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm"
                >
                  <BadgeCheck className="h-5 w-5 text-[#FF5A1F]" />
                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="rounded-[36px] border border-orange-100 bg-white p-8 shadow-2xl">
              <div className="rounded-3xl bg-gradient-to-br from-[#FF5A1F] to-orange-500 p-10 text-white">
                <Landmark className="mb-6 h-14 w-14" />

                <h3 className="text-3xl font-bold">
                  Instant Finance Assistance
                </h3>

                <p className="mt-4 text-orange-100 leading-7">
                  Compare offers from multiple banks and choose the best loan
                  with attractive interest rates and flexible repayment plans.
                </p>

                <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span>Loan Approval</span>
                    <strong>Fast Track</strong>
                  </div>

                  <div className="mt-4 h-2 rounded-full bg-white/20">
                    <div className="h-2 w-4/5 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -left-8 top-10 rounded-2xl bg-white p-5 shadow-xl"
            >
              <Wallet className="mb-2 h-8 w-8 text-[#FF5A1F]" />
              <p className="text-sm text-gray-500">Starting EMI</p>
              <h4 className="text-2xl font-bold text-gray-900">
                ₹7,999/mo*
              </h4>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -right-6 bottom-8 rounded-2xl bg-white p-5 shadow-xl"
            >
              <h4 className="text-xl font-bold text-[#FF5A1F]">
                20+
              </h4>
              <p className="text-sm text-gray-600">
                Banking Partners
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}