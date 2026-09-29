import { expect } from '@playwright/test'
import { test } from '../fixtures/MyFixtures'


test('register with mandatory fields', async ({registerPageReady, registerPage }) => {
    await registerPage.enterFirstName()
    await registerPage.enterLastName()
    await registerPage.enterEmail()
    await registerPage.enterTelephone()
    await registerPage.enterPassword()
    await registerPage.enterConfirmPassword()
    await registerPage.agreeToPrivacyPolicy()
    await registerPage.submitForm()
})

test('register without filling any fields', async ({registerPageReady, registerPage }) => {
    await registerPage.submitForm()
    await registerPage.confirmWarningMessage()

})

