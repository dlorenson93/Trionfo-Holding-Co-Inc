# Trionfo Holding Co., Inc. — Professional Corporate Website

A professional, institutional-grade holding company website built with Next.js, TypeScript, and Tailwind CSS. This site communicates the parent company's role, subsidiary portfolio, and corporate governance with clarity, restraint, and credibility.

## Project Overview

**Purpose**: Establish legitimacy as a regulated-adjacent holding company managing multiple subsidiary businesses.

**Key Principles**:
- Institutional tone (no marketing hype, startup language, or exaggerated claims)
- Clean, modern, understated visual design
- Semantic HTML and accessibility best practices
- Mobile-first, fast load times, high Lighthouse scores
- Subtle transitions only (fade/opacity); no distracting animations

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: Ready for Vercel, AWS, or standard Node.js hosting

## Project Structure

```
trionfo-holdings/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout with Navbar & Footer
│   │   ├── page.tsx                  # Home page
│   │   ├── globals.css               # Global styles
│   │   ├── not-found.tsx             # 404 page
│   │   ├── robots.ts                 # robots.txt generator
│   │   ├── sitemap.ts                # sitemap.xml generator
│   │   ├── about/
│   │   │   └── page.tsx              # About page
│   │   ├── portfolio/
│   │   │   ├── page.tsx              # Portfolio grid page
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Subsidiary detail page
│   │   └── contact/
│   │       └── page.tsx              # Contact page
│   ├── components/                   # Reusable components
│   │   ├── Logo.tsx                  # Logo handler with fallbacks
│   │   ├── Navbar.tsx                # Navigation bar
│   │   ├── Footer.tsx                # Footer with legal disclaimer
│   │   ├── HeroSection.tsx           # Hero section template
│   │   ├── SectionHeader.tsx         # Section header component
│   │   ├── PortfolioGrid.tsx         # Filterable portfolio grid
│   │   ├── SubsidiaryCard.tsx        # Individual subsidiary card
│   │   ├── SubsidiaryDetail.tsx      # Subsidiary detail view
│   │   ├── ContactForm.tsx           # Contact inquiry form
│   │   └── CallToAction.tsx          # CTA section template
│   └── data/
│       └── portfolio.ts              # Central data model (Single Source of Truth)
├── public/
│   ├── brand/
│   │   ├── parent/                   # Parent company logos
│   │   │   ├── trionfo-holding.svg
│   │   │   ├── trionfo-holding-dark.svg
│   │   │   └── trionfo-holding-light.svg
│   │   └── subsidiaries/             # Subsidiary logos
│   │       ├── trionfo-real-estate-group.svg
│   │       ├── hypnotic-lemons.svg
│   │       ├── obsidian-motors.svg
│   │       ├── terra-trionfo.svg
│   │       └── trionfo-enterprise-development.svg
│   └── manifest.json                 # PWA manifest
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── .eslintrc.json
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Local Development

```bash
# Start the development server
npm run dev
```

Visit `http://localhost:3000` to view the site.

### Building for Production

```bash
# Build the project
npm run build

# Start the production server
npm start
```

### Type Checking

```bash
# Check TypeScript types
npm run type-check
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Portfolio Data Model

### Central Single Source of Truth

All subsidiary information is managed in **`src/data/portfolio.ts`**. This ensures consistent data across all pages without duplication.

### Adding a New Subsidiary

1. Open `src/data/portfolio.ts`
2. Add a new object to the `subsidiaries` array:

```typescript
{
  name: 'New Company LLC',
  slug: 'new-company',  // URL-safe identifier
  industry: 'Industry Name',
  status: 'Active',  // Active | Development | Pre-Launch
  description: 'Company description for portfolio display.',
  ownership: 'Wholly Owned Subsidiary of Trionfo Holding Co., Inc.',
  logo: {
    src: '/brand/subsidiaries/new-company.svg',
    alt: 'New Company LLC logo',
    variant: 'standard',
  },
  website?: 'https://newcompany.com',  // Optional
}
```

3. Add the logo file to `public/brand/subsidiaries/`
4. The new subsidiary will automatically appear on:
   - Portfolio grid page (`/portfolio`)
   - Home page portfolio section
   - New detail page at `/portfolio/new-company`

### Portfolio Functions

Available helper functions in `src/data/portfolio.ts`:

```typescript
// Get all subsidiaries
getAllSubsidiaries(): Subsidiary[]

// Get single subsidiary by slug
getSubsidiaryBySlug(slug: string): Subsidiary | undefined

// Get subsidiaries filtered by status
getSubsidiariesByStatus(status: SubsidiaryStatus): Subsidiary[]

// Get all unique industries
getIndustries(): string[]
```

## Pages Overview

### `/` — Home

Establishes legitimacy immediately with:
- Hero section with positioning statement
- Parent company information
- Portfolio overview with logo grid
- Operating philosophy
- Corporate inquiry CTA

### `/about`

Comprehensive company information:
- Mission and purpose
- Role of parent holding company
- Governance and oversight philosophy
- Core values

### `/portfolio`

Complete subsidiary portfolio view:
- Explicit ownership statement
- Filterable grid by industry
- Status indicators (Active/Development/Pre-Launch)
- Quick access to subsidiary detail pages

### `/portfolio/[slug]`

Individual subsidiary detail pages:
- Logo and company metadata
- Full description
- Ownership statement
- Optional external website link
- Contact CTA
- Navigation to adjacent subsidiaries

### `/contact`

Professional contact interface:
- Corporate contact information
- Email and headquarters address
- Inquiry type selector:
  - General Corporate
  - Banking & Financial
  - Partnerships & Acquisitions
  - Legal & Compliance
- Contact form with validation
- Confirmation message on submission

## Logo System

### Requirements

- **Preferred Format**: SVG (scalable, crisp, small file size)
- **Fallback Format**: PNG with transparent background
- **Aspect Ratio**: Maintain original aspect ratio (never stretch/distort)
- **Sizing**: Component handles responsive sizing via props
- **Accessibility**: Include descriptive alt text

### Using Logos in Components

```tsx
import Logo from '@/components/Logo';

// With Logo object
<Logo
  logo={subsidiary.logo}
  width={160}
  height={48}
  className="object-contain"
/>

// With string path
<Logo logo="/brand/parent/trionfo-holding.svg" alt="Trionfo Holding" />
```

### Logo Fallback Behavior

If an SVG fails to load:
1. Component attempts to display text wordmark
2. Uses company name as fallback
3. Gracefully handles missing assets

## Component Documentation

### Logo.tsx

Handles logo rendering with variants and fallbacks.

**Props**:
- `logo`: Logo object or string path
- `alt`: Alt text (default: 'Company Logo')
- `width`: Width in pixels (default: 160)
- `height`: Height in pixels (default: 48)
- `variant`: 'light' | 'dark' | 'standard'
- `className`: Custom Tailwind classes
- `asText`: Force text rendering (default: false)

### Navbar.tsx

Sticky navigation with parent company logo and main links.

**Features**:
- Sticky positioning (z-50)
- Minimal, professional links
- Responsive mobile-first design

### Footer.tsx

Professional footer with legal compliance.

**Includes**:
- Company information
- Quick navigation links
- Corporate inquiry contact info
- Legal disclaimer
- Copyright notice

### PortfolioGrid.tsx

Filterable grid for subsidiary display.

**Props**:
- `subsidiaries`: Array of subsidiaries to display
- `filterable`: Enable industry filtering (default: true)

**Features**:
- Client-side filtering by industry
- "All Industries" reset button
- Empty state handling
- Responsive grid layout

### ContactForm.tsx

Professional contact form with inquiry type selection.

**Features**:
- Form validation
- Inquiry type selection
- Loading state
- Success confirmation
- Clears on submission

## SEO & Metadata

### Automatic SEO Features

- **Page Titles**: Consistent naming convention via layout template
- **Open Graph Tags**: Automatic OG tags for social sharing
- **Meta Descriptions**: Per-page descriptions
- **Robots.txt**: Auto-generated, allows all public pages
- **Sitemap.xml**: Auto-generated with subsidiary pages
- **Structured Data Ready**: Components use semantic HTML

### robots.txt

Automatically generated at `robots.ts`:
- Allows all user agents on public pages
- Disallows `/api` and `/.well-known`
- Points to sitemap.xml

### sitemap.xml

Automatically generated at `sitemap.ts`:
- Includes all static pages
- Generates dynamic routes for all subsidiaries
- Sets change frequency and priority
- Uses dynamic last modified date

## Legal & Compliance

### Footer Disclaimer

All pages include the footer disclaimer:

> "Information provided is for general informational purposes and is subject to change. Trionfo Holding Co., Inc. and its subsidiaries reserve the right to modify information without notice."

### Contact Privacy Notice

Contact page includes privacy assurance:

> "Your information will be kept confidential and used only for the purposes of responding to your inquiry."

## Design System

### Color Palette

- **Primary**: `#0f172a` (slate-900) — Charcoal/near-black
- **Background**: `#ffffff` (white) — Clean, neutral
- **Secondary**: `#f8fafc` (slate-50) — Very light neutral
- **Text**: `#0f172a` and `#475569` (slate-700) — High contrast
- **Borders**: `#e2e8f0` (slate-200) — Subtle separation
- **Accents**: Green, blue, yellow for status indicators

### Typography

- **Display Font**: System stack (`-apple-system`, BlinkMacSystemFont, etc.)
- **Body Font**: System stack
- **Font Weights**: 400 (regular), 600 (semibold)
- **No custom fonts**: Fast load times, zero FOUT/FOIT

### Spacing & Layout

- **Grid**: TailwindCSS responsive breakpoints (sm, md, lg)
- **Container**: Max-width 7xl (80rem) for readability
- **Padding**: 4-8 units responsive
- **Gap**: 4-8 units between elements

### Animations

- **Transitions**: 150ms ease-in-out on interactive elements
- **No distracting animations**: Fade/opacity only
- **Hover States**: Subtle color shifts, shadows
- **Accessibility**: All animations respect `prefers-reduced-motion`

## Deployment

### Vercel (Recommended)

```bash
# Login to Vercel
vercel login

# Deploy
vercel
```

### AWS Amplify

```bash
# Configure AWS
aws configure

# Deploy
amplify init
amplify publish
```

### Self-Hosted (Node.js)

```bash
# Build
npm run build

# Start
npm start
```

Visit `http://localhost:3000` (or your domain) to view the site.

## Performance Optimization

### Built-in Optimizations

- **Static Generation**: Most pages are pre-rendered at build time
- **Incremental Static Regeneration (ISR)**: Portfolio pages auto-regenerate
- **Image Optimization**: Next.js Image component ready (configured for external images)
- **Code Splitting**: Automatic per-route splitting
- **CSS Purging**: Tailwind removes unused styles in production

### Target Metrics

- **Lighthouse Score**: ≥95 across all categories
- **Core Web Vitals**: All green
- **Load Time**: <2s on 3G connection
- **First Contentful Paint**: <1s

## Accessibility

### WCAG 2.1 Compliance

- **Semantic HTML**: Proper heading hierarchy, `<nav>`, `<main>`, `<footer>`, `<address>`
- **Color Contrast**: All text meets WCAG AA standards (4.5:1 minimum)
- **Form Labels**: All inputs have associated labels
- **Alt Text**: All images have descriptive alt text
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus States**: Visible focus indicators on all interactive elements
- **Reduced Motion**: Respects `prefers-reduced-motion` media query

## Troubleshooting

### Logos Not Displaying

1. Check file paths in `src/data/portfolio.ts`
2. Ensure SVG files exist in `public/brand/`
3. Verify file names match exactly (case-sensitive)
4. Check browser console for 404 errors
5. Logo component will fallback to text if SVG fails

### Portfolio Page Not Updating After Adding Subsidiary

1. Run `npm run build` to regenerate static pages
2. Verify new subsidiary object is in `src/data/portfolio.ts`
3. Check slug is URL-safe (lowercase, hyphens only)
4. Restart dev server with `npm run dev`

### Contact Form Not Submitting

1. Check browser console for JavaScript errors
2. Verify form fields match component prop names
3. In production, implement backend endpoint for email delivery
4. Update `handleSubmit` function in `src/components/ContactForm.tsx`

### TypeScript Errors

```bash
# Run type check
npm run type-check

# Fix common issues
npm install --save-dev @types/node @types/react @types/react-dom
```

## Content Guidelines

### Tone

✅ **Do**:
- Institutional, formal, professional
- Conservative, restrained
- Transparent, clear
- Evidence-based (no invented metrics)

❌ **Don't**:
- Marketing hype or exaggeration
- Startup language ("disruptive," "innovative," "game-changing")
- Emotional appeals or brand storytelling
- Placeholder content or lorem ipsum

### Subsidiary Descriptions

Keep descriptions brief and factual:

❌ **Bad**: "Revolutionary next-generation solutions disrupting the industry"

✅ **Good**: "Strategic real estate development and property management across residential and commercial sectors."

### Imagery

- Use logos consistently
- Maintain white or very light neutral backgrounds
- No stock photography or lifestyle images
- Focus on company information, not aesthetics

## Support & Maintenance

### Regular Updates

- Review subsidiary information quarterly
- Update status indicators as needed
- Monitor contact form submissions
- Test all links monthly
- Run Lighthouse audits quarterly

### Security

- Keep dependencies updated: `npm update`
- Run security audit: `npm audit`
- Check for vulnerabilities: `npm audit fix`
- Use HTTPS in production (automatic on Vercel)

## License

© 2024 Trionfo Holding Co., Inc. All rights reserved.

## Questions?

For technical questions or issues, open an issue in this repository or contact the development team.

---

**Built with Next.js, TypeScript, and Tailwind CSS**

*Professional website design for regulated-adjacent corporate entities*
