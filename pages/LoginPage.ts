import {Page, Locator} from '@playwright/test'

export class LoginPage{
    private page:Page
    private email:Locator
    private password:Locator
    private loginbtn:Locator
    private errorMsg:Locator
    private homePageIdentifier:Locator


    constructor(page:Page){
        this.page = page
        this.email = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginbtn = this.page.locator("#login")
        this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/']")
        this.errorMsg=this.page.locator("#toast-container")
    }

     async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, password: string){
        await this.email.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()
    }


}