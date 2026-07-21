"use client";

interface Props {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (value: number) => void;
}

export default function EMISlider({
  label,
  value,
  min,
  max,
  step,
  prefix = "",
  suffix = "",
  onChange,
}: Props) {
  const handleInput = (val: number) => {
    if (isNaN(val)) return;

    if (val < min) val = min;
    if (val > max) val = max;

    onChange(val);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  const displayValue =
    prefix === "₹"
      ? `${prefix}${value.toLocaleString("en-IN")}`
      : `${value}${suffix}`;

  return (
    <div className="mb-10">

      {/* Label */}

      <div className="mb-4 flex items-center justify-between">

        <label className="text-lg font-semibold text-gray-800">
          {label}
        </label>

        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleInput(Number(e.target.value))}
          className="w-44 rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-right font-bold text-[#FF5A1F] outline-none transition-all duration-300 focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100"
        />

      </div>

      {/* Current Value */}

      <div className="mb-4 flex items-center justify-between">

        <span className="text-sm font-medium text-gray-500">
          Current Value
        </span>

        <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-[#FF5A1F]">
          {displayValue}
        </span>

      </div>

      {/* Slider */}

      <div className="relative">

        {/* Progress */}

        <div className="absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-gray-200" />

        <div
          className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-[#FF5A1F]"
          style={{
            width: `${percentage}%`,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleInput(Number(e.target.value))}
          className="relative h-2 w-full cursor-pointer appearance-none bg-transparent"
          style={{
            accentColor: "#FF5A1F",
          }}
        />

      </div>

      {/* Min Max */}

      <div className="mt-3 flex justify-between text-xs font-medium text-gray-500">

        <span>
          {prefix}
          {min.toLocaleString("en-IN")}
          {suffix}
        </span>

        <span>
          {prefix}
          {max.toLocaleString("en-IN")}
          {suffix}
        </span>

      </div>

    </div>
  );
}