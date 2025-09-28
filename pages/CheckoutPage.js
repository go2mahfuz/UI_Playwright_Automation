const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.proceedToCheckoutBtn = 'a:has-text("Proceed To Checkout")';
    this.registerLoginBtn = 'a:has-text("Register / Login")';
    this.addressDetailsSection = '#address_delivery';
    this.reviewOrderSection = '#cart_items';
    this.commentTextArea = 'textarea[name="message"]';
    this.placeOrderBtn = 'button:has-text("Place Order")';
    this.nameOnCardInput = 'input[name="name_on_card"]';
    this.cardNumberInput = 'input[name="card_number"]';
    this.cvcInput = 'input[name="cvc"]';
    this.expiryMonthInput = 'input[name="expiry_month"]';
    this.expiryYearInput = 'input[name="expiry_year"]';
    this.payAndConfirmBtn = 'button:has-text("Pay and Confirm Order")';
    this.orderSuccessMsg = 'text=Your order has been placed successfully!';
  }

  async clickProceedToCheckout() {
    await this.page.click(this.proceedToCheckoutBtn);
  }

  async clickRegisterLogin() {
    await this.page.click(this.registerLoginBtn);
  }

  async verifyAddressDetailsVisible() {
    await expect(this.page.locator(this.addressDetailsSection)).toBeVisible();
  }

  async verifyReviewOrderVisible() {
    await expect(this.page.locator(this.reviewOrderSection)).toBeVisible();
  }

  async enterComment(comment) {
    await this.page.fill(this.commentTextArea, comment);
  }

  async clickPlaceOrder() {
    await this.page.click(this.placeOrderBtn);
  }

  async enterPaymentDetails({ name, number, cvc, month, year }) {
    await this.page.fill(this.nameOnCardInput, name);
    await this.page.fill(this.cardNumberInput, number);
    await this.page.fill(this.cvcInput, cvc);
    await this.page.fill(this.expiryMonthInput, month);
    await this.page.fill(this.expiryYearInput, year);
  }

  async clickPayAndConfirmOrder() {
    await this.page.click(this.payAndConfirmBtn);
  }

  async verifyOrderSuccessVisible() {
    await expect(this.page.locator(this.orderSuccessMsg)).toBeVisible();
  }
}

module.exports = { CheckoutPage };