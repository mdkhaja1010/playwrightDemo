import {test, expect} from '@playwright/test'

test("screenshot scenario",async ({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/")
    //page screenshot
    await page.screenshot({path:"screenshot/page.jpeg"})
    //element screenshot
    await page.getByPlaceholder("Enter pizza name",{exact:true}).fill("onion pizza")
    await page.getByPlaceholder("Enter pizza name",{exact:true}).screenshot({path:"screenshot/element.jpeg"})
    await expect(page.getByPlaceholder("Enter pizza name")).toHaveValue("onion pizza")
    await page.screenshot({path:"screenshot/fullpage.jpeg",fullPage:true}) 

})