const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const backupDir = path.join(__dirname, '..', 'originals-backup');
const publicAssets = path.join(__dirname, '..', 'public', 'assets');

if (!fs.existsSync(publicAssets)) {
  fs.mkdirSync(publicAssets, { recursive: true });
}

function getBaseName(file) {
  return path.basename(file, path.extname(file));
}

async function createLargeWebp(file) {
  const ext = path.extname(file).toLowerCase();
  if (ext !== '.jpg' && ext !== '.png') return;
  const base = getBaseName(file);
  const srcPath = path.join(backupDir, file);
  const outPath = path.join(publicAssets, `${base}-large.webp`);
  await sharp(srcPath)
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outPath);
}

async function main() {
  const files = fs.readdirSync(backupDir);
  for (const file of files) {
    await createLargeWebp(file);
  }
  console.log('Large lightbox images generated');
}

main().catch(err => { console.error(err); process.exit(1); });
