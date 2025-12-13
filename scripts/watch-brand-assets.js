#!/usr/bin/env node

/**
 * Brand Asset Watch Script
 *
 * Watches /assets-inbox/ for changes and re-runs processing automatically
 * Useful for development workflow
 *
 * Usage: npm run brand:watch
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ASSETS_INBOX_DIR = path.join(process.cwd(), 'assets-inbox');

console.log('👁️  Watching /assets-inbox/ for changes...\n');

// Watch all subdirectories
const watcher = fs.watch(ASSETS_INBOX_DIR, { recursive: true }, (eventType, filename) => {
  if (!filename) return;

  const ext = path.extname(filename).toLowerCase();
  const supportedFormats = ['.png', '.svg', '.webp'];

  if (supportedFormats.includes(ext)) {
    console.log(`📝 Detected change: ${filename}`);
    console.log('🔄 Re-processing assets...\n');

    // Run the processing script
    const child = spawn('npx', ['ts-node', 'scripts/process-brand-assets.ts'], {
      stdio: 'inherit',
      cwd: process.cwd(),
    });

    child.on('exit', (code) => {
      if (code === 0) {
        console.log('\n✅ Re-processing complete. Site will hot-reload.\n');
      } else {
        console.error('\n❌ Processing failed.\n');
      }
    });
  }
});

// Handle interruption
process.on('SIGINT', () => {
  console.log('\n👋 Watcher stopped.');
  watcher.close();
  process.exit(0);
});
