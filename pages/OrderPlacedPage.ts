import {Page, Locator} from  '@playwright/test'
import path from 'path'

export class OrderPlacedPage{
    private page:Page
    private orderPlacedEle:Locator
    private orderId:Locator
    private downloadInvoice:Locator
    private myOrderBtn:Locator

    constructor(page:Page){
        this.page=page
        this.orderPlacedEle=page.getByText(" Thankyou for the order. ",{exact:true})
        this.orderId= page.locator(".em-spacer-1 .ng-star-inserted")
        this.downloadInvoice=page.getByText("Click To Download Order Details in CSV",{exact:true})
        this.myOrderBtn=page.locator("button[routerlink='/dashboard/myorders']")
    }

    async orderPlacedValidation(): Promise<{orderValue: string, fileName: string}> {
        let orderText =await this.orderId.innerText()
         const orderValue = orderText.replace(/\|/g, "").trim()
        console.log("******************************",orderValue )
        const downloadpromise=this.page.waitForEvent("download")
        await this.downloadInvoice.click()
        const download=await downloadpromise
        const fileName = download.suggestedFilename()
        console.log("Downloaded File:", fileName)
        const downloadDir = path.join(__dirname, "../download")
        const filePath = path.join(downloadDir, fileName)
        await download.saveAs(filePath)
        return{ orderValue,fileName}
        
    }
    async myOrderspage():Promise<void>{
        await this.myOrderBtn.click()
    }
}