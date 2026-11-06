const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function processCarImage() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const profileDir = path.join(__dirname, '..', '.chrome_profile');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    userDataDir: profileDir,
    args: ['--no-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  const inputImagePath = path.join(__dirname, '..', 'public', 'images', 'suzuki-dzire.png');
  const imgBuffer = fs.readFileSync(inputImagePath);
  const base64Img = `data:image/jpeg;base64,${imgBuffer.toString('base64')}`;

  const transparentPngBase64 = await page.evaluate(async (dataUri) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = imgData.data;

        // Flood fill or threshold white background
        // Background is pure white/off-white (r > 235, g > 235, b > 235)
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i];
          const g = d[i + 1];
          const b = d[i + 2];

          // If it's near white background
          if (r > 240 && g > 240 && b > 240) {
            d[i + 3] = 0; // Transparent
          } else if (r > 225 && g > 225 && b > 225) {
            // Smooth edge feathering
            const avg = (r + g + b) / 3;
            const factor = (240 - avg) / 15;
            d[i + 3] = Math.max(0, Math.min(255, Math.floor(factor * 255)));
          }
        }

        ctx.putImageData(imgData, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = dataUri;
    });
  }, base64Img);

  await browser.close();

  const data = transparentPngBase64.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync(inputImagePath, Buffer.from(data, 'base64'));
  console.log('Successfully made suzuki-dzire.png transparent!');
}

processCarImage().catch(console.error);

