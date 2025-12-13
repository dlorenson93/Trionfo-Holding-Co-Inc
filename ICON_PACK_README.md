# Trionfo Icon Pack Documentation

## Overview

Comprehensive SVG icon pack for all 6 Trionfo subsidiaries. Each icon has outline and solid variants, designed for institutional premium use at 16px–24px sizes.

## Icon Set

### 1. Trionfo Real Estate Group
- **Slug**: `trionfo-real-estate`
- **Metaphor**: Minimal building roofline with integrated location pin
- **Files**:
  - `src/assets/icons/trionfo-real-estate/trionfo-real-estate-outline.svg`
  - `src/assets/icons/trionfo-real-estate/trionfo-real-estate-solid.svg`

### 2. Trionfo Capital
- **Slug**: `trionfo-capital`
- **Metaphor**: Restrained candlestick chart with subtle upward trend line
- **Files**:
  - `src/assets/icons/trionfo-capital/trionfo-capital-outline.svg`
  - `src/assets/icons/trionfo-capital/trionfo-capital-solid.svg`

### 3. Hypnotic Lemons
- **Slug**: `hypnotic-lemons`
- **Metaphor**: Lemon slice with subtle spiral/eye center
- **Files**:
  - `src/assets/icons/hypnotic-lemons/hypnotic-lemons-outline.svg`
  - `src/assets/icons/hypnotic-lemons/hypnotic-lemons-solid.svg`

### 4. Obsidian Motors
- **Slug**: `obsidian-motors`
- **Metaphor**: Sleek car silhouette with faceted gem detail
- **Files**:
  - `src/assets/icons/obsidian-motors/obsidian-motors-outline.svg`
  - `src/assets/icons/obsidian-motors/obsidian-motors-solid.svg`

### 5. Terra Trionfo
- **Slug**: `terra-trionfo`
- **Metaphor**: Curved agricultural field lines with central sprout
- **Files**:
  - `src/assets/icons/terra-trionfo/terra-trionfo-outline.svg`
  - `src/assets/icons/terra-trionfo/terra-trionfo-solid.svg`

### 6. Trionfo Enterprise Development
- **Slug**: `trionfo-enterprise-development`
- **Metaphor**: Blueprint grid corner with bridge/beam structure
- **Files**:
  - `src/assets/icons/trionfo-enterprise-development/trionfo-enterprise-development-outline.svg`
  - `src/assets/icons/trionfo-enterprise-development/trionfo-enterprise-development-solid.svg`

## React Component

### TrionfoIcon

**Location**: `src/components/TrionfoIcon.tsx`

**Props**:
- `name` (required): Icon name (one of the 6 slugs above)
- `variant` (optional): `'outline'` or `'solid'` (default: `'outline'`)
- `className` (optional): Tailwind or CSS classes for sizing/styling
- `title` (optional): Accessibility label and tooltip

**Usage Examples**:

```tsx
// Basic outline icon
<TrionfoIcon name="trionfo-capital" className="h-5 w-5" />

// Solid variant with color
<TrionfoIcon 
  name="hypnotic-lemons" 
  variant="solid" 
  className="h-6 w-6 text-trionfo-accent" 
/>

// With accessibility
<TrionfoIcon 
  name="obsidian-motors" 
  title="Obsidian Motors LLC" 
  className="h-4 w-4" 
/>

// Different sizes
<TrionfoIcon name="terra-trionfo" className="h-16 w-16" /> {/* 16px */}
<TrionfoIcon name="terra-trionfo" className="h-20 w-20" /> {/* 20px */}
<TrionfoIcon name="terra-trionfo" className="h-24 w-24" /> {/* 24px */}
```

## Technical Specifications

### SVG Standards
- **Viewbox**: `0 0 24 24`
- **Live Area**: 20×20 with internal padding
- **Color**: Uses `currentColor` for automatic theme inheritance

### Outline Variant
- `stroke-width="2"`
- `stroke-linecap="round"`
- `stroke-linejoin="round"`
- `fill="none"`

### Solid Variant
- `fill="currentColor"`
- No stroke unless required for legibility

### Sizing
Renders cleanly at:
- 16px (`h-4 w-4`)
- 20px (`h-5 w-5`)
- 24px (`h-6 w-6`)
- Larger sizes available

## Integration Points

### In Subsidiary Detail Pages
```tsx
import TrionfoIcon from '@/components/TrionfoIcon';

// Use in SubsidiaryDetail or SubsidiaryCard
<TrionfoIcon 
  name="trionfo-capital" 
  variant="solid" 
  className="h-16 w-16" 
  title="Trionfo Capital LLC" 
/>
```

### In Navigation/UI
```tsx
// Portfolio grid icons
<TrionfoIcon name="hypnotic-lemons" className="h-5 w-5" />

// Status indicators
<TrionfoIcon name="obsidian-motors" variant="solid" className="h-4 w-4" />

// Brand identity displays
<TrionfoIcon name="terra-trionfo" className="h-24 w-24" />
```

## Color Inheritance

Icons inherit color from parent context:

```tsx
// Inherits text-trionfo-primary
<div className="text-trionfo-primary">
  <TrionfoIcon name="trionfo-real-estate" className="h-5 w-5" />
</div>

// Custom color via currentColor
<TrionfoIcon 
  name="hypnotic-lemons" 
  className="h-5 w-5 text-trionfo-accent" 
/>
```

## Accessibility

- Uses `aria-hidden="true"` when no title provided
- Accepts `title` prop for semantic labeling
- Renders as `<span role="img">` for screen readers
- Supports ARIA labels for context

## QA Checklist

✅ All icons render cleanly at 16px, 20px, and 24px  
✅ Outline and solid variants share same silhouette  
✅ Consistent stroke weights and proportions  
✅ No clipping at small sizes  
✅ Uses `currentColor` for theme inheritance  
✅ Accessibility features implemented  
✅ No icons for Trionfo Holding Co., Inc. or Terra Plantari  
✅ React component fully functional  

## Files Created

```
src/assets/icons/
├── trionfo-real-estate/
│   ├── trionfo-real-estate-outline.svg
│   └── trionfo-real-estate-solid.svg
├── trionfo-capital/
│   ├── trionfo-capital-outline.svg
│   └── trionfo-capital-solid.svg
├── hypnotic-lemons/
│   ├── hypnotic-lemons-outline.svg
│   └── hypnotic-lemons-solid.svg
├── obsidian-motors/
│   ├── obsidian-motors-outline.svg
│   └── obsidian-motors-solid.svg
├── terra-trionfo/
│   ├── terra-trionfo-outline.svg
│   └── terra-trionfo-solid.svg
└── trionfo-enterprise-development/
    ├── trionfo-enterprise-development-outline.svg
    └── trionfo-enterprise-development-solid.svg

src/components/
└── TrionfoIcon.tsx
```

---

**Total**: 12 SVG files + 1 React component ready for production use.
