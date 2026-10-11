import {test, expect} from '@playwright/test'

test("shadow dom handling",async ({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/")
    await page.getByPlaceholder("Enter pizza name",{exact:true}).fill("onion pizza")
    await expect(page.getByPlaceholder("Enter pizza name")).toHaveValue("onion pizza")
    await page.waitForTimeout(2000)
})