const { expect } = require('@playwright/test');

class TestCasesPage {
  constructor(page) {
    this.page = page;
    this.testCasesBtn = 'a[href="/test_cases"]';
    this.testCasesHeader = 'h2.title.text-center';
  }

  async clickTestCases() {
    await this.page.click(this.testCasesBtn);
  }

  async verifyTestCasesPageVisible() {
    await expect(this.page.locator(this.testCasesHeader)).toBeVisible();
  }
}

module.exports = { TestCasesPage };