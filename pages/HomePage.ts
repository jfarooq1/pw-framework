import { Page } from "@playwright/test"

export class HomePage {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async openApplication() {
        await this.page.goto('https://tutorialsninja.com/demo/')
    }

    async clickOnMyAccount() {
        await this.page.getByRole('link', { name: ' My Account' }).click()
    }

    async openRegisterPage() {
        await this.page.getByText('Register').click()
    }
    async openLoginPage() {
        await this.page.getByText('Login').click()
    }

}
