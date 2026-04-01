/**
 * Google SMS Thread Extractor
 *
 * This file is the orchestration entry point. The actual extraction
 * is performed by Claude's browser automation tools (claude-in-chrome MCP)
 * via skills/commands defined in .claude/.
 *
 * See CLAUDE.md for usage instructions.
 */

import type { ExtractionConfig } from "./types.js";

const defaultConfig: ExtractionConfig = {
  outputDir: "./output",
  format: "both",
  includeAttachments: true,
};

console.log("Google SMS Thread Extractor");
console.log("==========================");
console.log("");
console.log("This tool uses Claude's browser automation to extract SMS threads.");
console.log("Run this via Claude Code with the /extract-thread command.");
console.log("");
console.log("Config:", JSON.stringify(defaultConfig, null, 2));
