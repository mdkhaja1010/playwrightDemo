import {test, expect} from "@playwright/test"

test("uploading file", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const ele= page.locator("#singleFileInput")
    await ele.scrollIntoViewIfNeeded()
    await ele.setInputFiles("./testdata/urls.csv")
    
     //await page.locator('#fileUpload').setInputFiles('test-data/sample.pdf');

     const ele1=page.locator("#multipleFilesInput")
     await ele1.setInputFiles(["./testdata/urls.csv","./testdata/testng.xml"])
     await page.waitForTimeout(3000)
})

test("accepting folder", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    const ele= page.locator("#filesToUpload")
    await ele.setInputFiles(["./testdata/urls.csv","./testdata/testng.xml"])
    const ele1=await page.locator("#fileList Li")
    await expect((ele1).first()).toContainText("urls.csv")
    await expect((ele1).last()).toContainText("testng.xml")
    await page.waitForTimeout(3000)
    
     //await page.locator('#fileUpload').setInputFiles('test-data/sample.pdf');

    //  const ele1=page.locator("#multipleFilesInput")
    //  await ele1.setInputFiles(["./testdata/urls.csv","./testdata/testng.xml"])
    //  await page.waitForTimeout(3000)
})