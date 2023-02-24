import{expect, test} from '@playwright/test'

test('Validate errors are gone', async({page})=>{
    console.log('---*** Validate errors are gone ***---')
    page.goto('https://jupiter.cloud.planittesting.com/#/')

    await page.click('//a[contains(text(),"Contact")]')

    await page.click('//a[contains(text(),"Submit")]')

    try{
        await page.locator('#forename-err').isVisible()
        console.log('forename error exist')
    }catch(error)
    {
        throw new Error("forename error doesnot exist"); 
    }

    try{
        await page.locator('#email-err').isVisible()
        console.log('email error exist')
    }catch(error)
    {
        throw new Error("email error doesnot exist"); 
    }

    try{
        await page.locator('#message-err').isVisible()
        console.log('message error exists')
    }catch(error)
    {
        throw new Error("message error doesnot exist"); 
    }

    await page.fill('#forename','test')
    await page.fill('#email','test12@gmail.com')
    await page.fill('#message','Test should pass')

    try{
        page.locator('#forename-err').isDisabled
        console.log('forename error doesnot exist')
    }catch(error)
    {
        throw new Error("forename error exist"); 
    }

    try{
        await page.locator('#email-err').isVisible()
        console.log('email error doesnot exist')
    }catch(error)
    {
        throw new Error("email error exist"); 
    }

    try{
        await page.locator('#message-err').isVisible()
        console.log('message error doesnot exist')
    }catch(error)
    {
        throw new Error("message error exist"); 
    }
})