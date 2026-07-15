# artifacts-hub

Self-contained single-file HTML artifacts, published under the Ogarocious ecosystem.

**Live subdomains** (mapped via DigitalOcean App Platform Static Sites, DNS on Hostinger):

| Subdomain | Source dir | Purpose |
|---|---|---|
| `slides.ogarocious.com` | `/slides` | Slide decks, manifestos, showcase pieces |
| `proposals.ogarocious.com` | `/proposals` | Client proposals, scope docs |
| `mockups.ogarocious.com` | `/mockups` | Design mockups, throwaway prototypes |
| `posts.ogarocious.com` | `/posts` | Long-form essays, notes |

Each subdomain is a separate App Platform Static Site pointed at its subfolder in this repo. One git push, all sites redeploy automatically.

## Adding a new artifact

1. Pick the subdomain (slides / proposals / mockups / posts)
2. Create `<subdomain>/<slug>/index.html` from `template/template.html`
3. Fill all `{{PLACEHOLDER}}` slots (title, description, canonical URL, headline, sections, OG image URL, date)
4. Optional: drop a custom `og.png` (1200×630) in the artifact folder and update the `og:image` meta tag
5. `git commit -am "add <slug>"` → `git push`
6. Live at `https://<subdomain>.ogarocious.com/<slug>/` in ~30 seconds

## Folder shape

```
artifacts-hub/
├── slides/
│   ├── _shared/                    ← favicon + og-default + apple-touch-icon
│   │   ├── favicon.svg
│   │   ├── og-default.svg          (convert to og-default.png before ship)
│   │   └── apple-touch-icon.png    (TODO: add 180x180 PNG)
│   ├── steal-this/
│   │   └── index.html              ← the artifact (self-contained)
│   └── <next-slide>/
├── proposals/
├── mockups/
├── posts/
├── template/
│   └── template.html               ← source template, not deployed
└── README.md
```

Each subdomain has its own `_shared/` (duplicated across subdomains — small cost, avoids cross-subdomain asset dependency).

## Design system

All artifacts use the **Diaspora Modern** palette from `ogarocious_portfolio/app/frontend/src/theme/theme.ts`:

- Signature: terracotta `#d4552b`
- Base: warm espresso `#0f0b08` (gradient body)
- Text: warm ivory `#f5eee0` (with 90/72/55% dimmed hierarchy)
- Tech pillar accent: slate teal `#7ba4a5` (for Process, Anatomy, code, kbd)
- Typeface: Rubik (display + body), JetBrains Mono (code + detail)

Rules encoded in `template/template.html` (see top-of-file comment): no em dashes, no tracked-caps eyebrows on every section, no gradient text, solid ivory hero, numeric markers only for real sequences.

## Meta / OG convention

Every artifact ships with a full meta stack: canonical URL, Open Graph, Twitter Card, favicon, apple-touch-icon, Schema.org Article JSON-LD.

**OG image sourcing**: hybrid.
- Default: `https://<subdomain>.ogarocious.com/_shared/og-default.png` (brand-consistent, reused across artifacts)
- Per-artifact override: drop `og.png` (1200×630) in the artifact folder, update `og:image` meta tag to `.../og.png`

## Deployment

Auto-deploys via DigitalOcean App Platform Static Sites on every push to `main`.

Each subdomain = one App Platform Static Site, `source_dir` set to the subfolder (`/slides`, `/proposals`, etc.). No build command needed (pure static HTML).

## License

MIT. Steal freely.
