import { test as base } from '@playwright/test';
import LoginPracticePage from '../support/pageobjectmodel/pages/login.page';
import LoginLandingPage from '../support/pageobjectmodel/pages/loginLanding.page';

export const test = base.extend<{
    loginPracticePage: LoginPracticePage;
    loginLandingPage: LoginLandingPage;
}>({
    loginPracticePage: async ({ page }, use) => {
        await use(new LoginPracticePage(page));
    },
    loginLandingPage: async ({ page }, use) => {
        await use(new LoginLandingPage(page));
    }
})