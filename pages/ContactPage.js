const { expect } = require('@playwright/test');

class ContactPage {
  constructor(page) {
    this.page = page;
    this.contactUsBtn = 'a[href="/contact_us"]';
    this.getInTouchText = 'text=Get In Touch';
    this.nameInput = 'input[data-qa="name"]';
    this.emailInput = 'input[data-qa="email"]';
    this.subjectInput = 'input[data-qa="subject"]';
    this.messageInput = 'textarea[data-qa="message"]';
    this.uploadInput = 'input[type="file"]';
    this.submitBtn = 'input[data-qa="submit-button"]';
    this.successMsg = 'text=Success! Your details have been submitted successfully.';
    this.homeBtn = 'a[href="/"]';
  }

  async clickContactUs() {
    await this.page.click(this.contactUsBtn);
  }

  async verifyGetInTouchVisible() {
    await expect(this.page.locator(this.getInTouchText)).toBeVisible();
  }

  async fillContactForm({ name, email, subject, message }) {
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.subjectInput, subject);
    await this.page.fill(this.messageInput, message);
  }

  async uploadFile(filePath) {
    await this.page.setInputFiles(this.uploadInput, filePath);
  }

  async clickSubmit() {
    await this.page.click(this.submitBtn);
  }

  async verifySuccessMessageVisible() {
    await expect(this.page.locator(this.successMsg)).toBeVisible();
  }

  async clickHomeButton() {
    await this.page.click(this.homeBtn);
  }
}

module.exports = { ContactPage };