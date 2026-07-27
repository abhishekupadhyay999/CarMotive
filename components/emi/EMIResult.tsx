"use client";

import { motion } from "framer-motion";
import { ArrowRight, Landmark, Clock3 } from "lucide-react";
import Link from "next/link";

interface EMIResultProps {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  loanAmount: number;
  interestRate: number;
  tenure: number;
}

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(amount);

export default function EMIResult({
  emi,
  totalPayment,
  totalInterest,
  loanAmount,
  interestRate,
  tenure,
}: EMIResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[36px] border border-orange-100 bg-white p-8 shadow-2xl"
    >
      {/* Background Glow */}

      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-100 opacity-50 blur-3xl" />

      <div className="relative">

        {/* Top Cards */}

        <div className="grid grid-cols-2 gap-4">

          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-orange-100 bg-orange-50 p-5"
          >
            <Landmark className="mb-3 h-8 w-8 text-[#FF5A1F]" />

            <p className="text-sm text-gray-500">
              Banking Partners
            </p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              20+
            </h3>

          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-orange-100 bg-orange-50 p-5"
          >
            <Clock3 className="mb-3 h-8 w-8 text-[#FF5A1F]" />

            <p className="text-sm text-gray-500">
              Approval Time
            </p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              24 Hrs
            </h3>

          </motion.div>

        </div>

        {/* EMI */}

        <div className="mt-8 rounded-3xl bg-gradient-to-r from-[#FF5A1F] to-orange-500 p-8 text-white">

          <p className="text-orange-100">
            Estimated Monthly EMI
          </p>

          <motion.h2
            key={emi}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-5xl font-black"
          >
            ₹{formatCurrency(emi)}
          </motion.h2>

          <p className="mt-2 text-orange-100">
            Per Month
          </p>

        </div>

        {/* Loan Summary */}

        <div className="mt-8 rounded-3xl border border-gray-200 bg-gray-50 p-6">

          <h3 className="text-xl font-bold text-gray-900">
            Loan Summary
          </h3>

          <div className="mt-6 space-y-5">

            <SummaryRow
              label="Loan Amount"
              value={`₹${formatCurrency(loanAmount)}`}
            />

            <SummaryRow
              label="Interest Rate"
              value={`${interestRate}%`}
            />

            <SummaryRow
              label="Loan Tenure"
              value={`${tenure} Years`}
            />

            <SummaryRow
              label="Interest Payable"
              value={`₹${formatCurrency(totalInterest)}`}
            />

            <div className="border-t pt-5">

              <SummaryRow
                label="Total Amount Payable"
                value={`₹${formatCurrency(totalPayment)}`}
                bold
              />

            </div>

          </div>

        </div>

        {/* CTA */}

        <Link
          href="#finance-form"
          className="mt-8 flex w-full items-center justify-center rounded-full bg-[#FF5A1F] px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-orange-600"
        >
          Apply For Finance

          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>

        {/* Bottom Note */}

        <p className="mt-5 text-center text-sm leading-6 text-gray-500">
          *EMI shown is an estimate based on the selected loan amount,
          interest rate and tenure. Final terms may vary depending on
          bank policies and eligibility.
        </p>

      </div>
    </motion.div>
  );
}

interface SummaryRowProps {
  label: string;
  value: string;
  bold?: boolean;
}

function SummaryRow({
  label,
  value,
  bold = false,
}: SummaryRowProps) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-gray-600">
        {label}
      </span>

      <motion.span
        key={value}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${
          bold
            ? "text-xl font-bold text-[#FF5A1F]"
            : "font-semibold text-gray-900"
        }`}
      >
        {value}
      </motion.span>

    </div>
  );
}