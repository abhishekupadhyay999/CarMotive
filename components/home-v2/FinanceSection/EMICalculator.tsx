"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function EMIcalculator() {
  const [loanAmount, setLoanAmount] = useState(1500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(5);

  const { emi, totalInterest, totalAmount } = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    const emi =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalAmount = emi * months;
    const totalInterest = totalAmount - loanAmount;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
    };
  }, [loanAmount, interestRate, tenure]);

  const format = (value: number) =>
    new Intl.NumberFormat("en-IN").format(value);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl"
    >
      <h3 className="text-2xl font-bold text-gray-900">
        EMI Calculator
      </h3>

      <p className="mt-2 text-gray-500">
        Estimate your monthly EMI instantly.
      </p>

      {/* Loan Amount */}

      <div className="mt-8">

        <div className="mb-2 flex items-center justify-between">

          <span className="font-medium text-gray-700">
            Loan Amount
          </span>

          <span className="font-semibold text-[#E50914]">
            ₹ {format(loanAmount)}
          </span>

        </div>

        <input
          type="range"
          min={100000}
          max={10000000}
          step={50000}
          value={loanAmount}
          onChange={(e) =>
            setLoanAmount(Number(e.target.value))
          }
          className="w-full accent-[#E50914]"
        />

      </div>

      {/* Interest */}

      <div className="mt-8">

        <div className="mb-2 flex items-center justify-between">

          <span className="font-medium text-gray-700">
            Interest Rate
          </span>

          <span className="font-semibold text-[#E50914]">
            {interestRate}%
          </span>

        </div>

        <input
          type="range"
          min={6}
          max={18}
          step={0.1}
          value={interestRate}
          onChange={(e) =>
            setInterestRate(Number(e.target.value))
          }
          className="w-full accent-[#E50914]"
        />

      </div>

      {/* Tenure */}

      <div className="mt-8">

        <div className="mb-2 flex items-center justify-between">

          <span className="font-medium text-gray-700">
            Loan Tenure
          </span>

          <span className="font-semibold text-[#E50914]">
            {tenure} Years
          </span>

        </div>

        <input
          type="range"
          min={1}
          max={7}
          step={1}
          value={tenure}
          onChange={(e) =>
            setTenure(Number(e.target.value))
          }
          className="w-full accent-[#E50914]"
        />

      </div>

      {/* Results */}

      <div className="mt-10 grid gap-4">

        <div className="rounded-2xl bg-[#F8F8F8] p-5">

          <p className="text-sm text-gray-500">
            Monthly EMI
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#E50914]">
            ₹ {format(emi)}
          </h2>

        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl bg-[#F8F8F8] p-5">

            <p className="text-sm text-gray-500">
              Total Interest
            </p>

            <h3 className="mt-2 text-xl font-bold text-gray-900">
              ₹ {format(totalInterest)}
            </h3>

          </div>

          <div className="rounded-2xl bg-[#F8F8F8] p-5">

            <p className="text-sm text-gray-500">
              Total Payment
            </p>

            <h3 className="mt-2 text-xl font-bold text-gray-900">
              ₹ {format(totalAmount)}
            </h3>

          </div>

        </div>

      </div>

      <button className="mt-8 w-full rounded-full bg-[#E50914] py-4 font-semibold text-white transition hover:bg-red-700">
        Apply for Finance
      </button>

    </motion.div>
  );
}