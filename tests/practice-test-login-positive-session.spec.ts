import { expect, test, type Page } from '@playwright/test';

const practiceLoginData = {
  url: 'https://practicetestautomation.com/practice-test-login/',
  username: 'student',
  password: 'Password123',
  successPath: /\/logged-in-successfully\/$/,
};

class PracticeTestLoginPage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto(practiceLoginData.url);
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async logout(): Promise<void> {
    await this.page.getByRole('link', { name: 'Log out' }).click();
  }
}

test.describe('Practice Test Automation Login — Positive login and session flow', () => {
  test('Successful login with documented credentials', async ({ page }) => {
    test.setTimeout(60_000);
    const loginPage = new PracticeTestLoginPage(page);

    // 1. Open the practice login page.
    await loginPage.open();

    // 2. Enter the documented valid credentials and submit the form.
    await loginPage.login(practiceLoginData.username, practiceLoginData.password);

    // 3. Verify the successful-login destination, confirmation, and logout link.
    await expect(page).toHaveURL(practiceLoginData.successPath);
    await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

    // 4. Log out and verify the login form is available again.
    await loginPage.logout();
    await expect(page).toHaveURL(practiceLoginData.url);
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  });
});