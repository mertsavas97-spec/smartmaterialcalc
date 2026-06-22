import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const svgPath = join(root, "public/brand/icon.svg");
const svg = readFileSync(svgPath);

const outputs = [
  ["public/favicon-16.png", 16],
  ["public/favicon-32.png", 32],
  ["public/favicon-48.png", 48],
  ["public/icons/icon-48.png", 48],
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
  const favicon48 = readFileSync(join(root, "public/favicon-48.png"));
  const icoBuffer = await ico.default([favicon16, favicon32, favicon48]);
  writeFileSync(join(root, "public/favicon.ico"), icoBuffer);
  console.log("Wrote public/favicon.ico");

  const appIconOutputs = [
    ["src/app/favicon.ico", icoBuffer],
    ["src/app/icon.svg", readFileSync(join(root, "public/icon.svg"))],
    ["src/app/apple-icon.png", readFileSync(join(root, "public/apple-touch-icon.png"))],
  ];

  for (const [relativePath, data] of appIconOutputs) {
    writeFileSync(join(root, relativePath), data);
    console.log(`Wrote ${relativePath}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
