import { expect, type Page } from '@playwright/test';

export default class LoginLandingPage {
    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    // Locators

    successfulLoginMessage = () => this.page.getByText("Logged In Successfully")

    // Methods

    async verifySuccessfulLogin(){
        await expect(this.successfulLoginMessage()).toBeVisible();
    }
}