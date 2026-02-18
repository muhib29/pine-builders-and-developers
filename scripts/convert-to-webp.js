const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../public/images');
const supportedFormats = ['.jpg', '.jpeg', '.png', '.gif', '.tiff'];

let converted = 0;
let failed = 0;

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!supportedFormats.includes(ext)) {
    return;
  }

  const outputPath = filePath.replace(ext, '.webp');

  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log(`✓ Converted: ${path.relative(imageDir, outputPath)}`);
    converted++;
  } catch (error) {
    console.error(`✗ Failed to convert ${filePath}:`, error.message);
    failed++;
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (stat.isFile()) {
      await convertImage(filePath);
    }
  }
}

async function main() {
  console.log('Starting WebP conversion...\n');
  
  try {
    await processDirectory(imageDir);
    console.log(`\n✓ Complete! Converted: ${converted}, Failed: ${failed}`);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
