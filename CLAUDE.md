# Google SMS Thread Extractor

## Purpose
Extract SMS conversations and attachments from Google Messages web (messages.google.com) using Claude's browser automation tools (claude-in-chrome MCP). Output feeds into deep analysis pipelines (e.g. Context Alpheus persona enrichment).

## Tech Stack
- TypeScript 6.x with tsx runtime (direct TS execution, no compile step)
- Claude browser automation (`mcp__claude-in-chrome__*`) for web interaction
- Vitest for testing
- Bun as package manager

## How It Works

Extraction is Claude-driven — the TypeScript code provides types and config; Claude performs the actual extraction via MCP browser tools in conversation.

1. Connect the claude-in-chrome extension in the Chrome profile logged into Google Messages
2. Navigate to `messages.google.com` and open the target thread
3. Load full history by clicking "Load more messages" repeatedly
4. Extract all message text via `javascript_tool` DOM extraction (full text is in DOM — no "Copy text" button needed)
5. Download attachments via blob URL approach → move from `~/Downloads/` to `output/<contact>/attachments/`
6. Export thread to `output/<contact>/thread.md` with `## timestamp` headings, `**Sender**: content`, and `---` separators

## Commands
```bash
bun install          # Install dependencies
bun test             # Run tests
bun run extract      # Print config (actual extraction is Claude-driven)
```

## Project Structure
```
src/
  extract.ts         # Entry point — prints config, documents extraction approach
  types.ts           # SmsMessage, Attachment, SmsThread, ExtractionConfig (all readonly)
output/              # Extracted conversations (gitignored — private content)
  <contact-name>/
    thread.md        # Full thread in markdown
    attachments/     # Downloaded images named img_NNN_msgMMM_Sender.ext
    analysis/        # Multi-wave analysis outputs (timeline, teachings, synthesis, etc.)
```

## Extraction Tips (learned from Matthew Anderson thread)
- Full message text is directly in the DOM — `javascript_tool` grabs everything in one pass
- Chrome must be connected via the claude-in-chrome extension **before** starting
- If multiple Chrome profiles have the extension, only one can be "connected" at a time
- Attachment downloads: use blob URLs → save to `~/Downloads/` → move to `output/`
- Link preview thumbnails from external CDNs (Instagram, Substack, Telegram) are often unrecoverable after expiry — mark as `*[link preview thumbnail unavailable]*`
- `output/` is gitignored intentionally — content is private

## Analysis Pipeline
After extraction, run multi-wave deep analysis using Claude agents:
- Wave 1: Timeline arc, teachings index, attachment catalog (parallel)
- Wave 2: Pattern mapping against thematic frameworks
- Wave 3: Content tiering (personal / tribe / public)
- Wave 4: Persona enrichment drafts
- Wave 5: Synthesis document

See `output/<contact>/analysis/` for outputs. Analysis files flow into `context-alpheus/inputs/projects/` for persona integration.

## Conventions
- All types use `readonly` — no mutation
- File naming: kebab-case files, PascalCase interfaces
- Commits: conventional commits (`feat:`, `chore:`, `fix:`)
