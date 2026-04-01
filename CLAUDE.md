# Google SMS Thread Extractor

## Purpose
Extract SMS conversations and attachments from Google Messages web (messages.google.com) using Claude's browser automation tools (claude-in-chrome MCP).

## Tech Stack
- TypeScript with tsx runtime
- Claude browser automation (mcp__claude-in-chrome__*) for web interaction
- Vitest for testing

## How It Works
This project provides Claude Code skills/commands to:
1. Open Google Messages web in Chrome
2. Navigate to a specific SMS thread
3. Step through each message, using the "Copy text" button to extract content
4. Detect and download any attachments (images, videos, etc.)
5. Export the full conversation to structured text/JSON

## Commands
```bash
bun install          # Install dependencies
bun run extract      # Run extraction (interactive)
bun test             # Run tests
```

## Project Structure
```
src/
  extract.ts         # Main extraction orchestration
  types.ts           # Type definitions
  utils/             # Utility functions
output/              # Extracted conversations (gitignored)
```
