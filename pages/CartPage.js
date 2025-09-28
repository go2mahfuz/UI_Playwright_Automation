const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartTable = '#cart_info_table';
    this.productRows = '#cart_info_table tbody tr';
    this.priceCell = 'td.cart_price';
    this.quantityCell = 'td.cart_quantity';
    this.totalCell = 'td.cart_total';
  }

  async verifyProductsInCart(expectedCount) {
    const rows = await this.page.locator(this.productRows).count();
    expect(rows).toBe(expectedCount);
  }

  async verifyProductDetails(rowIndex, expectedPrice, expectedQuantity, expectedTotal) {
    const quantity = await this.page.locator(`${this.productRows}:nth-child(${rowIndex + 1}) ${this.quantityCell}`).textContent();
    expect(quantity.trim()).toBe(expectedQuantity);
    if (expectedPrice) {
      const price = await this.page.locator(`${this.productRows}:nth-child(${rowIndex + 1}) ${this.priceCell}`).textContent();
      expect(price).toContain(expectedPrice);
    }
    if (expectedTotal) {
      const total = await this.page.locator(`${this.productRows}:nth-child(${rowIndex + 1}) ${this.totalCell}`).textContent();
      expect(total).toContain(expectedTotal);
    }
  }
}

module.exports = { CartPage };