import {test, expect} from "@playwright/test"
import path from 'path'

test("file download", async ({page})=>{

    //await page.goto("//https://demoqa.com/upload-download")
    await page.goto("https://demoqa.com/upload-download")
    const downloadResult= page.waitForEvent("download")
    await page.locator("#downloadButton").click()
    const downloads=await downloadResult
    const downloadDir=path.join(__dirname,"../download")
    const filename = await downloads.suggestedFilename()
    const filePath=await path.join(downloadDir,filename)
    await downloads.saveAs(filePath)
    await expect(filePath).toContain(filename)
}) 