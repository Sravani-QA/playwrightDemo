import{test} from '@playwright/test'

test('Validate the items in the cart',async({page})=>{
    console.log('---*** Validate the items in the cart ***---')
    await page.goto('https://jupiter.cloud.planittesting.com/#/')

    await page.click('#nav-shop')
 //Add funny cow to cart
    for(let i=1;i<=2;i++){
        await page.click('//li[6]/div[1]/p[1]/a[1]')
        console.log('Add funny cow to cart '+i+' time')
    }
//add fluffy bunny to cart
    await page.click('//li[4]/div[1]/p[1]/a[1]')
//click on cart menu
    await page.click('//a[contains(text(),"Cart")]')
//check for the toys to be in cart
    await page.locator('//td[contains(text()," Funny Cow")]').isVisible()
    await page.locator('//td[contains(text()," Fluffy Bunny")]').isVisible()
//number of funny cows in cart
    let quantity1:any=await page.getAttribute('//tr[1]/td[3]/input[1]','value')
    if(quantity1=2){
    console.log('number of funny cows in cart is '+quantity1)
    }
//number of fluffy bunny in cart
    let quantity2:any=await page.getAttribute('//tr[2]/td[3]/input[1]','value')
    if(quantity2=1){
    console.log('number of fluffy bunny in cart is '+quantity2)
    }
})