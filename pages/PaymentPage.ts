import {Page, Locator, expect} from '@playwright/test'


export class PaymentPage{
    private page:Page
    private paymentPageEle
    private cardNo:Locator
    private cardMonth:Locator
    private cardDate:Locator
    private cardcvv:Locator
    private cardName:Locator
    private userEmail:Locator
    private country:Locator
    private countrySelection:Locator
    private placeOderBtn:Locator
    constructor(page:Page){
        this.page=page
        this.paymentPageEle=page.getByText(" Payment Method ")
        this.cardNo=page.locator("[class='field'] [class='input txt text-validated']")
        this.cardMonth=page.locator("[class='input ddl']").first()
        this.cardDate=page.locator("[class='input ddl']").last()
        this.cardcvv=page.locator(".field.small .input.txt").first()
        this.page.waitForTimeout(2000)
       // this.cardName=page.getByText("Name on Card", { exact: true }).locator("..").locator("input")
        //this.cardName=page.locator("//div[@class='payment__info']//div[3]//div[1]//input[1]")
        this.cardName=page.locator("div.field").filter({ hasText: "Name on Card" }).locator("input")
        
        this.userEmail=page.locator(".details__user input").first()
        this.country=page.locator(".user__address .input.txt.text-validated")
        this.countrySelection=page.locator("[class='fa fa-search']").last()
        this.placeOderBtn=page.locator("a.btnn.action__submit.ng-star-inserted")
       
    }

    async personalInformation() :Promise<void>{
        await this.cardNo.clear()
        await this.cardNo.fill("1111 2222 3333 4444 5555")
        await this.cardMonth.selectOption("10")
        await this.cardDate.selectOption("10")
        await this.cardcvv.fill("996")
        /* console.log("996")
        console.log("Name count:", await this.cardName.count())
        console.log("Name visible:", await this.cardName.isVisible())
        console.log("Name enabled:", await this.cardName.isEnabled()) */
        await this.cardName.fill("Mohammed Khaja")
        await this.userEmail.clear()
        await this.userEmail.fill("mohammedkhaja@yopmail.com")
        await this.country.click()
        await this.country.pressSequentially("india", {delay: 100 })
        await this.countrySelection.click()
        await this.placeOderBtn.click()
        console.log("order placed")
        
    }
} 