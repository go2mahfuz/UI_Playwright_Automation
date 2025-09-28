const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { SignupPage } = require('../pages/SignupPage');

// Test Case 3: Login User with incorrect email and password
test('Login User with incorrect email and password', async ({ page }) => {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);

  // 1. Launch browser & 2. Navigate to url
  await homePage.goto();

  // 3. Verify home page is visible
  await homePage.verifyHomePageVisible();

  // 4. Click on 'Signup / Login' button
  await homePage.clickSignupLogin();

  // 5. Verify 'Login to your account' is visible
  await signupPage.verifyLoginToYourAccountVisible();

  // 6. Enter incorrect email address and password
  await signupPage.enterLoginCredentials('wrongemail@example.com', 'wrongpassword');

  // 7. Click 'login' button
  await signupPage.clickLoginButton();

  // 8. Verify error 'Your email or password is incorrect!' is visible
  await signupPage.verifyLoginErrorVisible();
});