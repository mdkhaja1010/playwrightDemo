import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { MyCartPage } from '../pages/MyCartPage'


let lp:LoginPage
let myCartPage:MyCartPage

const url:string="https://rahulshettyacademy.com/client/#/auth/login"
const username:string='mohammedkhaja632@gmail.com'
const passwod:string="Kh@ja1997"

test.beforeEach("launching Application ",async ({page})=>{
   lp=new LoginPage(page)
   await lp.launchURL(url)
   await lp.loginIntoApplication(username, passwod)
   await expect(lp["homePageIdentifier"]).toBeVisible()

})


