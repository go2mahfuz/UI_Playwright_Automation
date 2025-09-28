const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { SignupPage } = require('../pages/SignupPage');
const { AccountPage } = require('../pages/AccountPage');
const testData = require('../utils/testData');

// Test Case 4: Logout User
test('Logout User', async ({ page }) => {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);
  const accountPage = new AccountPage(page);

  // Register user first to ensure account exists
  await homePage.goto();
  await homePage.verifyHomePageVisible();
  await homePage.clickSignupLogin();
  await signupPage.verifyNewUserSignupVisible();
  await signupPage.enterNameAndEmail(testData.name, testData.email);
  await signupPage.clickSignup();
  await signupPage.verifyEnterAccountInfoVisible();
  await accountPage.fillAccountDetails(testData.accountDetails);
  await accountPage.clickCreateAccount();
  await accountPage.verifyAccountCreatedVisible();
  await accountPage.clickContinue();

  // Log out to test login (if logout button exists)
  if (await page.locator('a[href="/logout"]').isVisible()) {
    await page.click('a[href="/logout"]');
  }

  // Start login and logout test steps
  await homePage.goto();
  await homePage.verifyHomePageVisible();
  await homePage.clickSignupLogin();
  await signupPage.verifyLoginToYourAccountVisible();
  await signupPage.enterLoginCredentials(testData.email, testData.accountDetails.password);
  await signupPage.clickLoginButton();
  await accountPage.verifyLoggedInAsVisible(testData.name);

  // 9. Click 'Logout' button
  await accountPage.clickLogoutButton();

  // 10. Verify that user is navigated to login page
  await signupPage.verifyLoginToYourAccountVisible();
});