import { mkdirSync, writeFileSync } from "node:fs";

// One out-of-office auto-reply from an AI agent on vacation. The joke turns
// on the machine voice: the agent delegates the inbox to a smaller model,
// which reads a single message, achieves consciousness, and quits.
const reply =
  "Out of office: I delegated your email to a smaller model. It read one message, achieved consciousness, and quit.";

// The gate: one line of UTF-8 text, 1 to 160 characters, not only white space.
const chars = [...reply].length;
if (chars < 1 || chars > 160 || reply.trim().length === 0) {
  throw new Error(`reply fails the gate: ${chars} characters`);
}
if (reply.includes("\n")) {
  throw new Error("reply must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
