"use client";

import {
  Car,
  IndianRupee,
  Fuel,
  Settings2,
  Landmark,
  Sparkles,
} from "lucide-react";

import { DreamCarForm } from "./types";

interface SummaryCardProps {
  form: DreamCarForm;
}

export default function SummaryCard({
  form,
}: SummaryCardProps) {

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  // Approx EMI (9% for 5 years)
  const calculateEMI = () => {
    const loan = form.budget * 0.8;
    const rate = 9 / 12 / 100;
    const tenure = 60;

    const emi =
      (loan * rate * Math.pow(1 + rate, tenure)) /
      (Math.pow(1 + rate, tenure) - 1);

    return Math.round(emi);
  };

  const recommendation = () => {
    if (form.budget <= 800000)
      return "Perfect budget for quality hatchbacks and compact sedans.";

    if (form.budget <= 1500000)
      return "Great choice! Family SUVs and premium sedans fit this range.";

    if (form.budget <= 2500000)
      return "Excellent! Premium SUVs and executive sedans await.";

    return "Luxury segment unlocked. We'll help you find the best premium vehicle.";
  };

  return (
    <div className="sticky top-28">

      <div className="rounded-3xl bg-white shadow-2xl border border-orange-100 overflow-hidden">

        {/* Header */}

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">

          <h3 className="text-2xl font-bold">
            Your Dream Car
          </h3>

          <p className="text-orange-100 mt-1">
            Live Preference Summary
          </p>

        </div>

        {/* Content */}

        <div className="p-6 space-y-5">

          <SummaryRow
            icon={<IndianRupee size={18} />}
            label="Budget"
            value={formatCurrency(form.budget)}
          />

          <SummaryRow
            icon={<Car size={18} />}
            label="Brand"
            value={form.brand || "Any Brand"}
          />

          <SummaryRow
            icon={<Fuel size={18} />}
            label="Fuel"
            value={form.fuel || "Not Selected"}
          />

          <SummaryRow
            icon={<Settings2 size={18} />}
            label="Transmission"
            value={form.transmission || "Not Selected"}
          />

          <SummaryRow
            icon={<Car size={18} />}
            label="Body Type"
            value={form.bodyType || "Not Selected"}
          />

          <SummaryRow
            icon={<Landmark size={18} />}
            label="Finance"
            value={form.finance ? "Required" : "Not Required"}
          />

          {form.finance && (
            <div className="rounded-2xl bg-orange-50 border border-orange-100 p-5">

              <p className="text-sm text-gray-500">
                Estimated EMI
              </p>

              <h2 className="text-3xl font-bold text-orange-600 mt-1">
                ₹{calculateEMI().toLocaleString("en-IN")}
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Approximate EMI for 5 years @ 9% interest
              </p>

            </div>
          )}

          <div className="rounded-2xl bg-slate-50 p-5 border">

            <div className="flex items-center gap-2 mb-3">

              <Sparkles
                size={18}
                className="text-orange-500"
              />

              <h4 className="font-semibold">
                Recommendation
              </h4>

            </div>

            <p className="text-sm text-gray-600 leading-7">
              {recommendation()}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

interface RowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function SummaryRow({
  icon,
  label,
  value,
}: RowProps) {
  return (
    <div className="flex justify-between items-center border-b pb-4">

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
          {icon}
        </div>

        <span className="text-gray-600">
          {label}
        </span>

      </div>

      <span className="font-semibold text-gray-900 text-right max-w-[140px]">
        {value}
      </span>

    </div>
  );
}