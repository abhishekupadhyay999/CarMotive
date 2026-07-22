"use client";

import Image from "next/image";
import { Check } from "lucide-react";

import { DreamCarForm } from "./types";
import { brands } from "./data";

interface BrandSelectorProps {
  form: DreamCarForm;
  setForm: React.Dispatch<React.SetStateAction<DreamCarForm>>;
}

const logoMap: Record<string, string> = {
  BMW: "/brands/BMW.svg",
  Mercedes: "/brands/mercedes.png",
  Audi: "/brands/audi.png",
  Toyota: "/brands/toyota.png",
  Hyundai: "/brands/hyundai.png",
  Honda: "/brands/honda-11.svg",
  Kia: "/brands/kia.png",
  Tata: "/brands/tata.png",
  Mahindra: "/brands/mahindra.png",
  Volkswagen: "/brands/volkswagen.jpeg",
  Skoda: "/brands/skoda.png",
  Jeep: "/brands/jeep.png",
};

export default function BrandSelector({
  form,
  setForm,
}: BrandSelectorProps) {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Choose Your Preferred Brand
        </h3>

        <p className="text-gray-500 mt-2">
          Select a brand or leave it blank if you're open to suggestions.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {/* Any Brand Card */}
        <button
          type="button"
          onClick={() =>
            setForm({
              ...form,
              brand: "",
            })
          }
          className={`
            relative
            bg-white
            rounded-2xl
            border-2
            p-5
            min-h-[130px]
            flex
            flex-col
            items-center
            justify-center
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl

            ${
              form.brand === ""
                ? "border-orange-500 bg-orange-50 shadow-lg shadow-orange-200"
                : "border-gray-200 hover:border-orange-300"
            }
          `}
        >
          {form.brand === "" && (
            <div className="absolute top-3 right-3 bg-orange-500 text-white rounded-full p-1">
              <Check size={14} />
            </div>
          )}

          <span className="text-4xl mb-2">🚗</span>

          <p className="font-semibold text-gray-800">
            Any Brand
          </p>

          <p className="text-xs text-gray-500 mt-1 text-center">
            Show me the best options
          </p>
        </button>

        {/* Brand Cards */}
        {brands.map((brand) => {
          const selected = form.brand === brand;

          return (
            <button
              key={brand}
              type="button"
              onClick={() =>
                setForm({
                  ...form,
                  brand: selected ? "" : brand,
                })
              }
              className={`
                relative
                bg-white
                rounded-2xl
                border-2
                p-5
                min-h-[130px]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl

                ${
                  selected
                    ? "border-orange-500 shadow-lg shadow-orange-200 bg-orange-50"
                    : "border-gray-200 hover:border-orange-300"
                }
              `}
            >
              {selected && (
                <div className="absolute top-3 right-3 bg-orange-500 text-white rounded-full p-1">
                  <Check size={14} />
                </div>
              )}

              <div className="flex justify-center items-center h-16">
                <Image
                  src={logoMap[brand]}
                  alt={brand}
                  width={80}
                  height={40}
                  className="object-contain"
                />
              </div>

              <p className="mt-4 text-center font-medium text-gray-800">
                {brand}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}