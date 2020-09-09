const { Builder, By, Key } = require('selenium-webdriver');
require('geckodriver');

// example test automation
(async function run() {
  // build a driver
  const driver = await new Builder().forBrowser('firefox').build();

  // open Google site in FireFox
  await driver.get('https://google.com');

  // find the input
  const input = await driver.findElement(By.name('q'));
  
  // type a search request and submit it
  await input.sendKeys('Have I truly become a monster', Key.RETURN);
}());
