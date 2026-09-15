import sharp from "sharp";
for (const theme of ["light", "dark"]) {
  for (const width of [192, 512]) {
    await sharp(`public/brand/hiatlas-${theme}.png`)
      .resize(width, width, { fit: "contain" })
      .webp({ quality: 92 })
      .toFile(`public/brand/hiatlas-${theme}-${width}.webp`);
  }
}
console.log("WebP da marca gerados; PNGs originais preservados.");
