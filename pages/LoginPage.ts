import { Page, expect } from "@playwright/test"

export class LoginPage {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async enterEmail() {
        await this.page.getByRole('textbox', { name: 'E-Mail Address' }).fill('jahanzabfarooq2@gmail.com')
    }

    async enterPassword() {
        await this.page.getByRole('textbox', { name: 'Password' }).fill('P@ssw0rd1')
    }

    async enterWrongPassword() {
        await this.page.getByRole('textbox', { name: 'Password' }).fill('P@ss')
    }

    async clickLoginButton() {
        await this.page.getByRole('button', { name: 'Login' }).click()
    }

    async expectSuccessMessage() {
        await expect(this.page.locator('div#content h2').first()).toHaveText('My Account')
    }

    async expectFailMessage() {
        await expect(this.page.locator('div.alert-danger')).toHaveText('Warning: No match for E-Mail Address and/or Password.')
    }
}

