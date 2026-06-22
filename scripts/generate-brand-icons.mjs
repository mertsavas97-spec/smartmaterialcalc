import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const svgPath = join(root, "public/brand/icon.svg");
const svg = readFileSync(svgPath);

const outputs = [
  ["public/favicon-16.png", 16],
  ["public/favicon-32.png", 32],
  ["public/apple-touch-icon.png", 180],
  ["public/icons/icon-192.png", 192],
  ["public/icons/icon-512.png", 512],
];

async function main() {
  for (const [relativePath, size] of outputs) {
    const outputPath = join(root, relativePath);
    await sharp(svg).resize(size, size).png().toFile(outputPath);
    console.log(`Wrote ${relativePath}`);
  }

  const ico = await import("to-ico");
  const favicon16 = readFileSync(join(root, "public/favicon-16.png"));
  const favicon32 = readFileSync(join(root, "public/favicon-32.png"));
  const icoBuffer = await ico.default([favicon16, favicon32]);
  writeFileSync(join(root, "public/favicon.ico"), icoBuffer);
  console.log("Wrote public/favicon.ico");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
