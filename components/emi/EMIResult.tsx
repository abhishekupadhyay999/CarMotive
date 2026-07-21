"use client";

import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  IndianRupee,
  Wallet,
  Percent,
  MessageCircle,
} from "lucide-react";

interface Props {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  loanAmount: number;
}

const COLORS = ["#FF5A1F", "#FDBA74"];

export default function EMIResult({
  emi,
  totalPayment,
  totalInterest,
  loanAmount,
}: Props) {
  const data = [
    {
      name: "Principal",
      value: loanAmount,
    },
    {
      name: "Interest",
      value: totalInterest,
    },
  ];

  const whatsappMessage = encodeURIComponent(
`Hi Carmotive India,

I'm interested in car finance.

Loan Amount: ₹${loanAmount.toLocaleString("en-IN")}
Estimated EMI: ₹${Math.round(emi).toLocaleString("en-IN")}

Please contact me with the best finance options.`
  );

  return (
    <motion.div
      key={emi}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5 }}
      className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl"
    >

      {/* Heading */}

      <div className="mb-8">

        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FF5A1F]">
          Finance Summary
        </span>

        <h3 className="mt-5 text-3xl font-black text-gray-900">
          EMI Breakdown
        </h3>

        <p className="mt-2 text-gray-500">
          A complete overview of your loan repayment.
        </p>

      </div>

      {/* Chart */}

      <div className="h-72">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={75}
              outerRadius={105}
              paddingAngle={4}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Summary Cards */}

      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between rounded-2xl bg-orange-50 p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-white p-3 shadow">

              <IndianRupee
                className="text-[#FF5A1F]"
                size={20}
              />

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Monthly EMI
              </p>

              <h4 className="font-bold text-gray-900">
                ₹{Math.round(emi).toLocaleString("en-IN")}
              </h4>

            </div>

          </div>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-white p-3 shadow">

              <Wallet
                className="text-[#FF5A1F]"
                size={20}
              />

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Loan Amount
              </p>

              <h4 className="font-bold text-gray-900">
                ₹{loanAmount.toLocaleString("en-IN")}
              </h4>

            </div>

          </div>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-white p-3 shadow">

              <Percent
                className="text-[#FF5A1F]"
                size={20}
              />

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Interest Payable
              </p>

              <h4 className="font-bold text-gray-900">
                ₹{Math.round(totalInterest).toLocaleString("en-IN")}
              </h4>

            </div>

          </div>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-white p-3 shadow">

              <IndianRupee
                className="text-[#FF5A1F]"
                size={20}
              />

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Total Payment
              </p>

              <h4 className="font-bold text-gray-900">
                ₹{Math.round(totalPayment).toLocaleString("en-IN")}
              </h4>

            </div>

          </div>

        </div>

      </div>

      {/* CTA */}

      <a
        href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center justify-center gap-3 rounded-full bg-[#FF5A1F] py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E64A19]"
      >

        <MessageCircle size={22} />

        Get Best Finance Offer

      </a>

    </motion.div>
  );
}