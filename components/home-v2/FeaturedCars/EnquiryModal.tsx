
"use client";

import { FormEvent, useEffect, useState } from "react";
import { X, CheckCircle2, LoaderCircle } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  carModel: string;
}

const initialForm = {
  name: "",
  mobile: "",
  variant: "",
  color: "",
};

export default function EnquiryModal({
  isOpen,
  onClose,
  carModel,
}: EnquiryModalProps) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !loading) {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, loading, onClose]);

  if (!isOpen) return null;

  function updateField(
    field: keyof typeof initialForm,
    value: string
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const mobile = form.mobile.replace(/[\s()-]/g, "");

    if (!/^[+]?[0-9]{10,15}$/.test(mobile)) {
      setError("Please enter a valid mobile number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/car-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          mobile,
          carModel,
          variant: form.variant.trim(),
          color: form.color.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your enquiry.");
      }

      setSuccess("Thank you! Your enquiry has been submitted.");
      setForm(initialForm);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#E50914] focus:ring-2 focus:ring-red-100";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !loading) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="h-1.5 bg-[#E50914]" />

        <div className="flex items-start justify-between gap-4 px-6 pb-2 pt-6 sm:px-8 sm:pt-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E50914]">
              Carmotive India
            </p>
            <h2
              id="enquiry-title"
              className="mt-2 text-2xl font-extrabold text-gray-950 sm:text-3xl"
            >
              Get the Best Price
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Share your details and our team will contact you.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Close enquiry form"
            className="rounded-full border border-gray-200 p-2 text-gray-600 transition hover:bg-gray-100 disabled:opacity-50"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-6 pb-7 pt-5 sm:px-8 sm:pb-8">
          <div>
            <label htmlFor="enquiry-name" className="text-sm font-semibold text-gray-800">
              Full Name *
            </label>
            <input
              id="enquiry-name"
              autoComplete="name"
              required
              maxLength={100}
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Enter your full name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="enquiry-mobile" className="text-sm font-semibold text-gray-800">
              Mobile Number *
            </label>
            <input
              id="enquiry-mobile"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              maxLength={20}
              value={form.mobile}
              onChange={(event) => updateField("mobile", event.target.value)}
              placeholder="Enter your mobile number"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="enquiry-model" className="text-sm font-semibold text-gray-800">
              Car Model
            </label>
            <input
              id="enquiry-model"
              value={carModel}
              readOnly
              className={`${inputClass} bg-gray-50 font-semibold`}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="enquiry-variant" className="text-sm font-semibold text-gray-800">
                Variant *
              </label>
              <input
                id="enquiry-variant"
                required
                maxLength={100}
                value={form.variant}
                onChange={(event) => updateField("variant", event.target.value)}
                placeholder="e.g. ZX, ZXi, Sport"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="enquiry-color" className="text-sm font-semibold text-gray-800">
                Preferred Color *
              </label>
              <input
                id="enquiry-color"
                required
                maxLength={50}
                value={form.color}
                onChange={(event) => updateField("color", event.target.value)}
                placeholder="e.g. White, Black"
                className={inputClass}
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          {success && (
            <div role="status" className="flex gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
              <CheckCircle2 size={19} className="shrink-0" />
              <span>{success}</span>
            </div>
          )}

          {success ? (
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-xl bg-[#E50914] px-5 py-3.5 font-bold text-white transition hover:bg-red-700"
            >
              Done
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E50914] px-5 py-3.5 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading && <LoaderCircle size={18} className="animate-spin" />}
              {loading ? "Submitting..." : "Request Best Price"}
            </button>
          )}

          <p className="text-center text-xs leading-5 text-gray-500">
            By submitting, you agree that Carmotive India may contact you
            about this vehicle enquiry.
          </p>
        </form>
      </div>
    </div>
  );
}
