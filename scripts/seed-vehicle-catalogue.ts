
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
    "Missing Sanity configuration. Check your .env.local file."
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const vehicles = [
  // MARUTI SUZUKI
  ["Maruti Suzuki", "Swift"],
  ["Maruti Suzuki", "Baleno"],
  ["Maruti Suzuki", "Dzire"],
  ["Maruti Suzuki", "Brezza"],
  ["Maruti Suzuki", "Fronx"],
  ["Maruti Suzuki", "Grand Vitara"],
  ["Maruti Suzuki", "Ertiga"],
  ["Maruti Suzuki", "WagonR"],
  ["Maruti Suzuki", "Alto K10"],
  ["Maruti Suzuki", "Celerio"],
  ["Maruti Suzuki", "S-Presso"],
  ["Maruti Suzuki", "Eeco"],
  ["Maruti Suzuki", "XL6"],
  ["Maruti Suzuki", "Jimny"],
  ["Maruti Suzuki", "Invicto"],
  ["Maruti Suzuki", "e Vitara"],
  ["Maruti Suzuki", "Victoris"],

  // TOYOTA
  ["Toyota", "Glanza"],
  ["Toyota", "Urban Cruiser Taisor"],
  ["Toyota", "Urban Cruiser Hyryder"],
  ["Toyota", "Rumion"],
  ["Toyota", "Innova Crysta"],
  ["Toyota", "Innova Hycross"],
  ["Toyota", "Fortuner"],
  ["Toyota", "Fortuner Legender"],
  ["Toyota", "Hilux"],
  ["Toyota", "Camry"],
  ["Toyota", "Vellfire"],
  ["Toyota", "Land Cruiser 300"],

  // HYUNDAI
  ["Hyundai", "Grand i10 Nios"],
  ["Hyundai", "i20"],
  ["Hyundai", "Aura"],
  ["Hyundai", "Exter"],
  ["Hyundai", "Venue"],
  ["Hyundai", "Verna"],
  ["Hyundai", "Creta"],
  ["Hyundai", "Creta Electric"],
  ["Hyundai", "Alcazar"],
  ["Hyundai", "Tucson"],
  ["Hyundai", "Ioniq 5"],

  // HONDA
  ["Honda", "Amaze"],
  ["Honda", "City"],
  ["Honda", "Elevate"],

  // MAHINDRA
  ["Mahindra", "Thar"],
  ["Mahindra", "Thar Roxx"],
  ["Mahindra", "Scorpio-N"],
  ["Mahindra", "Scorpio Classic"],
  ["Mahindra", "XUV 3XO"],
  ["Mahindra", "Bolero"],
  ["Mahindra", "Bolero Neo"],
  ["Mahindra", "XUV 7XO"],
  ["Mahindra", "BE 6"],
  ["Mahindra", "XEV 9e"],

  // KIA
  ["Kia", "Sonet"],
  ["Kia", "Seltos"],
  ["Kia", "Syros"],
  ["Kia", "Carens"],
  ["Kia", "Carens Clavis"],
  ["Kia", "EV6"],
  ["Kia", "EV9"],
  ["Kia", "Carnival"],

  // MG
  ["MG", "Comet EV"],
  ["MG", "Windsor EV"],
  ["MG", "ZS EV"],
  ["MG", "Astor"],
  ["MG", "Hector"],
  ["MG", "Gloster"],
  ["MG", "M9"],
  ["MG", "Cyberster"],

  // SKODA
  ["Skoda", "Kylaq"],
  ["Skoda", "Kushaq"],
  ["Skoda", "Slavia"],
  ["Skoda", "Kodiaq"],
] as const;

function createDocumentId(brand: string, model: string) {
  const slug = `${brand}-${model}`
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `vehicleModel-${slug}`;
}

async function main() {
  console.log(`Preparing ${vehicles.length} catalogue records...`);

  let created = 0;
  let existing = 0;

  for (const [brand, model] of vehicles) {
    const _id = createDocumentId(brand, model);

    const result = await client.createIfNotExists({
      _id,
      _type: "vehicleModel",
      brand,
      model,
      catalogueActive: true,
    });

    if (result._createdAt === result._updatedAt) {
      created++;
    } else {
      existing++;
    }

    console.log(`${brand} ${model}: processed`);
  }

  console.log("\nCatalogue seeding finished.");
  console.log(`Processed: ${vehicles.length}`);
  console.log(`Created: ${created}`);
  console.log(`Already existed or unchanged: ${existing}`);
}

main().catch((error) => {
  console.error("Catalogue seeding failed:", error);
  process.exitCode = 1;
});
