const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { TestCasesPage } = require('../pages/TestCasesPage');

// Test Case 7: Verify Test Cases Page
test('Verify Test Cases Page', async ({ page }) => {
  const homePage = new HomePage(page);
  const testCasesPage = new TestCasesPage(page);

  // 1. Launch browser & 2. Navigate to url
  await homePage.goto();

  // 3. Verify home page is visible
  await homePage.verifyHomePageVisible();

  // 4. Click on 'Test Cases' button
  await testCasesPage.clickTestCases();

  // 5. Verify user is navigated to test cases page successfully
  await testCasesPage.verifyTestCasesPageVisible();
});