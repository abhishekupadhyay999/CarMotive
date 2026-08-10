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
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        rounded-[32px]
        border border-gray-200
        bg-white
        p-8
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        backdrop-blur-xl
        transition-colors duration-300

        dark:border-white/10
        dark:bg-[#111111]/90
        dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
      "
    >
      {/* ================= HEADER ================= */}

      <div>
        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#E50914]
          "
        >
          EMI Calculator
        </span>

        <h3
          className="
            mt-3
            text-3xl
            font-bold
            text-gray-900

            dark:text-white
          "
        >
          Calculate Your EMI
        </h3>

        <p
          className="
            mt-2
            text-gray-500

            dark:text-gray-400
          "
        >
          Estimate your monthly EMI instantly.
        </p>
      </div>

      {/* ================= LOAN AMOUNT ================= */}

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span
            className="
              font-medium
              text-gray-700

              dark:text-gray-300
            "
          >
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
          className="
            h-2
            w-full
            cursor-pointer
            accent-[#E50914]
          "
        />

        <div
          className="
            mt-2
            flex
            justify-between
            text-xs
            text-gray-400
          "
        >
          <span>₹1 Lakh</span>
          <span>₹1 Crore</span>
        </div>
      </div>

      {/* ================= INTEREST RATE ================= */}

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span
            className="
              font-medium
              text-gray-700

              dark:text-gray-300
            "
          >
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
          className="
            h-2
            w-full
            cursor-pointer
            accent-[#E50914]
          "
        />

        <div
          className="
            mt-2
            flex
            justify-between
            text-xs
            text-gray-400
          "
        >
          <span>6%</span>
          <span>18%</span>
        </div>
      </div>

      {/* ================= TENURE ================= */}

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span
            className="
              font-medium
              text-gray-700

              dark:text-gray-300
            "
          >
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
          className="
            h-2
            w-full
            cursor-pointer
            accent-[#E50914]
          "
        />

        <div
          className="
            mt-2
            flex
            justify-between
            text-xs
            text-gray-400
          "
        >
          <span>1 Year</span>
          <span>7 Years</span>
        </div>
      </div>

      {/* ================= RESULTS ================= */}

      <div className="mt-10 grid gap-4">
        {/* Monthly EMI */}

        <div
          className="
            rounded-2xl
            border border-red-100
            bg-red-50
            p-5

            dark:border-[#E50914]/20
            dark:bg-[#E50914]/10
          "
        >
          <p
            className="
              text-sm
              text-gray-500

              dark:text-gray-400
            "
          >
            Monthly EMI
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              text-[#E50914]
            "
          >
            ₹ {format(emi)}
          </h2>
        </div>

        {/* Interest + Total */}

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Total Interest */}

          <div
            className="
              rounded-2xl
              border border-gray-200
              bg-gray-50
              p-5

              dark:border-white/10
              dark:bg-[#1A1A1A]
            "
          >
            <p
              className="
                text-sm
                text-gray-500

                dark:text-gray-400
              "
            >
              Total Interest
            </p>

            <h3
              className="
                mt-2
                text-xl
                font-bold
                text-gray-900

                dark:text-white
              "
            >
              ₹ {format(totalInterest)}
            </h3>
          </div>

          {/* Total Payment */}

          <div
            className="
              rounded-2xl
              border border-gray-200
              bg-gray-50
              p-5

              dark:border-white/10
              dark:bg-[#1A1A1A]
            "
          >
            <p
              className="
                text-sm
                text-gray-500

                dark:text-gray-400
              "
            >
              Total Payment
            </p>

            <h3
              className="
                mt-2
                text-xl
                font-bold
                text-gray-900

                dark:text-white
              "
            >
              ₹ {format(totalAmount)}
            </h3>
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}

      <button
        type="button"
        className="
          mt-8
          w-full
          rounded-full
          bg-[#E50914]
          py-4
          font-semibold
          text-white
          transition-all duration-300

          hover:-translate-y-1
          hover:bg-red-700
          hover:shadow-[0_15px_40px_rgba(229,9,20,0.30)]
        "
      >
        Apply for Finance
      </button>
    </motion.div>
  );
}