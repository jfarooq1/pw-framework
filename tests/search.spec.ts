import { expect } from '@playwright/test'
import { test } from '../fixtures/MyFixtures'

test.beforeEach('Application Setup', async ({homePage }) => {
    await homePage.openApplication()
})

test('Search for Existing Product', async ({searchPage }) => {
    await searchPage.enterProductName()
    await searchPage.clickSearchButton()
    await searchPage.verifyProductResult()
})