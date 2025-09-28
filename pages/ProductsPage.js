const { expect } = require('@playwright/test');

class ProductsPage {
  quantityInput = '#quantity';
  addToCartDetailBtn = 'button.cart';

  async setQuantityAndAddToCart(quantity) {
    await this.page.fill(this.quantityInput, String(quantity));
    await this.page.click(this.addToCartDetailBtn);
  }
  firstProductCard = '.features_items .product-image-wrapper >> nth=0';
  secondProductCard = '.features_items .product-image-wrapper >> nth=1';
  firstAddToCartBtn = '(//a[contains(@class,"add-to-cart")])[1]';
  secondAddToCartBtn = '.features_items .product-image-wrapper >> nth=1 a.add-to-cart';

  async hoverAndAddFirstProductToCart() {
    await this.page.hover(this.firstProductCard);
    await this.page.click(this.firstAddToCartBtn);
  }

  async hoverAndAddSecondProductToCart() {
    await this.page.hover(this.secondProductCard);
    const secondCard = this.page.locator(this.secondProductCard);
  const addBtn = secondCard.locator('.productinfo .add-to-cart');
  await addBtn.click({ force: true });
  }
  constructor(page) {
    this.page = page;
    this.productsBtn = 'a[href="/products"]';
    this.allProductsHeader = 'h2.title.text-center';
    this.productsList = '.features_items .product-image-wrapper';
    this.firstProduct = '.features_items .product-image-wrapper >> nth=0';
    this.firstViewProductBtn = '(//a[contains(text(),"View Product")])[1]';
    this.productName = '.product-information h2';
    this.productCategory = '.product-information p:has-text("Category")';
    this.productPrice = '.product-information span span';
    this.productAvailability = '.product-information p:has-text("Availability")';
    this.productCondition = '.product-information p:has-text("Condition")';
    this.productBrand = '.product-information p:has-text("Brand")';
    this.searchInput = '#search_product';
    this.searchBtn = '#submit_search';
    this.searchedProductsHeader = 'h2.title.text-center:has-text("Searched Products")';
  this.searchedProductsList = '.product-image-wrapper';
  }

  async searchProduct(productName) {
    await this.page.fill(this.searchInput, productName);
    await this.page.click(this.searchBtn);
  }

  async verifySearchedProductsVisible() {
    await expect(this.page.locator(this.searchedProductsHeader)).toBeVisible();
    // Check that at least one searched product card is visible
    const products = this.page.locator(this.searchedProductsList);
    let foundVisible = false;
    const count = await products.count();
    for (let i = 0; i < count; i++) {
      if (await products.nth(i).isVisible()) {
        foundVisible = true;
        break;
      }
    }
    if (!foundVisible) throw new Error('No visible searched products found');
  }
  

  async clickProducts() {
    await this.page.click(this.productsBtn);
  }

  async verifyAllProductsPageVisible() {
    await expect(this.page.locator(this.allProductsHeader)).toBeVisible();
  }

  async verifyProductsListVisible() {
    await expect(this.page.locator(this.firstProduct)).toBeVisible();
  }

  async clickFirstViewProduct() {
    await this.page.click(this.firstViewProductBtn);
  }

  async verifyProductDetailVisible() {
    await expect(this.page.locator(this.productName)).toBeVisible();
    await expect(this.page.locator(this.productCategory)).toBeVisible();
    await expect(this.page.locator(this.productPrice)).toBeVisible();
    await expect(this.page.locator(this.productAvailability)).toBeVisible();
    await expect(this.page.locator(this.productCondition)).toBeVisible();
    await expect(this.page.locator(this.productBrand)).toBeVisible();
  }
}

module.exports = { ProductsPage };