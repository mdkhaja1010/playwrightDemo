import {test, expect} from "@playwright/test"

test("handling frames",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")
   const frame = page.frameLocator("#singleframe")
    await frame.locator("[type='text']").first().fill("khaja")
    await expect(frame.locator("[type='text']").first()).toHaveValue("khaja")
    await page.waitForTimeout(2000)
    await page.getByText("Home").click()
    await page.waitForTimeout(2000)


})  
test("handling frameInside frame", async ({page})=>{
      await page.goto("https://demo.automationtesting.in/Frames.html")
      await page.getByText("Iframe with in an Iframe").click()
      const parentframe=page.frameLocator("[src='MultipleFrames.html']")
      const childframe=parentframe.frameLocator("[src='SingleFrame.html']")
      await childframe.locator("[type='text']").first().fill("khaja")
      await expect(childframe.locator("[type='text']").first()).toHaveValue("khaja")
      await page.waitForTimeout(3000)
      await page.getByText("Home").click()
      await page.waitForTimeout(2000)

})

test("handling frameInside frame - page.frames", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Frames.html");

    await page.getByText("Iframe with in an Iframe").click();

    // Get all frames
    const frames = page.frames();

    console.log("Number of frames:", frames.length);

    for (const frame of frames) {
        console.log("Frame URL:", frame.url());
    }

    // Find parent frame
    const parentFrame = frames.find(frame =>
        frame.url().includes("MultipleFrames.html")
    );

    // Find child frame
    const childFrame = parentFrame?.childFrames().find(frame =>
        frame.url().includes("SingleFrame.html")
    );

    // Enter text
    const textbox = childFrame?.locator("[type='text']").first();

    await textbox?.fill("khaja");

    await expect(textbox!).toHaveValue("khaja");

    await page.waitForTimeout(3000);

    await page.getByText("Home").click();

    await page.waitForTimeout(2000);
});

test("handling frameInside frame - contentFrame", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Frames.html");

    await page.getByText("Iframe with in an Iframe").click();

    // Parent iframe
    const parentIframe = page.locator("[src='MultipleFrames.html']");
    const parentFrame = await parentIframe.contentFrame();

    // Child iframe inside parent iframe
    const childIframe = parentFrame?.locator("[src='SingleFrame.html']");
    const childFrame = await childIframe?.contentFrame();

    // Enter text in child iframe
    const textbox = childFrame?.locator("[type='text']").first();

    await textbox?.fill("khaja");

    await expect(textbox!).toHaveValue("khaja");

    await page.waitForTimeout(3000);

    await page.getByText("Home").click();

    await page.waitForTimeout(2000);
});