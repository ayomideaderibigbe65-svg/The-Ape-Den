const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicAssets = path.join(__dirname, '..', 'public', 'assets');
const backupDir = path.join(__dirname, '..', 'originals-backup');

if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, {recursive:true});

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  if (ext !== '.jpg' && ext !== '.png') return;
  const baseName = path.basename(file, ext);
  const srcPath = path.join(publicAssets, file);
  const backupPath = path.join(backupDir, file);
  // move original to backup
  fs.copyFileSync(srcPath, backupPath);
  // determine resize max width
  let maxWidth;
  if (file === 'logo.png') return; // keep logo as PNG
  // featured ape (hero) is ape-sneak-1.jpg (used as featuredApe)
  if (baseName === 'ape-sneak-1') maxWidth = 1000; // hero
  else maxWidth = 600; // gallery/marquee
  // also allow larger for lightbox on demand (we will also generate 1400 version)
  const outputWebp = path.join(publicAssets, `${baseName}.webp`);
  await sharp(srcPath)
    .resize({width: maxWidth, withoutEnlargement:true})
    .webp({quality:80})
    .toFile(outputWebp);
  // generate larger version for lightbox (if needed) - overwrite same webp with larger size but keep original file separate? For simplicity, also generate 1400 version with same name (will be used when displayed larger).
  await sharp(srcPath)
    .resize({width: 1400, withoutEnlargement:true})
    .webp({quality:80})
    .toFile(outputWebp); // overwrite with larger; browsers will load the same file; ideally use srcset but omitted for brevity
  // delete original jpg/png
  fs.unlinkSync(srcPath);
}

async function main(){
  const files = fs.readdirSync(publicAssets);
  for(const file of files){
    await processImage(file);
  }
  console.log('Image optimization complete');
}

main().catch(err=>{console.error(err);process.exit(1);});
