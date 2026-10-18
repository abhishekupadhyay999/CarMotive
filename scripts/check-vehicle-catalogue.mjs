import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
import { createClient } from "@sanity/client";

loadEnvConfig(process.cwd());

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion:
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-08-17",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

async function main() {
  const vehicles = await client.fetch(`
    *[_type == "vehicleModel"] | order(brand asc, model asc) {
      _id,
      brand,
      model,
      startingPrice,
      fuelTypes,
      "hasImage": defined(image.asset._ref),
      catalogueActive
    }
  `);

  console.log(JSON.stringify({
    total: vehicles.length,
    missingPrice: vehicles.filter(v => !v.startingPrice).length,
    missingFuelTypes: vehicles.filter(v => !v.fuelTypes?.length).length,
    missingImage: vehicles.filter(v => !v.hasImage).length,
    vehicles,
  }, null, 2));
}

main().catch(console.error);
