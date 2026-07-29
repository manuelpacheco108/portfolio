// Generates the 1200x630 Open Graph share image at public/og-image.png.
import sharp from "sharp";

const logo = await sharp("public/manuelIcon.png")
  .resize(230, 230)
  .png()
  .toBuffer();

const text = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <text x="600" y="452" font-family="Segoe UI, Arial, sans-serif" font-size="58" font-weight="700" fill="#ffffff" text-anchor="middle">Manuel A. Pacheco Motoa</text>
  <text x="600" y="516" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#b9ccff" text-anchor="middle">Software Engineer — Generative AI · Automation · Serverless</text>
</svg>`);

await sharp({
  create: { width: 1200, height: 630, channels: 4, background: "#1d4ed8" },
})
  .composite([
    { input: logo, top: 120, left: 485 },
    { input: text, top: 0, left: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile("public/og-image.png");

console.log("public/og-image.png written");
