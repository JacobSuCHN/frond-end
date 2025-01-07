const puppeteer = require('puppeteer');
const sleep = (time) => {
  new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto('https://baidu.com');

  //   await page.screenshot({
  //     path: `screenshot_${new Date().getTime()}.png`,
  //   });

  //   理解两个环境
  // node
  // page dom environment
  //   elementhandle jshandle
  const input = await page.$('#form');

  await sleep(5000);

  await input.screenshot({
    path: `screenshot_${new Date().getTime()}.png`,
  });

  browser.close();
})();
