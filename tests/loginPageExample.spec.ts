import { test } from '../fixtures/practiceTestAutomationBasePage';
import { LoginPageData, LoginErrorType } from '../support/test-data/loginPage.data';

test.describe('login functionality test cases', () => {
    test.afterEach(async ({page}) => {
        page.close();
    })

    test('login with empty fields', async ({loginPracticePage}) => {
        await loginPracticePage.goto();
        await loginPracticePage.clickSubmit();
        await loginPracticePage.checkErrorMessage(LoginErrorType.InvalidUsername);
    })
    
    test('login with valid username and empty password', async ({loginPracticePage}) => {
        await loginPracticePage.goto();
        await loginPracticePage.fillUsername(LoginPageData.getValidUsername());
        await loginPracticePage.clickSubmit();
        await loginPracticePage.checkErrorMessage(LoginErrorType.InvalidPassword);
    })

    test('login with empty username and valid password', async ({loginPracticePage}) => {
        await loginPracticePage.goto();
        await loginPracticePage.fillPassword(LoginPageData.getValidPassword());
        await loginPracticePage.clickSubmit();
        await loginPracticePage.checkErrorMessage(LoginErrorType.InvalidUsername);
    })

    test('login with valid username and invalid password', async ({loginPracticePage}) => {
        await loginPracticePage.goto();
        await loginPracticePage.fillUsername(LoginPageData.getValidUsername());
        await loginPracticePage.fillPassword(LoginPageData.getInvalidPassword());
        await loginPracticePage.clickSubmit();
        await loginPracticePage.checkErrorMessage(LoginErrorType.InvalidPassword);
    })

    test('login with invalid username and valid password', async ({loginPracticePage}) => {
        await loginPracticePage.goto();
        await loginPracticePage.fillUsername(LoginPageData.getInvalidUsername());
        await loginPracticePage.fillPassword(LoginPageData.getValidPassword());
        await loginPracticePage.clickSubmit();
        await loginPracticePage.checkErrorMessage(LoginErrorType.InvalidUsername);
    })

    test('login with valid username and valid password', async ({loginPracticePage, loginLandingPage}) => {
        await loginPracticePage.goto();
        await loginPracticePage.fillUsername(LoginPageData.getValidUsername());
        await loginPracticePage.fillPassword(LoginPageData.getValidPassword());
        await loginPracticePage.clickSubmit();
        await loginLandingPage.verifySuccessfulLogin();
    })
})
