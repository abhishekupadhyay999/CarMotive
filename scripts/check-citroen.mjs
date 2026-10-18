
import nextEnv from "@next/env";
import { createClient } from "@sanity/client";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2025-01-01",
  useCdn: false,
});

const query = `*[_type == "vehicleModel" && brand match "Citroen*"] {
  _id,
  brand,
  model,
  fuelTypes,
  startingPrice,
  catalogueActive
}`;

const vehicles = await client.fetch(query);
console.log(JSON.stringify(vehicles, null, 2));
