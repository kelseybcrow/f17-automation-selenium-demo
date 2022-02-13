const { Builder, Capabilities, By } = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
})

afterAll(async () => {
    await driver.quit
})

test('add a movie', async () => {
    const theInput = await driver.findElement(By.xpath('//input'))

    const searchTerm = 'Tenet'

    await theInput.sendKeys(searchTerm)

    const theButton = await driver.findElement(By.css('button'))
    console.log(theResult)

    await theButton.click()

    const theResult = await driver.findElement(By.xpath('//li/span')).getText()

    expect(theResult).toBe(searchTerm)

    await driver.sleep(3000)
})

test('we can cross off a movie', async () => {
    const movieInput = await driver.findElement(By.xpath('//form/input'))

    await movieInput.sendKeys('ET\n')

    const movieLi = await driver.findElement(By.css('span'))

    await movieLi.click()

    const movieClass = await movieLi.getAttribute('class')
    console.log(movieClass)

    expect(movieClass).toBe('checked')

    await driver.sleep(6000)
})

test('this is a test, only a test', async () => {
    await driver.navigate().refresh()

    await driver.sleep(2000)

    await driver.navigate().to('https://www.google.com')
})
