# Spades Solutions — Website

Static marketing site for **Spades Solutions** (custom apparel, printing, embroidery & logistics).
Plain HTML / CSS / JS — no build step. Open `index.html` or host the folder anywhere.

## Structure
```
spades-solutions/
├── index.html        # Home
├── services.html     # Services (accordion: Printing / Logistics)
├── contact.html      # Contact + quote form + WhatsApp
└── assets/
    ├── css/styles.css
    └── js/main.js
```

## Design system
- **Colors:** navy `#1C3A5E`, ink `#0E1B2C`, steel `#8A9DB5`, paper `#F6F4EF`, gold accent `#B08D57`
- **Fonts:** Fraunces (display) · Cinzel (eyebrows/wordmark) · Hanken Grotesk (body)
- All tokens live in `:root` at the top of `styles.css` — change them once to rebrand.

## ⚠️ Placeholders to fill before launch
Search the project for these and replace:

| Placeholder | Where | Replace with |
|---|---|---|
| `940000000000` | all pages (WhatsApp links) | Real WhatsApp number — country code, no `+` (e.g. `9477XXXXXXX`) |
| `hello@spadessolutions.com` | `contact.html` | Real email address |
| Quote form submit | `assets/js/main.js` | Wire to Formspree / email / backend (currently a demo success message) |
| Gallery tiles | `index.html` | Swap placeholder spade tiles for real product photos |
| Official logo | inline SVG `.crest` | Optional — drop in the supplied PNG/SVG if preferred over the recreated mark |

## Local preview
Just open the files, or run a static server:
```
npx serve .
```
