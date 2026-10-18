
import { loadEnvConfig } from "@next/env";
import { createClient } from "@sanity/client";

loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-08-17";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error(
    "Missing Sanity project settings or SANITY_API_WRITE_TOKEN."
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const models: { brand: string; model: string }[] = [
  // Maruti Suzuki
  { brand: "Maruti Suzuki", model: "Swift" },
  { brand: "Maruti Suzuki", model: "Baleno" },
  { brand: "Maruti Suzuki", model: "Dzire" },
  { brand: "Maruti Suzuki", model: "Brezza" },
  { brand: "Maruti Suzuki", model: "Fronx" },
  { brand: "Maruti Suzuki", model: "Grand Vitara" },
  { brand: "Maruti Suzuki", model: "Ertiga" },
  { brand: "Maruti Suzuki", model: "WagonR" },
  { brand: "Maruti Suzuki", model: "Alto K10" },
  { brand: "Maruti Suzuki", model: "Celerio" },
  { brand: "Maruti Suzuki", model: "S-Presso" },
  { brand: "Maruti Suzuki", model: "Eeco" },
  { brand: "Maruti Suzuki", model: "XL6" },
  { brand: "Maruti Suzuki", model: "Jimny" },
  { brand: "Maruti Suzuki", model: "Invicto" },
  { brand: "Maruti Suzuki", model: "e Vitara" },
  { brand: "Maruti Suzuki", model: "Victor is" },

  // Toyota
  { brand: "Toyota", model: "Glanza" },
  { brand: "Toyota", model: "Urban Cruiser Taisor" },
  { brand: "Toyota", model: "Urban Cruiser Hyryder" },
  { brand: "Toyota", model: "Rumion" },
  { brand: "Toyota", model: "Innova Crysta" },
  { brand: "Toyota", model: "Innova Hycross" },
  { brand: "Toyota", model: "Fortuner" },
  { brand: "Toyota", model: "Fortuner Legender" },
  { brand: "Toyota", model: "Hilux" },
  { brand: "Toyota", model: "Camry" },
  { brand: "Toyota", model: "Vellfire" },
  { brand: "Toyota", model: "Land Cruiser 300" },

  // Hyundai
  { brand: "Hyundai", model: "Grand i10 Nios" },
  { brand: "Hyundai", model: "i20" },
  { brand: "Hyundai", model: "Aura" },
  { brand: "Hyundai", model: "Exter" },
  { brand: "Hyundai", model: "Venue" },
  { brand: "Hyundai", model: "Verna" },
  { brand: "Hyundai", model: "Creta" },
  { brand: "Hyundai", model: "Creta Electric" },
  { brand: "Hyundai", model: "Alcazar" },
  { brand: "Hyundai", model: "Tucson" },
  { brand: "Hyundai", model: "Ioniq 5" },

  // Honda
  { brand: "Honda", model: "Amaze" },
  { brand: "Honda", model: "City" },
  { brand: "Honda", model: "Elevate" },

  // Mahindra
  { brand: "Mahindra", model: "Thar" },
  { brand: "Mahindra", model: "Thar Roxx" },
  { brand: "Mahindra", model: "Scorpio-N" },
  { brand: "Mahindra", model: "Scorpio Classic" },
  { brand: "Mahindra", model: "XUV 3XO" },
  { brand: "Mahindra", model: "Bolero" },
  { brand: "Mahindra", model: "Bolero Neo" },
  { brand: "Mahindra", model: "XUV 7XO" },
  { brand: "Mahindra", model: "BE 6" },
  { brand: "Mahindra", model: "XEV 9e" },

  // Kia
  { brand: "Kia", model: "Sonet" },
  { brand: "Kia", model: "Seltos" },
  { brand: "Kia", model: "Syros" },
  { brand: "Kia", model: "Carens" },
  { brand: "Kia", model: "Carens Clavis" },
  { brand: "Kia", model: "EV6" },
  { brand: "Kia", model: "EV9" },
  { brand: "Kia", model: "Carnival" },

  // MG
  { brand: "MG", model: "Comet EV" },
  { brand: "MG", model: "Windsor EV" },
  { brand: "MG", model: "ZS EV" },
  { brand: "MG", model: "Astor" },
  { brand: "MG", model: "Hector" },
  { brand: "MG", model: "Gloster" },
  { brand: "MG", model: "M9" },
  { brand: "MG", model: "Cyberster" },

  // Škoda — confirm current lineup before publishing
  { brand: "Skoda", model: "Kylaq" },
  { brand: "Skoda", model: "Kushaq" },
  { brand: "Skoda", model: "Slavia" },
  { brand: "Skoda", model: "Kodiaq" },
];

function makeId(brand: string, model: string) {
  const slug = `${brand}-${model}`
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `vehicleModel-${slug}`;
}

async function main() {
  const transaction = client.transaction();

  for (const item of models) {
    const document = {
      _id: makeId(item.brand, item.model),
      _type: "vehicleModel",
      brand: item.brand,
      model: item.model,
      catalogueActive: true,
    };

    transaction.createIfNotExists(document);
  }

  await transaction.commit();

  console.log(`Seeded ${models.length} catalogue records.`);
  console.log(
    "Prices, variants, specifications and images still need verification."
  );
}

main().catch((error) => {
  console.error("Catalogue seed failed:", error);
  process.exitCode = 1;
});
