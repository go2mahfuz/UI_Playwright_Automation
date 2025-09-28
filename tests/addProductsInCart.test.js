const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

// Test Case 12: Add Products in Cart
test('Add Products in Cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // 1. Launch browser & 2. Navigate to url
  await homePage.goto();

  // 3. Verify home page is visible
  await homePage.verifyHomePageVisible();

  // 4. Click 'Products' button
  await productsPage.clickProducts();

  // 5. Hover over first product and click 'Add to cart'
  await productsPage.hoverAndAddFirstProductToCart();

  // 6. Click 'Continue Shopping' button
  await page.click('button:has-text("Continue Shopping")');
  // Wait for modal to disappear
  await page.waitForSelector('.modal-content', { state: 'hidden' });
  // Add a short delay before next action
  await page.waitForTimeout(1000);

  // 7. Hover over second product and click 'Add to cart'
  await productsPage.hoverAndAddSecondProductToCart();

  // 8. Click 'View Cart' button
  await homePage.clickViewCart();

  // 9. Verify both products are added to Cart
  await cartPage.verifyProductsInCart(2);

  // 10. Verify their prices, quantity and total price
  // Note: Replace expected values below with actual values from your app
  await cartPage.verifyProductDetails(0, 'Rs. 500', '1', 'Rs. 500');
  await cartPage.verifyProductDetails(1, 'Rs. 400', '1', 'Rs. 400');
});