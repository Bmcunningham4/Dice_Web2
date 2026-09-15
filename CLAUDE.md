# CLAUDE.md

Notes for Claude Code when working in this repo.

- The actual app lives in `dice-react-app2/`, not the repo root.
- Simple single-die roller: click the die or "Roll Dice" to roll. Small "Demo" button (bottom-left) rolls but always lands on 6.
- Rolling a 6 shows a Goggins photo filling the rest of the screen, instead of the usual sun/rainbow row.
- Deploys via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `master` — no manual deploy step needed.
- Run locally: `cd dice-react-app2 && npm install && npm run dev`
