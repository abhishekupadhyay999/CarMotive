
import { loadEnvConfig } from "@next/env";
import { createClient } from "@sanity/client";
import fs from "node:fs/promises";

loadEnvConfig(process.cwd());

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-08-17",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

const ALLOWED_LICENSES =
  /^(CC0|CC BY|CC BY-SA|Public domain)/i;

async function searchCommons(brand, model) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: `filetype:bitmap "${brand} ${model}"`,
    gsrnamespace: "6",
    gsrlimit: "8",
    prop: "imageinfo",
    iiprop: "url|extmetadata",
    iiurlwidth: "1200",
    format: "json",
    origin: "*",
  });

  const response = await fetch(
    `https://commons.wikimedia.org/w/api.php?${params}`,
    {
      headers: {
        "User-Agent": "CarmotiveIndiaCatalogue/1.0 (vehicle image discovery)",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Commons search failed: ${response.status}`);
  }

  const data = await response.json();
  const pages = Object.values(data.query?.pages ?? {});

  return pages.map((page) => {
    const info = page.imageinfo?.[0];
    const meta = info?.extmetadata ?? {};

    const license = meta.LicenseShortName?.value ?? "";
    const artist = meta.Artist?.value ?? "";
    const descriptionUrl = meta.Descriptionshorturl?.value ?? "";
    const title = page.title ?? "";

    const terms = `${brand} ${model}`
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    const titleText = title.toLowerCase();
    const matchedTerms = terms.filter((term) =>
      titleText.includes(term)
    ).length;

    return {
      brand,
      model,
      title,
      imageUrl: info?.thumburl ?? info?.url ?? "",
      sourceUrl: descriptionUrl,
      license,
      artist,
      licenseUrl: meta.LicenseUrl?.value ?? "",
      licenseAllowed: ALLOWED_LICENSES.test(license),
      matchedTerms,
    };
  });
}

async function main() {
  const vehicles = await client.fetch(`
    *[_type == "vehicleModel" && catalogueActive == true] {
      _id,
      brand,
      model,
      "hasImage": defined(image.asset)
    } | order(brand asc, model asc)
  `);

  const report = [];

  for (const vehicle of vehicles) {
    if (vehicle.hasImage) {
      report.push({
        id: vehicle._id,
        brand: vehicle.brand,
        model: vehicle.model,
        status: "Already has image",
        candidates: [],
      });
      continue;
    }

    try {
      const candidates = await searchCommons(
        vehicle.brand,
        vehicle.model
      );

      report.push({
        id: vehicle._id,
        brand: vehicle.brand,
        model: vehicle.model,
        status: candidates.length
          ? "Needs candidate review"
          : "No results",
        candidates,
      });

      console.log(
        `${vehicle.brand} ${vehicle.model}: ${candidates.length} candidates`
      );
    } catch (error) {
      report.push({
        id: vehicle._id,
        brand: vehicle.brand,
        model: vehicle.model,
        status: `Search failed: ${error.message}`,
        candidates: [],
      });
    }

    // Avoid sending requests too quickly.
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  await fs.writeFile(
    "vehicle-image-report.json",
    JSON.stringify(report, null, 2),
    "utf8"
  );

  console.log("\nDiscovery complete.");
  console.log("Report saved to vehicle-image-report.json");
  console.log("No Sanity images were changed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
