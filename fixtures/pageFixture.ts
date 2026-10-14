import { test as base, expect } from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { Dashboard } from '../pages/dashboard'
import { MyCartPage } from '../pages/MyCartPage'
import { MyOrderslistPage } from '../pages/MyOrderslistPage'
import { OrderPlacedPage } from '../pages/OrderPlacedPage'
import { PaymentPage } from '../pages/paymentPage'

type PageFixtures={
    loginPage:LoginPage
    dashboardPage:Dashboard
    myCartPage:MyCartPage
    myOrersListPage:MyOrderslistPage
    orderPlacedPage:OrderPlacedPage
    paymentPage:PaymentPage
}

export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new Dashboard(page));
    },
    myCartPage: async ({ page }, use) => {
        await use(new MyCartPage(page));
    },
    myOrersListPage: async ({ page }, use) => {
        await use(new MyOrderslistPage(page));
    },
    orderPlacedPage: async ({ page }, use) => {
        await use(new OrderPlacedPage(page));
    },
    paymentPage: async ({ page }, use) => {
        await use(new PaymentPage(page));
    }

})
export { expect };

