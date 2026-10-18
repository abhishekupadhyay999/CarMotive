import nextEnv from "@next/env";
import { createClient } from "@sanity/client";

const { loadEnvConfig } = nextEnv;

loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error("Missing Sanity configuration in .env.local");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-08-17",
  token,
  useCdn: false,
});

// Only fill missing fuelTypes. Existing fuelTypes are preserved.
const fuelMap = {
  "Honda|Amaze": ["Petrol"],
  "Honda|City": ["Petrol"],
  "Honda|Elevate": ["Petrol"],

  "Hyundai|Creta Electric": ["Electric"],
  "Hyundai|Exter": ["Petrol", "CNG"],
  "Hyundai|Ioniq 5": ["Electric"],
  "Hyundai|Tucson": ["Petrol", "Diesel"],

  "Kia|Carens": ["Petrol", "Diesel"],
  "Kia|Carens Clavis": ["Petrol", "Diesel"],
  "Kia|Carnival": ["Diesel"],
  "Kia|EV6": ["Electric"],
  "Kia|EV9": ["Electric"],
  "Kia|Seltos": ["Petrol", "Diesel"],
  "Kia|Sonet": ["Petrol", "Diesel"],
  "Kia|Syros": ["Petrol", "Diesel"],

  "MG|Astor": ["Petrol"],
  "MG|Comet EV": ["Electric"],
  "MG|Cyberster": ["Electric"],
  "MG|Gloster": ["Diesel"],
  "MG|Hector": ["Petrol", "Diesel"],
  "MG|M9": ["Electric"],
  "MG|Windsor EV": ["Electric"],
  "MG|ZS EV": ["Electric"],

  "Mahindra|BE 6": ["Electric"],
  "Mahindra|Bolero": ["Diesel"],
  "Mahindra|Bolero Neo": ["Diesel"],
  "Mahindra|Scorpio Classic": ["Diesel"],
  "Mahindra|Scorpio-N": ["Petrol", "Diesel"],
  "Mahindra|Thar": ["Petrol", "Diesel"],
  "Mahindra|Thar Roxx": ["Petrol", "Diesel"],
  "Mahindra|XEV 9e": ["Electric"],
  "Mahindra|XUV 3XO": ["Petrol", "Diesel"],
  "Mahindra|XUV 7XO": ["Petrol", "Diesel"],

  "Maruti Suzuki|Alto K10": ["Petrol", "CNG"],
  "Maruti Suzuki|Baleno": ["Petrol", "CNG"],
  "Maruti Suzuki|Brezza": ["Petrol", "CNG"],
  "Maruti Suzuki|Celerio": ["Petrol", "CNG"],
  "Maruti Suzuki|Dzire": ["Petrol", "CNG"],
  "Maruti Suzuki|Eeco": ["Petrol", "CNG"],
  "Maruti Suzuki|Ertiga": ["Petrol", "CNG"],
  "Maruti Suzuki|Fronx": ["Petrol", "CNG"],
  "Maruti Suzuki|Grand Vitara": ["Petrol", "CNG", "Hybrid"],
  "Maruti Suzuki|Invicto": ["Petrol", "Hybrid"],
  "Maruti Suzuki|Jimny": ["Petrol"],
  "Maruti Suzuki|S-Presso": ["Petrol", "CNG"],
  "Maruti Suzuki|Swift": ["Petrol", "CNG"],
  "Maruti Suzuki|Victoris": ["Petrol", "CNG", "Hybrid"],
  "Maruti Suzuki|WagonR": ["Petrol", "CNG"],
  "Maruti Suzuki|XL6": ["Petrol", "CNG"],
  "Maruti Suzuki|e Vitara": ["Electric"],

  "Skoda|Kodiaq": ["Petrol"],
  "Skoda|Kushaq": ["Petrol"],
  "Skoda|Kylaq": ["Petrol"],
  "Skoda|Slavia": ["Petrol"],

  "Toyota|Camry": ["Petrol", "Hybrid"],
  "Toyota|Fortuner": ["Petrol", "Diesel"],
  "Toyota|Fortuner Legender": ["Diesel"],
  "Toyota|Glanza": ["Petrol", "CNG"],
  "Toyota|Hilux": ["Diesel"],
  "Toyota|Innova Crysta": ["Diesel"],
  "Toyota|Innova Hycross": ["Petrol", "Hybrid"],
  "Toyota|Land Cruiser 300": ["Diesel"],
  "Toyota|Rumion": ["Petrol", "CNG"],
  "Toyota|Urban Cruiser Hyryder": ["Petrol", "CNG", "Hybrid"],
  "Toyota|Urban Cruiser Taisor": ["Petrol", "CNG"],
  "Toyota|Vellfire": ["Petrol", "Hybrid"],
};

// Prices verified from official Škoda India sources.
const priceUpdates = {
  "Skoda|Kodiaq": {
    startingPrice: 3699000,
    priceSource:
      "https://www.skoda-auto.co.in/news/news-detail/skoda-india-defines-luxury-as-it-should-be-with-kodiaq",
    priceUpdatedAt: "2026-05-11T00:00:00Z",
  },
  "Skoda|Slavia": {
    startingPrice: 999900,
    priceSource:
      "https://www.skoda-auto.co.in/news/news-detail/the-new-skoda-slavia-says-it-all-with-confidence",
    priceUpdatedAt: "2026-10-06T00:00:00Z",
  },
};

async function main() {
  const vehicles = await client.fetch(`
    *[_type == "vehicleModel"] {
      _id,
      brand,
      model,
      fuelTypes,
      startingPrice,
      priceSource,
      priceUpdatedAt
    }
  `);

  let fuelUpdated = 0;
  let priceUpdated = 0;
  let unchanged = 0;
  let unmatched = 0;

  for (const vehicle of vehicles) {
    const key = `${vehicle.brand}|${vehicle.model}`;
    const patch = {};

    if (!vehicle.fuelTypes?.length && fuelMap[key]) {
      patch.fuelTypes = fuelMap[key];
    }

    const price = priceUpdates[key];

    if (price && vehicle.startingPrice == null) {
      patch.startingPrice = price.startingPrice;
      patch.priceSource = price.priceSource;
      patch.priceUpdatedAt = price.priceUpdatedAt;
    }

    if (Object.keys(patch).length === 0) {
      unchanged++;
      continue;
    }

    console.log(`Updating ${vehicle.brand} ${vehicle.model}`, patch);

    await client.patch(vehicle._id).set(patch).commit();

    if (patch.fuelTypes) fuelUpdated++;
    if (patch.startingPrice != null) priceUpdated++;
  }

  const mappedKeys = new Set([
    ...Object.keys(fuelMap),
    ...Object.keys(priceUpdates),
  ]);

  const foundKeys = new Set(
    vehicles.map((v) => `${v.brand}|${v.model}`)
  );

  for (const key of mappedKeys) {
    if (!foundKeys.has(key)) {
      console.warn(`No matching Sanity record: ${key}`);
      unmatched++;
    }
  }

  console.log("\nMetadata update finished.");
  console.log({ fuelUpdated, priceUpdated, unchanged, unmatched });
}

main().catch((error) => {
  console.error("Metadata update failed:", error);
  process.exitCode = 1;
});
