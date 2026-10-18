# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: end2endproduct.spec.ts >> business flow of application
- Location: tests\end2endproduct.spec.ts:11:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "order-invoice_khajamd.csv"
Received: "order-invoice_khajamd1.csv"
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - table [ref=e26]:
    - rowgroup [ref=e27]:
      - row [ref=e28]:
        - cell [ref=e29]:
          - table [ref=e30]:
            - rowgroup [ref=e31]:
              - row [ref=e32]:
                - cell [ref=e33]
              - row [ref=e34]:
                - cell [ref=e35]
              - row [ref=e36]:
                - cell [ref=e37]
              - row [ref=e38]:
                - cell [ref=e39]:
                  - table [ref=e40]:
                    - rowgroup [ref=e41]:
                      - row [ref=e42]:
                        - cell [ref=e43]:
                          - table [ref=e44]:
                            - rowgroup [ref=e45]:
                              - row [ref=e46]:
                                - cell [ref=e47]:
                                  - heading "Thankyou for the order." [level=1] [ref=e48]
                              - row [ref=e49]:
                                - cell "You can see all the Orders in Orders History Page" [ref=e50]:
                                  - text: You can see all the Orders in
                                  - generic [ref=e51] [cursor=pointer]: Orders History Page
                              - row [ref=e52]:
                                - cell "| 6ad4d1e893b084c41f57b95f |" [ref=e53]
              - row [ref=e55]:
                - cell [ref=e56]
              - row [ref=e57]:
                - cell [ref=e58]:
                  - table [ref=e59]:
                    - rowgroup [ref=e60]:
                      - row [ref=e61]:
                        - cell [ref=e62]
                      - row [ref=e64]:
                        - cell [ref=e65]:
                          - img "Queen" [ref=e66]
                        - 'cell "ADIDAS ORIGINAL Qty: 1" [ref=e67]':
                          - generic [ref=e68]: ADIDAS ORIGINAL
                          - generic [ref=e69]: "Qty: 1"
                        - cell "$ 11500 Ready to Ship" [ref=e70]:
                          - generic [ref=e71]: $ 11500
                          - strong [ref=e73]: Ready to Ship
                      - row [ref=e74]:
                        - cell "Items in your order may ship separately. View your order for shipping updates." [ref=e75]: Items in your order may ship separately.View your order for shipping updates.
                      - row [ref=e76]:
                        - button "Click To Download Order Details in CSV" [active] [ref=e77] [cursor=pointer]
              - row [ref=e78]:
                - cell [ref=e79]
              - row [ref=e80]:
                - cell [ref=e81]:
                  - table [ref=e82]:
                    - rowgroup [ref=e83]:
                      - row [ref=e84]:
                        - cell [ref=e85]
                      - row [ref=e86]:
                        - cell "Questions? We're on call." [ref=e87]
                      - row [ref=e88]:
                        - cell "Monday to Friday 9am - 9pm" [ref=e89]
                      - row [ref=e90]:
                        - cell "Saturday to Sunday 10am - 6pm" [ref=e91]
                      - row [ref=e92]:
                        - cell "dummywebsite@rahulshettyacademy.com" [ref=e93]
                      - row [ref=e94]:
                        - cell [ref=e95]
              - row [ref=e96]:
                - cell [ref=e97]
              - row
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/pageFixture'
  2  | import userdata from '../testdata/userdata.json'
  3  | 
  4  |  test.beforeEach("Launch application and login",async ({page,loginPage})=>{
  5  |     await loginPage.launchURL(process.env.baseUrl!)
  6  |     await loginPage.loginIntoApplication(process.env.uName!,process.env.pwd!)
  7  |     await expect(loginPage["homePageIdentifier"]).toBeVisible()
  8  |  })
  9  | 
  10 | 
  11 |  test("business flow of application",{tag:['@regression','@smoke']},
  12 |     async({dashboardPage,myCartPage,myOrersListPage,orderPlacedPage,paymentPage})=>{
  13 |     await dashboardPage.itemaddedtoPage()
  14 |     await expect(myCartPage["mycartPageText"]).toBeVisible()
  15 |     await myCartPage.mycartPageValidation()
  16 |     await expect(paymentPage["paymentPageEle"]).toBeVisible()
  17 |     await paymentPage.personalInformation()
  18 |     await expect(orderPlacedPage["orderPlacedEle"]).toBeVisible()
  19 |     const result = await orderPlacedPage.orderPlacedValidation()
  20 |     console.log("Order:", result.orderValue)
  21 |     console.log("File:", result.fileName)
> 22 |     expect(result.fileName).toBe("order-invoice_khajamd.csv")
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  23 |     await orderPlacedPage.myOrderspage()
  24 |     await expect(myOrersListPage["yourOrdersTxt"]).toBeVisible()
  25 |     const orderListValue=await myOrersListPage.orderIdValidation()
  26 |     console.log(orderListValue)
  27 |     expect(result.orderValue).toBe(orderListValue.orderId)
  28 | 
  29 |  })
  30 | 
```