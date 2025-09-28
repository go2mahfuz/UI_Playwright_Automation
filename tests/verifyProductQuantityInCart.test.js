const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

// Test Case 13: Verify Product quantity in Cart
test('Verify Product quantity in Cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // 1. Launch browser & 2. Navigate to url
  await homePage.goto();

  // 3. Verify home page is visible
  await homePage.verifyHomePageVisible();

  // 4. Click 'View Product' for any product on home page
  await homePage.clickFirstHomeViewProduct();

  // 5. Verify product detail is opened
  await productsPage.verifyProductDetailVisible();

  // 6. Increase quantity to 4
  // 7. Click 'Add to cart' button
  await productsPage.setQuantityAndAddToCart(4);

  // 8. Click 'View Cart' button
  await homePage.clickViewCart();

  // 9. Verify that product is displayed in cart page with exact quantity
  await cartPage.verifyProductDetails(0, '', '4', ''); // Only check quantity, ignore price/total
});