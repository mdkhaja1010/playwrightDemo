# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: staffAPI.spec.ts >> creating staff member
- Location: tests\staffAPI.spec.ts:27:5

# Error details

```
TypeError: _DBConfiguration.DBConfiguration.executeQuery is not a function
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
  46 |     //db validation
> 47 |     const dbResponse = await DBConfiguration.executeQuery<{ id: number; staff_name: string, email: string, role: string }>(
     |                                              ^ TypeError: _DBConfiguration.DBConfiguration.executeQuery is not a function
  48 |         query,
  49 |         [staffId]
  50 |     );
  51 |     expect(dbResponse.length).toBe(1);
  52 |     expect(Number(dbResponse[0].id)).toBe(Number(staffId));
  53 |     expect(dbResponse[0].staff_name).toBe("alex");
  54 |     expect(dbResponse[0].email).toBe("alex@gmail.com");
  55 |     expect(dbResponse[0].role).toBe("Lab Technician");
  56 | 
  57 |     const deleteQuery = 'DELETE FROM staff WHERE id = ?'
  58 |     await DBConfiguration.executeQuery(deleteQuery, [staffId]);
  59 |     console.log(`Staff member with ID ${staffId} deleted from the database.`);
  60 |     await DBConfiguration.closeDB(); 
  61 |     
  62 | 
  63 |     
  64 | 
  65 |     /*const expectedData = {
  66 |     name: payload.name,
  67 |     email: payload.email,
  68 |     department: payload.department,
  69 |     salary: payload.salary,
  70 |     city: payload.city
  71 | };
  72 | 
  73 | for (const [column, expectedValue] of Object.entries(expectedData)) {
  74 |     expect(
  75 |         dbData[column as keyof typeof dbData],
  76 |         `Mismatch in DB column: ${column}`
  77 |     ).toEqual(expectedValue);
  78 | }
  79 | */
  80 | })
```