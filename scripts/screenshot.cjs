const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const outDir = 'C:\\Users\\HCS\\.gemini\\antigravity\\brain\\4e9e1816-f34d-459a-9803-696bf738b95f';
  const tmpProfile = fs.mkdtempSync(path.join(require('os').tmpdir(), 'chrome_p_'));

  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    userDataDir: tmpProfile,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  
  // Collect console messages
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.error('PAGE ERROR:', err.toString()));

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // 1. Desktop Viewport (English)
  await page.setViewport({ width: 1280, height: 950, deviceScaleFactor: 2 });
  await new Promise(r => setTimeout(r, 1200));

  const desktopHeroPath = path.join(outDir, 'hero_desktop.png');
  await page.screenshot({ path: desktopHeroPath, clip: { x: 0, y: 0, width: 1280, height: 920 } });
  console.log('Saved desktop hero screenshot to:', desktopHeroPath);

  // Full Page
  const fullPagePath = path.join(outDir, 'full_page.png');
  await page.screenshot({ path: fullPagePath, fullPage: true });
  console.log('Saved full page screenshot to:', fullPagePath);

  // 2. Desktop Viewport (Amharic)
  console.log('Toggling language to Amharic on desktop...');
  await page.evaluate(() => {
    // Find visible toggle button and click it
    const buttons = Array.from(document.querySelectorAll('button[aria-label="Toggle language"]'));
    const visibleBtn = buttons.find(b => b.offsetParent !== null);
    if (visibleBtn) visibleBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));

  const desktopAmharicPath = path.join(outDir, 'hero_desktop_amharic.png');
  await page.screenshot({ path: desktopAmharicPath, clip: { x: 0, y: 0, width: 1280, height: 920 } });
  console.log('Saved desktop Amharic screenshot to:', desktopAmharicPath);

  // 3. Mobile Viewport (Amharic)
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
  await new Promise(r => setTimeout(r, 800));

  const mobileAmharicPath = path.join(outDir, 'hero_mobile_amharic.png');
  await page.screenshot({ path: mobileAmharicPath, clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('Saved mobile Amharic screenshot to:', mobileAmharicPath);

  // 4. Mobile Viewport (English)
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button[aria-label="Toggle language"]'));
    const visibleBtn = buttons.find(b => b.offsetParent !== null);
    if (visibleBtn) visibleBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));

  const mobileHeroPath = path.join(outDir, 'hero_mobile.png');
  await page.screenshot({ path: mobileHeroPath, clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('Saved mobile hero screenshot to:', mobileHeroPath);

  await browser.close();
  console.log('All screenshots and responsive checks passed!');
}

run().catch(err => {
  console.error('Screenshot script failed:', err);
  process.exit(1);
});
