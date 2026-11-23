import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Verified output: entry.txt sha256 899a818b90fdaf5a3eca27e596027e7a82e55d3ccba0bb74a46f212a80f2c8b7, 87 chars excl. newline.

const line = "One star. My umbrella keeps the rain off my head and delivers it neatly down my sleeve.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
