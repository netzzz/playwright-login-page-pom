## Login Page Testing Project written using Playwright and POM Design Pattern  

* [Overview](#overview)
* [Test Cases Breakdown](#test-cases-breakdown)
* [Best Practices Highlighted](#best-practices-highlighted)
* [Instructions to Execute the Tests Locally](#instructions-to-execute-the-tests-locally)  
* [Test Logs](#test-logs)
* [Unit Tests](#unit-tests)  

### Overview  
This Test Suite, written in Playwright with TypeScript, validates different Scenarios of Login Functionality for a Web Application.  
Each Test ensures the System behaves As Expected with both Valid and Invalid Inputs.  

### Test Cases Breakdown
**1. Login with Empty Fields** 
```
test('login with empty fields', ...)
```
* Scenario: User attempts to log in without entering any username or password.  
* Expected Result: Application displays an error indicating a missing or invalid username.  
* Error Checked: LoginErrorType.InvalidUsername
  
**2. Login with Valid Username and Empty Password** 
```
test('login with valid username and empty password', ...)
```
* Scenario: User enters a valid username but leaves the password field empty.  
* Expected Result: Error message for invalid or missing password.  
* Error Checked: LoginErrorType.InvalidPassword
  
**3. Login with Empty Username and Valid Password** 
```
test('login with empty username and valid password', ...)
```
* Scenario: User fills in only the password field with a valid value.
* Expected Result: Error message for missing or invalid username.
* Error Checked: LoginErrorType.InvalidUsername
  
**4. Login with Valid Username and Invalid Password**  
```
test('login with valid username and invalid password', ...)
```
* Scenario: Correct username is entered, but the password is incorrect.  
* Expected Result: Error message for incorrect password.  
* Error Checked: LoginErrorType.InvalidPassword

**5. Login with Invalid Username and Valid Password**  
```
test('login with invalid username and valid password', ...)
```
* Scenario: User enters an incorrect username with a correct password.
* Expected Result: Error message indicating invalid username.
* Error Checked: LoginErrorType.InvalidUsername

**6. Login with Invalid Username and Valid Password**  
```
test('login with valid username and valid password', ...)
```
* Scenario: User provides both a valid username and a valid password.
* Expected Result: Login is successful, and user is redirected to the landing page.
* Verification: loginLandingPage.verifySuccessfulLogin() is called to confirm successful login.

### Best Practices Highlighted
* Isolated tests using afterEach cleanup.
* Page Object Model (POM) usage for cleaner and reusable selectors/actions.
* Data-Driven Testing: Centralized data access via LoginPageData.
* Clear Validation: Use of explicit error types improves test clarity and maintainability.
* Unit Tests: Ensure that utility functions behave as intended and produce correct results.

### Instructions to Execute the Tests Locally
1) Clone this repository
2) Make sure you have node.js installed. If you don't, please visit official website for instructions
3) Run 'npm install' to install node modules
4) Add User Environment Variable 'SECRET_KEY' with value '1223315678594234'
5) Run tests with 'npx playwright test --ui' - it will open UI mode so you can explore,
run and debug tests with a time travel experience complete with watch mode.

For other ways to run tests you can check Playwright Documentation - https://playwright.dev/docs/running-tests  

### Test Logs  
After each run, Test Log is stored in a timestamped .log file within the 'logs' directory

### Unit Tests
Unit tests have been implemented for the Encrypt and Decrypt functions. Run them using 'npm test'.



