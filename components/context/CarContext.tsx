
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
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
  source: "inventory" | "catalogue";
}

/* =========================================================
   FILTER TYPES
========================================================= */

interface Filters {
  brand: string;
  budget: string;
  fuel: string;
}

interface CarContextType {
  cars: Car[];
  filteredCars: Car[];
  filters: Filters;
  hasSearched: boolean;
  isLoading: boolean;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  searchCars: () => void;
  resetFilters: () => void;
}

/* =========================================================
   SANITY DOCUMENT TYPES
========================================================= */

interface SanityInventoryCar {
  _id: string;
  name: string;
  brand: string;
  price?: string | null;
  year?: number;
  fuel?: string;
  bodyType?: string;
  images?: Array<{
    _key?: string;
    asset?: {
      _ref?: string;
    };
  }>;
  available?: boolean;
  sortOrder?: number;
}

interface SanityVehicleModel {
  _id: string;
  brand: string;
  model: string;
  variants?: string[];
  fuelTypes?: string[];
  transmissions?: string[];
  startingPrice?: number;
  modelYear?: number;
  image?: {
    asset?: {
      _id?: string;
      _ref?: string;
      url?: string;
    } | null;
  } | null;
  catalogueActive?: boolean;
}

/* =========================================================
   CONTEXT
========================================================= */

const CarContext = createContext<CarContextType | null>(null);

const initialFilters: Filters = {
  brand: "all",
  budget: "all",
  fuel: "all",
};

/* =========================================================
   HELPERS
========================================================= */

function makeSlug(value: string, fallback: string) {
  return (
    value
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || fallback
  );
}

function formatPrice(
  price: number | string | null | undefined
): string | null {
  if (price === null || price === undefined || price === "") {
    return null;
  }

  if (typeof price === "number") {
    if (!Number.isFinite(price) || price < 0) {
      return null;
    }

    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Crore`;
    }

    return `₹${(price / 100000).toFixed(2)} Lakh`;
  }

  return price.trim() || null;
}

function getPriceValue(price: string | null | undefined): number {
  if (!price) return -1;

  const cleaned = price
    .replace(/₹/g, "")
    .replace(/,/g, "")
    .replace(/\*/g, "")
    .trim();

  if (/crore/i.test(cleaned)) {
    const value = parseFloat(
      cleaned.replace(/crore/i, "").trim()
    );

    return Number.isNaN(value) ? -1 : value * 10000000;
  }

  if (/lakh/i.test(cleaned)) {
    const value = parseFloat(
      cleaned.replace(/lakh/i, "").trim()
    );

    return Number.isNaN(value) ? -1 : value * 100000;
  }

  const value = parseFloat(cleaned);
  return Number.isNaN(value) ? -1 : value;
}

function matchBudget(price: number, budget: string): boolean {
  // Unknown prices must not match a selected budget.
  if (price < 0) return false;

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

/* =========================================================
   CONVERT INVENTORY CAR
========================================================= */

function convertInventoryCar(
  car: SanityInventoryCar,
  index: number
): Car {
  const firstImage =
    car.images?.[0]?.asset?._ref
      ? urlFor(car.images[0])
          .width(1200)
          .height(800)
          .fit("crop")
          .url()
      : "/images/cars/no-image.webp";

  const engine = [
    car.year ? String(car.year) : "",
    car.bodyType || "",
  ]
    .filter(Boolean)
    .join(" • ");

  return {
    id: index + 1,
    brand: car.brand || "Other",
    model: car.name || "Unnamed Car",
    slug: makeSlug(
      `${car.brand}-${car.name}`,
      car._id
    ),
    image: firstImage,
    engine,
    fuel: car.fuel ? [car.fuel] : [],
    price: formatPrice(car.price),
    source: "inventory",
  };
}

/* =========================================================
   CONVERT CATALOGUE MODEL
========================================================= */

function convertVehicleModel(
  vehicle: SanityVehicleModel,
  index: number
): Car {
  const fuel = vehicle.fuelTypes ?? [];

  const engine = [
    vehicle.modelYear ? String(vehicle.modelYear) : "",
    vehicle.transmissions?.join(" / ") || "",
    vehicle.variants?.length
      ? `${vehicle.variants.length} variants`
      : "",
  ]
    .filter(Boolean)
    .join(" • ");

  return {
    // Separate ID range avoids collisions with inventory cards.
    id: 100000 + index,
    brand: vehicle.brand || "Other",
    model: vehicle.model || "Unnamed Model",
    slug: makeSlug(
      `${vehicle.brand}-${vehicle.model}`,
      vehicle._id
    ),
    image:
      vehicle.image?.asset?.url ||
      "/images/cars/no-image.webp",
    engine,
    fuel,
    price: formatPrice(vehicle.startingPrice),
    source: "catalogue",
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
  const [cars, setCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchCars() {
      setIsLoading(true);

      try {
        const inventoryQuery = `*[
          _type == "car" &&
          available != false
        ] | order(sortOrder asc, _createdAt desc) {
          _id,
          name,
          brand,
          price,
          year,
          fuel,
          bodyType,
          images,
          available,
          sortOrder
        }`;

        const catalogueQuery = `*[
          _type == "vehicleModel" &&
          catalogueActive == true
        ] | order(brand asc, model asc) {
          _id,
          brand,
          model,
          variants,
          fuelTypes,
          transmissions,
          startingPrice,
          modelYear,
          image {
            asset-> {
              _id,
              url
            }
          },
          catalogueActive
        }`;

        const [inventory, catalogue] = await Promise.all([
          client.fetch<SanityInventoryCar[]>(inventoryQuery),
          client.fetch<SanityVehicleModel[]>(catalogueQuery),
        ]);

        const inventoryCars = inventory.map(convertInventoryCar);
        const catalogueCars = catalogue.map(convertVehicleModel);

        // Inventory comes first. Avoid showing a matching model twice.
        const inventoryKeys = new Set(
          inventoryCars.map(
            (car) =>
              `${car.brand.toLowerCase()}|${car.model.toLowerCase()}`
          )
        );

        const uniqueCatalogueCars = catalogueCars.filter(
          (car) =>
            !inventoryKeys.has(
              `${car.brand.toLowerCase()}|${car.model.toLowerCase()}`
            )
        );

        if (!cancelled) {
          setCars([...inventoryCars, ...uniqueCatalogueCars]);
        }
      } catch (error) {
        console.error("Failed to load cars from Sanity:", error);

        if (!cancelled) {
          setCars([]);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchCars();

    return () => {
      cancelled = true;
    };
  }, []);

  /* =======================================================
     SEARCH
  ======================================================= */

  const searchCars = () => {
    const results = cars.filter((car) => {
      const price = getPriceValue(car.price);

      return (
        (filters.brand === "all" || car.brand === filters.brand) &&
        (filters.fuel === "all" || car.fuel.includes(filters.fuel)) &&
        (filters.budget === "all" ||
          matchBudget(price, filters.budget))
      );
    });

    setFilteredCars(results);
    setHasSearched(true);

    window.setTimeout(() => {
      document.getElementById("search-results")?.scrollIntoView({
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

    document.getElementById("search")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        filteredCars,
        filters,
        hasSearched,
        isLoading,
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
  const context = useContext(CarContext);

  if (!context) {
    throw new Error("useCars must be used inside CarProvider");
  }

  return context;
}
