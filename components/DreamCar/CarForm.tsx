"use client";

import { DreamCarForm } from "./types";
import { fuelTypes, transmissions, bodyTypes } from "./data";

interface CarFormProps {
  form: DreamCarForm;
  setForm: React.Dispatch<React.SetStateAction<DreamCarForm>>;
}

export default function CarForm({
  form,
  setForm,
}: CarFormProps) {
  return (
    <div className="space-y-10">

      {/* Fuel Type */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Fuel Type
        </h3>

        <div className="flex flex-wrap gap-3">
          {fuelTypes.map((fuel) => (
            <button
              key={fuel}
              type="button"
              onClick={() =>
                setForm({
                  ...form,
                  fuel,
                })
              }
              className={`
                px-5 py-3 rounded-full border transition-all duration-300

                ${
                  form.fuel === fuel
                    ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                    : "border-gray-300 hover:border-orange-400"
                }
              `}
            >
              {fuel}
            </button>
          ))}
        </div>
      </div>

      {/* Transmission */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Transmission
        </h3>

        <div className="flex gap-3 flex-wrap">
          {transmissions.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() =>
                setForm({
                  ...form,
                  transmission: item,
                })
              }
              className={`
                px-5 py-3 rounded-full border transition-all

                ${
                  form.transmission === item
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-gray-300 hover:border-orange-400"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Body Type */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Body Type
        </h3>

        <div className="flex flex-wrap gap-3">
          {bodyTypes.map((body) => (
            <button
              key={body}
              type="button"
              onClick={() =>
                setForm({
                  ...form,
                  bodyType: body,
                })
              }
              className={`
                px-5 py-3 rounded-full border transition-all

                ${
                  form.bodyType === body
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-gray-300 hover:border-orange-400"
                }
              `}
            >
              {body}
            </button>
          ))}
        </div>
      </div>

      {/* Finance */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Need Finance?
        </h3>

        <div className="flex gap-4">

          <button
            type="button"
            onClick={() =>
              setForm({
                ...form,
                finance: true,
              })
            }
            className={`
              flex-1 py-4 rounded-xl border font-medium transition-all

              ${
                form.finance
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-300"
              }
            `}
          >
            Yes
          </button>

          <button
            type="button"
            onClick={() =>
              setForm({
                ...form,
                finance: false,
              })
            }
            className={`
              flex-1 py-4 rounded-xl border font-medium transition-all

              ${
                !form.finance
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-300"
              }
            `}
          >
            No
          </button>

        </div>
      </div>

      {/* Contact Details */}

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
          className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500"
        />

      </div>

      <textarea
        rows={5}
        placeholder="Tell us anything else... (Optional)"
        value={form.message}
        onChange={(e) =>
          setForm({
            ...form,
            message: e.target.value,
          })
        }
        className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500"
      />
      <div className="rounded-2xl bg-orange-50 border border-orange-100 p-5">
  <p className="text-sm text-gray-700">
    ✅ Free expert consultation
  </p>

  <p className="text-sm text-gray-700 mt-2">
    ✅ Personalized car recommendations
  </p>

  <p className="text-sm text-gray-700 mt-2">
    ✅ Assistance with finance & documentation
  </p>
</div>

      {/* CTA */}

      <button
        type="submit"
        className="
          w-full
          py-5
          rounded-2xl
          bg-gradient-to-r
          from-orange-500
          to-orange-600
          text-white
          text-lg
          font-semibold
          shadow-xl
          hover:scale-[1.02]
          transition-all
          duration-300
        "
      >
        🚗 Find My Dream Car
      </button>

    </div>
  );
}