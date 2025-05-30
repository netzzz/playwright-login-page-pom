import { expect, type Page } from '@playwright/test';
import { LoginPageData, LoginErrorType } from '../../test-data/loginPage.data';
import { Logging } from '../../utils/logging-utils';

export default class LoginPracticePage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async openLoginPage() {
        try {
            await this.goToPage();
            Logging.logInfo("Login Page is Opened");
        }
        catch (err: any) {
            Logging.logError(err);
        }
    }

    private async goToPage() {
        await this.page.goto("https://practicetestautomation.com/practice-test-login/");
    }

    public async closeLoginPage() {
        try {
            await this.closePage();
            Logging.logInfo("Login Page is Closed");
        }
        catch (err: any) {
            Logging.logError(err);
        }
    }

    private async closePage() {
        await this.page.close();
    }

    // Locators

    usernameInput = () => this.page.locator("#username");
    passwordInput = () => this.page.locator("#password");
    submitButton = () => this.page.locator("#submit");
    errorElement = () => this.page.locator("#error");

    // Methods

    public async fillValueInUsernameField(username: string) {
        try {
            await this.fillUsername(username);
            Logging.logInfo(`${LoginPageData.getUsernameType(username)} is Entered in Username Field`)
        }
        catch (err) {
            Logging.logError(err);
        }
    }

    private async fillUsername(username: string) {
        await this.usernameInput().fill(username);
    }

    public async fillValueInPasswordField(password: string) {
        try {
            await this.fillPassword(password);
            Logging.logInfo(`${LoginPageData.getPasswordType(password)} is Entered in Password Field`);
        }
        catch (err) {
            Logging.logError(err);
        }
    }

    private async fillPassword(password: string) {
        await this.passwordInput().fill(password);
    }

    public async submitLoginForm() {
        try{
        await this.clickSubmit()
        Logging.logInfo("Login Form is Submitted");
        }
        catch (err) {
            Logging.logError(err);
        }
    }

    private async clickSubmit() {
        await this.submitButton().click();
    }

    public async checkThatErrorMessageIsDisplayed(errorType: LoginErrorType) {
        await expect(this.errorElement()).toHaveText(LoginPageData.getErrorMessage(errorType));
        Logging.logInfo(`Error message Contains '${LoginPageData.getErrorMessage(errorType)}' As Expected`);
    }
}