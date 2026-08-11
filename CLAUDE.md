# artifacts-hub — Claude Code Project

Single-file HTML artifacts deployed to `slides.ogarocious.com` (and future subdomains) via DigitalOcean App Platform. Every artifact lives at its own URL under `slides/<slug>/`.

## Deployment

- **Host**: DigitalOcean App Platform (`.do/app.yaml`)
- **Repo**: github.com/ogarocious/artifacts-hub, branch `main`
- **Auto-deploy**: every push to `main` triggers a deploy (~1–3 min)
- **URL pattern**: `slides.ogarocious.com/<slug>/` where `<slug>` = directory name under `slides/`
- **Static routing**: `static_site` with `catchall_document: index.html`

## The Deck Pattern

Every scrollable slide deck follows the same shell. Reference instances:

- `slides/steal-this/` — canonical live instance, Ogarocious default palette
- `slides/kiz-atx-workshops-aug-sep/` — Tally-signal deck with `data-inject` regions for n8n auto-regen (see `reference_workshop_deck_automation` memory)
- `slides/kizatx/` — internal noindex ops tracker in the Kiz ATX palette

**Shared shell:**
- Fixed 56px top header: brand dot + name + slide counter + updated/rev timestamps (`data-inject` markers) + keyboard-shortcut chips + mobile hamburger
- Fixed 280px left sidebar (md+ only): "Sections" label + JS-generated flat nav list + brand foot block
- Mobile drawer: JS-generated with `data-group="X"` clustering (drawer stays flat if no section carries the attribute)
- Top-of-viewport progress bar (2px, accent color)
- `<main class="md:pl-[280px] snap-y-scroll">` container so slides sit next to the sidebar
- Scroll-snap `<section class="snap-slide" data-title="X" [data-group="Y"]>` blocks
- Cover slide: accent-rule + eyebrow label + h1 + description + stat tiles + collapsible `[▸ CONTENTS]` TOC via `<details class="deck-toc">`
- Utility CSS: `.glass`, `.stat-tile`, `.delta` (pos/neg/neu), `.data-table`, `.bar-chart`, `.line-chart`, `.legend`, `.ask-list`, `.log-list`, `.kbd`, `.accent-rule`
- JS: IntersectionObserver active-state, progress-bar update, menu toggle, keyboard nav (`Space` / `↑↓` / `Home` / `End` / `Esc`)
- Companion 1200×630 `og.png` rendered from a sibling `og-source.html`

## Template Files

- **`template/template.html`** — canonical skeleton with `{{TOKEN}}` placeholders. **Read the comment block at the top** for the FILL RULES (no em-dashes in body copy, no tracked-caps eyebrows on every section, no numeric section markers unless the content IS a real sequence, hero text stays solid ivory). These are enforced by the impeccable design hook.
- **`slides/steal-this/`** — copy this when the abstract template feels too skeletal and you'd rather start from a living deck.
- **`slides/kizatx/`** — copy this when building an internal-noindex ops tracker with the full-featured nav (header + sidebar + drawer + grouped TOC).

## Palette Registry

| Brand | BG | Accent | Font | Notes |
|---|---|---|---|---|
| **Ogarocious** (default) | `#1f1b15` espresso | `#d4552b` terracotta | Rubik | Template default. See `template/template.html` |
| **Kiz ATX** | `#0d1520` navy | `#4fc3f7` electric | Rubik | See `slides/kizatx/` |
| **KSX** (Kage) | `#0f0b08` deep espresso | `#c0392b` crimson + `#e5b95a` gold *(interim)* | Rubik | ⚠️ TEMP — proper KSX design system pending. Currently only the Kage Edition email visual vocabulary is documented in Charles's memory (`project_ksx_email_visual_language`). |
| **Learntokiz** | `#171717` warm dark | `#ff9800` amber | Rubik | Sourced from `Learntokiz-2.0/app/frontend/entrypoints/tokens.css` |
| **Vidhive** | `#0f0f0f` ink | `#ff8000` highlighter orange | **Bricolage Grotesque display + Public Sans body** | Font is the differentiator vs L2K's orange. Target-state typography per `vidhive/DESIGN.md` (current shipping is Rubik; use target for decks) |
| **WhereCanWeDance** | `#171717` | `#e11d48` rose *(interim)* | Poppins + Rubik | ⚠️ TEMP — proper WCWD design system pending. App itself uses shadcn/ui neutrals with no strong brand accent |
| **Tennis journey** | `#0a0e0a` near-black | `#39ff14` neon green | Rubik | Personal / sporty |
| **Personal curiosity** | `#0f1620` deep cool | `#5eead4` soft teal | Rubik | Shared bucket for exploratory / non-brand pieces |

**Future work (upgrades pending):**
1. Build a proper WhereCanWeDance design system (documented tokens, brand-native accent). Currently ad-hoc.
2. Build a proper KSX design system (only email visual vocabulary exists so far).

When either lands, update the registry above and drop the ⚠️ TEMP flag.

## Public vs. Internal Decks

**Public** (shareable, indexable): standard OG/Twitter meta, canonical URL, no robots restriction.
- Examples: `slides/steal-this/`, `slides/kiz-atx-workshops-aug-sep/`

**Internal** (Charles-only ops tools, do NOT distribute): add `<meta name="robots" content="noindex, nofollow" />`. Still deploys publicly and URL is discoverable if guessed, so **never link from broadcast emails or public collateral** (per Charles's `feedback_slides_ogarocious_internal` memory). Extract the stat instead if a public-facing piece needs the number.
- Examples: `slides/kizatx/`

## Workflow: Spin Up a New Deck

Given a brand (from registry) and data (whatever Charles is tracking):

1. **Pick the slug.** Directory name under `slides/`. Short and specific (`kizatx`, `vidhive-launch`, `wcwd-user-growth`, `tennis-2026-q3`, etc.). This becomes the URL: `slides.ogarocious.com/<slug>/`.

2. **Copy a starting deck.** Pick one:
   - `template/template.html` — token-based, cleanest starting point when you know exactly what content you're putting in
   - `slides/steal-this/index.html` — live reference in Ogarocious default palette
   - `slides/kizatx/index.html` — internal-noindex pattern with the full-featured nav (header + sidebar + drawer + grouped TOC)

3. **Swap the palette.** In the new `index.html`:
   - Update the tailwind `colors` config extension with the brand's palette
   - Update body `background-color` + radial-gradient stops
   - Update `<meta name="theme-color">`
   - Update `.progress-bar` and `.accent-rule` accent color
   - Update the header `.brand-dot` and hover glow color
   - Update font-family imports and `fontFamily` config if the brand uses non-Rubik

4. **Fill the content.** Title, description, canonical URL, then the slides. Follow the FILL RULES from `template/template.html`'s comment block.

5. **Render OG.**
   - Create `slides/<slug>/og-source.html` (1200×630 HTML template — see `slides/kizatx/og-source.html` for the pattern)
   - Render to `og.png` via headless Chrome:
     ```
     "$(ls -d ~/.cache/puppeteer/chrome-headless-shell/mac_arm-*/chrome-headless-shell-mac-arm64/chrome-headless-shell | tail -1)" \
       --headless --hide-scrollbars --disable-gpu \
       --window-size=1200,630 --virtual-time-budget=8000 \
       --screenshot="slides/<slug>/og.png" \
       "file://$(pwd)/slides/<slug>/og-source.html"
     ```
   - Wire OG/Twitter meta tags in `index.html` pointing at `https://slides.ogarocious.com/<slug>/og.png`

6. **Deploy.** Charles commits + pushes to `main` via GitHub Desktop (see `feedback_git_workflow`). DO auto-deploys within 1–3 min.

## Version Bumps

For decks that get re-rendered as data updates (like the workshop signal deck via n8n auto-regen from Tally responses), bump the `rev N` counter and refresh the "Last updated" timestamp in the header block + cover block on every substantive push. Uses `data-inject` spans as injection targets for automation.

## The Landing Index (Future Work)

`slides/index.html` is the landing at `slides.ogarocious.com/`. Currently a hand-maintained flat list of ~10 hardcoded links. **Not searchable or filterable.** As the deck count grows past ~15 this will need its own design pass:

- Data model for per-deck metadata (brand, type, internal/public, date, one-line description)
- Filter UI (by brand, by type, by internal/public)
- Search
- Sort by date

Treat as a separate initiative — do not jam into any existing deck's spin-up.
