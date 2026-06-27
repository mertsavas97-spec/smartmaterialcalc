import { loadEnvConfig } from "@next/env";

/**
 * Load `.env`, `.env.local`, and mode-specific env files the same way
 * Next.js does for `next dev` and `next build`.
 */
export function loadProjectEnv(cwd: string = process.cwd()): void {
  const dev = process.env.NODE_ENV !== "production";
  loadEnvConfig(cwd, dev);
}

loadProjectEnv();
