"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

/* =========================================================
   CAR TYPE
========================================================= */

export interface Car {
  id: number;
  brand: string;
  model: string;
  slug: string;
  image: string;
  engine: string;
  fuel: string[];
  price: string | null;
}

/* =========================================================
   FILTER TYPE
========================================================= */

interface Filters {
  brand: string;
  budget: string;
  fuel: string;
}

/* =========================================================
   CONTEXT TYPE
========================================================= */

interface CarContextType {
  cars: Car[];
  filteredCars: Car[];
  filters: Filters;
  hasSearched: boolean;

  setFilters: React.Dispatch<
    React.SetStateAction<Filters>
  >;

  searchCars: () => void;
  resetFilters: () => void;
}

/* =========================================================
   SANITY CAR TYPE
========================================================= */

interface SanityCar {
  _id: string;

  name: string;
  brand: string;
  price: string | null;

  year?: number;
  kilometers?: number;

  fuel?: string;

  bodyType?: string;
  color?: string;
  location?: string;

  description?: string;

  images?: Array<{
    _key?: string;
    asset?: {
      _ref: string;
    };
  }>;

  featured?: boolean;
  available?: boolean;
  sortOrder?: number;
}

/* =========================================================
   CONTEXT
========================================================= */

const CarContext =
  createContext<CarContextType | null>(null);

/* =========================================================
   INITIAL FILTERS
========================================================= */

const initialFilters: Filters = {
  brand: "all",
  budget: "all",
  fuel: "all",
};

/* =========================================================
   PRICE PARSER
========================================================= */

function getPriceValue(
  price: string | null | undefined
) {
  if (!price) return -1;

  const cleaned = price
    .replace(/₹/g, "")
    .replace(/,/g, "")
    .replace(/\*/g, "")
    .trim();

  if (cleaned.includes("Crore")) {
    const value = parseFloat(
      cleaned.replace("Crore", "").trim()
    );

    return isNaN(value)
      ? -1
      : value * 10000000;
  }

  if (cleaned.includes("Lakh")) {
    const value = parseFloat(
      cleaned.replace("Lakh", "").trim()
    );

    return isNaN(value)
      ? -1
      : value * 100000;
  }

  const value = parseFloat(cleaned);

  return isNaN(value) ? -1 : value;
}

/* =========================================================
   BUDGET MATCH
========================================================= */

function matchBudget(
  price: number,
  budget: string
) {
  switch (budget) {
    case "Under ₹10 Lakh":
      return price < 1000000;

    case "₹10–15 Lakh":
      return (
        price >= 1000000 &&
        price <= 1500000
      );

    case "₹15–20 Lakh":
      return (
        price > 1500000 &&
        price <= 2000000
      );

    case "₹20–30 Lakh":
      return (
        price > 2000000 &&
        price <= 3000000
      );

    case "₹30–50 Lakh":
      return (
        price > 3000000 &&
        price <= 5000000
      );

    case "Above ₹50 Lakh":
      return price > 5000000;

    default:
      return true;
  }
}

/* =========================================================
   CONVERT SANITY CAR → WEBSITE CAR
========================================================= */

function convertSanityCar(
  car: SanityCar,
  index: number
): Car {
  const firstImage =
    car.images && car.images.length > 0
      ? urlFor(car.images[0])
          .width(1200)
          .height(800)
          .fit("crop")
          .url()
      : "/images/cars/no-image.webp";

  const slug =
    car.name
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") ||
    car._id;

  const engineInfo = [
    car.year
      ? String(car.year)
      : "",
    car.bodyType
      ? car.bodyType
      : "",
  ]
    .filter(Boolean)
    .join(" • ");

  return {
    id: index + 1,
    brand: car.brand,
    model: car.name,
    slug,
    image: firstImage,
    engine: engineInfo,
    fuel: car.fuel ? [car.fuel] : [],
    price: car.price || null,
  };
}

/* =========================================================
   PROVIDER
========================================================= */

export function CarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cars, setCars] =
    useState<Car[]>([]);

  const [filters, setFilters] =
    useState<Filters>(initialFilters);

  const [filteredCars, setFilteredCars] =
    useState<Car[]>([]);

  const [hasSearched, setHasSearched] =
    useState(false);

  /* =======================================================
     FETCH CARS FROM SANITY
  ======================================================= */

  useEffect(() => {
    async function fetchCars() {
      try {
        const query = `
          *[
            _type == "car" &&
            available != false
          ]
          | order(sortOrder asc, _createdAt desc)
          {
            _id,
            name,
            brand,
            price,
            year,
            kilometers,
            fuel,
            bodyType,
            color,
            location,
            description,
            images,
            featured,
            available,
            sortOrder
          }
        `;

        const sanityCars =
          await client.fetch<SanityCar[]>(
            query
          );

        const formattedCars =
          sanityCars.map(
            convertSanityCar
          );

        setCars(formattedCars);
      } catch (error) {
        console.error(
          "Failed to load cars from Sanity:",
          error
        );

        setCars([]);
      }
    }

    fetchCars();
  }, []);

  /* =======================================================
     SEARCH
  ======================================================= */

  const searchCars = () => {
    const results = cars.filter((car) => {
      const price =
        getPriceValue(car.price);

      return (
        (filters.brand === "all" ||
          car.brand === filters.brand) &&

        (filters.fuel === "all" ||
          car.fuel.includes(filters.fuel)) &&

        (filters.budget === "all" ||
          matchBudget(
            price,
            filters.budget
          ))
      );
    });

    setFilteredCars(results);
    setHasSearched(true);

    setTimeout(() => {
      document
        .getElementById("search-results")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  /* =======================================================
     RESET FILTERS
  ======================================================= */

  const resetFilters = () => {
    setFilters(initialFilters);
    setFilteredCars([]);
    setHasSearched(false);

    document
      .getElementById("search")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  /* =======================================================
     PROVIDER
  ======================================================= */

  return (
    <CarContext.Provider
      value={{
        cars,
        filteredCars,
        filters,
        hasSearched,
        setFilters,
        searchCars,
        resetFilters,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

/* =========================================================
   HOOK
========================================================= */

export function useCars() {
  const context =
    useContext(CarContext);

  if (!context) {
    throw new Error(
      "useCars must be used inside CarProvider"
    );
  }

  return context;
}