import {test, expect} from '@playwright/test'

test("double and right click for the element",async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    const doubleClk= page.getByText("Double-Click Me To See Alert",{exact:true})
    await doubleClk.dblclick()
    await page.waitForTimeout(4000)
    const rightclck= page.getByText("right click me",{exact:true})
    await rightclck.click({button:'right'})
    await page.waitForTimeout(4000)
    await page.getByText('Quit',{exact:true}).click()
    await page.waitForTimeout(4000)
    //hover of the element
    await page.goto("https://www.spicejet.com/")
    await page.getByText("Travel Policies",{exact:true}).hover()
    await page.waitForTimeout(2000)
    await expect(page.getByTestId("test-id-Baggage Information")).toContainText("Baggage Information")
    await page.waitForTimeout(2000)
})