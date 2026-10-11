    import {test, expect, Locator} from '@playwright/test'
    import { LoginPage } from '../pages/LoginPage'
    import { Dashboard } from '../pages/dashboard'
    import { MyCartPage } from '../pages/MyCartPage'
    import { PaymentPage } from '../pages/paymentPage'
    import { OrderPlacedPage } from '../pages/OrderPlacedPage'
    import { MyOrderslistPage } from '../pages/MyOrderslistPage'
    import userdata from '../testdata/userdata.json'


    let lp:LoginPage
    let dp:Dashboard
    let myCartPage:MyCartPage
    let paymentPage:PaymentPage
    let orderPlacedPage:OrderPlacedPage
    let myOrdersListPage:MyOrderslistPage

    /* const url:string="https://rahulshettyacademy.com/client/#/auth/login"
    const username:string='mohammedkhaja632@gmail.com'
    const passwod:string="Kh@ja1997" */

    test.beforeEach("launching Application ",async ({page})=>{
    lp=new LoginPage(page)
    dp=new Dashboard(page)
    myCartPage=new MyCartPage(page)
    paymentPage=new PaymentPage(page)
    orderPlacedPage=new OrderPlacedPage(page)
    myOrdersListPage=new MyOrderslistPage(page)
    await lp.launchURL(userdata.url)
    await lp.loginIntoApplication(userdata.username, userdata.pwd)
    await expect(lp["homePageIdentifier"]).toBeVisible()
    })

    test("end to end shopping for product",{tag:['@regression','@smoke']},async()=>{  
    //dp=new Dashboard(page)
    await dp.itemaddedtoPage()
    //myCartPage=new MyCartPage(page)
    await expect(myCartPage["mycartPageText"]).toBeVisible()
    await myCartPage.mycartPageValidation()
    //paymentPage=new PaymentPage(page)
    await expect(paymentPage["paymentPageEle"]).toBeVisible()
    await paymentPage.personalInformation()
    //orderPlacedPage=new OrderPlacedPage(page)
    await expect(orderPlacedPage["orderPlacedEle"]).toBeVisible()
    const result = await orderPlacedPage.orderPlacedValidation()
    console.log("Order:", result.orderValue)
    console.log("File:", result.fileName)
    expect(result.fileName).toBe("order-invoice_khajamd.csv")
    await orderPlacedPage.myOrderspage()
    //myOrdersListPage=new MyOrderslistPage(page)
    await expect(myOrdersListPage["yourOrdersTxt"]).toBeVisible()
    const orderListValue=await myOrdersListPage.orderIdValidation()
    console.log(orderListValue)
    expect(result.orderValue).toBe(orderListValue.orderId)
    })

    //smoke-4
//regression-5