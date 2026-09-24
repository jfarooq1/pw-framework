import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { RegisterPage } from '../pages/RegisterPage'



test('register with mandatory fields', async ({ page }) => {

    const home = new HomePage(page)
    const registerPage = new RegisterPage(page)

    await home.openApplication()
    await home.clickOnMyAccount()
    await home.openRegisterPage()

    await registerPage.enterFirstName()
    await registerPage.enterLastName()
    await registerPage.enterEmail()
    await registerPage.enterTelephone()
    await registerPage.enterPassword()
    await registerPage.enterConfirmPassword()
    await registerPage.agreeToPrivacyPolicy()
    await registerPage.submitForm()
})

test('register without filling any fields', async ({ page }) => {

    const home = new HomePage(page)
    const registerPage = new RegisterPage(page)

    await home.openApplication()
    await home.clickOnMyAccount()
    await home.openRegisterPage()

    await registerPage.submitForm()
    await registerPage.confirmWarningMessage()

})

