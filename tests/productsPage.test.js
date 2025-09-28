const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductsPage } = require('../pages/ProductsPage');

// Test Case 8: Verify All Products and product detail page
test('Verify All Products and product detail page', async ({ page }) => {
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

  // 6. The first product is visible
  await productsPage.verifyProductsListVisible();

  // 7. Click on 'View Product' of first product
  await productsPage.clickFirstViewProduct();

  // 8. User is landed to product detail page
  // 9. Verify that detail is visible: product name, category, price, availability, condition, brand
  await productsPage.verifyProductDetailVisible();
});