import {test, expect} from '@playwright/test'

test("endToEnd shopping scenario", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("#userEmail").fill("mohammedkhaja632@gmail.com")
    await page.locator("#userPassword").fill("Kh@ja1997")
    await page.locator("#login").click();
    await page.waitForTimeout(2000)
    

})