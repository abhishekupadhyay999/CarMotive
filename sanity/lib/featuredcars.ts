
import { getVehicleCatalogue } from "./vehicleCatalogue";
import type { Car } from "@/components/home-v2/FeaturedCars/cars";

export async function getFeaturedCars(): Promise<Car[]> {
  const vehicles = await getVehicleCatalogue();

  return vehicles.map((vehicle, index) => ({
    id: index + 1,
    brand: vehicle.brand,
    name: vehicle.model,
    slug: `${vehicle.brand}-${vehicle.model}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),
    image: vehicle.imageUrl || "/images/featured/hycross.png",
    price: vehicle.startingPrice
      ? `₹${(vehicle.startingPrice / 100000).toFixed(2)} Lakh`
      : "Price on Request",
    emi: "Contact Us",
    fuel: vehicle.fuelTypes?.join(" / ") || "Contact Us",
    transmission:
      vehicle.transmissions?.join(" / ") || "Contact Us",
    engine: "Contact Us",
    featured: true,
  }));
}
