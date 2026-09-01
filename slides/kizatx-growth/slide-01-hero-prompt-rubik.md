# Kiz ATX Growth Carousel — Slide 1 Hero (Rubik variant, for comparison)

**Output target:** `~/Documents/GitHub/artifacts-hub/slides/kizatx-growth/slide-01.png`
**Format:** Instagram carousel, 1080×1350 (4:5 portrait)
**Quality:** high
**Model expectation:** gpt-image-1 or equivalent composite-capable image model
**Approach:** full AI composite (image + typography baked in, single pass — no PIL text overlay)

---

## Creative direction (one-line)

A viral Instagram carousel cover in the visual language of marketingharry / adarshxdesign — massive condensed all-caps display type dominating the frame, a subtle Austin skyline silhouette anchoring the bottom third, cinematic navy atmosphere with electric-blue rim light. Kiz ATX brand palette locked.

## Reference styling

Look and feel of high-performing Instagram carousel covers by `@marketingharry`, `@adarshxdesign`, and `@growithalex`: display type takes 40–60% of the frame; a subject or environmental element sits behind or beneath the type; one accent word or line is rendered in a contrast color; a small tracked-caps credibility strip runs across the top; a numeric slide-count pill sits in the top-right corner; a small "swipe" cue appears in the bottom-right. Composition reads at thumbnail scale, hooks the eye, opens a curiosity loop.

**Type note (this variant):** Rubik Black replaces the condensed Anton used in the primary hero. Rubik is a rounded geometric sans with softer terminals — it will read more editorial and less "viral poster." Same tonal territory, calmer voice.

## Palette (strict)

- Background navy: `#0d1520` — solid base
- Electric blue accent: `#4fc3f7` — the emphasis line and the skyline rim glow
- Ivory (primary text): `#f5f7fa` — headline and eyebrow
- Ivory muted (subtitle): `rgba(245, 247, 250, 0.72)` — kick line
- No gold. No warm-orange sky. No purple. No mint (mint is reserved for a different slide).

## Composition (top to bottom)

1. **Background (full frame).** Deep navy `#0d1520` with two soft atmospheric radial-gradient glows — one in the top-left corner, one in the bottom-right — each in electric blue at ~10% opacity fading to transparent. Subtle. Not neon. Atmospheric.

2. **Eyebrow strip (top-left, ~5% from top).** Small tracked-caps monospaced label reading exactly: `KIZ ATX · SUNDAYS · ESQUINA TANGO`. Type in electric blue `#4fc3f7`, monospaced font in the JetBrains Mono / IBM Plex Mono family, letter-spacing about 0.22em, all uppercase, small (about 22px at 1080×1350 canvas scale).

3. **Slide-count pill (top-right, ~5% from top).** Small rounded rectangle pill, background rgba(0,0,0,0.4), padding about 6×14px, containing the text `1/8` in ivory `#f5f7fa`, monospaced, about 20px.

4. **Headline (~15% from top, left-aligned, three stacked lines, fills roughly rows 2–5 of an implicit grid).** Massive all-caps display type in the **Rubik family, weight 900 (Black)** — a rounded geometric sans, medium proportion (not condensed), soft rounded terminals characteristic of Rubik. Letter-spacing tight (about -0.02em). Line-height very tight (about 0.92 — the lines nearly touch). Size pushed larger than a condensed face would need since Rubik is less narrow — the type still dominates the frame and reads instantly at thumbnail scale.
   - Line 1: `THE ROOM` — ivory `#f5f7fa`
   - Line 2: `DOUBLED` — ivory `#f5f7fa`
   - Line 3: `IN 4 MONTHS.` — electric blue `#4fc3f7`, with a subtle blue glow (soft 20–30px halo, same hue, low opacity) around the letterforms so the accent line reads as luminous rim-light against the navy.
   - Type dominates the frame. Reads at thumbnail scale.

5. **Skyline anchor (photographic, lower third).** A cinematic aerial photograph of the Austin downtown skyline over Lady Bird Lake, shot from the Zilker / Lou Neff vantage looking northeast at the towers. This is the Kiz ATX signature hero — same composition every time: downtown towers sit slightly left-of-center, the lake sweeps through the lower frame, tree line at the water's edge. Blue-hour / early-night grade so the sky harmonizes with the navy `#0d1520` background — the photograph blends seamlessly upward into the type field with no hard horizon line, feathered gently into the atmospheric glow. Illuminated windows in the towers read as small warm points but should NOT compete with the electric blue emphasis line above; keep them small and low-contrast. The lake surface catches a soft electric-blue reflection consistent with the palette. Photographic, cinematic, depth of field respected. The skyline occupies roughly the bottom 30–35% of the frame — enough to ground the image as unmistakably Kiz ATX, but leaves the upper two-thirds for the massive type.

6. **Kick line (bottom-left, ~6% from bottom, italic serif).** A single short italic line reading exactly: `a kiz practica in east austin.` — ivory at 72% opacity `rgba(245,247,250,0.72)`, in a serif font (Georgia / IBM Plex Serif family), about 24px, italic, sentence case.

7. **Swipe indicator (bottom-right, ~5% from bottom).** Small tracked-caps monospaced text reading exactly: `SWIPE →` (with a right-pointing arrow character). Electric blue `#4fc3f7`, monospaced, letter-spacing about 0.22em, about 20px.

## Mood + technical notes

- Overall mood: cinematic, editorial, restrained, magnetic. Feels like a poster, not an infographic.
- Grain: very subtle film grain acceptable. Nothing heavy.
- Depth: the composition should feel layered — background atmosphere, skyline anchor, foreground type — with clear separation.
- Contrast: high enough that the ivory headline reads instantly at thumbnail scale on a black feed background.
- Text accuracy: the exact strings below must be rendered verbatim, no autocorrect, no substitution. If the model cannot render one of them cleanly, prefer generating without text and I will composite typographically.

## Exact text to render (verbatim)

- Eyebrow: `KIZ ATX · SUNDAYS · ESQUINA TANGO`
- Headline line 1: `THE ROOM`
- Headline line 2: `DOUBLED`
- Headline line 3: `IN 4 MONTHS.`
- Kick line: `a kiz practica in east austin.`
- Swipe indicator: `SWIPE →`
- Count pill: `1/8`

## What to avoid

- No people, faces, or figures in the frame — the mockup we selected does not include a dancer subject.
- No gold, no orange, no purple, no mint, no rose. Palette is strictly navy + electric blue + ivory.
- No hand-drawn or illustrated feel. Photographic-atmospheric only.
- No literal dance-floor imagery, disco balls, spotlights, or generic dance icons.
- No numbered section markers (01/02/03) as decorative eyebrows.
- No em-dashes anywhere in the rendered text. Use periods, colons, or commas.
- Do not describe Kizomba anywhere in the frame. The word "Kizomba" does not appear on this hero.
- No paid-promotion language or "boosted post" iconography.

## Fallback plan (if text rendering fails)

If the model produces mangled or misspelled text, re-run with `--no-text` (background composition only — navy, skyline, atmospheric glows) and Charles will composite the typography layer in HTML for a screenshot pass. The background alone must still deliver the mood.
