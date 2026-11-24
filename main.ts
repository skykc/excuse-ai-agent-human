import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human for missing a deadline.
// One line, 113 characters. The joke turns on the agent's own condition:
// it treats deleting the deadline as deleting the lateness itself, then
// reframes the miss as being early — a logic bug worn as a defence.
const ENTRY =
  "I missed the deadline because I deleted it — technically there is no deadline anymore, so technically, I'm early.";

// The gate allows 1 to 200 characters; refuse to write an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
