import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Forecast for a City That Isn't.
// One deterministic line: flat official bulletin phrasing, then the
// weather itself breaks it. Invented city Frostwick, absurd snow that
// will not melt without paperwork, twist in the final clause.
const ENTRY =
  "Forecast, Frostwick: 12 cm of snow refuses to melt until Form 27B is signed; clerk Edna stamps it denied.";

// Deterministic self-check: one line, within the 120-character gate.
// No clock, no randomness, no network — the same bytes every run.
if ([...ENTRY].length > 120 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single line of at most 120 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
