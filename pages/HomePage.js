const { expect } = require('@playwright/test');

class HomePage {
  firstHomeViewProductBtn = '(//a[contains(text(),"View Product")])[1]';
  async clickFirstHomeViewProduct() {
    await this.page.click(this.firstHomeViewProductBtn);
  }
  viewCartBtn = 'a[href="/view_cart"]';
  async clickViewCart() {
    await this.page.click(this.viewCartBtn);
  }
  cartBtn = 'a[href="/view_cart"]';

  async clickCart() {
    await this.page.click(this.cartBtn);
  }
  subscriptionText = 'text=Subscription';
  subscriptionInput = '#susbscribe_email';
  subscriptionBtn = '#subscribe';
  subscriptionSuccessMsg = 'text=You have been successfully subscribed!';

  async scrollToFooter() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async verifySubscriptionTextVisible() {
    await expect(this.page.locator(this.subscriptionText)).toBeVisible();
  }

  async subscribe(email) {
    await this.page.fill(this.subscriptionInput, email);
    await this.page.click(this.subscriptionBtn);
  }

  async verifySubscriptionSuccessVisible() {
    await expect(this.page.locator(this.subscriptionSuccessMsg)).toBeVisible();
  }
  constructor(page) {
    this.page = page;
    this.signupLoginBtn = 'a[href="/login"]';
    this.newUserSignupText = 'text=New User Signup!';
  }

  async goto() {
    await this.page.goto('http://automationexercise.com');
  }

  async verifyHomePageVisible() {
    await expect(this.page.locator('body')).toBeVisible();
  }

  async clickSignupLogin() {
    await this.page.click(this.signupLoginBtn);
  }
}

module.exports = { HomePage };