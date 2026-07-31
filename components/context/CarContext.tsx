"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import carsData from "@/datas/cars.json";

interface Car {
  id: number;
  brand: string;
  model: string;
  engine: string;
  fuel: string[];
  transmission: string[];
  price: string | null;
}

interface Filters {
  brand: string;
  budget: string;
  fuel: string;
  transmission: string;
}

interface CarContextType {
  cars: Car[];
  filteredCars: Car[];
  filters: Filters;
  hasSearched: boolean;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  searchCars: () => void;
  resetFilters: () => void;
}

const CarContext = createContext<CarContextType | null>(null);

// Remove invalid/header rows
const cars = (carsData as Car[]).filter(
  (car) =>
    car.price &&
    car.price !== "Ex-Showroom Starts From" &&
    car.model !== "Model"
);

const initialFilters: Filters = {
  brand: "all",
  budget: "all",
  fuel: "all",
  transmission: "all",
};

function getPriceValue(price: string | null | undefined) {
  if (!price) return -1;

  const cleaned = price
    .replace(/[₹,\s]/g, "")
    .replace(/\*/g, "");

  if (cleaned.includes("Crore")) {
    const num = parseFloat(cleaned.replace("Crore", ""));
    return isNaN(num) ? -1 : num * 10000000;
  }

  if (cleaned.includes("Lakh")) {
    const num = parseFloat(cleaned.replace("Lakh", ""));
    return isNaN(num) ? -1 : num * 100000;
  }

  const num = parseFloat(cleaned);
  return isNaN(num) ? -1 : num;
}

function matchBudget(price: number, budget: string) {
  switch (budget) {
    case "Under ₹10 Lakh":
      return price < 1000000;

    case "₹10–15 Lakh":
      return price >= 1000000 && price <= 1500000;

    case "₹15–20 Lakh":
      return price > 1500000 && price <= 2000000;

    case "₹20–30 Lakh":
      return price > 2000000 && price <= 3000000;

    case "₹30–50 Lakh":
      return price > 3000000 && price <= 5000000;

    case "Above ₹50 Lakh":
      return price > 5000000;

    default:
      return true;
  }
}

export function CarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filters, setFilters] =
    useState<Filters>(initialFilters);

  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const searchCars = () => {
    const results = cars.filter((car) => {
      const price = getPriceValue(car.price);

      return (
        (filters.brand === "all" ||
          car.brand === filters.brand) &&
        (filters.fuel === "all" ||
          car.fuel.includes(filters.fuel)) &&
        (filters.transmission === "all" ||
          car.transmission.includes(filters.transmission)) &&
        (filters.budget === "all" ||
          matchBudget(price, filters.budget))
      );
    });

    setFilteredCars(results);
    setHasSearched(true);

    setTimeout(() => {
      document
        .getElementById("search-results")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setFilteredCars([]);
    setHasSearched(false);
  };

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

export function useCars() {
  const context = useContext(CarContext);

  if (!context) {
    throw new Error(
      "useCars must be used inside CarProvider"
    );
  }

  return context;
}