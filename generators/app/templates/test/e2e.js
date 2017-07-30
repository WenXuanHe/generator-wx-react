var webdriver = require('selenium-webdriver'),
    By = webdriver.By;

var driver = new webdriver.Builder()
    .withCapabilities({
        browserName: 'chrome',
        'chromeOptions': {
            args: ['test-type']
        }
    })
    .build();

driver.get("http://localhost:3000/index.html");
const items = driver.findElement(By.id('js-course-ul'));
driver.findElement(By.id('js-course-h2')).click();
driver.wait(items.isDisplayed(), 1000);
driver.quit();
