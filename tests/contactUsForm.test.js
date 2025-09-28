// Test temporarily disabled due to failure.

const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ContactPage } = require('../pages/ContactPage');

// Test Case 6: Contact Us Form
test('Contact Us Form', async ({ page }, testInfo) => {
  const homePage = new HomePage(page);
  const contactPage = new ContactPage(page);

  // 1. Launch browser & 2. Navigate to url
  await homePage.goto();

  // 3. Verify home page is visible
  await homePage.verifyHomePageVisible();

  // 4. Click on 'Contact Us' button
  await contactPage.clickContactUs();

  // 5. Verify 'GET IN TOUCH' is visible
  await contactPage.verifyGetInTouchVisible();

  // 6. Enter name, email, subject and message
  await contactPage.fillContactForm({
    name: 'Test User',
    email: 'testuser@example.com',
    subject: 'Test Subject',
    message: 'This is a test message.'
  });

  // 7. Upload file
  const fs = require('fs');
  const filePath = 'testfile.txt';
  fs.writeFileSync(filePath, 'dummy file content');
  await contactPage.uploadFile(filePath);

  // 8. Set up dialog handler and click 'Submit' button
  page.once('dialog', dialog => dialog.accept());
  await contactPage.clickSubmit();

  // 10. Verify success message
  //console.log('Page content after submission:', await page.content());
  await expect(page.locator('#contact-page .status')).toBeVisible();

  // 11. Click 'Home' button and verify home page
  await contactPage.clickHomeButton();
  await homePage.verifyHomePageVisible();
});
