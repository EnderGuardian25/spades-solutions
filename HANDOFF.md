# Spades Solutions — Website Handoff

**Project:** Marketing website for **Spades Solutions** — a t-shirt printing & logistics startup.
**Status:** v1 build complete (3 pages, static). Pending real assets + content + deployment.
**Location:** `D:\Bistec\spades-solutions\` (deliberately kept **outside** the `bistec-studio` git repo at `D:\Bistec\designer`).
**Stack:** Plain HTML / CSS / JS — no build step. Host the folder anywhere (Netlify, GitHub Pages, any static host).
**Instagram:** https://www.instagram.com/spades_solutions_/

---

## 1. Brief & confirmed decisions

| Area | Decision |
|---|---|
| Company name | **Spades Solutions** |
| Primary goal | **Hybrid** — brand presence/portfolio + quote requests |
| Pages at launch | **Home**, **Services**, **Contact / Quote** |
| Design vibe | **Clean & professional** (corporate-friendly, not dark streetwear) |
| Target customer | **All segments** — businesses/corporates, events & sports teams, individuals |
| Order flow | **Contact form + WhatsApp button** |
| Tech / hosting | **Plain HTML/CSS/JS**, no build step |
| Brand colors | **Extracted from the logo** (navy + silver-blue on white) |
| Services | Reduced to **2 core services** (see §4) with an accordion ("dropdown") layout |
| WhatsApp number | **Placeholder** — client to provide (`940000000000` used as stand-in) |

### Logo
Client supplied a logo: an ornate **spade** icon + serif Roman-capital wordmark "SPADES SOLUTIONS" inside a double-ring circle, deep navy on white. The mark has been **recreated as inline SVG** (`.crest` / `.big-spade`) so it scales crisply and themes with CSS. The official PNG/SVG can be dropped in later if preferred.

---

## 2. Design direction — "The House of Spades"

A **refined, heraldic-editorial** identity rather than a generic print-shop look. The spade reads as a crest/seal, paired with engraved Roman-capital typography on warm paper. Premium and trustworthy for corporates, confident enough for event/streetwear crowds.

Built using three design skills in combination:
- **frontend-design** → bold committed aesthetic + atmosphere (paper grain, radial glow, rotating seal)
- **bencium-innovative-ux-designer** → restraint, material honesty, characterful non-AI fonts
- **ui-ux-pro-max** → accessibility, 44px touch targets, motion timing, form UX, semantic tokens

### Color tokens (defined in `:root` of `assets/css/styles.css`)
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0E1B2C` | Headings / footer bg |
| `--navy` | `#1C3A5E` | Primary brand, buttons, dark bands |
| `--steel` | `#8A9DB5` | Accents, hairlines, icons |
| `--paper` | `#F6F4EF` | Warm off-white page background |
| `--surface` | `#FFFFFF` | Cards |
| `--muted` | `#5C6B80` | Secondary text |
| `--gold` | `#B08D57` | Sparing metallic accent (spade motif, focus rings, dividers) |

### Typography (Google Fonts, loaded via `<link>`)
- **Fraunces** — display headlines (characterful premium serif)
- **Cinzel** — uppercase eyebrows + logo wordmark (echoes the engraved Roman caps in the logo)
- **Hanken Grotesk** — body & UI (clean, humanist — deliberately not Inter/Roboto)

### Motion
Staggered scroll fade-ups (IntersectionObserver), card hover lift, header shrink on scroll, slow-rotating hero seal — all gated by `prefers-reduced-motion`.

---

## 3. File structure
```
spades-solutions/
├── index.html          # Home
├── services.html       # Services (2 accordions: Printing / Logistics)
├── contact.html        # Contact + quote form + WhatsApp side panel
├── package.json        # dev/start scripts (npx serve . -l 3002)
├── README.md           # short readme + placeholder table
├── HANDOFF.md          # this file
└── assets/
    ├── css/styles.css  # entire design system (tokens at top)
    └── js/main.js      # nav toggle, scroll header, reveals, accordions, form validation
```

---

## 4. Page-by-page contents

### Home (`index.html`)
- Sticky header (SVG crest + wordmark, Home/Services/Contact, "Get a Quote" CTA, mobile hamburger)
- **Hero** — eyebrow, Fraunces headline "Wear your brand, delivered with precision.", dual CTA (Request a quote + WhatsApp), rotating heraldic seal visual
- **Audience strip** — Businesses & Corporates · Events & Sports Teams · Individuals
- **Services preview** — 2 cards (01 Custom Apparel & Printing, 02 Logistics & Delivery) linking into Services
- **How it works** — 4 steps (brief → sample → produce → deliver)
- **Selected work** — placeholder gallery grid (swap for real product photos)
- **Navy CTA band** + footer

### Services (`services.html`)
**Key requirement met:** the 2 services render as **accessible accordions** (the "dropdown menu or whatever integrates seamlessly"). Single-open behavior, `aria-expanded`, smooth grid-rows height animation.
1. **Custom Apparel & Printing** (`#printing`, open by default) → reveals: Bulk/Mass Printing, Embroidery, Branded Merchandise, Design Support + meta (MOQ from 1 piece, 3–7 day turnaround)
2. **Logistics & Delivery** (`#logistics`) → reveals: Island-wide Delivery, Bulk Fulfilment, Order Tracking, Careful Packaging + meta
- Process steps + CTA band + footer

> **Services interpretation (assumption — confirm with client):** "2 services" = **Printing** (with mass-printing + embroidery as sub-types) and **Logistics**, matching "t-shirt printing **and logistics** company." The earlier 3-item selection (mass printing, embroidery, logistics) is preserved as sub-items under these two. Easy to restructure if wrong.

### Contact (`contact.html`)
- Quote **form**: name*, email*, phone, company, service needed* (select), quantity (select), message* — inline validation on blur + submit, accessible errors, demo success state
- **Side panel**: WhatsApp CTA card (dark), Instagram + email + hours, "Why Spades?" bullets
- Form currently shows a demo success message — **not yet wired to a backend** (see §5)

---

## 5. ⚠️ Placeholders to replace before launch

| Placeholder | Where | Replace with |
|---|---|---|
| `940000000000` | all 3 pages (WhatsApp `wa.me` links + pre-filled message) | Real WhatsApp number — country code, **no `+`** (e.g. `9477XXXXXXX`) |
| `hello@spadessolutions.com` | `contact.html` | Real email address |
| Quote form submit | `assets/js/main.js` (`#quote-form` handler) | Wire to **Formspree / email / backend** — currently a simulated 0.9s success |
| Gallery tiles | `index.html` "Selected work" | Real product photos (layout ready; tiles support `.tall` for span-2) |
| Official logo | inline SVG `.crest` in all headers/footers | Optional — drop in supplied PNG/SVG if preferred over recreated mark |
| Services MOQ / turnaround / hours | `services.html` meta rows, `contact.html` hours | Confirm real figures with client |

Search the project for `940000000000` and `TODO` to find every spot.

---

## 6. Accessibility & responsive notes
- WCAG-minded: visible focus rings (gold), 48px button min-height, `aria-expanded`/`aria-controls` on nav + accordions, `aria-live` form status, semantic headings, alt-free decorative SVGs marked `aria-hidden`.
- Mobile-first responsive: hamburger nav < 900px, single-column stacks, accordions and grids collapse. Breakpoints at 900px / 560px.
- Respects `prefers-reduced-motion` (disables reveals + seal spin).
- **Not yet tested in a live browser** — see §7.

---

## 7. ⚠️ Preview/verification blocker (important)
The Claude Preview tool (`preview_start`) repeatedly **anchored to the parent Next.js project** at `D:\Bistec\designer` (served "BISTEC" on port 3001) and ignored the passed `workingDirectory`, even after adding a local `package.json`. So the static site has **not yet been visually verified** in-browser.

**To preview locally, from `D:\Bistec\spades-solutions\` run one of:**
```bash
npx --yes serve . -l 3002      # then open http://localhost:3002
# or
python -m http.server 3002     # then open http://localhost:3002
```
Or simply open `index.html` directly in a browser (Google Fonts need internet).

**Recommended verification pass once served:** check console is clean, test the Services accordions (open/close, single-open), submit the contact form empty (validation) then valid (success), and resize to 375px for mobile nav.

---

## 8. Suggested next steps
1. Provide: WhatsApp number, email, real product photos, confirmed MOQ/turnaround/hours.
2. Confirm the **2-service structure** (§4 assumption).
3. Wire the contact form to Formspree (fastest) or an email/backend endpoint.
4. Preview & QA (§7), then deploy to a static host + connect domain.
5. Nice-to-haves: favicon/social share image (use the spade crest), Google Analytics, sitemap/robots, optional dark section variants.
