import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import path from 'path'
import { ExcelUtils } from '../utils/ExcelUtils'

const filepath=path.join(__dirname, "../testdata/userdataExcel.xlsx")
const sheetName="LoginData"
let datas

try{
 datas=ExcelUtils.getDataFromExcel(filepath,sheetName)
}
catch(e){
    console.log(e)
}
console.log(datas)

let lp:LoginPage
const url:string="https://rahulshettyacademy.com/client/#/auth/login"


test.beforeEach("launching Application ",async ({page})=>{
   lp=new LoginPage(page)
   await lp.launchURL(url)

})

for(let user of datas!){
test(`Login into application using correct credentials using Excel ${user.uname}`,{tag:['@smoke','@regression']},async ()=>{
    await lp.loginIntoApplication(user.uname,user.pwd)
    await expect(lp["homePageIdentifier"]).toBeVisible()
})}


