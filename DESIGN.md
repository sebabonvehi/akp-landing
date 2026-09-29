---
name: Prestige Dental Atelier
colors:
  surface: '#00263a'
  surface-dim: '#00263a'
  surface-bright: '#0f4a68'
  surface-container-lowest: '#00131d'
  surface-container-low: '#001f30'
  surface-container: '#032c42'
  surface-container-high: '#06314a'
  surface-container-highest: '#0a3a55'
  on-surface: '#e6eef2'
  on-surface-variant: '#d0d0ce'
  inverse-surface: '#e6eef2'
  inverse-on-surface: '#00263a'
  outline: '#8fa3ae'
  outline-variant: '#1d4a63'
  surface-tint: '#4fa8db'
  primary: '#4fa8db'
  on-primary: '#00131d'
  primary-container: '#0085ca'
  on-primary-container: '#00131d'
  inverse-primary: '#00263a'
  secondary: '#b9d9eb'
  on-secondary: '#00263a'
  secondary-container: '#0a3a55'
  on-secondary-container: '#b9d9eb'
  tertiary: '#298fc2'
  on-tertiary: '#00131d'
  tertiary-container: '#0085ca'
  on-tertiary-container: '#00131d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b9d9eb'
  primary-fixed-dim: '#4fa8db'
  on-primary-fixed: '#00131d'
  on-primary-fixed-variant: '#00263a'
  secondary-fixed: '#dcecf5'
  secondary-fixed-dim: '#b9d9eb'
  on-secondary-fixed: '#00131d'
  on-secondary-fixed-variant: '#00263a'
  tertiary-fixed: '#b9d9eb'
  tertiary-fixed-dim: '#298fc2'
  on-tertiary-fixed: '#00131d'
  on-tertiary-fixed-variant: '#00263a'
  background: '#00263a'
  on-background: '#e6eef2'
  surface-variant: '#0a3a55'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: 0em
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: 0em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.06em
  label-md:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Geist
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 3rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses the intersection of biomedical engineering precision and haute joaillerie dental artistry. Designed for elite prosthodontists, cosmetic dentists, master ceramists, and high-volume CAD/CAM production teams, the interface projects absolute authority, surgical exactness, and artisanal mastery.

The visual direction combines dark-mode luxury minimalism with technical instrumentation:
- **Atmosphere:** Deep petróleo-blue matrix reminiscent of high-end optical scanning environments and luxury editorial lookbooks.
- **Materiality:** Azul tecnológico and celeste accents, micron-precise hair-thin borders, and low-diffuse ambient illumination that simulates studio lighting on ceramic restorations.
- **Emotional Impact:** Reassuring permanence, ultra-precise CAD/CAM fidelity, and exquisite craftsmanship for high-end anterior aesthetics, implant superstructures, and monolithic zirconia fabrication.

## Colors

The palette is taken from the AKP brand identity (logo isotype). Surfaces are built on Azul petróleo; the blues and celeste carry actions, accents and highlights.

**Brand palette (source of truth):**

| Name | Pantone | HEX | Usage |
|---|---|---|---|
| Azul petróleo | PANTONE 2965 C | `#00263A` | "AK" in the logo, text on light backgrounds, institutional color. Base of every dark surface. |
| Azul tecnológico | PANTONE 2173 C | `#0085CA` | "P" in the logo, details and accents: borders, active/pressed states, fills behind large or dark text. |
| Celeste | PANTONE 290 C | `#B9D9EB` | Light facets of the isotype. Hover states, secondary text, highlights on dark surfaces. |
| Azul intermedio | PANTONE 7689 C | `#298FC2` | Facet transitions. Hairline borders, glows, scan/3D indicators, gradients. |
| Gris perla | PANTONE Cool Gray 2 C | `#D0D0CE` (approx.) | Neutral. Secondary body text on dark surfaces. |

**Semantic roles (token → value):**

- **Primary / accent text (`gold` → `#4FA8DB` — Azul tecnológico, on-dark variant):** A lightened 2173 C used for labels, links, icons, focus rings and primary button fills. Derived because `#0085CA` does not reach AA as small text on petróleo.
- **Secondary (`champagne` → `#B9D9EB` — Celeste):** Hover fill for primary actions, secondary button text, active toggles.
- **Tertiary (`bronze` → `#0085CA` — Azul tecnológico):** Input/chip borders, pressed (active) button state, scrollbar thumb.
- **Neutral Core (`#00263A` — Azul petróleo):** The structural foundation, layered through graded petróleo surfaces:
  - Base Canvas: `#00131D` (deep petróleo)
  - Card / Surface Tier 1: `#00263A` (Azul petróleo)
  - Secondary button: `#032C42`
  - Hover / Elevation Tier 2: `#06314A`
  - Modal / Tier 3: `#0A3A55`
  - Input tray: `#001B29`
  - Surface Border: `rgba(41, 143, 194, 0.25)` (Azul intermedio filament)
  - Primary text: `#E6EEF2`; secondary text: `#D0D0CE` (Gris perla); captions: `#8FA3AE`
- **Functional State Accents:**
  - Success / Pass: `#78B159`
  - Alert: `#E08A4F`
  - Error: `#F07878` (lightened so error text passes AA on petróleo)
  - Optical Scan / 3D Sensor: `#298FC2`

**Contrast rules (WCAG AA, 4.5:1 for body text):**

- On dark surfaces (`#00263A` / `#00131D`) use `#E6EEF2`, `#D0D0CE`, `#B9D9EB`, `#4FA8DB` (≈5.9:1 / 7:1) or `#8FA3AE` (≈5.9:1) for text.
- Never use `#0085CA` (≈3.2:1 on petróleo, ≈4.0:1 on white) or `#298FC2` (≈4.3:1 on petróleo) for small body text; they are for borders, fills, icons and large display text only.
- Text on filled accents uses the canvas color `#00131D` (≈7:1 on `#4FA8DB`, ≈4.7:1 on `#0085CA`).
- On light/white backgrounds (print, email, OG images) use Azul petróleo `#00263A` for text and links (≈15:1).

## Typography

The typographic hierarchy juxtaposes classical restorative craftsmanship with modern micro-milling precision:

- **Display & Headings (`EB Garamond`):** Evokes anatomical mastery, dental aesthetic literature, and bespoke cosmetic artistry. Always set in natural sentence case or title case; never forced uppercase. Italics are reserved strictly for clinical substantiation, material classifications (e.g., *Multi-layer Gradient Zirconia*), or case notes.
- **Body (`Hanken Grotesk`):** Delivers clean optical legibility across complex work orders, lab prescription slips, patient anatomical records, and multi-step milling queues.
- **Labels & Technical Instrumentation (`Geist`):** Monospaced numeric behavior and monoline purity make it optimal for micrometric tolerances, VITA shade matching codes (e.g., `OM1`, `A2`, `3M2`), 5-axis toolpath coordinates, and STL/PLY file metadata. Always rendered with heightened letter-spacing for razor-sharp clarity.

## Layout & Spacing

The layout model reflects the structured discipline of CAD/CAM toolbars and cleanroom clinical workspaces:

- **Desktop (1440px+):** 12-column dynamic grid with `margin: 3rem` and `gutter: 1.5rem`. CAD viewers, 3D mesh inspection panels, and tooth arch maps lock to rigid 4px rhythmic multiples. Split-view configurations anchor technical parameters to a fixed 380px inspector panel on the right, allowing the 3D viewport or order stream to remain fluid.
- **Tablet (768px - 1023px):** 8-column layout with `margin: 2rem` and `gutter: 1rem`. Side panels fold into overlay sheets with high-contrast hair-line blue triggers.
- **Mobile (320px - 767px):** 4-column layout with `margin: 1rem` and `gutter: 0.75rem`. Complex dental charts collapse into sequential card flows with tooth-by-tooth swipe cards.
- **Spacing Rhythm:** Generous external margins give the brand breathing room, contrasting tightly spaced, data-dense internal metrics where sub-millimeter tolerances are detailed.

## Elevation & Depth

Visual hierarchy uses tonal surface containment, micron-grade metallic borders, and restrained cool blue luminescence rather than heavy drop shadows:

- **Level 0 (Floor/Viewport Canvas):** `#00131D`. Recessed, non-reflective backdrop for 3D model orientation and panoramic X-ray evaluation.
- **Level 1 (Clinical Cards & Work Order Surfaces):** `#00263A` outlined with `1px solid rgba(41, 143, 194, 0.14)`. No shadow; depth is marked purely by edge contrast.
- **Level 2 (Active Inspections, Flyouts, Toolbars):** `#06314A` with `1px solid rgba(41, 143, 194, 0.35)` and a subtle ambient blue glow: `0 8px 32px rgba(0, 0, 0, 0.65), 0 0 16px rgba(41, 143, 194, 0.05)`.
- **Level 3 (Modals, Shade Calibration Overlays):** `#0A3A55` with `1px solid #4FA8DB` hair-lines and heavy backdrop occlusion: `backdrop-filter: blur(12px) brightness(0.7)`.

## Shapes

The interface adopts a **Soft (Level 1)** geometry (`0.25rem` / `4px` base radius). 

Dental CAD software, precision titanium abutment milling, and diamond-bur micro-carving mandate exactness; rounded, playful bubbly corners are strictly avoided. Buttons, inputs, tab indicators, and data chips use precise 4px corners, evoking milled zirconia blocks, glass ceramic ingots, and surgical cassette hardware. Only circular tooth position indicators (Universal or FDI notation) retain full `rounded-full` curvature to match anatomical numbering standards.

## Components

### Buttons
- **Primary (Master Lab Action / Submit Case):** Solid Azul tecnológico (on-dark) background (`#4FA8DB`), deep petróleo text (`#00131D`), font weight 600, uppercase letter-spaced `Geist` label, 4px border radius. Hover: `#B9D9EB` with subtle blue aura. Active: `#0085CA`.
- **Secondary (Inspect STL / Adjust Margin):** Matte petróleo surface (`#032C42`), 1px perimeter border (`rgba(41, 143, 194, 0.4)`), celeste typography (`#B9D9EB`).
- **Ghost / Tertiary (Export Diagnostics):** Transparent background, pale celeste text (`rgba(185, 217, 235, 0.8)`), no outline until hover, which triggers `rgba(41, 143, 194, 0.2)` background fill.

### Input Fields & Select Menus
- **State Styling:** Deep petróleo input tray (`#001B29`), 1px muted blue border (`rgba(0, 133, 202, 0.35)`), crisp white text (`#FFFFFF`), micro-label in uppercase accent-blue above the input.
- **Focus State:** 1px solid `#4FA8DB` with `0 0 8px rgba(41, 143, 194, 0.2)` edge illumination. Never use generic browser focus rings.

### Cards & Work Order Tiles
- Encased in `#00263A` with a razor-thin blue header divider (`rgba(41, 143, 194, 0.12)`).
- Top right quadrant dedicated to case metadata (e.g., `CASE #9482`, `MAT: KATANA™ HTML`) rendered in `label-sm` monospaced font.
- Dynamic status stripe on card edge indicating lab stage: Intake, CAD Design, Sintering, Hand Characterization, Final Glaze, QC Passed.

### Chips & Badges
- Compact rectangular forms (radius: 4px).
- **Shade Chips (e.g., A1, B1, BL2):** Split visual layout showing true digital color swatch alongside technical alphanumeric code.
- **Status Chips:** Matte black surface with a 1px colored micro-ring and 6px illuminated status jewel (Emerald for Approved, Blue for Ceramist In-Progress, Ruby for Remake/Adjustment Required).

### Tooth Selector & Odontogram
- High-contrast anatomical arch mapping interface.
- Unselected teeth delineated by muted petróleo contours (`#1D4A63`). Selected restorations illuminate with a rich celeste-to-blue gradient and active restoration category tags (e.g., `#11 - Veneer`, `#14 - Screw-Retained Crown`).

### Checkboxes & Radios
- Square 16px frames with 2px corner radius. Unchecked: `#00263A` frame with `#1D4A63` border. Checked: `#4FA8DB` fill with deep petróleo checkmark glyph.