#!/bin/bash
# Push Silk & Summer to https://github.com/silkandsummerstore/new-webpage
set -e

cd "$(dirname "$0")"

if [ ! -d .git ]; then
  git init
  git branch -M main
fi

git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/silkandsummerstore/new-webpage.git

# If starting fresh, pull from bundle first (optional - delete this block if files already committed)
if [ -f silk-and-summer.bundle ] && [ -z "$(git log -1 2>/dev/null)" ]; then
  git pull silk-and-summer.bundle main
fi

git add -A
git status

if git diff --staged --quiet 2>/dev/null && [ -n "$(git log -1 2>/dev/null)" ]; then
  echo "Nothing new to commit. Pushing existing commits..."
else
  git commit -m "Initial commit: Silk & Summer editorial luxury ecommerce site.

Next.js cinematic fashion experience with shop, custom orders, lookbook, and Shopify-ready structure."
fi

git push -u origin main

echo "Done! https://github.com/silkandsummerstore/new-webpage"
