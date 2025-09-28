const { expect } = require('@playwright/test');

class AccountPage {
  async clickLogoutButton() {
    await this.page.click('a[href="/logout"]');
  }
  constructor(page) {
    this.page = page;
    this.titleMr = '#id_gender1';
    this.titleMrs = '#id_gender2';
    this.passwordInput = '#password';
    this.dobDay = '#days';
    this.dobMonth = '#months';
    this.dobYear = '#years';
    this.newsletterCheckbox = '#newsletter';
    this.specialOffersCheckbox = '#optin';
    this.firstNameInput = '#first_name';
    this.lastNameInput = '#last_name';
    this.companyInput = '#company';
    this.address1Input = '#address1';
    this.address2Input = '#address2';
    this.countrySelect = '#country';
    this.stateInput = '#state';
    this.cityInput = '#city';
    this.zipcodeInput = '#zipcode';
    this.mobileNumberInput = '#mobile_number';
    this.createAccountBtn = 'button[data-qa="create-account"]';
    this.accountCreatedText = 'text=Account Created!';
    this.continueBtn = 'a[data-qa="continue-button"]';
    this.loggedInAsText = 'text=Logged in as';
    this.deleteAccountBtn = 'a[href="/delete_account"]';
    this.accountDeletedText = 'text=Account Deleted!';
  }

  async fillAccountDetails(details) {
    if (details.title === 'Mr') {
      await this.page.check(this.titleMr);
    } else {
      await this.page.check(this.titleMrs);
    }
    await this.page.fill(this.passwordInput, details.password);
    await this.page.selectOption(this.dobDay, details.dobDay);
    await this.page.selectOption(this.dobMonth, details.dobMonth);
    await this.page.selectOption(this.dobYear, details.dobYear);
    await this.page.check(this.newsletterCheckbox);
    await this.page.check(this.specialOffersCheckbox);
    await this.page.fill(this.firstNameInput, details.firstName);
    await this.page.fill(this.lastNameInput, details.lastName);
    await this.page.fill(this.companyInput, details.company);
    await this.page.fill(this.address1Input, details.address1);
    await this.page.fill(this.address2Input, details.address2);
    await this.page.selectOption(this.countrySelect, details.country);
    await this.page.fill(this.stateInput, details.state);
    await this.page.fill(this.cityInput, details.city);
    await this.page.fill(this.zipcodeInput, details.zipcode);
    await this.page.fill(this.mobileNumberInput, details.mobileNumber);
  }

  async clickCreateAccount() {
    await this.page.click(this.createAccountBtn);
  }

  async verifyAccountCreatedVisible() {
    await expect(this.page.locator(this.accountCreatedText)).toBeVisible();
  }

  async clickContinue() {
    await this.page.click(this.continueBtn);
  }

  async verifyLoggedInAsVisible(username) {
    await expect(this.page.locator(this.loggedInAsText)).toContainText(username);
  }

  async clickDeleteAccount() {
    await this.page.click(this.deleteAccountBtn);
  }

  async verifyAccountDeletedVisible() {
    await expect(this.page.locator(this.accountDeletedText)).toBeVisible();
  }
}

module.exports = { AccountPage };