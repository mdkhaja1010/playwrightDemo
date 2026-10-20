# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: localGetCall.spec.ts >> creating staff member
- Location: tests\localGetCall.spec.ts:27:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "alex"
Received: undefined
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | import tokenDetails from '../testdata/apiTokenDetails.json'
  3  | import { DBConfiguration } from '../src/utils/dbUtils/DBConfiguration'
  4  | 
  5  | 
  6  | let token:string
  7  | test.beforeEach(async ({request})=>{
  8  |    const response = await request.post(tokenDetails.tokenURL,
  9  |     {headers:{"Content-Type":"application/x-www-form-urlencoded"},
  10 |     form:{"grant_type":tokenDetails.grantType,
  11 |         "client_id":tokenDetails.clientId,
  12 |         "client_secret":tokenDetails.clientSecret}})
  13 | 
  14 |     expect(response.ok()).toBeTruthy();
  15 |     const responseBody=await response.json();
  16 |     token=responseBody.access_token
  17 |     expect(token).toBeTruthy();
  18 |     console.log('Access token generated successfully');
  19 | })
  20 | 
  21 | test("getting staff Details", async  ({request})=>{
  22 |    const  response = await request.get(tokenDetails.baseURL+"/staff",{headers:{"Authorization":"Bearer "+token}})
  23 |    console.log( await response.json())
  24 |    expect(response.status()).toBe(200)
  25 | })
  26 | 
  27 | test("creating staff member", async  ({request})=>{
  28 |     const response=await request.post(tokenDetails.baseURL+"/staff",{
  29 |         headers:{
  30 |             "Authorization":"Bearer "+token,
  31 |             "Content-Type":"application/json"
  32 |         },
  33 |         data:{
  34 |             "staffName":"alex",
  35 |             "email":"alex@gmail.com",
  36 |             "role":"Lab Technician"
  37 |         }
  38 |     })
  39 |     const respondBody= await response.json()
  40 |     console.log("Response body:", respondBody)
  41 |     expect(response.status()).toBe(201)
  42 |     const staffId=respondBody.id
  43 |     expect(staffId).toBeTruthy()
  44 |     console.log("Staff member created with ID:", staffId)
  45 |     const query='select * from staff where id=?'
  46 |     const dbResponse = await DBConfiguration.executeQuery<{ id: number; name: string, email: string }>(
  47 |         query,
  48 |         [staffId]
  49 |     );
  50 |     expect(dbResponse.length).toBe(1);
  51 |     expect(Number(dbResponse[0].id)).toBe(Number(staffId));
> 52 |     expect(dbResponse[0].name).toBe("alex");
     |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  53 |     expect(dbResponse[0].email).toBe("alex@gmail.com");
  54 | 
  55 |     /*const expectedData = {
  56 |     name: payload.name,
  57 |     email: payload.email,
  58 |     department: payload.department,
  59 |     salary: payload.salary,
  60 |     city: payload.city
  61 | };
  62 | 
  63 | for (const [column, expectedValue] of Object.entries(expectedData)) {
  64 |     expect(
  65 |         dbData[column as keyof typeof dbData],
  66 |         `Mismatch in DB column: ${column}`
  67 |     ).toEqual(expectedValue);
  68 | }
  69 | */
  70 |     await DBConfiguration.closeDB(); 
  71 | })
```