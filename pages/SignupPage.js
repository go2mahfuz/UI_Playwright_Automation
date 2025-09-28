const { expect } = require('@playwright/test');

class SignupPage {
  async verifyEmailAlreadyExistErrorVisible() {
    await expect(this.page.locator('text=Email Address already exist!')).toBeVisible();
  }
  async verifyLoginErrorVisible() {
    await expect(this.page.locator('text=Your email or password is incorrect!')).toBeVisible();
  }
  constructor(page) {
    this.page = page;
    this.newUserSignupText = 'text=New User Signup!';
    this.nameInput = 'input[data-qa="signup-name"]';
    this.emailInput = 'input[data-qa="signup-email"]';
    this.signupBtn = 'button[data-qa="signup-button"]';
    this.enterAccountInfoText = 'text=Enter Account Information';
    this.loginToYourAccountText = 'text=Login to your account';
    this.loginEmailInput = 'input[data-qa="login-email"]';
    this.loginPasswordInput = 'input[data-qa="login-password"]';
    this.loginBtn = 'button[data-qa="login-button"]';
  }

  async verifyNewUserSignupVisible() {
    await expect(this.page.locator(this.newUserSignupText)).toBeVisible();
  }

  async verifyLoginToYourAccountVisible() {
    await expect(this.page.locator(this.loginToYourAccountText)).toBeVisible();
  }

  async enterNameAndEmail(name, email) {
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.emailInput, email);
  }

  async enterLoginCredentials(email, password) {
    await this.page.fill(this.loginEmailInput, email);
    await this.page.fill(this.loginPasswordInput, password);
  }

  async clickSignup() {
    await this.page.click(this.signupBtn);
  }

  async clickLoginButton() {
    await this.page.click(this.loginBtn);
  }

  async verifyEnterAccountInfoVisible() {
    await expect(this.page.locator(this.enterAccountInfoText)).toBeVisible();
  }
}

module.exports = { SignupPage };