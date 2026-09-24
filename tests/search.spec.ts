import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { SearchPage } from '../pages/SearchPage'

test('Search for Existing Product', async ({ page }) => {

    const home = new HomePage(page)
    const search = new SearchPage(page)

    await home.openApplication()
    
    await search.enterProductName()
    await search.clickSearchButton()
    await search.verifyProductResult()
})