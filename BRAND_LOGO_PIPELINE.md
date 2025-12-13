# Brand Logo Drop-In Pipeline

Professional, automated brand asset processing system for Trionfo Holding Co., Inc.

## Overview

This pipeline enables drop-in logo management with zero base64 handling:

1. **Drop:** Upload image files to `/assets-inbox/`
2. **Process:** Run `npm run brand:process`
3. **Deploy:** Logos automatically appear in `/public/brand/` with metadata
4. **Render:** Website uses `<Logo id="logo-name" />` component

## Quick Start

### 1. Upload Images to Inbox

Drop PNG, SVG, or WebP files into the appropriate scope folder:

```
assets-inbox/
├── parent/              # Parent company logos
│   └── my-logo.png
├── subsidiaries/        # Subsidiary logos
│   ├── hypnotic-lemons.png
│   └── terra-trionfo.png
└── divisions/           # Division/business unit logos
    └── my-division.png
```

### 2. Process Assets

Run the processing pipeline:

```bash
npm run brand:process
```

This will:
- ✅ Scan `/assets-inbox/` recursively
- ✅ Optimize PNG/WebP files (resize if needed, compress)
- ✅ Validate and pass-through SVG files
- ✅ Output to `/public/brand/{scope}/`
- ✅ Generate `/src/data/brand-manifest.json`

**Output example:**

```
public/brand/
├── parent/
│   └── my-logo.png          (optimized, 45 KB)
├── subsidiaries/
│   ├── hypnotic-lemons.png  (optimized, 52 KB)
│   └── terra-trionfo.png    (optimized, 67 KB)
└── divisions/
    └── my-division.png      (optimized, 38 KB)
```

### 3. View Generated Manifest

Check `/src/data/brand-manifest.json`:

```json
{
  "version": "1.0.0",
  "generatedAt": "2025-12-13T12:00:00Z",
  "assets": [
    {
      "id": "hypnotic-lemons",
      "scope": "subsidiaries",
      "src": "/brand/subsidiaries/hypnotic-lemons.png",
      "alt": "hypnotic lemons",
      "format": "PNG",
      "width": 800,
      "height": 600,
      "size": 52000,
      "hash": "a1b2c3d4",
      "updatedAt": "2025-12-13T12:00:00Z"
    }
  ]
}
```

### 4. Use in Components

The website automatically renders logos using the manifest:

```tsx
import Logo from '@/components/Logo';

// In any component:
<Logo id="hypnotic-lemons" className="h-12" />
<Logo id="terra-trionfo" alt="Custom Alt Text" className="h-16" />
```

**Features:**
- ✅ No distortion (object-contain)
- ✅ Automatic fallback to text wordmark if logo missing
- ✅ Lazy loading
- ✅ Responsive sizing with max-width constraints
- ✅ SVG preferred, PNG fallback

---

## Supported File Types

### ✅ Recommended

- **PNG** (transparent preferred)
  - Best for logos with complex shapes
  - Supports full transparency
  - Optimized automatically
  - Example: `hypnotic-lemons.png`

- **SVG** (scalable vector)
  - Best for production/apparel use
  - Infinite scaling without quality loss
  - Pass-through (no processing)
  - Example: `terra-trionfo.svg`

### ⚠️ Not Recommended

- **JPG/JPEG** — No transparency support
  - Warning issued if detected
  - Consider converting to PNG

- **GIF** — Limited color depth
  - Not supported
  - Convert to PNG instead

---

## Processing Details

### File Naming

Files are normalized to **kebab-case** automatically:

```
Input:  My Company Logo.png
Output: my-company-logo.png
ID:     my-company-logo
```

Special characters, spaces, and uppercase are converted:

```
Input:  Hypnotic-Lemons_LLC.png
Output: hypnotic-lemons-llc.png
```

### Optimization Rules

| Format | Action | Max Size | Target |
|--------|--------|----------|--------|
| PNG    | Resize + compress | 1024px | 50-100 KB (web) |
| SVG    | Validate + pass-through | N/A | 5-50 KB |
| WebP   | Resize + compress | 1024px | 40-80 KB |

**Resize Logic:**
- If width or height > 1024px: Constrain to max 1024px, preserve aspect ratio
- If smaller: Optimize without enlargement

**Compression:**
- PNG: Lossless (quality 90, effort 9)
- WebP: Quality 85, effort 6
- SVG: GZIP minification

### Metadata Generated

For each asset, manifest includes:

```json
{
  "id": "logo-name",                    // Slug (kebab-case)
  "scope": "subsidiaries",              // parent|subsidiaries|divisions
  "src": "/brand/subsidiaries/logo.png", // Public path for <img src>
  "alt": "logo name",                   // Auto-generated from id
  "format": "PNG",                      // PNG|SVG|WEBP
  "width": 800,                         // Pixels (post-resize)
  "height": 600,                        // Pixels (post-resize)
  "size": 52000,                        // Bytes
  "hash": "a1b2c3d4",                   // MD5 short for versioning
  "updatedAt": "2025-12-13T12:00:00Z"   // ISO timestamp
}
```

---

## Development Workflow

### Watch Mode (Auto-Reprocess on Changes)

During development, watch for file changes and auto-reprocess:

```bash
npm run brand:watch
```

This will:
- Monitor `/assets-inbox/` for file changes
- Automatically re-run processing
- Update manifest and site (hot-reload enabled)

**Usage:**
1. Open two terminals
2. Terminal 1: `npm run dev` (site development server)
3. Terminal 2: `npm run brand:watch` (asset watcher)
4. Drop images into `/assets-inbox/` → watch reprocesses → site updates instantly

### Manual Processing

```bash
# One-time processing
npm run brand:process
```

---

## Component Usage

### Basic Logo Rendering

```tsx
import Logo from '@/components/Logo';

export default function Example() {
  return (
    <div>
      {/* Simple usage */}
      <Logo id="hypnotic-lemons" />
      
      {/* With custom height */}
      <Logo id="terra-trionfo" className="h-16" />
      
      {/* With custom alt text */}
      <Logo 
        id="obsidian-motors"
        alt="Obsidian Motors Premium Service Logo"
      />
      
      {/* With fallback disabled (show nothing if missing) */}
      <Logo id="missing-logo" showFallback={false} />
    </div>
  );
}
```

### Logo Container (Fixed Dimensions)

For guaranteed alignment and padding:

```tsx
import Logo, { LogoContainer } from '@/components/Logo';

export default function Card() {
  return (
    <LogoContainer height="h-16" padding="p-3" border>
      <Logo id="hypnotic-lemons" className="h-12" />
    </LogoContainer>
  );
}
```

### Fallback Behavior

If a logo ID doesn't exist in the manifest:

```tsx
{/* Missing logo → shows text wordmark */}
<Logo id="missing-logo" showFallback={true} />
// Renders: "missing logo" in gray box

{/* Without fallback */}
<Logo id="missing-logo" showFallback={false} />
// Renders: Nothing (null)
```

---

## Portfolio Integration

The portfolio automatically uses logos by ID:

### Before (Hardcoded Paths):
```typescript
export interface Subsidiary {
  logo: {
    src: '/brand/subsidiaries/hypnotic-lemons.svg';
    alt: 'Hypnotic Lemons LLC logo';
  }
}
```

### After (Manifest-Based):
```typescript
export interface Subsidiary {
  logoId: 'hypnotic-lemons'; // References manifest
}
```

**Component usage:**
```tsx
// Portfolio card automatically uses manifest
<Logo id={subsidiary.logoId} className="h-12" />
```

---

## Adding New Company Logos

### Step-by-Step

1. **Prepare your logo:**
   - Export as PNG (transparent background preferred)
   - Or use SVG (vector)
   - Minimum 200x200px for web

2. **Name the file consistently:**
   - Use lowercase, hyphens, no special characters
   - Examples: `hypnotic-lemons.png`, `terra-trionfo.svg`

3. **Place in `/assets-inbox/`:**
   ```
   assets-inbox/subsidiaries/hypnotic-lemons.png
   ```

4. **Update portfolio.ts:**
   ```typescript
   {
     name: 'Hypnotic Lemons LLC',
     logoId: 'hypnotic-lemons',  // ← Add this
     // ... rest of fields
   }
   ```

5. **Process:**
   ```bash
   npm run brand:process
   ```

6. **Verify:**
   - Check `/public/brand/subsidiaries/hypnotic-lemons.png` exists
   - Check `/src/data/brand-manifest.json` contains entry
   - Visit website → logo should appear

---

## Troubleshooting

### Logo Not Appearing?

1. **Check manifest exists:**
   ```bash
   cat src/data/brand-manifest.json | jq '.assets[] | .id'
   ```

2. **Verify file was processed:**
   ```bash
   ls -la public/brand/subsidiaries/
   ```

3. **Check for processing errors:**
   - Run processing again: `npm run brand:process`
   - Check console output for warnings/errors

4. **Verify portfolio.ts uses logoId:**
   ```typescript
   logoId: 'hypnotic-lemons'  // Must match manifest ID
   ```

### SVG Not Rendering?

- Ensure SVG has valid `<svg>` root element
- Avoid embedded raster images inside SVG
- Validate at: https://www.w3.org/WAI/test-evaluate/
- If validation fails, convert to PNG instead

### Image Too Large?

- Check if > 1024px: Pipeline automatically resizes
- For high-DPI: Processing creates optimized file
- Check output file size: `ls -lh public/brand/`
- If still large: Use WebP format for further compression

### Filename Issues?

Processing normalizes all filenames. Examples:

```
"My Logo.png"           → "my-logo.png"
"Logo--2024.png"        → "logo-2024.png"
"Hypnotic_Lemons.png"   → "hypnotic-lemons.png"
```

If you want a specific ID, name the file accordingly before processing.

---

## Advanced Configuration

### Customize Output Settings

Edit `/scripts/process-brand-assets.ts`:

```typescript
// Max dimensions (default 1024)
const MAX_DIMENSION = 1024;

// PNG compression (default 90, range 1-100)
await image.png({ quality: 90, effort: 9 }).toBuffer();

// SVG optimization (increase for smaller files)
// Currently uses SVGO via sharp
```

### Batch Processing Multiple Folders

The script supports three scopes:

```
assets-inbox/parent/              → /public/brand/parent/
assets-inbox/subsidiaries/        → /public/brand/subsidiaries/
assets-inbox/divisions/           → /public/brand/divisions/
```

Add new scopes:

1. Create folder: `mkdir assets-inbox/newscope`
2. Update script: Add to `SCOPES` array
3. Create output: `mkdir public/brand/newscope`
4. Run: `npm run brand:process`

---

## Performance Notes

### File Sizes (Target)

- Web PNG: 50-100 KB
- Web SVG: 5-50 KB
- Print PNG: 100-300 KB (higher DPI)

### Load Optimization

The Logo component uses:
- `loading="lazy"` for automatic lazy-loading
- `object-contain` to prevent distortion
- SVG preferred (smaller, scalable)
- PNG fallback for older browsers

### Caching

Build artifacts in `/public/brand/` are stable:
- Files only change when you re-process
- Safe for aggressive browser caching
- CDN-friendly (static assets)

---

## Legal & Governance

**Ownership:** Trionfo Holding Co., Inc.  
**Usage:** Internal business use and authorized partners only  
**Attribution:** © Trionfo Holding Co., Inc. All rights reserved.  

Do not distribute logos without explicit approval.

---

## Support

**Questions or issues?**

Email: dylan@trionfoholdings.com  
Subject: Brand Logo Pipeline Issue

Include:
- Logo file name
- Processing error output (if any)
- Expected vs. actual result

---

**Last Updated:** December 13, 2025  
**Pipeline Version:** 1.0.0
