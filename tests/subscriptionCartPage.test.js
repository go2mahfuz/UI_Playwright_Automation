const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

// Test Case 11: Verify Subscription in Cart page
test('Verify Subscription in Cart page', async ({ page }) => {
  const homePage = new HomePage(page);

  // 1. Launch browser & 2. Navigate to url
  await homePage.goto();

  // 3. Verify home page is visible
  await homePage.verifyHomePageVisible();

  // 4. Click 'Cart' button
  await homePage.clickCart();

  // 5. Scroll down to footer
  await homePage.scrollToFooter();

  // 6. Verify text 'SUBSCRIPTION'
  await homePage.verifySubscriptionTextVisible();

  // 7. Enter email address and click arrow button
  await homePage.subscribe(`test${Date.now()}@example.com`);

  // 8. Verify success message
  await homePage.verifySubscriptionSuccessVisible();
});