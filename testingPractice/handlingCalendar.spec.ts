import {test, expect} from '@playwright/test'

/* test("calendar Handling", async ({ page }) => {

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html");

    await page.locator("#first_date_picker").click();

    const targetMonth = "May";
    const targetYear = "2027";
    const targetDay = "5";

    while (true) {

        const month = await page.locator(".ui-datepicker-month").innerText();
        const year = await page.locator(".ui-datepicker-year").innerText();

        console.log(`${month} ${year}`);

        if (month === targetMonth && year === targetYear) {

            const days = page.locator(".ui-state-default");
            const count = await days.count();

            for (let i = 0; i < count; i++) {

                if (await days.nth(i).innerText() === targetDay) {
                    await days.nth(i).click();
                    break;
                }
            }

            break;
        }

        await page.getByText("Next").click();
    }
});
 */
test("calendar Handlling", async ({ page }) => {

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html");

    await page.locator("#first_date_picker").click();

    const targetMonth = "October";
    const targetYear = "2027";
    const targetDay = "10";

    while (true) {

        const month = await page.locator(".ui-datepicker-month").innerText();
        const year = await page.locator(".ui-datepicker-year").innerText();

        console.log(`${month} ${year}`);

        if (month === targetMonth && year === targetYear) {

            const days = page.locator(".ui-state-default");
            const count = await days.count();

            let dayFound = false;

            for (let i = 0; i < count; i++) {

                if (await days.nth(i).innerText() === targetDay) {
                    await days.nth(i).click();
                    dayFound = true;
                    break;
                }
            }

            if (dayFound) {
                break;
            }

        } else {
            await page.getByText("Next").click();
        }
    }
});