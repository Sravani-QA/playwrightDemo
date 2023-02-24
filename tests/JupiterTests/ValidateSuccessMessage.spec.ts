import{test} from '@playwright/test'
test('Validate success message',async({page})=>{

    console.log('---*** Validate success message ***---')

    page.goto('https://jupiter.cloud.planittesting.com/#/')

    await page.click('//a[contains(text(),"Contact")]')

    await page.fill('#forename','test')
    await page.fill('#email','test12@gmail.com')
    await page.fill('#message','Test should pass')

    await page.click('//a[contains(text(),"Submit")]')

    try{
        await page.locator('strong.ng-binding').isVisible()
       console.log('Success message is visible')
    }catch(error){
        throw new Error('Success message is not visible');
    }
})