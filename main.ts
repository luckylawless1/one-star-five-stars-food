import { mkdirSync, rmSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star: your gravity pinned my tentacles to the pavement, your sun roasted me like a dumpling, and the locals only stared, yet the street noodles were so good I would suffer it all again tomorrow.";

mkdirSync("/output", { recursive: true });
for (const name of ["entry.txt"]) {
  try {
    rmSync(`/output/${name}`, { force: true });
  } catch {
    // ignore missing file
  }
}
writeFileSync("/output/entry.txt", ENTRY, "utf8");
