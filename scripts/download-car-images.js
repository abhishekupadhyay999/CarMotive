const fs = require("fs");
const path = require("path");
const axios = require("axios");

const cars = require("../datas/cars.json");

const output = path.join(__dirname, "../public/images/cars");

async function download(url, filepath) {
  const writer = fs.createWriteStream(filepath);

  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

(async () => {
  for (const car of cars) {
    if (!car.image) continue;

    const brandFolder = path.join(
      output,
      car.brand.toLowerCase().replace(/\s+/g, "-")
    );

    if (!fs.existsSync(brandFolder)) {
      fs.mkdirSync(brandFolder, { recursive: true });
    }

    console.log(`Folder ready: ${brandFolder}`);
  }

  console.log("Folders created successfully.");
})();