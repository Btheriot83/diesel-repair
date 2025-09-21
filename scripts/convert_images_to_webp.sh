#!/usr/bin/env bash
# scripts/convert_images_to_webp.sh
# Batch-convert JPG/PNG to WebP (q=85) and keep originals.
# Usage: bash scripts/convert_images_to_webp.sh public/images
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: $0 <images_root_dir>"
  exit 1
fi

ROOT="$1"
command -v cwebp >/dev/null 2>&1 || { echo "cwebp not found. Install: brew install webp (mac) or apt-get install webp"; exit 2; }

# Convert PNG/JPG/JPEG to WEBP if the .webp doesn't already exist
find "$ROOT" \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0 | while IFS= read -r -d '' img; do
  webp="${img%.*}.webp"
  if [ -f "$webp" ]; then
    echo "Skip (exists): $webp"
  else
    echo "Converting: $img -> $webp"
    cwebp -q 85 "$img" -o "$webp" >/dev/null
  fi
done
echo "Done. Remember to update your <picture> tags to prefer WebP first."