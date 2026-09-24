import { Page, expect} from "@playwright/test"

export class RegisterPage {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async enterFirstName() {
        await this.page.getByRole('textbox', { name: '* First Name' }).fill('Jahanzab')
    }

    async enterLastName() {
        await this.page.getByRole('textbox', { name: '* Last Name' }).fill('Farooq')
    }

    async enterEmail() {
        await this.page.getByRole('textbox', { name: '* E-Mail' }).fill(randomEmail())
    }

    async enterTelephone() {
        await this.page.getByRole('textbox', { name: '* Telephone' }).fill('090078601')

    }

    async enterPassword() {
        await this.page.getByRole('textbox', { name: '* Password', exact: true }).fill('P@ssw0rd1')
    }


    async enterConfirmPassword() {
        await this.page.getByRole('textbox', { name: '* Password Confirm' }).fill('P@ssw0rd1')
    }


    async agreeToPrivacyPolicy() {
        await this.page.getByRole('checkbox').check()
    }

    async submitForm() {
        await this.page.getByRole('button', { name: 'Continue' }).click()
    }

    async confirmWarningMessage() {
        await expect(this.page.locator('div.alert-danger')).toHaveText('Warning: You must agree to the Privacy Policy!')
    }
}

function randomEmail() {
    let email = Date.now() + '@example.com';
    return email


}
