import {test, expect} from "@playwright/test"

test("multiple tab handling",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")
    const page1=page.waitForEvent("popup")
   // const tabBtn= page.getByText("Open New Tabbed Windows ",{exact:true})
    await page.locator("#Tabbed button").click()
    const newPage=await page1
    //await tabBtn.click()
    console.log(newPage)
    await newPage.getByText("Downloads",{exact:true}).click()
    await expect(newPage.locator("h2#bindings")).toContainText("WebDriver Language Bindings")
    //await page.bringToFront()
    await page.waitForTimeout(2000)
    await page.getByText("Home").click()
    await page.getByPlaceholder("Email id for Sign Up",{exact:true}).isVisible();
})

test("multiple window handling",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")
    await page.getByText("Open New Seperate Windows").click()
    const page1= page.waitForEvent("popup");

    await page.locator("[onclick='newwindow()']").click();

    const newpage=await page1
    console.log(newpage)
    await newpage.getByText("Getting Started",{exact:true}).isVisible()
    await page.bringToFront()
    await page.waitForTimeout(2000)
    await page.getByText("Home").click()
    await page.getByPlaceholder("Email id for Sign Up",{exact:true}).isVisible();

})

test("handling tabs and windows", async ({page})=>{
    await page.goto("https://demoqa.com/browser-windows")
    const page1= page.waitForEvent("popup")
    await page.getByText("New Tab").click()
    const newpage= await page1
    await newpage.waitForTimeout(2000)
    await expect(newpage.getByText("This is a sample page")).toContainText("This is a sample page")

    const fornewwindow=page.waitForEvent('popup')
    await page.getByRole('button',{name:'New Window',exact:true}).click()
    const newWindowPage=await fornewwindow
    await newWindowPage.waitForTimeout(2000)
    await expect(newpage.getByText("This is a sample page")).toContainText("This is a sample page") 
})



