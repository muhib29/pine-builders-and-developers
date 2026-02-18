const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../public/images');
const minSizeKB = 150; // only process images larger than this (KB)
const sizesDefault = [480, 800, 1200, 1600];

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, fileList);
    else fileList.push(full);
  }
  return fileList;
}

// Skip files that are already responsive variants (e.g. hero-7-w480.webp, 3-w1600.avif)
const isVariantFile = (filepath) => {
  const basename = path.basename(filepath, path.extname(filepath));
  return /-w\d+$/.test(basename); // ends with -w480, -w800, etc.
};

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.webp', '.jpg', '.jpeg', '.png', '.tiff'].includes(ext)) return;
  if (isVariantFile(file)) return; // skip to avoid nested variants (3-w1600-w480.avif)
  const stat = fs.statSync(file);
  const kb = stat.size / 1024;
  if (kb < minSizeKB) return;

  // choose sizes depending on original width if available
  let metadata;
  try { metadata = await sharp(file).metadata(); } catch (e) { return; }
  const originalWidth = metadata.width || null;
  const sizes = sizesDefault.filter(w => !originalWidth || w < originalWidth).slice(0,4);

  for (const w of sizes) {
    const dir = path.dirname(file);
    const base = path.basename(file, ext);
    const outAvif = path.join(dir, `${base}-w${w}.avif`);
    const outWebp = path.join(dir, `${base}-w${w}.webp`);

    if (!fs.existsSync(outAvif)) {
      try {
        await sharp(file).resize({ width: w }).avif({ quality: 60 }).toFile(outAvif);
        console.log(`✓ ${path.relative(imageDir, outAvif)}`);
      } catch (e) {
        console.error(`✗ avif failed ${outAvif}:`, e.message);
      }
    }

    if (!fs.existsSync(outWebp)) {
      try {
        await sharp(file).resize({ width: w }).webp({ quality: 75 }).toFile(outWebp);
        console.log(`✓ ${path.relative(imageDir, outWebp)}`);
      } catch (e) {
        console.error(`✗ webp failed ${outWebp}:`, e.message);
      }
    }
  }
}

async function main() {
  console.log('Generating responsive image variants...');
  const files = walk(imageDir);
  for (const f of files) {
    await processImage(f);
  }
  console.log('Done.');
}

main().catch(err => { console.error(err); process.exit(1); });
