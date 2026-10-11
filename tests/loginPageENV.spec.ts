import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

let lp:LoginPage

test.beforeEach("launching Application ",async ({page})=>{
   lp=new LoginPage(page)
   await lp.launchURL(process.env.baseUrl!)

})
test(`Login into application using correct credentials using ENV variables`,{tag:'@regression'},async ()=>{
    await lp.loginIntoApplication(process.env.uName!,process.env.pwd!)
    await expect(lp["homePageIdentifier"]).toBeVisible()
})


