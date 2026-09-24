import { expect } from '@playwright/test'
import { test } from '../fixtures/POMFixtures'

test('Search for Existing Product', async ({ homePage, searchPage, page }) => {

    await homePage.openApplication()
    await searchPage.enterProductName()
    await searchPage.clickSearchButton()
    await searchPage.verifyProductResult()
})