const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { SignupPage } = require('../pages/SignupPage');
const { AccountPage } = require('../pages/AccountPage');
const testData = require('../utils/testData');

test('Place Order: Register while Checkout', async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const signupPage = new SignupPage(page);
  const accountPage = new AccountPage(page);

  // 1-3. Launch browser, navigate, verify home page
  await homePage.goto();
  await homePage.verifyHomePageVisible();

  // 4. Add products to cart
  await productsPage.clickProducts();
  await productsPage.hoverAndAddFirstProductToCart();
  await page.click('button:has-text("Continue Shopping")');
  await page.waitForSelector('.modal-content', { state: 'hidden' });
  await productsPage.hoverAndAddSecondProductToCart();

  // 5. Click 'Cart' button
  await homePage.clickCart();

  // 6. Verify cart page is displayed
  await cartPage.verifyProductsInCart(2);

  // 7. Click Proceed To Checkout
  await checkoutPage.clickProceedToCheckout();

  // 8. Click 'Register / Login' button
  await checkoutPage.clickRegisterLogin();

  // 9. Fill all details in Signup and create account
  await signupPage.verifyNewUserSignupVisible();
  await signupPage.enterNameAndEmail(testData.name, testData.email);
  await signupPage.clickSignup();
  await signupPage.verifyEnterAccountInfoVisible();
  await accountPage.fillAccountDetails(testData.accountDetails);
  await accountPage.clickCreateAccount();

  // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
  await accountPage.verifyAccountCreatedVisible();
  await accountPage.clickContinue();

  // 11. Verify 'Logged in as username' at top
  await accountPage.verifyLoggedInAsVisible(testData.name);

  // 12. Click 'Cart' button
  await homePage.clickCart();

  // 13. Click 'Proceed To Checkout' button
  await checkoutPage.clickProceedToCheckout();

  // 14. Verify Address Details and Review Your Order
  await checkoutPage.verifyAddressDetailsVisible();
  await checkoutPage.verifyReviewOrderVisible();

  // Log page content before clicking Place Order
  console.log('Page content before clicking Place Order:', await page.content());

  // 15. Enter description in comment text area and click 'Place Order'
  await checkoutPage.enterComment('Test order description');
  await checkoutPage.clickPlaceOrder();

  // 16. Enter payment details
  await checkoutPage.enterPaymentDetails({
    name: 'Test User',
    number: '4111111111111111',
    cvc: '123',
    month: '12',
    year: '2028'
  });

  // 17. Click 'Pay and Confirm Order' button
  await checkoutPage.clickPayAndConfirmOrder();

  // 18. Verify success message
  await checkoutPage.verifyOrderSuccessVisible();

  // 19. Click 'Delete Account' button
  await accountPage.clickDeleteAccount();

  // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
  await accountPage.verifyAccountDeletedVisible();
  await accountPage.clickContinue();
});