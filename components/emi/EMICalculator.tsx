"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import EMISlider from "./EMISlider";
import EMIResult from "./EMIResult";
import { Calculator } from "lucide-react";

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
      className="relative overflow-hidden bg-[#F8FAFC] py-24"
    >
      {/* Background Decoration */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FF5A1F]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/30 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 font-semibold text-[#FF5A1F]">

            <Calculator size={18} />

            EMI Calculator

          </div>

          <h2 className="text-4xl font-black text-gray-900 lg:text-5xl">
            Calculate Your
            <span className="text-[#FF5A1F]">
              {" "}Monthly EMI
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Instantly estimate your monthly EMI, total interest and overall
            repayment before choosing your dream car.
          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="grid items-start gap-10 lg:grid-cols-2">

          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl"
          >

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

          </motion.div>

          {/* Result */}

          <EMIResult
            emi={emi}
            totalPayment={totalPayment}
            totalInterest={totalInterest}
            loanAmount={loanAmount}
          />

        </div>

      </div>
    </section>
  );
}