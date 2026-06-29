import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const CHUNKS_DIR = join(ROOT, ".next/static/chunks");
const SERVER_APP_DIR = join(ROOT, ".next/server/app");
const CHUNK_REF =
  /\/_next\/static\/chunks\/([a-zA-Z0-9_.-]+\.(?:js|css))/g;

function collectFiles(dir: string, acc: string[] = []): string[] {
  if (!existsSync(dir)) {
    return acc;
  }

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      collectFiles(fullPath, acc);
      continue;
    }

    if (entry.endsWith(".html") || entry.endsWith(".rsc")) {
      acc.push(fullPath);
    }
  }

  return acc;
}

function main() {
  if (!existsSync(CHUNKS_DIR)) {
    console.error("Missing .next/static/chunks — run npm run build first.");
    process.exit(1);
  }

  const files = collectFiles(SERVER_APP_DIR);
  const referenced = new Set<string>();
  const missing: string[] = [];

  for (const file of files) {
    const content = readFileSync(file, "utf8");

    for (const match of content.matchAll(CHUNK_REF)) {
      const chunk = match[1];
      referenced.add(chunk);

      if (!existsSync(join(CHUNKS_DIR, chunk))) {
        missing.push(
          `${chunk} referenced in ${relative(ROOT, file)} but missing from build output`
        );
      }
    }
  }

  if (missing.length > 0) {
    console.error("Asset integrity check failed:");
    for (const line of missing) {
      console.error(`  - ${line}`);
    }
    process.exit(1);
  }

  console.log(
    `Asset integrity OK: ${referenced.size} unique chunk references across ${files.length} server files.`
  );
}

main();
