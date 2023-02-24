import{test} from '@playwright/test'
test('Verify total with subtotal',async({page})=>{
    console.log('---*** Verify total with subtotal ***---')
    await page.goto('https://jupiter.cloud.planittesting.com/#/')

    await page.click('#nav-shop')
//add stuffed frog to cart
    for(let i=1;i<=2;i++){
        await page.click('//li[2]/div[1]/p[1]/a[1]')
        console.log('Add stuffed frog to cart '+i+' time')
    }
//add fluffy bunny to cart
    for(let i=1;i<=5;i++){
        await page.click('//li[4]/div[1]/p[1]/a[1]')
        console.log('Add fluffy bunny to cart '+i+' time')
    }
//add valentine bear to cart
    for(let i=1;i<=3;i++){
        await page.click('//li[7]/div[1]/p[1]/a[1]')
        console.log('Add valentine bear to cart '+i+' time')
    }
//click on cart menu
   await page.click('//a[contains(text(),"Cart")]')
//price of stuffed frog
    await page.locator('//td[contains(text(),"$10.99")]').isVisible()
//price of fluffy bunny
    await page.locator('//td[contains(text(),"$9.99")]').isVisible()
//price of valentine bear
    await page.locator('//td[contains(text(),"$14.99")]').isVisible()
//Subtotal=productPrice*quantity(for stuffed frog)
    let product1Subtotal:any=await page.locator('tr.cart-item.ng-scope:nth-child(1) > td.ng-binding:nth-child(4)').textContent();
    let newSubtotal1=product1Subtotal.substring(1,6)
    console.log('stuffed frog subtotal='+newSubtotal1)
    let productPrice1:any=await page.locator('//td[contains(text(),"$10.99")]').textContent();
    let newprice1=productPrice1.substring(1,6)
    console.log('stuffed frog price='+newprice1)
    let quantity1:any=await page.locator('//tr[1]/td[3]/input[1]').getAttribute("value")
    console.log('stuffed frog quantity='+quantity1)
    let totalPrice1=newprice1*quantity1
    console.log("Total price of stuffed frog is "+totalPrice1)
    if(newSubtotal1=totalPrice1){
        console.log('newSubtotal1=newprice1 and quantity1 tally '+newSubtotal1+' = '+totalPrice1)
    }
    else{
        throw new Error("Subtotal1=price1 and quantity1 IS NOT tally"+newSubtotal1+' = '+totalPrice1);
    }
//Subtotal=productPrice*quantity(for fluffy bunny)
    let product2Subtotal=await page.locator('tr.cart-item.ng-scope:nth-child(2) > td.ng-binding:nth-child(4)').textContent();
    let newSubtotal2:any=product2Subtotal.substring(1,6)
    console.log('fluffy bunny subtotal='+newSubtotal2)
    let productPrice2=await page.locator('tr.cart-item.ng-scope:nth-child(2) > td.ng-binding:nth-child(2)').textContent();
    let newprice2:any=productPrice2.substring(1,6)
    console.log('fluffy bunny price='+newprice2)
    let quantity2:any=await page.locator('//tr[2]/td[3]/input[1]').getAttribute("value")
    console.log('fluffy bunny quantity='+quantity2)
    let totalPrice2=newprice2*quantity2
    console.log("Total price of fluffy bunny is "+totalPrice2)
    if(newSubtotal2=totalPrice2){
        console.log('newSubtotal2=newprice2 and quantity2 tally '+newSubtotal2+' = '+totalPrice2)
    }
    else{
        throw new Error("Subtotal2=price2 and quantity2 IS NOT tally"+newSubtotal2+' = '+totalPrice2);
    }
//Subtotal=productPrice*quantity(for valentine bear)
    let product3Subtotal=await page.locator('tr.cart-item.ng-scope:nth-child(3) > td.ng-binding:nth-child(4)').textContent();
    let newSubtotal3:any=product3Subtotal.substring(1,6)
    console.log('valentine bear subtotal='+newSubtotal3)
    let productPrice3=await page.locator('tr.cart-item.ng-scope:nth-child(3) > td.ng-binding:nth-child(2)').textContent();
    let newprice3:any=productPrice3.substring(1,6)
    console.log('valentine bear price='+newprice3)
    let quantity3:any=await page.locator('//tr[3]/td[3]/input[1]').getAttribute("value")
    console.log('valentine bear quantity='+quantity3)
    let totalPrice3=newprice3*quantity3
    console.log("Total price of valentine bear is "+totalPrice3)
    if(newSubtotal3=totalPrice3){
        console.log('newSubtotal3=newprice3 and quantity3 tally '+newSubtotal3+' = '+totalPrice3)
    }
    else{
        throw new Error("Subtotal3=price3 and quantity3 IS NOT tally"+newSubtotal3+' = '+totalPrice3);
    }

//Total=sum(subtotal)
    let total=await page.locator('strong.total.ng-binding').textContent();
    let newTotal=total.substring(7,12)
    console.log('Actual total price of all products='+newTotal)
    let sumOfSubtotal=newSubtotal1+newSubtotal2+newSubtotal3
    console.log('Expected total price of all products='+sumOfSubtotal)
    if(newTotal=sumOfSubtotal){
        console.log('sum(subtotal) and total price is equal i.e., '+newTotal+' = '+sumOfSubtotal)
    }else{
        throw new Error('sum(subtotal) and total price is not equal i.e., '+newTotal+' = '+sumOfSubtotal);
        
    }

})