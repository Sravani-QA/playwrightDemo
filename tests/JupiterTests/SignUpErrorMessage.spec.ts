import{test, expect} from '@playwright/test';

test('Login error message', async ({page}) =>{
    console.log('---*** Login error message ***---')

    await page.goto('https://jupiter.cloud.planittesting.com/#/')

    await expect(page.locator('//h1[contains(text(), "Jupiter Toys")]')).toBeVisible

    await page.click('//a[contains(text(), "Login")]')

    await page.fill('#loginUserName','Jhon')

    await page.fill('#loginPassword','Secret@1')

    await page.click('//button[contains(text(), "Login")]')

    await expect(page.locator('#login-error')).toBeVisible
})