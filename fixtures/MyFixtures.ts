import { test as baseTest } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { SearchPage } from '../pages/SearchPage'
import { Page } from '@playwright/test'

type MyFixtures = {

    homePage: HomePage
    loginPage: LoginPage
    registerPage: RegisterPage
    searchPage: SearchPage
    registerPageReady: void
    loginPageReady: void
}

export const test = baseTest.extend<MyFixtures>({

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page)
        await use(homePage)
    },

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },

    registerPage: async ({ page }, use) => {
        const registerPage = new RegisterPage(page)
        await use(registerPage)
    },

    searchPage: async ({ page }, use) => {
        const searchPage = new SearchPage(page)
        await use(searchPage)
    },

    registerPageReady: async ({ homePage }, use) => {
        await homePage.openApplication()
        await homePage.clickOnMyAccount()
        await homePage.openRegisterPage()
        await use()
    },

    loginPageReady: async ({ homePage }, use) => {
        await homePage.openApplication()
        await homePage.clickOnMyAccount()
        await homePage.openLoginPage()
        await use()
    }
})


