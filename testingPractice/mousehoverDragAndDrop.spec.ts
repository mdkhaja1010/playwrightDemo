import {test, expect} from '@playwright/test'

test("drag and drop scenario", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const source= await page.locator("div#draggable")
    const target= await page.locator("div#droppable")

    //await source.dragTo(target)
    //await page.waitForTimeout(3000)

    //second method

    await source.hover()
    await page.mouse.down()
    await target.hover()
    await page.mouse.up()
    await page.waitForTimeout(3000)

})

test("scrollupAndDown",async ({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/") 

   const downloadbutton= page.getByRole("link",{name:"Download Files"})
   await page.waitForTimeout(2000)
   await downloadbutton.scrollIntoViewIfNeeded()
   await page.waitForTimeout(2000)
   await downloadbutton.click()
   await page.waitForTimeout(2000)
   const input3=  page.locator("#input3")
   await input3.fill("scroll down")
   await expect(input3).toHaveValue("scroll down")
   await page.waitForTimeout(2000)
   const testarea= page.locator("textarea#inputText")
   await testarea.fill("scrollUp")
   await expect(testarea).toHaveValue("scrollUp")
   await page.waitForTimeout(2000)


})