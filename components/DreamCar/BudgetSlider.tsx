"use client";

import { DreamCarForm } from "./types";

interface BudgetSliderProps {
  form: DreamCarForm;
  setForm: React.Dispatch<React.SetStateAction<DreamCarForm>>;
}

export default function BudgetSlider({
  form,
  setForm,
}: BudgetSliderProps) {
  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getCategory = (budget: number) => {
    if (budget <= 800000)
      return "🚗 Best for First-Time Buyers";
    if (budget <= 1500000)
      return "🔥 Popular Family Cars";
    if (budget <= 2500000)
      return "⭐ Premium SUVs & Sedans";

    return "👑 Luxury Vehicles";
  };

  return (
    <div>

      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-gray-900">
          Select Your Budget
        </h3>

        <span className="text-sm text-orange-600 font-medium">
          {getCategory(form.budget)}
        </span>
      </div>

      <p className="text-gray-500 mb-6">
        Move the slider to choose your preferred budget.
      </p>

      <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">

        <h2 className="text-4xl font-bold text-orange-600 mb-6">
          {formatIndianCurrency(form.budget)}
        </h2>

        <input
          type="range"
          min={300000}
          max={5000000}
          step={50000}
          value={form.budget}
          onChange={(e) =>
            setForm({
              ...form,
              budget: Number(e.target.value),
            })
          }
          className="
            w-full
            accent-orange-500
            cursor-pointer
          "
        />

        <div className="flex justify-between text-sm text-gray-500 mt-3">
          <span>₹3L</span>
          <span>₹50L+</span>
        </div>

      </div>

    </div>
  );
}