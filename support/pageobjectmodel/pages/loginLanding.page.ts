import { expect, type Page } from '@playwright/test';
import { Logging } from '../../utils/logging-utils';

export default class LoginLandingPage {
    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    // Locators

    successfulLoginMessage = () => this.page.getByText("Logged In Successfully")

    // Methods

    public async verifySuccessfulLogin(){
        try {
            await this.checkIfSuccessfulLoginMessageIsVisible();
            Logging.logInfo("Succesful Login Message is Visible");
        }
        catch(err){
            Logging.logError(err);
        }
    }

    private async checkIfSuccessfulLoginMessageIsVisible(){
        await expect(this.successfulLoginMessage()).toBeVisible();
    }
}