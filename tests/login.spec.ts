import { expect } from '@playwright/test'
import { test } from '../fixtures/MyFixtures'

test('login with valid credentials', async ({ loginPageReady, loginPage }) => {
    await loginPage.enterEmail()
    await loginPage.enterPassword()
    await loginPage.clickLoginButton()
    await loginPage.expectSuccessMessage()
})


test('login with in valid credentials', async ({ loginPageReady, loginPage }) => {
    await loginPage.enterEmail()
    await loginPage.enterWrongPassword()
    await loginPage.clickLoginButton()
    await loginPage.expectFailMessage()
})

test('login with empty credentials', async ({ loginPageReady, loginPage }) => {
    await loginPage.clickLoginButton()
    await loginPage.expectFailMessage()
})