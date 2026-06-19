const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });

  await page.goto('http://localhost:3300', { waitUntil: 'networkidle2' });

  const wideElements = await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    const results = [];
    const viewportWidth = 375;

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > viewportWidth || rect.width > viewportWidth) {
        let identifier = el.tagName.toLowerCase();
        if (el.id) identifier += '#' + el.id;
        if (el.className && typeof el.className === 'string') identifier += '.' + el.className.split(' ').join('.');
        
        results.push({
          tag: identifier,
          width: rect.width,
          right: rect.right,
          left: rect.left
        });
      }
    });
    return results;
  });

  console.log(JSON.stringify(wideElements, null, 2));
  await browser.close();
})();
