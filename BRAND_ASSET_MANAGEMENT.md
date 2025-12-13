# Brand Asset Management Guide

This document outlines best practices for managing, integrating, and distributing brand assets for Trionfo Holding Co., Inc. and its subsidiaries.

---

## Directory Overview

```
/assets/
├── /logos/
│   ├── /hypnotic-lemons/
│   │   ├── /png/                    Transparent PNG (web-optimized)
│   │   ├── /svg/                    Scalable vector (primary format)
│   │   └── /preview/                Reference only (internal use)
│   ├── /terra-trionfo/
│   │   ├── /png/                    Transparent PNG (web-optimized)
│   │   ├── /svg/                    Scalable vector (primary format)
│   │   └── /textured/               Original with background (heritage)
│   └── README.md                    Comprehensive usage guide
└── BRAND_ASSET_MANAGEMENT.md        This file
```

**Current Structure:** Asset foundation established with metadata and usage guidelines ready for brand files.

---

## Integration Checklist

### Before Adding Brand Files

- [ ] Obtain high-resolution source files from brand owner/designer
- [ ] Verify file format compatibility (PNG, SVG, or both)
- [ ] Document original dimensions and color specifications
- [ ] Confirm transparency requirements
- [ ] Identify textured vs. transparent versions

### File Preparation

**For Hypnotic Lemons:**
1. Export transparent PNG (72 DPI, optimized for web)
2. Convert to SVG (vector format, optimized)
3. Create black-background preview PNG (internal reference only)
4. Update METADATA.txt with file sizes and dimensions

**For Terra Trionfo:**
1. Export transparent PNG (72 DPI, web-optimized)
2. Export textured PNG (original background, archived)
3. Convert seal artwork to SVG (vector, optimized)
4. Preserve vintage engraving detail in all formats
5. Update METADATA.txt files with specifications

### Naming Convention

Follow exactly:
```
{subsidiary}-{type}-{variant}.{format}

Examples:
- hypnotic-lemons-logo-primary.png
- hypnotic-lemons-logo-primary.svg
- hypnotic-lemons-logo-preview.png
- terra-trionfo-seal-transparent.png
- terra-trionfo-seal-textured.png
- terra-trionfo-seal.svg
```

### Optimization Standards

**PNG Files:**
- Compression: Lossless PNG-8 or PNG-24
- Resolution: 72 DPI (web), 300 DPI (print)
- Target Size: 50-100 KB (web), 100-300 KB (print-ready)
- Tool: TinyPNG, ImageOptim, or Adobe Illustrator export

**SVG Files:**
- Compression: GZIP-compatible minification
- Tool: SVGO or Adobe Illustrator "Save for Web"
- Target Size: 5-50 KB
- Validation: Test in production environments

---

## Web Integration

### Project File Structure

Primary logos should be referenced from `/public/brand/subsidiaries/`:

```
/public/brand/
├── /parent/
│   ├── logo-standard.svg
│   ├── logo-dark.svg
│   └── logo-light.svg
└── /subsidiaries/
    ├── hypnotic-lemons.svg          (PRIMARY)
    ├── terra-trionfo.svg             (PRIMARY)
    ├── [other subsidiary logos...]
```

**Archive Location:** Comprehensive logo versions stored in `/assets/logos/`

### Implementation Pattern

```tsx
// Next.js Example (server component)
import Image from 'next/image';

export default function SubsidiaryLogo({ subsidiary }: Props) {
  return (
    <picture>
      <source 
        srcSet={`/brand/subsidiaries/${subsidiary.slug}.svg`} 
        type="image/svg+xml" 
      />
      <img
        src={`/brand/subsidiaries/${subsidiary.slug}.svg`}
        alt={`${subsidiary.name} logo`}
        width={200}
        height="auto"
      />
    </picture>
  );
}
```

### Mobile App Integration

**iOS:**
```swift
let logoImage = UIImage(named: "hypnotic-lemons-logo-primary")
// Or load from /assets/logos/hypnotic-lemons/png/
```

**Android:**
```xml
<ImageView
    android:src="@drawable/hypnotic_lemons_logo_primary"
    android:contentDescription="Hypnotic Lemons Logo"
/>
```

---

## Print & Apparel Workflows

### Print Vendor Handoff

When sharing with professional printers:

1. **Provide SVG Version** (primary format)
   - File: `/assets/logos/terra-trionfo/svg/terra-trionfo-seal.svg`
   - Reason: Infinite resolution, CMYK conversion ready

2. **Include Textured PNG for Reference**
   - File: `/assets/logos/terra-trionfo/textured/terra-trionfo-seal-textured.png`
   - Reason: Original artwork reference

3. **Provide Documentation**
   - Attach `/assets/logos/README.md`
   - Include color specifications
   - Note production requirements

4. **Confirm Requirements**
   - Resolution: 300+ DPI for final output
   - Color Mode: CMYK for print, RGB for digital
   - Bleed/Safety Guidelines: Per print specifications

### Apparel Mockup Workflow

1. **Design Phase:** Use transparent PNG for quick visualization
2. **Production File:** Switch to SVG for final manufacturing
3. **Color Separations:** Generate CMYK or spot color as needed
4. **Quality Approval:** Review physical proof before production

---

## Version Control & Updates

### When to Update Logos

- Brand guideline changes
- Color adjustments for specific applications
- Detail refinements or corrections
- New format versions (SVG, PNG variants)

### Version Management

**Do NOT create multiple versions in production:**

```
❌ WRONG:
- hypnotic-lemons-logo-v1.svg
- hypnotic-lemons-logo-v2.svg
- hypnotic-lemons-logo-final.svg

✅ CORRECT:
- hypnotic-lemons-logo-primary.svg (always current)
```

**Archive old versions if needed:**
```
/assets/logos/_archive/
├── hypnotic-lemons-logo-primary-v1-2025-01-01.svg
└── terra-trionfo-seal-v1-2025-01-01.svg
```

**Update all references when changing primary files:**
- `/public/brand/subsidiaries/`
- Portfolio pages and components
- Marketing materials
- Partner/vendor materials

---

## Quality Assurance Checklist

Before deploying logo updates:

**Visual Quality:**
- [ ] PNG files have fully transparent backgrounds (no white halos)
- [ ] SVG files render crisply at all sizes (48px, 100px, 400px)
- [ ] Colors match original brand specifications
- [ ] Proportions preserved (aspect ratios correct)
- [ ] No compression artifacts or quality loss

**File Optimization:**
- [ ] PNG files meet size targets (50-100 KB web, 100-300 KB print)
- [ ] SVG files optimized (5-50 KB with no embedded raster)
- [ ] Retina display versions prepared (1x and 2x for PNG)

**Compatibility:**
- [ ] Logos tested on light and dark backgrounds
- [ ] Web rendering verified in major browsers
- [ ] Mobile rendering tested on iOS and Android
- [ ] Print output approved at 300+ DPI
- [ ] Apparel mockups reviewed by production team

**Documentation:**
- [ ] METADATA.txt updated with correct specifications
- [ ] Dimensions and file sizes documented
- [ ] Color specifications recorded
- [ ] Usage guidelines clear and complete

---

## Brand Partner Distribution

### Sharing Process

When distributing to designers, agencies, or partners:

1. Create a branded folder with:
   ```
   Brand_Assets_Trionfo/
   ├── /logos/
   │   ├── /hypnotic-lemons/
   │   └── /terra-trionfo/
   ├── /guidelines/
   │   ├── Brand_Logo_Usage_Guide.pdf
   │   └── Color_Specifications.pdf
   ├── /mockups/
   │   └── [preview images]
   └── README.txt
   ```

2. Provide primary asset files:
   - SVG for vector editing
   - PNG transparent for quick mockups
   - PNG textured (Terra Trionfo) for heritage context

3. Include documentation:
   - `/assets/logos/README.md`
   - Color codes (HEX, RGB, CMYK)
   - Typography and spacing guidelines
   - Usage restrictions and guidelines

4. Set clear boundaries:
   - **Do:** Use SVG for any modifications
   - **Do:** Preserve proportions and colors
   - **Don't:** Alter proportions without approval
   - **Don't:** Change colors without brand team sign-off

---

## Legal & Compliance

- **Ownership:** All logos are intellectual property of Trionfo Holding Co., Inc.
- **Usage Rights:** Internal business use and authorized partner applications
- **Attribution:** "© Trionfo Holding Co., Inc. All rights reserved."
- **Modifications:** Requires formal brand approval
- **Distribution:** Limit to authorized personnel and partners

---

## Contact & Support

For brand asset questions, requests, or approvals:

**Email:** dylan@trionfoholdings.com  
**Subject:** Brand Logo Asset Request/Question  

Include:
- Specific logo and version needed
- Intended use case (web, print, apparel, etc.)
- Target medium and specifications
- Timeline and any special requirements

---

**Document Version:** 1.0  
**Last Updated:** December 13, 2025  
**Next Review:** Quarterly
