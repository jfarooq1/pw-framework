import { expect } from '@playwright/test'
import { test } from '../fixtures/POMFixtures'

test('login with valid credentials', async ({ homePage, loginPage, page }) => {
    await homePage.openApplication()
    await homePage.clickOnMyAccount()
    await homePage.openLoginPage()

    await loginPage.enterEmail()
    await loginPage.enterPassword()
    await loginPage.clickLoginButton()
    await loginPage.expectSuccessMessage()
})


test('login with in valid credentials', async ({ homePage, loginPage, page }) => {
    await homePage.openApplication()
    await homePage.clickOnMyAccount()
    await homePage.openLoginPage()

    await loginPage.enterEmail()
    await loginPage.enterWrongPassword()
    await loginPage.clickLoginButton()
    await loginPage.expectFailMessage()
})

test('login with empty credentials', async ({ homePage, loginPage, page }) => {
    await homePage.openApplication()
    await homePage.clickOnMyAccount()
    await homePage.openLoginPage()

    await loginPage.clickLoginButton()
    await loginPage.expectFailMessage()
})