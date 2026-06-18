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

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1.4 });
await page.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });
await new Promise((r) => setTimeout(r, 1500));

for (const id of ["sobre", "elementos", "oficinas", "cronograma", "inscricao", "contato"]) {
  const el = await page.$(`#${id}`);
  if (!el) { console.log(`#${id} NOT FOUND`); continue; }
  await el.scrollIntoView();
  await new Promise((r) => setTimeout(r, 400));
  await el.screenshot({ path: `${OUT}/sec-${id}.png` });
  console.log(`captured #${id}`);
}

await browser.close();
console.log("done");
