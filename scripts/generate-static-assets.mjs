/**
 * Builds apple-touch-icon and OG image from raster logo (static/logo.png).
 * The logo PNG is maintained manually — this script does not overwrite it.
 * Run: node scripts/generate-static-assets.mjs
 */
import sharp from "sharp";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const staticDir = join(__dirname, "..", "static");
const logoPngPath = join(staticDir, "logo.png");

await sharp(logoPngPath)
  .resize(180, 180, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toFile(join(staticDir, "apple-touch-icon.png"));

const width = 1200;
const height = 630;
const base = sharp({
  create: {
    width,
    height,
    channels: 4,
    background: { r: 37, g: 99, b: 235, alpha: 1 },
  },
});

const logoCenter = await sharp(logoPngPath)
  .resize(420, 420, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

await base
  .composite([{ input: logoCenter, gravity: "center" }])
  .png()
  .toFile(join(staticDir, "og-default.png"));

console.log(
  "Wrote static/apple-touch-icon.png, static/og-default.png from static/logo.png",
);
