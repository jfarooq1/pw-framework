import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

test('login with valid credentials', async ({ page }) => {

    const home = new HomePage(page)
    const login = new LoginPage(page)

    await home.openApplication()
    await home.clickOnMyAccount()
    await home.openLoginPage()

    await login.enterEmail()
    await login.enterPassword()
    await login.clickLoginButton()
    await login.expectSuccessMessage()
})


test('login with in valid credentials', async ({ page }) => {
    const home = new HomePage(page)
    const login = new LoginPage(page)

    await home.openApplication()
    await home.clickOnMyAccount()
    await home.openLoginPage()

    await login.enterEmail()
    await login.enterWrongPassword()
    await login.clickLoginButton()
    await login.expectFailMessage()
})

test('login with empty credentials', async ({ page }) => {
    const home = new HomePage(page)
    const login = new LoginPage(page)

    await home.openApplication()
    await home.clickOnMyAccount()
    await home.openLoginPage()

    await login.clickLoginButton()
    await login.expectFailMessage()
})