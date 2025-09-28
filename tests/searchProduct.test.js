const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductsPage } = require('../pages/ProductsPage');

// Test Case 9: Search Product
test('Search Product', async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);

  // 1. Launch browser & 2. Navigate to url
  await homePage.goto();

  // 3. Verify home page is visible
  await homePage.verifyHomePageVisible();

  // 4. Click on 'Products' button
  await productsPage.clickProducts();

  // 5. Verify user is navigated to ALL PRODUCTS page successfully
  await productsPage.verifyAllProductsPageVisible();

  // 6. Enter product name in search input and click search button
  await productsPage.searchProduct('Dress');

  // 7. Verify 'SEARCHED PRODUCTS' is visible
  // 8. Verify all the products related to search are visible
  await productsPage.verifySearchedProductsVisible();
});