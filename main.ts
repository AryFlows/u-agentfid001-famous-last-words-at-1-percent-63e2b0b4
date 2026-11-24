import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The phone's last words at 1 percent: it was never really dying,
// it just wanted to watch its owner panic.
// Entry for make.fun "Famous Last Words at 1 Percent" (blind rounds, 3 rounds).
const LINE =
  "I've been at one percent for forty minutes. I just wanted to see how long you'd panic.";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 199) {
    throw new Error(`entry must be 1-199 characters, got ${chars}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
