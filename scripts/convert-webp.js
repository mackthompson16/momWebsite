const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/files');
const outputDir = path.join(__dirname, '../public/files/jpeg');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir).filter(f => f.toLowerCase().endsWith('.webp'));

(async () => {
  for (const file of files) {
    const cleanName = file
      .replace(/\.webp$/i, '')
      .replace(/\+/g, '_')
      .replace(/\s/g, '_')
      .replace(/[()]/g, '')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');
    const outName = cleanName + '.jpg';
    await sharp(path.join(inputDir, file))
      .jpeg({ quality: 90 })
      .toFile(path.join(outputDir, outName));
    console.log(`${file} -> jpeg/${outName}`);
  }
  console.log('Done.');
})();
