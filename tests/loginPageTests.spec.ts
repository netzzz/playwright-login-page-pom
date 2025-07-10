import { test } from '../fixtures/practiceTestAutomationBasePage';
import { LoginPageData, LoginErrorType } from '../support/test-data/loginPage.data';
import { logger } from '../support/utils/logger';

test.describe('login functionality test cases', () => {
    test.beforeEach(async ({ }, testInfo) => {
        logger.info(`Test Case '${testInfo.title}' Started`);
    })

    test.afterEach(async ({ page }, testInfo) => {
        page.close();
        logger.info(`Test Case '${testInfo.title}' Completed \n`);
    })

    test('Login with Empty Username and Password Fields', async ({ loginPracticePage }) => {
        await loginPracticePage.openLoginPage();
        await loginPracticePage.submitLoginForm();
        await loginPracticePage.checkThatErrorMessageIsDisplayed(LoginErrorType.InvalidUsername);
    })

    test('Login with Valid Username and Empty Password Field', async ({ loginPracticePage }) => {
        await loginPracticePage.openLoginPage();
        await loginPracticePage.fillValueInUsernameField(LoginPageData.getValidUsername());
        await loginPracticePage.submitLoginForm();
        await loginPracticePage.checkThatErrorMessageIsDisplayed(LoginErrorType.InvalidPassword);
    })

    test('Login with Empty Username Field and Valid Password', async ({ loginPracticePage }) => {
        await loginPracticePage.openLoginPage();
        await loginPracticePage.fillValueInPasswordField(LoginPageData.getValidPassword());
        await loginPracticePage.submitLoginForm();
        await loginPracticePage.checkThatErrorMessageIsDisplayed(LoginErrorType.InvalidUsername);
    })

    test('Login with Valid Username and Invalid Password', async ({ loginPracticePage }) => {
        await loginPracticePage.openLoginPage();
        await loginPracticePage.fillValueInUsernameField(LoginPageData.getValidUsername());
        await loginPracticePage.fillValueInPasswordField(LoginPageData.getInvalidPassword());
        await loginPracticePage.submitLoginForm();
        await loginPracticePage.checkThatErrorMessageIsDisplayed(LoginErrorType.InvalidPassword);
    })

    test('Login with Invalid Username and Valid Password', async ({ loginPracticePage }) => {
        await loginPracticePage.openLoginPage();
        await loginPracticePage.fillValueInUsernameField(LoginPageData.getInvalidUsername());
        await loginPracticePage.fillValueInPasswordField(LoginPageData.getValidPassword());
        await loginPracticePage.submitLoginForm();
        await loginPracticePage.checkThatErrorMessageIsDisplayed(LoginErrorType.InvalidUsername);
    })

    test('Login with Valid Username and Valid Password', async ({ loginPracticePage, loginLandingPage }) => {
        await loginPracticePage.openLoginPage();
        await loginPracticePage.fillValueInUsernameField(LoginPageData.getValidUsername());
        await loginPracticePage.fillValueInPasswordField(LoginPageData.getValidPassword());
        await loginPracticePage.submitLoginForm();
        await loginLandingPage.verifySuccessfulLogin();
    })
})
