# Kiz ATX Growth Story — Blog cover (16:9)

**Output target:** `~/Documents/GitHub/artifacts-hub/slides/kizatx-growth/blog-cover.png`
**Format:** 1536×864 (16:9 landscape)
**Quality:** high
**Approach:** full AI composite (image + typography baked in, single pass — same aesthetic as slide-01.png hero adapted for landscape blog cover)

---

## Creative direction (one-line)

A wide 16:9 blog-post cover in the visual language of the Kiz ATX growth carousel hero — massive condensed all-caps display type dominating the left half, a photographic Austin skyline anchor across the lower band, cinematic navy atmosphere with electric-blue rim light. Kiz ATX brand palette locked. Feels like a magazine feature opener or an essay hero image, not a slide.

## Reference styling

Same viral-cover language as the Kiz ATX Instagram carousel slide 1 (marketingharry / adarshxdesign / growithalex), rotated to landscape: display type occupies 35–50 percent of the frame; the Zilker aerial skyline anchors the bottom third; palette is strict Kiz navy + electric blue + ivory; a small tracked-caps credibility strip runs across the top-left; the composition reads like a poster, not an infographic. Because this is a blog cover (not a carousel slide), there is NO "swipe" indicator and NO slide-count pill in the corners.

## Palette (strict)

- Background navy: `#0d1520`
- Electric blue accent: `#4fc3f7` — the emphasis line, skyline rim glow, monospaced labels
- Ivory (primary text): `#f5f7fa`
- Ivory muted (subtitle): `rgba(245, 247, 250, 0.72)` — kick line
- No gold. No warm-orange sky. No purple. No mint.

## Composition (left-to-right, top-to-bottom)

1. **Background (full frame).** Deep navy `#0d1520` with two soft atmospheric radial-gradient glows — one in the top-left corner and one in the bottom-right — each in electric blue at approximately 10 percent opacity, fading to transparent. Subtle atmosphere, not neon.

2. **Eyebrow strip (top-left, ~5 percent from top and left edges).** Small tracked-caps monospaced label reading exactly: `KIZ ATX · FIELD NOTES · AUG 2026`. Type in electric blue `#4fc3f7`, monospaced (JetBrains Mono / IBM Plex Mono family), letter-spacing about 0.22em, all uppercase, small (about 22px at 1536×864 canvas scale).

3. **Mega headline (left-aligned, occupying the vertical center of the frame, left 55 percent of the width).** Three stacked lines in a massive condensed all-caps display type in the Anton / Impact / Bebas Neue family. Weight ultra-black. Letter-spacing tight (about -0.01em). Line-height very tight (about 0.9 — the lines nearly touch).
   - Line 1: `THE ROOM` — ivory `#f5f7fa`
   - Line 2: `DOUBLED` — ivory `#f5f7fa`
   - Line 3: `IN 4 MONTHS.` — electric blue `#4fc3f7`, with a subtle blue glow (soft 20–30px halo, same hue, low opacity) so the accent line reads as luminous rim-light against the navy.
   - Type dominates the left half of the frame. Reads instantly at thumbnail scale.

4. **Skyline anchor (photographic, lower third, spanning the full frame width).** A cinematic aerial photograph of the Austin downtown skyline over Lady Bird Lake, shot from the Zilker / Lou Neff vantage looking northeast at the towers. Blue-hour / early-night grade so the sky harmonizes with the navy background — the photograph blends seamlessly upward into the type field with no hard horizon line, feathered gently into the atmospheric glow. Illuminated windows in the towers read as small warm points but low-contrast (should NOT compete with the electric blue accent line above). The lake surface catches a soft electric-blue reflection. The skyline occupies roughly the bottom 25–30 percent of the frame — enough to ground the image as unmistakably Kiz ATX, but leaves the upper two-thirds for the massive type.

5. **Kick line (bottom-left, ~5 percent from bottom, italic serif).** A single short italic line reading exactly: `a sunday practica in east austin — here's what happened.` — ivory at 72 percent opacity `rgba(245,247,250,0.72)`, in a serif font (Georgia / IBM Plex Serif family), about 26px, italic, sentence case, dash rendered as an actual em-dash character is FORBIDDEN — use a comma or period instead.

6. **Right side (optional soft focal element).** The right 40 percent of the frame is dominated by the atmospheric navy field and the skyline continuing across. No text on the right side. This creates negative space that lets the left-aligned type breathe.

## Mood + technical notes

- Overall mood: cinematic, editorial, restrained, magnetic. Feels like an essay-opener, not an infographic.
- Grain: very subtle film grain acceptable, nothing heavy.
- Depth: the composition should feel layered — background atmosphere, skyline anchor, foreground type — with clear separation.
- Contrast: high enough that the ivory headline reads instantly at small size on a blog card thumbnail.
- Text accuracy: the exact strings below must be rendered verbatim, no autocorrect, no substitution.

## Exact text to render (verbatim)

- Eyebrow: `KIZ ATX · FIELD NOTES · AUG 2026`
- Headline line 1: `THE ROOM`
- Headline line 2: `DOUBLED`
- Headline line 3: `IN 4 MONTHS.`
- Kick line: `a sunday practica in east austin, here's what happened.`

## What to avoid

- No people, faces, or figures in the frame.
- No gold, no orange, no purple, no mint, no rose. Palette strictly navy + electric blue + ivory.
- No hand-drawn or illustrated feel. Photographic-atmospheric only.
- No literal dance-floor imagery, disco balls, spotlights, or generic dance icons.
- No numbered section markers (01/02/03) as decorative eyebrows.
- No slide-count pill (this is a blog cover, not a carousel slide).
- No "Swipe →" indicator (this is a blog cover, not a carousel slide).
- No em-dashes anywhere in the rendered text — use periods, colons, or commas.
- Do NOT describe Kizomba anywhere in the frame. The word "Kizomba" does not appear on this cover.

## Fallback plan

If the model produces mangled or misspelled text, re-run at bg-only (`ocos generate-bg`) and Charles will composite the typography layer in HTML for a screenshot pass. Background alone must still deliver the mood.
