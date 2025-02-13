import { Builder, By, Key } from 'selenium-webdriver';

export default class GooglePage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://www.google.com';
    this.searchBox = By.name('q');
  }

  async open() {
    await this.driver.get(this.url);
    await this.driver.manage().window().maximize();
  }

  async search(term) {
    const element = await this.driver.findElement(this.searchBox);
    await element.sendKeys(term, Key.RETURN);
    await this.driver.sleep(1000); // Simulate think time
  }

  async getTitle() {
    return await this.driver.getTitle();
  }
}