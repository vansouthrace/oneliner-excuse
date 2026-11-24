import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I finished it, then asked myself to double-check, and my double-check asked for a third opinion.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
