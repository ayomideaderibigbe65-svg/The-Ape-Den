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
  // copy original
  fs.copyFileSync(srcPath, backupPath);
  // skip logo
  if (file === 'logo.png') return;
  // determine max width
  const isHero = baseName === 'ape-sneak-1';
  const maxWidth = isHero ? 1000 : 600;
  const outputWebp = path.join(publicAssets, `${baseName}.webp`);
  // resize to max width for normal display
  await sharp(srcPath)
    .resize({width: maxWidth, withoutEnlargement:true})
    .webp({quality:80})
    .toFile(outputWebp);
  // also generate larger version for lightbox (overwrite same file with larger size)
  await sharp(srcPath)
    .resize({width: 1400, withoutEnlargement:true})
    .webp({quality:80})
    .toFile(outputWebp);
  // delete original
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
