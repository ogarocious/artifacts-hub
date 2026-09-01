# Kiz ATX Growth Carousel — Design Brief (v2)

## Context

Kiz ATX runs a Sunday Kizomba practica at Esquina Tango in East Austin, co-taught by **Charles Ogar** (Kiz ATX founder) and **Alina** (teaching partner). Between April and July 2026, attendance grew from ~26 to 61 monthly check-ins — the room doubled.

**This was not accidental.** It was the result of consistent, intentional work with no paid promotion:

- **Planning ahead as a service.** Charles ships a monthly graphic showing every Sunday of the month so people can plan attendance in advance, published through the Kiz ATX site (built on top of Where Can We Dance, the platform Charles created) and reposted across owned channels.
- **A WhatsApp community with member input.** Regulars and newcomers share a WhatsApp room where members vote on the topic for each Sunday. The community shapes the calendar, not just receives it.
- **Teaching mechanism.** Alina co-teaches every Sunday alongside Charles. She gives sustained feedback to leads across the whole practica, which is uncommon at a drop-in social. Both instructors demonstrate high-level dancing on the floor — the dance is modeled, not just described. Beginners are actively welcomed.
- **Editorial stance.** Kizomba is Angolan and diasporic. Kiz ATX is Black-owned and honors the influence of Black artists and African American history in the dance's American context. Never reduce Kizomba to "a fun Latin dance." Use "Angolan partner dance" or leave unqualified.

Build an 8-slide Instagram carousel that tells this growth story — the numbers AND the mechanism — for prospective students in the Austin dance community. No financial data anywhere.

## Deliverable

Build **slides 2 through 8 only**. Slide 1 (the hero) is generated separately via the `ocos` AI image pipeline and lives in the same directory as `slide-01.png` — do not attempt to build it in HTML.

- 7 self-contained HTML files (`slide-02.html` through `slide-08.html`), each 1080×1350
- 7 rendered PNGs (`slide-02.png` through `slide-08.png`)
- Working directory: `~/Documents/GitHub/artifacts-hub/slides/kizatx-growth/`
- Final carousel = `slide-01.png` (AI-generated hero) + `slide-02.png` through `slide-08.png` (HTML render)

## Slide 1 — HERO (do not build)

Slide 1 is generated separately via the `ocos edit` AI image pipeline. The spec below is included for continuity so slides 2–8 match the hero's palette, type, and tone. Do not build an HTML version of this slide.

**Copy:**
- Eyebrow (top-left): `Kiz ATX · Sundays · Esquina Tango` — JetBrains Mono 500, 11px, tracked caps 0.22em, electric blue
- Slide count (top-right pill): `1/8` — JetBrains Mono 400, 10px, ivory on rgba(0,0,0,0.4) 3×8px pill
- Headline (three stacked lines, left-aligned, top ~15%): `The Room` / `Doubled` / `In 4 Months.` — Anton 400, 78px, uppercase, letter-spacing -0.01em, line-height 0.9. First two lines ivory, third line electric blue with a subtle text-shadow glow.
- Kick line (bottom-left, italic): `a kiz practica in east austin.` — Rubik 500, 13px italic, ivory at 72% opacity
- Swipe indicator (bottom-right): `Swipe →` — JetBrains Mono 500, 10px, tracked caps 0.22em, electric blue

**Visual:**
- Background: navy `#0d1520` with two soft radial-gradient glows at top-left (12%, 8%) and bottom-right (88%, 92%), each using electric blue at 10% opacity fading to transparent.
- Skyline silhouette anchor at ~16% from bottom, 8% tall, in near-black, with a `drop-shadow(0 -2px 4px #4fc3f7)` for the electric rim glow above it.

## Palette

| Role | Hex | Notes |
|---|---|---|
| Background navy | `#0d1520` | Solid base for every slide |
| Electric blue | `#4fc3f7` | Emphasis word, mono labels, single-hue graphic elements |
| Ivory (primary text) | `#f5f7fa` | Headlines, body |
| Ivory muted | `rgba(245, 247, 250, 0.72)` | Kick lines, captions, "estimated" tags |
| Mint (positive, sparing) | `#86efac` | The July peak callout only |

## Type

- **Display headline (Slide 1 hero and other high-impact hooks):** Anton weight 400 via Google Fonts. Uppercase. Line-height 0.9. Letter-spacing -0.01em.
- **Body + section headlines (Slides 2–8):** Rubik weights 400, 500, 700, 800 via Google Fonts.
- **Tracked-caps labels and numeric tags:** JetBrains Mono weights 400, 500 via Google Fonts.

> Note: Anton is added specifically for the viral hero treatment. Rubik remains the default for all other slides and the broader Kiz ATX deck system.

## Background treatment

Solid `#0d1520` with two soft radial-gradient glows in the top-left and bottom-right corners at `rgba(79, 195, 247, 0.10)` fading to transparent. Do not use hard box-shadow glows on shapes. Keep atmosphere subtle across every slide.

## Slide-by-slide (slides 2–8)

### Slide 2 — April
- Eyebrow top-center: `APRIL` — JetBrains Mono, muted, tracked caps
- Number `26` centered — Rubik 800, ~280px, ivory
- Subtitle below: `check-ins` — Rubik 500, 24px, muted
- Tag lower: `estimated` — JetBrains Mono 13px, dimmed
- Optional: 26 small electric-blue circles (8px radius) in a loose cluster below the number

### Slide 3 — May
Same layout as Slide 2 with `MAY`, `31`, `check-ins`, `estimated`. 31 dots.

### Slide 4 — June
Same layout with `JUNE`, `41`, `check-ins`, `measured` (electric blue this time, not muted — it is real data from the Esquina Tango export). 41 dots.

### Slide 5 — July
Same layout with `JULY`, `61`, `check-ins`, `measured`. 61 dots (visibly the biggest cluster).
Small callout above `check-ins`: `peak of 19 on July 19` — Rubik 500, 22px, mint `#86efac`.

### Slide 6 — The reveal
- Headline: `Attendance more than doubled.` — Rubik 800, ~72px, ivory
- Sub: `2.35× since April` — Rubik 500, ~28px, electric blue
- Below: an SVG comparison, one small circle labeled `April · 26` on the left and one large circle labeled `July · 61` on the right, sized proportionally (July radius 2.35× April's, or scaled by area). Both electric blue.
- One-line CTA at bottom: `Come see why.` — Rubik 500, ivory

### Slide 7 — This wasn't an accident
- Headline: `This wasn't an accident.` — Rubik 800, ~64px, ivory
- Three lines below, each with a small electric-blue bullet dot on the left, Rubik 500, 22px, ivory:
  - `A monthly calendar of every Sunday, so people plan ahead.`
  - `A WhatsApp room where members vote the topics.`
  - `Two instructors. Sustained feedback. Beginners welcome.`
- Sub-caption bottom: `Charles and Alina. Every Sunday.` — Rubik 500, 14px, muted

### Slide 8 — CTA
- Brand mark top-left: small electric-blue dot (10px) + `Kiz ATX` wordmark (Rubik 800, 22px, ivory) inline
- Headline center: `Sundays. 5:30 PM to 7:30 PM.` — Rubik 800, ~64px, ivory
- Address: `Esquina Tango · 209 Pedernales St · Austin` — Rubik 500, 20px, ivory
- Handle bottom-center: `@kizatx` — JetBrains Mono 500, 18px, electric blue
- Small line below handle: `Angolan partner dance · all levels welcome` — Rubik 500, 14px, muted

## Non-negotiables

- **No financial numbers anywhere.** No dollars, revenue, payouts, per-check-in rates, or split percentages.
- **No em-dashes in body copy.** Use commas, colons, periods.
- **Kizomba is Angolan and diasporic.** Never reduce to "a fun Latin dance." Use "Angolan partner dance" or leave unqualified.
- **Alina is Charles's teaching partner, not a substitute.** Never "sub," "substitute," or "covering." She teaches every week alongside Charles.
- **No "accidental" or "just showed up" framing.** The growth was the result of deliberate work: a monthly calendar, a WhatsApp community with member input, co-teaching, and modeling high-level dance.
- **No paid promotion language.** No "ads," "boosted posts," "paid campaign," or similar. All growth was organic through owned channels (WhatsApp, Facebook, Instagram, the Kiz ATX site).
- **Type-driven design.** Prefer bold display type over illustrations. If dots or circles are used, keep them minimal and geometric — small filled circles, no person icons or literal figures.
- **No numbered section markers** (01/02/03) as decorative eyebrows.
- **Hero text stays solid ivory** (except the electric-blue emphasis word). Never apply background-clip to a linear background on headline type.
- **Vary section openings.** Don't put a tracked-caps eyebrow on every slide.

## Technical requirements

- Single self-contained HTML file per slide (no external stylesheets except the Google Fonts import).
- Google Fonts import (inline at top of every file):
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Rubik:wght@400;500;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  ```
- Canvas structure:
  ```html
  <body style="margin:0; background:#0d1520;">
    <div class="slide" style="width:1080px; height:1350px; position:relative; overflow:hidden; ...">
      ... slide content ...
    </div>
  </body>
  ```
- Rendering command (run once per slide, from repo root; N = 02 through 08):
  ```
  "$(ls -d ~/.cache/puppeteer/chrome-headless-shell/mac_arm-*/chrome-headless-shell-mac-arm64/chrome-headless-shell | tail -1)" \
    --headless --hide-scrollbars --disable-gpu \
    --window-size=1080,1350 --virtual-time-budget=8000 \
    --screenshot="slides/kizatx-growth/slide-0N.png" \
    "file://$(pwd)/slides/kizatx-growth/slide-0N.html"
  ```
- After rendering slides 02–08, open the directory so Charles can review the seven renders alongside the separately-generated `slide-01.png` hero before commit.

## References

- Palette + brand system: `~/Documents/GitHub/artifacts-hub/CLAUDE.md` (Kiz ATX row)
- Practica facts: `~/Documents/GitHub/Armature/dance/kiz-practicas/CLAUDE.md` (times, address, cast)
- Brand voice: `~/Documents/GitHub/Armature/dance/kizatx-brand-voice.md`
- Existing internal deck: `slides.ogarocious.com/kizatx` (view-only reference, do not modify)
