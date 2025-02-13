import { expect } from 'chai';
import Database from '../models/Database.js';
import GooglePage from '../pages/GooglePage.js';

export default async function searchTests() {
  let driver;
  
  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('Deve verificar o título da página do Google', async () => {
    const googlePage = new GooglePage(driver);
    try {
      await googlePage.open();
      const title = await googlePage.getTitle();
      expect(title).to.equal('Google');
      await Database.saveTestResult({
        testName: 'Title Verification',
        status: 'Passed',
        errorMessage: null
      });
    } catch (error) {
      await Database.saveTestResult({
        testName: 'Title Verification',
        status: 'Failed',
        errorMessage: error.message
      });
      throw error;
    }
  });

  it('Deve realizar uma pesquisa no Google', async () => {
    const googlePage = new GooglePage(driver);
    try {
      await googlePage.search('IBM Careers');
      const title = await googlePage.getTitle();
      expect(title).to.include('IBM Careers');
      await Database.saveTestResult({
        testName: 'Search Test',
        status: 'Passed',
        errorMessage: null
      });
    } catch (error) {
      await Database.saveTestResult({
        testName: 'Search Test',
        status: 'Failed',
        errorMessage: error.message
      });
      throw error;
    }
  });
}