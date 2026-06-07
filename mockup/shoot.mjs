import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

for (const name of ['dashboard', 'timer']) {
  await page.goto(`file://${process.cwd()}/${name}.html`);
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${name}.png` });
}

await browser.close();
console.log('done');
