import { test, expect } from '../fixtures/pageFixture'
import userdata from '../testdata/userdata.json'

 test.beforeEach("Launch application and login",async ({page,loginPage})=>{
    await loginPage.launchURL(userdata.url)
    await loginPage.loginIntoApplication(userdata.username,userdata.pwd)
    await expect(loginPage["homePageIdentifier"]).toBeVisible()
 })


 test("business flow of application",{tag:['@regression','@smoke']},
    async({dashboardPage,myCartPage,myOrersListPage,orderPlacedPage,paymentPage})=>{
    
 })
