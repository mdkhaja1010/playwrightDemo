import {Page, Locator} from "@playwright/test"
export class LoginPage
{
      constructor(private page: Page) {}

    private username = this.page.getByPlaceholder('Username');
    private password = this.page.getByPlaceholder('Password');
    private loginButton = this.page.getByRole('button', {
        name: 'Login'
    });
}