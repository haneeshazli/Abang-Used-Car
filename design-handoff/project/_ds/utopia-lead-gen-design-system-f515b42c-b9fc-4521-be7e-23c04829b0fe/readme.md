# Utopia Lead-Gen Design System

**High-converting mobile landing pages** for the Utopia Group portfolio — Malaysian service & rental SMEs (aircond, scaffolding, jaundice-lamp rental, catering, elderly care, co-living, motorbike rental…) whose single goal is to get a visitor to tap **WhatsApp**.

This system distils the pattern those ~18 Wix sites share into one themable component set, optimised for a **390px mobile viewport** first.

## Sources
- `Utopia/Utopia-Group-Design-Systems.md` — per-site colour, type, button, card audit of 22 sites (as of 2026-10-02).
- `Utopia/Utopia Group Company Links.md` — portfolio list (source: https://utopiagroup.com.my/about).
- `Utopia/utopia-mobile-pdfs/*.pdf` — full-page 390px iPhone captures of every site (raster, produced by `Utopia/utopia_mobile_pdfs.py`). Read: Lampu Jaundice, Encik Beku, Utopia Co-Living, Merry Elderly Care, Kak Kenduri, Scaffolding Malaysia.
- Live sites (not accessed): aircondmalaysia.my, lampujaundice.my, scaffolding.my, katering.my, elderlycare.my, utopiacoliving.com, ibnusinacare.com.my, sewamotor.my, pilatesreformer.my, cuttree.my, etc.

**Scope note:** the AI-product sites (SlipMatch, RecurPay, GetBill, Kreativ) and the Utopia Group corporate site use a different SaaS language (Plus Jakarta Sans, fuchsia CTA) and are **not** covered here. Glass House Events (Squarespace, black/gold) is also out of scope.

---

## CONTENT FUNDAMENTALS
- **Language:** Bahasa Malaysia first (most sites), English for Merry Elderly Care / Co-Living / Gula Melaka EN. Mixed "Manglish" is normal: *"Whatsapp Now"*, *"Order Sekarang"*, *"Rent-to-Own"*, *"Butiran Lanjut"*.
- **Voice:** direct, salesy, warm. Speaks to **you/anda**, company is **kami/we** ("Kami akan balas dalam masa 5 minit").
- **H1 formula:** *[Search keyword] + [price hook]*: "Sewa Scaffolding Malaysia Hanya RM10/set!", "Pakej Katering Dari RM10 Seorang", "Beli Aircond Malaysia Termurah!". The keyword is SEO-exact and repeated in section titles ("Senarai 150 Lokasi Sewa Scaffolding Malaysia").
- **Casing:** Title Case For Headlines; sentence case body. Prices `RM159 /sebulan`, `RM21/pax`, `RM2,500+`. Phones written `6010-399 9733` (country code, no +).
- **Proof everywhere:** big counts ("Lebih 8,300 Projek Selesai", "Home to 8,340 tenants", "4,520+ Kenduri"), years ("14 Tahun Pengalaman"), Google ★4.9, KKM / SIRIM / MDA certification logos.
- **Urgency & scarcity:** "Stok lampu kami terhad kepada 13 unit", "Usually 2-3 Spot Available Every Month", "Penghantaran 4 Jam Dijamin Sampai", "Tempahan Dalam 5 Minit".
- **Objection killers:** "Harga Telus", "Tiada caj tersembunyi", myth-busting ("Jangan Percaya Mitos Rawatan!"), us-vs-them price table.
- **Three-step booking:** always 1 WhatsApp Kami → 2 Beri maklumat / quotation → 3 Selesai (bayar online bank-in).
- **Emoji:** essentially none in copy; a ★ or ⭐ occasionally in promo bars and a 🇲🇾 flag. Unicode stars ★★★★★ for ratings.
- **Highlights:** the key phrase in each headline is coloured (accent) or neon-marker highlighted (Merry), occasionally underlined.

## VISUAL FOUNDATIONS
- **Colour:** white page; one brand primary (navy/blue/teal/plum per site) for headings & bands; one hot accent (mostly **orange #FC5C06**) for keywords and price pills; **WhatsApp green #24CC63** reserved exclusively for the CTA and the phone number. Pale tints (cream #FFFCE1, sky #D0E8FF, lavender #ECC8FF) for alternate bands. Footers black.
- **Theming:** `data-theme="lampu|encik-beku|scaffolding|kenduri|merry|coliving|ibnusina|pilates|potongpokok|revbike"` swaps only `--brand-*`; green CTA, type, radii stay fixed.
- **Type:** Wix Madefor Display 800 for headlines and prices, Wix Madefor Text 400/700 body. Mobile: H1 30, section 26, card 21, body 15, small 13, micro 11. Tight 1.18 line-height on headlines; centred.
- **Layout:** single centred column, 20px gutters, full-bleed bands ~48px vertical padding stacked: Hero → USPs → products/packages → steps → gallery → reviews → locations → closing CTA → footer. A **WhatsApp CTA + phone** closes nearly every band.
- **Backgrounds:** flat colour bands; soft vertical gradients (tint → white, purple → darker purple); occasional wave / leaf SVG dividers and blurred faded photo behind hero text. No textures, no grain.
- **Imagery:** bright, high-key, warm. Product cut-outs on yellow/blue blobs, smiling staff cut-outs in uniform pointing/thumbs-up, dense grids of real job / customer photos (often watermarked with the logo). Circular food crops with gold rings.
- **Cards:** white, `0 1px 4px rgba(0,0,0,.21–.6)` shadow, radius 5–20px; bordered variants (1px light grey product tiles, 3px brand-colour USP boxes, 3px black hero picker). No coloured left-border cards.
- **Corner radii:** 5 (card buttons), **7 (WhatsApp)**, 10, 15, 20, 30, 50 (price pills).
- **Buttons:** WhatsApp = green, white logo + label, 7px radius, ~230×50. Secondary = 2px outline. Price = orange pill with soft drop shadow.
- **Hover / press:** Wix default `all .2s ease`; WhatsApp inverts to white bg + green label (Co-Living: turns yellow). Outline fills solid. Pills drop their shadow and nudge 1px. No scale/bounce.
- **Animation:** minimal — Wix fade/slide-in reveals on scroll; carousels with circular arrow buttons. Nothing decorative.
- **Transparency / blur:** sticky header at ~88–96% white; hero picker card 85–92% white over photo. No glassmorphism.
- **Fixed elements:** floating round WhatsApp bubble bottom-right (white, green mark); header sometimes sticky.
- **Badges:** scalloped circular price seals ("SEWA RM200", "#1 TERMURAH"), "BEST SELLER" stamps, starburst yellow price badges. Our `PriceBadge` is a simplified dashed-ring version.

## ICONOGRAPHY
- Source sites use **mixed raster PNG icons**: flat line icons in the brand colour (Lampu), 3D/emoji-like illustrated icons (Co-Living), filled circle glyphs (Encik Beku), orange pin markers in location lists. No icon font.
- These PNGs were not extractable, so this system ships **Lucide 0.460** (2px stroke, round caps) as the UI icon set and **Simple Icons 13.21** for brand marks (WhatsApp, Google, TikTok) — copied as SVG into `assets/icons/` and embedded via `components/core/iconData.js` → `<Icon name>`. ⚠️ Substitution.
- The **WhatsApp glyph** appears on every CTA and the floating bubble. Map-pin icons (accent colour) prefix every location link; ✓ discs mark included package items, ⊕ discs mark add-ons.
- Emoji: not used as icons. Unicode ★ for ratings in text only.

## Logos
No logo files were provided (captures are raster screenshots). Wordmarks are rendered in plain Wix Madefor Display type via `SiteHeader name/nameAccent`. Supply real logos as `logoSrc`.

---

## Index
- `styles.css` — entry; imports `tokens/fonts.css, colors.css, typography.css, spacing.css, themes.css, base.css`
- `fonts/` — Wix Madefor Display / Text (variable woff2, latin, from Google Fonts)
- `assets/icons/` — Lucide + Simple Icons SVGs · `assets/images/` — crops from the mobile captures (lampu-hero, scaffold-hero, merry-hero, room-1..4, food-1..4)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below), one `*.card.html` per folder
- `ui_kits/lead-gen/` — 4 mobile page recreations (Lampu Jaundice, Scaffolding, Katering, Merry Care)
- `SKILL.md` — Agent Skill entry · `thumbnail.html` — project tile

## Components
- **core/** Icon, Highlight
- **cta/** WhatsAppButton, WhatsAppCTA, FloatingWhatsApp, PricePill, OutlineButton
- **layout/** PromoBar, SiteHeader, Section, SectionHeading, SiteFooter
- **sections/** Hero, LeadPickerCard, TrustStrip
- **cards/** FeatureCard, StepCard, ProductCard, PackageCard, ReviewCard, StatBlock, PriceBadge
- **lists/** LocationList, PhotoGrid, FAQItem, ComparisonTable, PillTabs

No component library existed in the source (Wix sites); this inventory was derived from the recurring blocks in the mobile captures. **Intentional additions:** `Icon` (wrapper for the substituted icon set), `Highlight` (encodes the two-tone headline rule).
