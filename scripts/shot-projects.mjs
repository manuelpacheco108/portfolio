import puppeteer from "puppeteer-core";

const b = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});
const pg = await b.newPage();
await pg.setViewport({ width: 1440, height: 1100 });
await pg.goto("https://manuelpacheco.web.app/", { waitUntil: "networkidle2", timeout: 60000 });
await pg.evaluate(() => document.getElementById("projects").scrollIntoView());
await new Promise((r) => setTimeout(r, 3000));
const el = await pg.$("#projects");
await el.screenshot({ path: "scripts/out/projects-live2.png" });
await b.close();
console.log("done");
