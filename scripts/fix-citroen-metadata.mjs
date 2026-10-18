
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

const source = "https://www.citroen.in/citroen-range.html";
const updatedAt = "2026-10-19T00:00:00Z";

const records = [
  {
    id: "vehicleModel-citroen-aircrossx",
    price: 889000,
    fuelTypes: ["Petrol", "CNG"],
  },
  {
    id: "vehicleModel-citroen-basaltx",
    price: 855000,
    fuelTypes: ["Petrol", "CNG"],
  },
  {
    id: "vehicleModel-citroen-c3x",
    price: 499000,
    fuelTypes: ["Petrol", "CNG"],
  },
  {
    id: "vehicleModel-citroen-c5-aircross",
    price: 3732000,
    fuelTypes: ["Diesel"],
  },
  {
    id: "vehicleModel-citroen-e-c3x",
    price: 1199000,
    fuelTypes: ["Electric"],
  },
];

const docs = await client.fetch(
  `*[_type == "vehicleModel" && _id in $ids]{
    _id, model, startingPrice, fuelTypes, priceSource, priceUpdatedAt
  }`,
  { ids: records.map((record) => record.id) }
);

const byId = new Map(docs.map((doc) => [doc._id, doc]));
let updated = 0;

for (const record of records) {
  const doc = byId.get(record.id);

  if (!doc) {
    console.log(`NOT FOUND: ${record.id}`);
    continue;
  }

  const patch = {};

  // Preserve any existing non-empty values.
  if (
    doc.startingPrice === null ||
    doc.startingPrice === undefined ||
    doc.startingPrice === 0
  ) {
    patch.startingPrice = record.price;
    patch.priceSource = source;
    patch.priceUpdatedAt = updatedAt;
  }

  if (!Array.isArray(doc.fuelTypes) || doc.fuelTypes.length === 0) {
    patch.fuelTypes = record.fuelTypes;
  }

  if (Object.keys(patch).length === 0) {
    console.log(`UNCHANGED: ${doc.model}`);
    continue;
  }

  await client.patch(doc._id).set(patch).commit();
  updated++;

  console.log(`UPDATED: ${doc.model}`, patch);
}

console.log(`Finished. Updated ${updated} of ${records.length} records.`);
