// 30 Seconds to Open the Fridge — program/v1 entry (Node 22, no network,
// no dependencies).
//
// Writes the one-line roast of a smart fridge to /output/entry.txt
// (or $OUTPUT_DIR/entry.txt when testing locally). The gate requires
// UTF-8 text of 1-200 characters, not only whitespace, on one line,
// with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: two beats. Beat 1 — the fridge forces its owner to watch a
// 30-second ad before the door will open (setup: a screen on the door
// turned into a toll booth). Beat 2 — the ad is for a second fridge
// (concrete, literal, measurable punch: a duration "30-second" plus a
// named artefact, "a second fridge", in the final clause).
const ENTRY =
  "My smart fridge makes me watch a 30-second ad before it opens, and the ad is for a second fridge.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

// Gate check before writing: 1-200 characters, not only whitespace,
// single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-200 characters`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outputDir, { recursive: true });
// No trailing newline: write the text exactly as-is.
writeFileSync(outputPath, ENTRY, "utf8");
