# Ooumph Code editions

Ooumph Code is Ooumph's AI coding agent for the terminal, a modified version of [Qwen Code](https://github.com/QwenLM/qwen-code) (Apache-2.0; see `NOTICE`). It comes in two editions. They share the same code and differ only in settings.

| | **Company** | **World** |
|---|---|---|
| For | Ooumph employees | Everyone |
| Banner | `>_ Ooumph Code` · "Company edition · FLM brain network" | `>_ Ooumph Code` · "World edition · open AI coding agent by Ooumph" |
| Theme | Ooumph Dark / Ooumph Light (emerald → blue → pink) | same |
| Default model | `qwen3:1.7b` on local Ollama (fits 8 GB laptops) | same |
| Other models | `qwen3:4b`, **FLM brain (local node)** | `qwen3:4b`, `qwen2.5-coder:7b` |
| Brain network | Connects to the Ooumph FLM brain (see below) | No connection to Ooumph internals |

All models run **on your own machine** through [Ollama](https://ollama.com). Nothing is sent to an outside AI service by default.

## Install

```bash
# 1. Ooumph Code
git clone -b praveen/ooumph-brand https://github.com/My-ooumph/ooumph-code.git
cd ooumph-code && npm ci && npm run build && npm link

# 2. A local model
ollama pull qwen3:1.7b        # 8 GB laptops
ollama pull qwen3:4b          # 16 GB+

# 3. Your edition
node editions/install.mjs company   # or: world

# 4. Run
ooumph
```

`install.mjs` backs up `~/.qwen/settings.json` before merging the edition in. Switch theme with `/theme` and model with `/model`.

## Company edition: FLM brain

- **FLM brain (local node)** appears in `/model`. It needs the FLM node's OpenAI-compatible endpoint on `http://127.0.0.1:8000/v1`. That endpoint is still being built (FLM-codebase `docs/brain/notes/req-brainnet-openai-endpoint.md`), and until it ships the default stays on local Qwen.
- The shared brain (sessions, lessons, approvals, industry world models) is served by the Ooumph Brain API. The operator gives each employee a URL and token. Its AI-readable guide is at `<brain URL>/llms.txt`.

## Branding files

- `branding/ooumph-logo.txt`: the banner logo (also inlined in each edition's `ui.customAsciiArt`).
- Theme colours live in each edition's `ui.customThemes`.
- Settings keys used: `ui.customBannerTitle`, `ui.customBannerSubtitle`, `ui.customAsciiArt`, `ui.customThemes`, `ui.theme`, `modelProviders`, `model.name`, `security.auth.selectedType`. See `docs/design/customize-banner-area/` and `docs/users/configuration/`.

Branding is done through settings, not code changes, so updates from Qwen Code merge cleanly and upstream tests keep passing.
