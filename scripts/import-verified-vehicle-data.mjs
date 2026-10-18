import nextEnv from "@next/env";
import { createClient } from "@sanity/client";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const token = process.env.SANITY_API_WRITE_TOKEN;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!token || token === "your_sanity_write_token") {
  throw new Error("Missing real SANITY_API_WRITE_TOKEN in .env.local");
}

if (!projectId || !dataset) {
  throw new Error("Missing Sanity project ID or dataset in .env.local");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-08-17",
  useCdn: false,
  token,
});

const verifiedAt = new Date().toISOString();

const vehicles = [
  {
    brand: "Hyundai",
    model: "Exter",
    startingPrice: 580600,
    fuelTypes: ["Petrol", "CNG"],
    transmissions: ["Manual", "AMT"],
    priceSource: "https://www.hyundai.com/in/en",
  },
  {
    brand: "Hyundai",
    model: "Venue",
    startingPrice: 799900,
    fuelTypes: ["Petrol", "Diesel"],
    transmissions: ["Manual", "Automatic", "DCT"],
    priceSource: "https://www.hyundai.com/in/en",
  },
  {
    brand: "Hyundai",
    model: "Creta",
    startingPrice: 1090700,
    fuelTypes: ["Petrol", "Diesel"],
    transmissions: ["Manual", "Automatic", "IVT", "DCT"],
    priceSource: "https://www.hyundai.com/in/en",
  },
  {
    brand: "Hyundai",
    model: "Aura",
    startingPrice: 599990,
    fuelTypes: ["Petrol", "CNG"],
    transmissions: ["Manual", "AMT"],
    priceSource: "https://www.hyundai.com/in/en",
  },
  {
    brand: "Hyundai",
    model: "Grand i10 Nios",
    startingPrice: 559700,
    fuelTypes: ["Petrol", "CNG"],
    transmissions: ["Manual", "AMT"],
    priceSource: "https://www.hyundai.com/in/en",
  },
  {
    brand: "Hyundai",
    model: "i20",
    startingPrice: 599700,
    fuelTypes: ["Petrol"],
    transmissions: ["Manual", "IVT"],
    priceSource: "https://www.hyundai.com/in/en",
  },
  {
    brand: "Hyundai",
    model: "Verna",
    startingPrice: 1099200,
    fuelTypes: ["Petrol"],
    transmissions: ["Manual", "IVT", "DCT"],
    priceSource: "https://www.hyundai.com/in/en",
  },
  {
    brand: "Hyundai",
    model: "Alcazar",
    startingPrice: 1450700,
    fuelTypes: ["Petrol", "Diesel"],
    transmissions: ["Manual", "Automatic", "DCT"],
    priceSource: "https://www.hyundai.com/in/en",
  },
];

async function main() {
  let updated = 0;
  let missing = 0;

  for (const vehicle of vehicles) {
    const existing = await client.fetch(
      `*[
        _type == "vehicleModel" &&
        brand == $brand &&
        model == $model
      ][0]{_id, brand, model}`,
      {
        brand: vehicle.brand,
        model: vehicle.model,
      }
    );

    if (!existing) {
      console.warn(
        `NOT FOUND: ${vehicle.brand} ${vehicle.model} — skipped`
      );
      missing++;
      continue;
    }

    await client
      .patch(existing._id)
      .set({
        startingPrice: vehicle.startingPrice,
        fuelTypes: vehicle.fuelTypes,
        transmissions: vehicle.transmissions,
        priceSource: vehicle.priceSource,
        priceUpdatedAt: verifiedAt,
        lastSyncedAt: verifiedAt,
      })
      .commit();

    console.log(
      `UPDATED: ${vehicle.brand} ${vehicle.model} — ₹${vehicle.startingPrice.toLocaleString("en-IN")}`
    );

    updated++;
  }

  console.log("\nImport finished.");
  console.log(`Updated: ${updated}`);
  console.log(`Skipped (not found): ${missing}`);
}

main().catch((error) => {
  console.error("Import failed:", error.message);
  process.exitCode = 1;
});
