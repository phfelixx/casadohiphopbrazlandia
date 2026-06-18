import puppeteer from "puppeteer-core";
import fs from "node:fs";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const URL = "http://localhost:3001/";
const OUT = "C:/www/casadohiphopbrazlandia/_shots";
fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});

async function shoot(name, width, height, fullPage) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1200));
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage });
  const h = await page.evaluate(() => document.body.scrollHeight);
  console.log(`${name}: ${width}x${height} fullPage=${fullPage} docHeight=${h}`);
  await page.close();
}

await shoot("desktop-hero", 1280, 820, false);
await shoot("desktop-full", 1280, 820, true);
await shoot("mobile-full", 390, 844, true);
await shoot("tablet-full", 820, 1100, true);

await browser.close();
console.log("done");
