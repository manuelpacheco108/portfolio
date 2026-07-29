// Captures the Go Street 44 project screenshot and self-check shots of the
// live portfolio. Run: node scripts/screenshots.mjs
import puppeteer from "puppeteer-core";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUT = "scripts/out";
await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });

async function shot(url, file, { width = 1440, height = 900, mobile = false } = {}) {
  const page = await browser.newPage();
  await page.setViewport(
    mobile
      ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
      : { width, height, deviceScaleFactor: 1 },
  );
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 3500));
  await page.screenshot({ path: `${OUT}/${file}.png` });
  await page.close();
  console.log(`captured ${file}`);
}

try {
  await shot("https://gostreet44-med.web.app/", "gostreet44");
  await shot("https://manuelpacheco.web.app/", "self-desktop");
  await shot("https://manuelpacheco.web.app/", "self-mobile", { mobile: true });
} finally {
  await browser.close();
}

// Project card image: 1280-wide WebP
await sharp(`${OUT}/gostreet44.png`)
  .resize({ width: 1280 })
  .webp({ quality: 80 })
  .toFile("public/projects/gostreet44.webp");
console.log("public/projects/gostreet44.webp written");
