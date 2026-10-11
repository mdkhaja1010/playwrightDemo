import {test, expect, Locator} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import dddatajson from '../testdata/userdataDD.json'

let lp:LoginPage


const url:string="https://rahulshettyacademy.com/client/#/auth/login"

test.beforeEach("launching Application ",async ({page})=>{
   lp=new LoginPage(page)
   await lp.launchURL(url)

})
for(let datas of dddatajson){
test(`Login into application using correct credentials using Json ${datas.username}`,{tag:'@smoke'},async ({page})=>{
    await lp.loginIntoApplication(datas.username,datas.pwd)
    await expect(lp["homePageIdentifier"]).toBeVisible()
    await page.waitForTimeout(3000)
})}
