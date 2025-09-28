// Test temporarily disabled due to failure.

const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { SignupPage } = require('../pages/SignupPage');
const { AccountPage } = require('../pages/AccountPage');
const testData = require('../utils/testData');

test('User registration and deletion flow', async ({ page }) => {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);
  const accountPage = new AccountPage(page);

  // 1. Launch browser & 2. Navigate to url
  await homePage.goto();

  // 3. Verify home page is visible
  await homePage.verifyHomePageVisible();

  // 4. Click on 'Signup / Login' button
  await homePage.clickSignupLogin();

  // 5. Verify 'New User Signup!' is visible
  await signupPage.verifyNewUserSignupVisible();

  // 6. Enter name and email address
  await signupPage.enterNameAndEmail(testData.name, testData.email);

  // 7. Click 'Signup' button
  await signupPage.clickSignup();

  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await signupPage.verifyEnterAccountInfoVisible();

  // 9-12. Fill account and address details
  await accountPage.fillAccountDetails(testData.accountDetails);

  // 13. Click 'Create Account button'
  await accountPage.clickCreateAccount();

  // 14. Verify that 'ACCOUNT CREATED!' is visible
  await accountPage.verifyAccountCreatedVisible();

  // 15. Click 'Continue' button
  await accountPage.clickContinue();

  // 16. Verify that 'Logged in as username' is visible
  await accountPage.verifyLoggedInAsVisible(testData.name);

  // 17. Click 'Delete Account' button
  await accountPage.clickDeleteAccount();

  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await accountPage.verifyAccountDeletedVisible();
  await accountPage.clickContinue();
});