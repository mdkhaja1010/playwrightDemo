import {test, expect} from '@playwright/test'
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env.qa' });

test("filling the form",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder('Enter Name').fill("john")
    await expect(page.getByPlaceholder('Enter Name')).toHaveValue("john")
    await page.getByPlaceholder('Enter EMail').fill("johnson@gmail.com")
    await page.getByPlaceholder('Enter Phone').pressSequentially("1257884177")
   // await page.getByLabel('Male', { exact: true })
    const ele=page.locator("[class='form-group'] [class='form-check-input']")
    for(let i=0;i< await ele.count();i++){
        await ele.nth(i).click();
    }
    //await page.waitForTimeout(5000);



})

test("selecting_dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await  page.waitForTimeout(3000)
    await page.locator("#country").selectOption("india")
    await  page.waitForTimeout(3000)
    const title=await page.getByText("Data Entry Form",{exact:true}).innerText();
    console.log("*********************",title)
})

//https://demoqa.com/select-menu

test("multi Select dropdown",async ({page})=>{
     await page.goto("https://demoqa.com/select-menu")
     await page.locator("[role='combobox']").first().click()
     await page.getByText("Another root option",{exact:true}).click()

     await page.locator("[role='combobox']").nth(2).click()
     await page.getByText("Blue",{exact:true}).nth(1).click()
     await page.getByText("Red",{exact:true}).nth(1).click()

     await  page.waitForTimeout(3000)

})


test("for loop selection",async ({page})=>{
  await page.goto("https://demoqa.com/select-menu")
  await page.locator("[role='combobox']").first().click()
  const locators=await page.locator("[id='react-select-2-listbox'] [id^='react-select']")
  //for(let i=0;i< await ele.count();i++){
  for(let i=0;i< await locators.count();i++){
    console.log(await locators.nth(i).innerText())
    if(await locators.nth(i).innerText()==process.env.value){
       await locators.nth(i).click()
       break
    }

  }
  await  page.waitForTimeout(3000)

})
