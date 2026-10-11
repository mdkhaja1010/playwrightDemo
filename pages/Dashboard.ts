import {Page,Locator} from '@playwright/test'

export class Dashboard {
    private page:Page
    private itemsList:Locator
    private viewBtn:Locator
    private  addToCartBtn:Locator
    private continueShopping:Locator
    private addToCartSuccMsg:Locator
    private openCart:Locator

    constructor(page:Page){
        this.page=page
        this.itemsList=this.page.locator("h5[style^='text-transform: uppercase']")
        this.viewBtn=this.page.getByText(" View",{exact:true})
        this.addToCartBtn=this.page.getByText("Add to Cart",{exact:true})
        this.continueShopping=this.page.getByText("Continue Shopping",{exact:true})
        this.addToCartSuccMsg=this.page.locator("#toast-container")
        this.openCart=this.page.locator("[routerlink='/dashboard/cart']")
    }

    async itemaddedtoPage(): Promise<void> {
    const countofElements = await this.itemsList.count()
    console.log("Product count:", countofElements)
    for (let i = 0; i < countofElements; i++) {
        const itemName = await this.itemsList.nth(i).innerText()
        console.log(`Product ${i}:`, itemName)
        if (itemName.toLowerCase().includes("adidas original")) {
            console.log("Product found:", itemName)
            await this.viewBtn.nth(i).click()
            console.log("View button clicked")
            break
        }
    }
    await this.addToCartBtn.click();
    await this.continueShopping.click();
    await this.openCart.click() 
    
}
      

}
