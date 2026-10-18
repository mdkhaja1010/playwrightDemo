import { test, expect } from '../fixtures/pageFixture'
import userdata from '../testdata/userdata.json'

 test.beforeEach("Launch application and login",async ({page,loginPage})=>{
    await loginPage.launchURL(process.env.baseUrl!)
    await loginPage.loginIntoApplication(process.env.uName!,process.env.pwd!)
    await expect(loginPage["homePageIdentifier"]).toBeVisible()
 })


 test("business flow of application",{tag:['@regression','@smoke']},
    async({dashboardPage,myCartPage,myOrersListPage,orderPlacedPage,paymentPage})=>{
    await dashboardPage.itemaddedtoPage()
    await expect(myCartPage["mycartPageText"]).toBeVisible()
    await myCartPage.mycartPageValidation()
    await expect(paymentPage["paymentPageEle"]).toBeVisible()
    await paymentPage.personalInformation()
    await expect(orderPlacedPage["orderPlacedEle"]).toBeVisible()
    const result = await orderPlacedPage.orderPlacedValidation()
    console.log("Order:", result.orderValue)
    console.log("File:", result.fileName)
    expect(result.fileName).toBe(`order-invoice_khajamd1.csv`)
    await orderPlacedPage.myOrderspage()
    await expect(myOrersListPage["yourOrdersTxt"]).toBeVisible()
    const orderListValue=await myOrersListPage.orderIdValidation()
    console.log(orderListValue)
    expect(result.orderValue).toBe(orderListValue.orderId)

 })
