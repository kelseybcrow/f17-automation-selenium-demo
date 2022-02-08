const { Builder, Capabilities, By } = require("selenium-webdriver")
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
});

afterAll(async () => {
    await driver.quit();
})

test('add a movie', async () => {
    const theInput = await driver.findElement(By.xpath('//input'))

    const searchTerm = 'Tenet'

    await theInput.sendKeys(searchTerm)

    const theButton = await driver.findElement(By.css('button'))

    await theButton.click();

    const theResult = await driver.findElement(By.xpath('//li/span')).getText()
    
    expect(theResult).toBe(searchTerm)

    await driver.sleep(3000)

})