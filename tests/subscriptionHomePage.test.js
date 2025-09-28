const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

// Test Case 10: Verify Subscription in home page
test('Verify Subscription in home page', async ({ page }) => {
  const homePage = new HomePage(page);

  // 1. Launch browser & 2. Navigate to url
  await homePage.goto();

  // 3. Verify home page is visible
  await homePage.verifyHomePageVisible();

  // 4. Scroll down to footer
  await homePage.scrollToFooter();

  // 5. Verify text 'SUBSCRIPTION'
  await homePage.verifySubscriptionTextVisible();

  // 6. Enter email address and click arrow button
  await homePage.subscribe(`test${Date.now()}@example.com`);

  // 7. Verify success message
  await homePage.verifySubscriptionSuccessVisible();
});