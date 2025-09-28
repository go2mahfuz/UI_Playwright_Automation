# Playwright UI Automation Framework

This project is a complete Playwright test automation framework for end-to-end UI testing of http://automationexercise.com.

## Features
- Playwright setup and configuration
- Page Object Model structure
- Utility functions for assertions and reporting
- Test suite automating the full user registration and deletion flow

## Test Steps Automated
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

## Structure
- `tests/` - Test cases
- `pages/` - Page Object Models
- `utils/` - Utility functions

## Getting Started
1. Install dependencies: `npm install`
2. Run tests: `npx playwright test`

---
This README will be updated as the framework is built out.