import {Page, Locator} from '@playwright/test'
export class MyOrderslistPage {
    private page:Page
    private yourOrdersTxt:Locator
    private orderIdText:Locator
    constructor(page:Page){
        this.page=page
        this.yourOrdersTxt=page.getByText("Your Orders",{exact:true})
        this.orderIdText=page.locator(".ng-star-inserted [scope='row']")
    }

    async orderIdValidation():Promise<{orderId:string}>{
         const count = await this.orderIdText.count()
         console.log("Count of order IDs:", count)
         const orderId = await this.orderIdText.last().innerText()
         return{orderId:orderId.trim()}

    /*     const count=await this.orderIdText.count()
        console.log("count of order Ids ", count)
        for(let i=0;i<count;i++){
            if(i==0){
                const itemName = await this.orderIdText.nth(i).innerText()
                break
            }
        }
        return {orderId}
 */
    }
    
}