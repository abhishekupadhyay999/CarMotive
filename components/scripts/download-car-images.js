require("dotenv").config({ path: ".env.local" });

const axios = require("axios");
const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const cars = require("../datas/cars.json");

const API_KEY = process.env.PEXELS_API_KEY;

if (!API_KEY) {
  console.log("❌ Missing PEXELS_API_KEY in .env.local");
  process.exit();
}

const headers = {
  Authorization: API_KEY,
};

async function downloadCar(car, index, total) {
  try {
    if (
      !car.price ||
      car.model === "Model" ||
      car.price === "Ex-Showroom Starts From"
    ) {
      return;
    }

    const search = `${car.brand} ${car.model} car`;

    console.log(`[${index}/${total}] Searching ${search}`);

    const res = await axios.get(
      `https://api.pexels.com/v1/search`,
      {
        headers,
        params: {
          query: search,
          per_page: 1,
          orientation: "landscape",
        },
      }
    );

    if (!res.data.photos.length) {
      console.log(`❌ No image for ${search}`);
      return;
    }

    const imageUrl = res.data.photos[0].src.large2x;

    const brandFolder = car.brand
      .toLowerCase()
      .replace(/\s+/g, "-");

    const filename =
      car.slug.replace(`${brandFolder}-`, "") + ".webp";

    const saveDir = path.join(
      __dirname,
      "..",
      "public",
      "images",
      "cars",
      brandFolder
    );

    await fs.ensureDir(saveDir);

    const savePath = path.join(saveDir, filename);

    if (await fs.pathExists(savePath)) {
      console.log(`⏭ Already exists`);
      return;
    }

    const img = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });

    await sharp(img.data)
      .resize({
        width: 900,
        withoutEnlargement: true,
      })
      .webp({
        quality: 85,
      })
      .toFile(savePath);

    console.log(`✅ Saved ${filename}`);
  } catch (err) {
    console.log(`❌ ${car.model}`);
  }
}

(async () => {
  let count = 1;

  for (const car of cars) {
    await downloadCar(car, count++, cars.length);
  }

  console.log("\n🎉 Finished!");
})();