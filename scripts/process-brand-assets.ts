#!/usr/bin/env ts-node

/**
 * Brand Asset Processing Pipeline
 *
 * Processes images from /assets-inbox/ and outputs optimized assets to /public/brand/
 * Generates/updates /src/data/brand-manifest.json
 *
 * Usage: npm run brand:process
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import sharp from 'sharp';

// Configuration
const ASSETS_INBOX_DIR = path.join(process.cwd(), 'assets-inbox');
const PUBLIC_BRAND_DIR = path.join(process.cwd(), 'public', 'brand');
const MANIFEST_PATH = path.join(process.cwd(), 'src', 'data', 'brand-manifest.json');

const SCOPES = ['parent', 'subsidiaries', 'divisions'] as const;
type Scope = (typeof SCOPES)[number];

const SUPPORTED_FORMATS = ['.png', '.svg', '.webp'];
const MAX_DIMENSION = 1024;

interface AssetEntry {
  id: string;
  scope: Scope;
  src: string;
  alt: string;
  format: string;
  width: number;
  height: number;
  size: number;
  hash: string;
  updatedAt: string;
}

interface BrandManifest {
  version: string;
  generatedAt: string;
  assets: AssetEntry[];
}

/**
 * Normalize filename to kebab-case slug
 */
function normalizeFilename(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, '') // Remove extension
    .replace(/[^a-zA-Z0-9-]/g, '-') // Replace non-alphanumeric with dash
    .replace(/-+/g, '-') // Collapse multiple dashes
    .toLowerCase()
    .replace(/^-|-$/, ''); // Trim dashes
}

/**
 * Calculate file hash
 */
function calculateHash(buffer: Buffer): string {
  return crypto.createHash('md5').update(buffer).digest('hex').substring(0, 8);
}

/**
 * Process a single image asset
 */
async function processAsset(
  filePath: string,
  scope: Scope,
  filename: string
): Promise<AssetEntry | null> {
  try {
    const fileExtension = path.extname(filename).toLowerCase();

    // Validate file type
    if (!SUPPORTED_FORMATS.includes(fileExtension)) {
      console.warn(`⚠️  Skipping unsupported format: ${filename}`);
      return null;
    }

    // Read file
    const fileBuffer = fs.readFileSync(filePath);
    const hash = calculateHash(fileBuffer);
    const fileSize = fileBuffer.length;

    // Normalize filename to slug
    const normalizedFilename = normalizeFilename(filename);
    const outputFileName = `${normalizedFilename}${fileExtension}`;
    const outputDir = path.join(PUBLIC_BRAND_DIR, scope);
    const outputPath = path.join(outputDir, outputFileName);

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    let width = 0;
    let height = 0;
    let processedBuffer = fileBuffer;

    // Process based on format
    if (fileExtension === '.svg') {
      // SVG: validate and pass through
      const svgContent = fileBuffer.toString('utf-8');
      if (!svgContent.includes('<svg')) {
        console.warn(`⚠️  Invalid SVG: ${filename}`);
        return null;
      }

      // Try to extract dimensions from viewBox
      const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
      if (viewBoxMatch) {
        const [, , , w, h] = viewBoxMatch[1].split(/\s+/);
        width = parseInt(w, 10);
        height = parseInt(h, 10);
      } else {
        // Default dimensions
        width = 200;
        height = 200;
      }

      processedBuffer = fileBuffer;
    } else {
      // PNG/WebP: optimize with sharp
      const image = sharp(fileBuffer);
      const metadata = await image.metadata();

      width = metadata.width || 0;
      height = metadata.height || 0;

      // Check if resize needed
      if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
        console.log(`  Resizing ${filename}: ${width}x${height} → max ${MAX_DIMENSION}px`);

        const resized = image.resize(MAX_DIMENSION, MAX_DIMENSION, {
          fit: 'inside',
          withoutEnlargement: true,
        });

        if (fileExtension === '.png') {
          processedBuffer = await resized.png({ quality: 90, effort: 9 }).toBuffer() as any;
        } else if (fileExtension === '.webp') {
          processedBuffer = await resized.webp({ quality: 85, effort: 6 }).toBuffer() as any;
        }
      } else {
        // Optimize without resize
        if (fileExtension === '.png') {
          processedBuffer = await image.png({ quality: 90, effort: 9 }).toBuffer() as any;
        } else if (fileExtension === '.webp') {
          processedBuffer = await image.webp({ quality: 85, effort: 6 }).toBuffer() as any;
        }
      }
    }

    // Write optimized file
    fs.writeFileSync(outputPath, processedBuffer);
    console.log(`✅ ${scope}/${outputFileName} (${width}x${height}, ${(processedBuffer.length / 1024).toFixed(1)}KB)`);

    // Return manifest entry
    return {
      id: normalizedFilename,
      scope,
      src: `/brand/${scope}/${outputFileName}`,
      alt: normalizedFilename.replace(/-/g, ' '),
      format: fileExtension.replace('.', '').toUpperCase(),
      width,
      height,
      size: processedBuffer.length,
      hash,
      updatedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`❌ Error processing ${filename}:`, error);
    return null;
  }
}

/**
 * Scan assets-inbox and process all images
 */
async function scanAndProcess(): Promise<AssetEntry[]> {
  const entries: AssetEntry[] = [];

  for (const scope of SCOPES) {
    const scopeDir = path.join(ASSETS_INBOX_DIR, scope);

    if (!fs.existsSync(scopeDir)) {
      console.log(`⏭️  Skipping ${scope} (no folder)`);
      continue;
    }

    console.log(`\n📁 Processing ${scope}...`);
    const files = fs.readdirSync(scopeDir);

    for (const filename of files) {
      const filePath = path.join(scopeDir, filename);
      const stat = fs.statSync(filePath);

      if (stat.isFile()) {
        const entry = await processAsset(filePath, scope, filename);
        if (entry) {
          entries.push(entry);
        }
      }
    }
  }

  return entries;
}

/**
 * Generate/update brand manifest
 */
function generateManifest(entries: AssetEntry[]): void {
  const manifest: BrandManifest = {
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    assets: entries.sort((a, b) => a.id.localeCompare(b.id)),
  };

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`\n✅ Manifest generated: ${manifest.assets.length} assets`);
}

/**
 * Main execution
 */
async function main(): Promise<void> {
  console.log('🎨 Brand Asset Processing Pipeline\n');

  try {
    const entries = await scanAndProcess();
    generateManifest(entries);
    console.log('\n✨ Done! Run your site to verify.');
  } catch (error) {
    console.error('\n❌ Pipeline failed:', error);
    process.exit(1);
  }
}

main();
