import {Page, Locator} from '@playwright/test'

export class MyCartPage {
    private page:Page
    private mycartPageText:Locator
    private checkoutBtn:Locator

    constructor(page:Page){
        this.page=page
        this.mycartPageText=page.getByText("My Cart",{exact:true})
        this.checkoutBtn=page.getByText("Checkout",{exact:true})
    }
    async mycartPageValidation():Promise<void>{
        await this.checkoutBtn.click()
    }

}