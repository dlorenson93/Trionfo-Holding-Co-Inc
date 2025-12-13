#!/bin/bash
# Quick validation script
set -e

echo "🔍 Validating TypeScript..."
npx tsc --noEmit

echo "✅ TypeScript validation passed!"
echo "🚀 Ready to run: npm run dev"
