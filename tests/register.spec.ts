import { expect } from '@playwright/test'
import { test } from '../fixtures/POMFixtures'



test('register with mandatory fields', async ({ homePage, registerPage }) => {

    await homePage.openApplication()
    await homePage.clickOnMyAccount()
    await homePage.openRegisterPage()

    await registerPage.enterFirstName()
    await registerPage.enterLastName()
    await registerPage.enterEmail()
    await registerPage.enterTelephone()
    await registerPage.enterPassword()
    await registerPage.enterConfirmPassword()
    await registerPage.agreeToPrivacyPolicy()
    await registerPage.submitForm()
})

test('register without filling any fields', async ({ homePage, registerPage }) => {

    await homePage.openApplication()
    await homePage.clickOnMyAccount()
    await homePage.openRegisterPage()

    await registerPage.submitForm()
    await registerPage.confirmWarningMessage()

})

