"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  BadgeCheck,
  Landmark,
  Wallet,
} from "lucide-react";

import EMISlider from "./EMISlider";
import EMIResult from "./EMIResult";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1500000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenure, setTenure] = useState(5);

  const { emi, totalPayment, totalInterest } = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    const emi =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanAmount;

    return {
      emi,
      totalPayment,
      totalInterest,
    };
  }, [loanAmount, interestRate, tenure]);

  return (
    <section
      id="emi"
      className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-white py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#FF5A1F]/10 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-orange-200/30 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-[#FF5A1F] shadow-sm">

            <Calculator size={18} />

            SMART EMI CALCULATOR

          </div>

          <h2 className="mt-8 text-5xl font-black leading-tight text-gray-900">

            Calculate Your

            <span className="block text-[#FF5A1F]">
              Monthly EMI
            </span>

            Before You Buy

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Estimate your monthly instalments, compare interest rates,
            explore different loan tenures and choose a repayment plan
            that perfectly suits your budget.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_.85fr]">

          {/* Calculator Card */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="relative overflow-hidden rounded-[36px] border border-orange-100 bg-white p-10 shadow-2xl"
          >
            {/* Card Glow */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-100 opacity-60 blur-3xl" />

            <div className="relative">

              <h3 className="text-3xl font-bold text-gray-900">
                Customize Your Loan
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Adjust the loan amount, interest rate and repayment period
                to instantly calculate your estimated monthly EMI.
              </p>

              <div className="mt-10 space-y-10">

                <EMISlider
                  label="Loan Amount"
                  value={loanAmount}
                  min={100000}
                  max={10000000}
                  step={50000}
                  prefix="₹"
                  onChange={setLoanAmount}
                />

                <EMISlider
                  label="Interest Rate"
                  value={interestRate}
                  min={5}
                  max={15}
                  step={0.1}
                  suffix="%"
                  onChange={setInterestRate}
                />

                <EMISlider
                  label="Loan Tenure"
                  value={tenure}
                  min={1}
                  max={7}
                  step={1}
                  suffix=" Years"
                  onChange={setTenure}
                />

              </div>

              {/* Bottom Highlights */}

              <div className="mt-12 grid gap-4 sm:grid-cols-2">

                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-orange-50 px-5 py-4">

                  <Landmark className="text-[#FF5A1F]" />

                  <div>

                    <h4 className="font-semibold">
                      20+ Banking Partners
                    </h4>

                    <p className="text-sm text-gray-500">
                      Compare multiple loan offers
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-orange-50 px-5 py-4">

                  <Wallet className="text-[#FF5A1F]" />

                  <div>

                    <h4 className="font-semibold">
                      Fast Approval
                    </h4>

                    <p className="text-sm text-gray-500">
                      Quick & hassle-free process
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Result Card */}

          <EMIResult
            emi={emi}
            totalPayment={totalPayment}
            totalInterest={totalInterest}
            loanAmount={loanAmount}
            interestRate={interestRate}
            tenure={tenure}
          />

        </div>

        {/* Trust Strip */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-20 grid gap-5 md:grid-cols-4"
        >
          {[
            "Quick Loan Approval",
            "Lowest Interest Rates",
            "Flexible EMI Plans",
            "Documentation Support",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-md"
            >
              <BadgeCheck className="text-[#FF5A1F]" />

              <span className="font-medium text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}

        

      </div>
    </section>
  );
}