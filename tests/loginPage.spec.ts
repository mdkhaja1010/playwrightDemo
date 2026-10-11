import {test, expect, Locator} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import dddatajson from '../testdata/userdataDD.json'

let lp:LoginPage

const url:string="https://rahulshettyacademy.com/client/#/auth/login"
const username:string='khajamd@yopmail.com'
const passwod:string="Kh@ja1997"
const invalidPwd:string='KHsssA'


test.beforeEach("launching Application ",async ({page})=>{
   lp=new LoginPage(page)
   await lp.launchURL(url)

})
test(`@smoke @regression Login into application using correct credentials`,async ({page})=>{
    await lp.loginIntoApplication(username,passwod)
    await expect(lp["homePageIdentifier"]).toBeVisible()
    await page.waitForTimeout(3000)
})

test("@regression Login into application using incorrect credentials",async ({page})=>{
    await lp.loginIntoApplication(username, invalidPwd)
    //await expect(lp["errorMsg"]).toHaveText("Incorrect email or password.")
    await page.waitForTimeout(3000)
})



