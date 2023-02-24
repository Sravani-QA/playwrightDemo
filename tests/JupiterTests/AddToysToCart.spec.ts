import{expect, test} from '@playwright/test';

test('Add toys to cart', async({page})=>{
    console.log('---*** Add toys to cart ***---')

    await page.goto('https://jupiter.cloud.planittesting.com/')

    await page.locator('//a[contains(text(),"Home")]').isVisible

    await page.screenshot({path: 'screenshot/elementScreenshot1.png'})

    await page.click('//a[contains(text(),"Start Shopping")]')

    await page.click('li:nth-child(1) p:nth-child(3) > a.btn.btn-success')
     
    await page.click('//a[contains(text(),"Cart")]')

    const value=await page.locator('//input[@name="quantity"]').getAttribute('value')
    expect(value).toEqual("1")

    let price=await page.locator('//td[2]').textContent();
   // console.log(price)

    let subTotal=await page.locator('//td[2]').textContent();
    console.log(subTotal)

    if(price!=subTotal){
        console.log("Both price and subtotal is not equal i.e.,->"+price+" & "+subTotal)
    }

    await page.click('//a[contains(text(),"Check Out")]')

    await page.fill('#forename','John')

    await page.fill('#email','john.example@planit.net.au')

    await page.fill('#address','101 Example Road')

    await page.locator('#cardType').selectOption('Mastercard')

    await page.fill('#card','1234 9876 1234 9876')

    await page.click('#checkout-submit-btn')

    await page.locator('//h1[contains(text(),"Processing Order")]').isVisible

    let orderNumber=await page.locator('strong.ng-binding:nth-child(2)').textContent();
    console.log("order number is="+orderNumber)

   
     let button:any=await page.locator('//a[contains(text(),"Shopping Again")]').isEnabled
       if(button=true){console.log('Shopping button is enabled')}
       else{console.log('Shopping button is not enabled')}
   
})