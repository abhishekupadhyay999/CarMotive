
import { groq } from "next-sanity";
import { client } from "./client";

export interface CatalogueVehicle {
  _id: string;
  brand: string;
  model: string;
  providerId?: string;
  variants?: string[];
  fuelTypes?: string[];
  transmissions?: string[];
  startingPrice?: number;
  priceSource?: string;
  priceUpdatedAt?: string;
  modelYear?: number;
  imageUrl?: string;
}

export const vehicleCatalogueQuery = groq`
  *[
    _type == "vehicleModel" &&
    catalogueActive == true
  ] | order(brand asc, model asc) {
    _id,
    brand,
    model,
    providerId,
    variants,
    fuelTypes,
    transmissions,
    startingPrice,
    priceSource,
    priceUpdatedAt,
    modelYear,
    "imageUrl": image.asset->url
  }
`;

export async function getVehicleCatalogue(): Promise<CatalogueVehicle[]> {
  return client.fetch<CatalogueVehicle[]>(vehicleCatalogueQuery);
}
