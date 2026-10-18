
import nextEnv from "@next/env";
import { createClient } from "@sanity/client";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local"
  );
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2025-01-01",
  useCdn: false,
});

const today = new Date().toISOString();

const renaultSource = "https://www.renault.co.in/car-price.html";
const volkswagenSource = "https://www.volkswagen.co.in/en/models.html";
const tataSource = "https://www.cardekho.com/cars/Tata";

// Prices are starting ex-showroom estimates in INR.
// Verify the current price before publishing.
const metadata = {
  "vehicleModel-renault-kwid": {
    fuelTypes: ["Petrol"],
    startingPrice: 452900,
    priceSource: renaultSource,
  },
  "vehicleModel-renault-kiger": {
    fuelTypes: ["Petrol"],
    startingPrice: 581000,
    priceSource: renaultSource,
  },
  "vehicleModel-renault-triber": {
    fuelTypes: ["Petrol"],
    startingPrice: 580875,
    priceSource: renaultSource,
  },
  "vehicleModel-renault-duster": {
    fuelTypes: ["Petrol"],
    startingPrice: 1049000,
    priceSource: renaultSource,
  },

  "vehicleModel-tata-tiago": {
    fuelTypes: ["Petrol", "CNG"],
    startingPrice: 477000,
    priceSource: tataSource,
  },
  "vehicleModel-tata-tiago-ev": {
    fuelTypes: ["Electric"],
    startingPrice: 699000,
    priceSource: tataSource,
  },
  "vehicleModel-tata-tigor": {
    fuelTypes: ["Petrol", "CNG"],
    startingPrice: 548990,
    priceSource: tataSource,
  },
  "vehicleModel-tata-tigor-ev": {
    fuelTypes: ["Electric"],
    startingPrice: 1249000,
    priceSource: tataSource,
  },
  "vehicleModel-tata-altroz": {
    fuelTypes: ["Petrol", "Diesel", "CNG"],
    startingPrice: 600000,
    priceSource: tataSource,
  },
  "vehicleModel-tata-punch": {
    fuelTypes: ["Petrol", "CNG"],
    startingPrice: 575000,
    priceSource: tataSource,
  },
  "vehicleModel-tata-punch-ev": {
    fuelTypes: ["Electric"],
    startingPrice: 979000,
    priceSource: tataSource,
  },
  "vehicleModel-tata-nexon": {
    fuelTypes: ["Petrol", "Diesel", "CNG"],
    startingPrice: 740000,
    priceSource: tataSource,
  },
  "vehicleModel-tata-nexon-ev": {
    fuelTypes: ["Electric"],
    startingPrice: 1249000,
    priceSource: tataSource,
  },
  "vehicleModel-tata-curvv": {
    fuelTypes: ["Petrol", "Diesel"],
    startingPrice: 1000000,
    priceSource: tataSource,
  },
  "vehicleModel-tata-curvv-ev": {
    fuelTypes: ["Electric"],
    startingPrice: 1719000,
    priceSource: tataSource,
  },
  "vehicleModel-tata-harrier": {
    fuelTypes: ["Diesel", "Petrol"],
    startingPrice: 1300000,
    priceSource: tataSource,
  },
  "vehicleModel-tata-harrier-ev": {
    fuelTypes: ["Electric"],
    startingPrice: 2179000,
    priceSource: tataSource,
  },
  "vehicleModel-tata-safari": {
    fuelTypes: ["Diesel", "Petrol"],
    startingPrice: 1340000,
    priceSource: tataSource,
  },

  "vehicleModel-volkswagen-taigun": {
    fuelTypes: ["Petrol"],
    startingPrice: 1099900,
    priceSource: volkswagenSource,
  },
  "vehicleModel-volkswagen-tayron": {
    fuelTypes: ["Petrol"],
    startingPrice: 4199000,
    priceSource: volkswagenSource,
  },
  "vehicleModel-volkswagen-tiguan-r-line": {
    fuelTypes: ["Petrol"],
    startingPrice: 4711013,
    priceSource: volkswagenSource,
  },
  "vehicleModel-volkswagen-virtus": {
    fuelTypes: ["Petrol"],
    startingPrice: 1070900,
    priceSource: volkswagenSource,
  },
  "vehicleModel-volkswagen-golf-gti": {
    fuelTypes: ["Petrol"],
    startingPrice: 5090900,
    priceSource: volkswagenSource,
  },
};

const applyChanges = process.argv.includes("--apply");

async function main() {
  let updated = 0;
  let unchanged = 0;
  let missing = 0;

  console.log(
    applyChanges
      ? "\nAPPLY MODE: eligible changes will be saved.\n"
      : "\nDRY RUN: no Sanity data will be changed.\n"
  );

  for (const [id, proposed] of Object.entries(metadata)) {
    const doc = await client.fetch(
      `*[_id == $id && _type == "vehicleModel"][0]{
        _id,
        brand,
        model,
        fuelTypes,
        startingPrice,
        priceSource,
        priceUpdatedAt,
        image
      }`,
      { id }
    );

    if (!doc) {
      console.log(`NOT FOUND: ${id}`);
      missing++;
      continue;
    }

    const patch = {};

    // Preserve any existing fuel-type data.
    if (!Array.isArray(doc.fuelTypes) || doc.fuelTypes.length === 0) {
      patch.fuelTypes = proposed.fuelTypes;
    }

    // Preserve any existing price, including a manually verified price.
    if (
      doc.startingPrice === null ||
      doc.startingPrice === undefined ||
      doc.startingPrice === 0
    ) {
      patch.startingPrice = proposed.startingPrice;
      patch.priceSource = proposed.priceSource;
      patch.priceUpdatedAt = today;
    }

    // Never replace an existing image.
    // Image assets must be uploaded to Sanity separately.

    if (Object.keys(patch).length === 0) {
      console.log(`UNCHANGED: ${doc.brand} ${doc.model}`);
      unchanged++;
      continue;
    }

    console.log(
      `${applyChanges ? "UPDATE" : "WOULD UPDATE"}: ${doc.brand} ${doc.model}`,
      patch
    );

    if (applyChanges) {
      await client.patch(id).set(patch).commit();
    }

    updated++;
  }

  console.log("\nMetadata update summary");
  console.log("-----------------------");
  console.log(`Mode: ${applyChanges ? "APPLY" : "DRY RUN"}`);
  console.log(`Records eligible for update: ${updated}`);
  console.log(`Already complete: ${unchanged}`);
  console.log(`Records not found: ${missing}`);

  if (!applyChanges) {
    console.log("\nIf the proposed changes look correct, run:");
    console.log("node scripts/fill-new-vehicle-metadata.mjs --apply");
  }
}

main().catch((error) => {
  console.error("Metadata update failed:", error.message);
  process.exitCode = 1;
});
