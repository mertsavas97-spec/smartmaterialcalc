import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const GUIDES_DIR = path.join(process.cwd(), "public/images/guides");
const TARGET_WIDTH = 1280;
const TARGET_HEIGHT = 720;
const MAX_BYTES = 250 * 1024;

const files = fs
  .readdirSync(GUIDES_DIR)
  .filter((file) => file.endsWith(".jpg") || file.endsWith(".jpeg") || file.endsWith(".png"));

async function encodeWebp(buffer, quality) {
  return sharp(buffer)
    .resize(TARGET_WIDTH, TARGET_HEIGHT, {
      fit: "cover",
      position: "centre",
    })
    .webp({ quality, effort: 6 })
    .toBuffer();
}

async function optimizeFile(filename) {
  const inputPath = path.join(GUIDES_DIR, filename);
  const slug = filename.replace(/\.(jpg|jpeg|png)$/i, "");
  const outputPath = path.join(GUIDES_DIR, `${slug}.webp`);

  let quality = 82;
  let output = await encodeWebp(fs.readFileSync(inputPath), quality);

  while (output.length > MAX_BYTES && quality > 50) {
    quality -= 5;
    output = await encodeWebp(fs.readFileSync(inputPath), quality);
  }

  fs.writeFileSync(outputPath, output);

  return {
    slug,
    quality,
    bytes: output.length,
    kb: (output.length / 1024).toFixed(1),
  };
}

const results = [];

for (const file of files) {
  results.push(await optimizeFile(file));
}

for (const file of files) {
  if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    fs.unlinkSync(path.join(GUIDES_DIR, file));
  }
}

console.log("Optimized guide images:");
for (const result of results) {
  console.log(`  ${result.slug}.webp — ${result.kb} KB (quality ${result.quality})`);
}
