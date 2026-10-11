import {test, expect} from "@playwright/test"


const prompt="Welocme To the testing"

test('handling events and alerts', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog", async(dialog)=>{
        await console.log(dialog.message())
        await dialog.accept(prompt)
    })

    await page.getByText("Simple Alert").click()
    await page.getByText("Confirmation Alert").click()
    await page.getByText("Prompt Alert").click()
    const validateText= page.locator("#demo").innerText()
    console.log(await validateText)
    expect(await validateText).toBe(`Hello ${prompt}! How are you today?`)

})
let text="Khaja"
test('alerts handling', async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    page.on("dialog", async (dialog)=>{
    await console.log(dialog.message())
    await dialog.accept(text)
    })
    await page.locator("#alertButton").click()
    await page.locator("#timerAlertButton").click()
    await page.locator("#confirmButton").click()
    await page.locator("#promtButton").click()
})