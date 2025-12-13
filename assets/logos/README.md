# Brand Logo Assets

Centralized repository for Trionfo Holding Co., Inc. subsidiary brand logos. This directory contains optimized assets for web, mobile, print, and apparel applications.

---

## Directory Structure

```
/assets/logos/
├── /hypnotic-lemons/
│   ├── /png/                          # Raster format for web/app
│   │   └── hypnotic-lemons-logo-primary.png
│   ├── /svg/                          # Vector format for scalability
│   │   └── hypnotic-lemons-logo-primary.svg
│   └── /preview/                      # Reference only (black background)
│       └── hypnotic-lemons-logo-preview.png
├── /terra-trionfo/
│   ├── /png/                          # Raster format (transparent & textured)
│   │   ├── terra-trionfo-seal-transparent.png
│   │   └── terra-trionfo-seal-textured.png
│   ├── /svg/                          # Vector format (scalable seal artwork)
│   │   └── terra-trionfo-seal.svg
│   └── /textured/                     # Original textured background version
│       └── terra-trionfo-seal-textured.png
└── README.md                          # This file
```

---

## Hypnotic Lemons Logo

**Files:**
- `hypnotic-lemons-logo-primary.png` — Transparent PNG, web-optimized
- `hypnotic-lemons-logo-primary.svg` — Scalable vector, production-ready
- `hypnotic-lemons-logo-preview.png` — Black background reference (internal use only)

**Specifications:**
- **Format:** PNG (transparent) and SVG
- **Colors:** Original brand colors preserved
- **Background:** Transparent (primary versions)
- **Use Cases:**
  - Web: Primary PNG at 1x and 2x resolution (72 DPI, ~100-300 KB max per size)
  - Mobile Apps: SVG for retina displays, PNG fallback (48-192 px)
  - Apparel: SVG for high-fidelity printing
  - Print: SVG recommended for scalability
- **Guidelines:**
  - Always use transparent version for web and apparel
  - Preview version is for internal reference only
  - Minimum size: 48 px (mobile), 100 px (web)
  - Maximum padding: 20% of logo height around all sides

---

## Terra Trionfo Logo

**Files:**
- `terra-trionfo-seal-transparent.png` — Transparent PNG, web-optimized
- `terra-trionfo-seal-textured.png` — Original textured background (reference & print)
- `terra-trionfo-seal.svg` — Scalable vector seal artwork

**Specifications:**
- **Format:** PNG (transparent and textured) and SVG
- **Colors:** Vintage engraving colors with full fidelity
- **Background:** Transparent (web version) and textured (print/reference version)
- **Detail Level:** Preserves fine engraving detail from original artwork
- **Use Cases:**
  - Web: Transparent PNG (primary), SVG fallback for crisp scaling
  - Mobile Apps: SVG at various scales (48-256 px), PNG for rapid loading
  - Print: SVG recommended, textured PNG for high-resolution output (300+ DPI)
  - Apparel Mockups: Textured version for brand preview, transparent for production
- **Guidelines:**
  - Use transparent version for web and modern applications
  - Textured version ideal for print and brand presentations
  - Maintain 1:1 aspect ratio (square seal format)
  - Minimum size: 48 px (mobile), 100 px (web)
  - Maximum padding: 15% of seal diameter around all sides
  - Preserve vintage engraving aesthetic in all applications

---

## Format Selection Guide

### When to Use PNG

**Transparent PNG** (`*-transparent.png`, `*-primary.png`):
- ✅ Web pages and digital properties
- ✅ Mobile app icons and graphics
- ✅ Email and digital marketing
- ✅ Apparel design mockups
- ✅ Quick loading on standard networks

**Textured PNG** (`*-textured.png`):
- ✅ Print materials (brochures, business cards, letterhead)
- ✅ Brand heritage presentations
- ✅ Vintage-styled marketing
- ✅ High-resolution mockups
- ✅ Reference and approval versions

### When to Use SVG

- ✅ **Responsive Web Design** — scales infinitely without quality loss
- ✅ **Apparel/Print Production** — vector-based design software compatibility
- ✅ **Animation & Interaction** — enables CSS/JavaScript interactivity
- ✅ **Accessibility** — native text and semantic markup support
- ✅ **Performance** — smallest file sizes for complex logos
- ✅ **Brand Applications** — design specifications and file sharing with partners

---

## Usage by Context

### Web Applications

**Primary Approach:**
1. Use SVG for responsive, scalable logos
2. PNG fallback for older browsers (Hypnotic Lemons transparent, Terra Trionfo transparent)
3. Serve at 1x (72 DPI) and 2x (144 DPI) for retina displays

**Example Implementation:**
```html
<picture>
  <source srcset="logo.svg" type="image/svg+xml">
  <img src="logo-primary.png" alt="Brand Logo" width="200" height="auto">
</picture>
```

### Mobile Applications

**iOS & Android:**
- Use SVG for all vector-based UI elements
- PNG versions (48px, 96px, 192px) for rapid rendering
- Transparent backgrounds for consistent UI integration
- Ensure accessibility with proper alt text and labels

### Print & Apparel

**Print Production:**
- Use SVG exclusively (infinite resolution, CMYK conversion ready)
- PNG versions at 300+ DPI for final output proofs
- Textured PNG for heritage/vintage applications
- Color management: verify RGB-to-CMYK conversion with printer

**Apparel Mockups:**
- Transparent PNG for design visualization
- SVG for print preparation files
- Textured PNG for brand presentation mockups

### Email & Digital Marketing

- PNG transparent (optimized for size, ~50-100 KB max)
- Serve via CDN for fast loading
- Include descriptive alt text for accessibility

---

## Optimization Standards

### PNG Optimization
- **Tool:** TinyPNG, ImageOptim, or equivalent
- **Target:** 50-100 KB per image (web), 100-300 KB (print-ready)
- **Compression:** Lossless PNG-8 or PNG-24 with transparency
- **Resolution:** 72 DPI for web, 300 DPI for print

### SVG Optimization
- **Tool:** SVGO, Adobe Illustrator "Save for Web"
- **Target:** 5-50 KB per file
- **Compression:** GZIP-compatible, no inline raster images
- **Validation:** Ensure compatibility with production systems

### Retina Display Support
- PNG: Create 1x and 2x versions
- SVG: Automatically scales to device pixel ratio
- Naming: `logo.png` (1x) and `logo@2x.png` (2x) for backward compatibility

---

## Color & Background Guidelines

### Hypnotic Lemons

**Brand Colors:**
- Primary: [Original brand yellow/lime]
- Secondary: [Original brand accent colors]

**Background Requirements:**
- Web/Digital: Transparent background (primary)
- Print: White or brand-appropriate background
- Apparel: Transparent background on dark or light garments
- Dark backgrounds: Use white or light version if available

### Terra Trionfo

**Brand Colors:**
- Seal vintage engraving colors preserved as original
- Gold/tan accents maintained from artwork
- Brown/sepia tones for heritage aesthetic

**Background Requirements:**
- Web/Digital: Transparent background (primary)
- Print/Heritage: Textured background (original version)
- Apparel: Transparent on dark/light depending on color scheme
- Paper: Cream or natural paper background recommended for vintage feel

---

## File Naming Convention

All logo assets follow this naming standard:

```
{subsidiary}-{type}-{variant}.{format}
```

**Examples:**
- `hypnotic-lemons-logo-primary.png`
- `hypnotic-lemons-logo-primary.svg`
- `hypnotic-lemons-logo-preview.png`
- `terra-trionfo-seal-transparent.png`
- `terra-trionfo-seal-textured.png`
- `terra-trionfo-seal.svg`

---

## Asset Delivery & Version Control

### Web Integration

**Public/CDN Path:**
```
/public/brand/subsidiaries/hypnotic-lemons.svg
/public/brand/subsidiaries/terra-trionfo.svg
```

**Asset Directory Path (Archive):**
```
/assets/logos/hypnotic-lemons/svg/hypnotic-lemons-logo-primary.svg
/assets/logos/terra-trionfo/svg/terra-trionfo-seal.svg
```

### Brand Partner Distribution

When sharing with partners, designers, or print vendors:
1. Provide SVG version as primary format
2. Include PNG transparent for quick mockups
3. Include textured PNG for heritage/reference purposes
4. Attach this README with usage guidelines
5. Include color specifications and export requirements

### Version Updates

If logos are revised:
1. Archive old versions with date suffix: `logo-v1-2025-01-01.svg`
2. Update primary files without version suffix
3. Document changes in `CHANGELOG.md` (optional)
4. Notify all stakeholders of new versions

---

## Quality Assurance Checklist

Before deploying logos to production:

- [ ] PNG files are fully transparent (no accidental backgrounds)
- [ ] SVG files are optimized and properly formatted
- [ ] Aspect ratios preserved across all formats
- [ ] Colors match brand specifications
- [ ] File sizes meet performance targets
- [ ] Logos tested at multiple sizes (48px, 100px, 200px, 400px)
- [ ] Logos tested on light and dark backgrounds
- [ ] Mobile rendering verified on iOS and Android
- [ ] Print output approved at 300+ DPI
- [ ] Accessibility alt text prepared and documented

---

## Legal & Brand Guidelines

- **Ownership:** Trionfo Holding Co., Inc.
- **Usage Rights:** Internal business use and authorized partner applications
- **Attribution:** Include copyright notice: "© Trionfo Holding Co., Inc. All rights reserved."
- **Modifications:** Do not alter proportions, colors, or visual identity without formal approval
- **Trademark:** Logo assets are protected intellectual property

---

## Support & Questions

For brand asset questions, modifications, or requests:
- **Contact:** dylan@trionfoholdings.com
- **Subject:** Brand Logo Asset Request

---

**Last Updated:** December 13, 2025  
**Next Review:** Quarterly brand asset audit
