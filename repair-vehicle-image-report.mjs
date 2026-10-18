
import fs from "node:fs/promises";

const INPUT = "vehicle-image-report.json";
const OUTPUT = "vehicle-image-review-report.json";

const normalize = (value = "") =>
  String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const cleanHtml = (value = "") =>
  String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const brandAliases = {
  "maruti suzuki": ["maruti suzuki", "maruti", "suzuki"],
  skoda: ["skoda", "škoda"],
  mg: ["mg", "mg motor", "morris garages"],
};

const modelAliases = {
  "grand i10 nios": ["grand i10 nios", "i10 nios"],
  "urban cruiser hyryder": ["urban cruiser hyryder", "hyryder"],
  "urban cruiser taisor": ["urban cruiser taisor", "taisor"],
  "innova hycross": ["innova hycross", "innova hy cross", "hycross"],
  "grand vitara": ["grand vitara"],
  "e vitara": ["e vitara", "e-vitara"],
  "xuv 3xo": ["xuv 3xo", "xuv3xo"],
  "xuv 7xo": ["xuv 7xo", "xuv7xo"],
  "xev 9e": ["xev 9e", "xev9e"],
  "be 6": ["be 6", "be6"],
  "s presso": ["s presso", "s-presso", "spresso"],
  wagonr: ["wagonr", "wagon r"],
  xl6: ["xl6", "xl 6"],
  "creta electric": ["creta electric", "creta ev"],
  "thar roxx": ["thar roxx", "thar rocks"],
  "fortuner legender": ["fortuner legender"],
  "mg comet ev": ["mg comet ev", "comet ev", "mg comet"],
  "mg zs ev": ["mg zs ev", "zs ev"],
  "mg windsor ev": ["mg windsor ev", "windsor ev"],
  "mg m9": ["mg m9", "m9"],
  "ioniq 5": ["ioniq 5", "ioniq5"],
  ev6: ["ev6", "ev 6"],
  ev9: ["ev9", "ev 9"],
};

function containsPhrase(text, phrase) {
  const haystack = ` ${normalize(text)} `;
  const needle = ` ${normalize(phrase)} `;
  return haystack.includes(needle);
}

function filePageUrl(title = "") {
  const cleanTitle = String(title)
    .replace(/^File:/i, "")
    .replace(/_/g, " ")
    .trim();

  if (!cleanTitle) return "";

  return (
    "https://commons.wikimedia.org/wiki/File:" +
    encodeURIComponent(cleanTitle).replace(/%20/g, "_")
  );
}

function classifyCandidate(record, candidate) {
  const title = candidate.title || "";
  const titleNorm = normalize(title.replace(/^File:/i, ""));

  const brand = normalize(record.brand || candidate.brand || "");
  const model = normalize(record.model || candidate.model || "");

  const aliases = brandAliases[brand] || [
    record.brand || candidate.brand || "",
  ];

  const brandMatch = aliases.some((alias) =>
    containsPhrase(titleNorm, alias)
  );

  const modelOptions = modelAliases[model] || [
    record.model || candidate.model || "",
  ];

  let modelMatch = modelOptions.some((alias) =>
    containsPhrase(titleNorm, alias)
  );

  // Reject some known ambiguous or misleading matches.
  if (
    model === "honda city" &&
    /\bhatchback\b/.test(titleNorm)
  ) {
    modelMatch = false;
  }

  if (
    model === "mg comet ev" &&
    /\bwuling\b/.test(titleNorm) &&
    !/\bmg comet\b/.test(titleNorm)
  ) {
    modelMatch = false;
  }

  if (
    model === "mg gloster" &&
    /\b(maxus|d90)\b/.test(titleNorm) &&
    !/\bmg gloster\b/.test(titleNorm)
  ) {
    modelMatch = false;
  }

  if (
    model === "mg hector" &&
    /\b(baojun|530)\b/.test(titleNorm) &&
    !/\bmg hector\b/.test(titleNorm)
  ) {
    modelMatch = false;
  }

  if (
    model === "mg windsor ev" &&
    /\b(baojun|yunduo)\b/.test(titleNorm) &&
    !/\bmg windsor\b/.test(titleNorm)
  ) {
    modelMatch = false;
  }

  if (
    model === "creta electric" &&
    /\bcreta\b/.test(titleNorm) &&
    !/\b(electric|ev)\b/.test(titleNorm)
  ) {
    modelMatch = false;
  }

  const hasBrandAndModel = brandMatch && modelMatch;

  const genericCarSignals =
    /\b(car|vehicle|automobile|suv|sedan|hatchback|front|side view|india|launch|showroom|auto show)\b/.test(
      titleNorm
    );

  let reviewStatus;

  if (hasBrandAndModel) {
    reviewStatus = "Likely match - review image";
  } else if (modelMatch || (brandMatch && genericCarSignals)) {
    reviewStatus = "Possible match - manual review";
  } else {
    reviewStatus = "Reject - model mismatch";
  }

  return {
    ...candidate,
    sourceUrl: candidate.sourceUrl || filePageUrl(title),
    artist: cleanHtml(candidate.artist || ""),
    brandMatch,
    modelMatch,
    reviewStatus,
  };
}

async function main() {
  const raw = await fs.readFile(INPUT, "utf8");
  const records = JSON.parse(raw);

  if (!Array.isArray(records)) {
    throw new Error(
      `${INPUT} must contain a JSON array.`
    );
  }

  let totalCandidates = 0;

  const counts = {
    "Likely match - review image": 0,
    "Possible match - manual review": 0,
    "Reject - model mismatch": 0,
  };

  const vehicles = records.map((record) => {
    const candidates = (record.candidates || []).map(
      (candidate) => {
        totalCandidates++;

        const updated = classifyCandidate(record, candidate);
        counts[updated.reviewStatus]++;

        return updated;
      }
    );

    const reviewStatusSummary = candidates.reduce(
      (summary, candidate) => {
        const status = candidate.reviewStatus;
        summary[status] = (summary[status] || 0) + 1;
        return summary;
      },
      {}
    );

    return {
      ...record,
      candidates,
      reviewStatusSummary,
    };
  });

  const output = {
    generatedAt: new Date().toISOString(),
    sourceReport: INPUT,
    note:
      "Offline title-based review only. No Wikimedia requests were made and no Sanity documents were changed. Inspect every image and verify its licence before importing.",
    summary: {
      modelRecords: vehicles.length,
      totalCandidates,
      ...counts,
    },
    vehicles,
  };

  await fs.writeFile(
    OUTPUT,
    JSON.stringify(output, null, 2) + "\n",
    "utf8"
  );

  console.log(`Created ${OUTPUT}`);
  console.log(JSON.stringify(output.summary, null, 2));
}

main().catch((error) => {
  console.error("Report repair failed:", error.message);
  process.exitCode = 1;
});
