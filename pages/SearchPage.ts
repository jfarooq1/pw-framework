import { Page, expect } from "@playwright/test"

export class SearchPage {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async enterProductName() {
        await this.page.getByRole('textbox', { name: 'Search' }).fill('HP')
    }

    async clickSearchButton() {
        await this.page.locator('.btn-default').click()
    }

    async verifyProductResult() {
        await expect(this.page.getByText('HP LP3065', { exact: true })).toBeVisible()
    }

}