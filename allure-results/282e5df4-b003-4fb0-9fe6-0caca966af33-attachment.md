# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: staffAPICopy.spec.ts >> update staff member SureshU
- Location: tests\staffAPICopy.spec.ts:106:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: NaN
Received: 200
```

# Test source

```ts
  39  |    expect(response.status()).toBe(200)
  40  | })
  41  | 
  42  | for(let user1 of datas!){
  43  | test(`creating staff member ${user1.staffName}`, async  ({request})=>{
  44  |     let staffId:number
  45  |     const response=await request.post(tokenDetails.baseURL+"/staff",{
  46  |         headers:{
  47  |             "Authorization":"Bearer "+token,
  48  |             "Content-Type":"application/json"
  49  |         },
  50  |         data:{
  51  |             "staffName":user1.staffName,
  52  |             "email":user1.email,
  53  |             "role":user1.role
  54  |         }
  55  |     })
  56  |     const respondBody= await response.json()
  57  |     console.log("Response body:", respondBody)
  58  |     expect(response.status()).toBe(201)
  59  |     staffId=Number(respondBody.id)
  60  |     expect(Number.isInteger(staffId) && staffId > 0).toBeTruthy();
  61  |     console.log("Staff member created with ID:", staffId)
  62  |     const query='select * from staff where id=?'
  63  |     //db validation
  64  |     const dbResponse = await DBConfiguration.executeQuery<{ id: number; staff_name: string, email: string, role: string }>(
  65  |         query,
  66  |         [staffId]
  67  |     );
  68  |     expect(dbResponse).toHaveLength(1)
  69  |     const dbData = dbResponse[0];
  70  |     expect(Number(dbData.id)).toBe(Number(staffId));
  71  |     expect(dbData.staff_name).toBe(user.staffName);
  72  |     expect(dbData.email).toBe(user1.email);
  73  |     expect(dbData.role).toBe(user1.role);
  74  | 
  75  |     console.log("Database Validation successful for staff member with ID:", staffId);
  76  | 
  77  |     const deleteQuery = 'DELETE FROM staff WHERE id = ?'
  78  |     await DBConfiguration.executeQuery(deleteQuery, [staffId]);
  79  |     console.log(`Staff member with ID ${staffId} deleted from the database.`);
  80  | })}
  81  |     /*const expectedData = {
  82  |     name: payload.name,
  83  |     email: payload.email,
  84  |     department: payload.department,
  85  |     salary: payload.salary,
  86  |     city: payload.city
  87  | };
  88  | 
  89  | for (const [column, expectedValue] of Object.entries(expectedData)) {
  90  |     expect(
  91  |         dbData[column as keyof typeof dbData],
  92  |         `Mismatch in DB column: ${column}`
  93  |     ).toEqual(expectedValue);
  94  | }
  95  | */
  96  | const sheetName1="Update"
  97  | let data
  98  | 
  99  | try{
  100 |  data=ExcelUtils.getDataFromExcel(staffExcelFile,sheetName1)
  101 | }
  102 | catch(e){
  103 |     console.log(e)
  104 | }
  105 | for(let user of data!){
  106 | test(`update staff member ${user.UpdatedstaffName}`, async  ({request})=>{
  107 |     let staffId:number
  108 |     const response=await request.post(tokenDetails.baseURL+"/staff",{
  109 |         headers:{
  110 |             "Authorization":"Bearer "+token,
  111 |             "Content-Type":"application/json"
  112 |         },
  113 |         data:{
  114 |             "staffName":user.staffName,
  115 |             "email":user.email,
  116 |             "role":user.role
  117 |         }
  118 |     })
  119 |     const respondBody= await response.json()
  120 |     console.log("Response body:", respondBody)
  121 |     expect(response.status()).toBe(201)
  122 |     staffId=Number(respondBody.id)
  123 |     expect(Number.isInteger(staffId) && staffId > 0).toBeTruthy();
  124 |     console.log("Staff member created with ID:", staffId)
  125 |     console.log("*********************Updating staff member with ID:", staffId ,"*********************")
  126 |     const UpdateResponse=await request.put(tokenDetails.baseURL+"/staff/"+staffId,{
  127 |         headers:{
  128 |             "Authorization":"Bearer "+token,
  129 |             "Content-Type":"application/json"
  130 |         },
  131 |         data:{
  132 |             "staffName":user.UpdatedstaffName,
  133 |             "email":user.email,
  134 |             "role":user.role
  135 |         }
  136 |     })
  137 |     const updateResponseBody = await UpdateResponse.json()
  138 |     console.log("Update Response body:", updateResponseBody)
> 139 |     expect(UpdateResponse.status()).toBe(Number(user.ExpectedStatus))
      |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  140 |     const query = 'select * from staff where id=?'
  141 |     //db validation
  142 |     const dbResponse = await DBConfiguration.executeQuery<{ id: number; staff_name: string, email: string, role: string }>(
  143 |         query,
  144 |         [staffId]
  145 |     );
  146 |     expect(dbResponse).toHaveLength(1)
  147 |     const dbData = dbResponse[0];
  148 |     expect(Number(dbData.id)).toBe(Number(staffId));
  149 |     expect(dbData.staff_name).toBe(user.UpdatedstaffName);
  150 |     expect(dbData.email).toBe(user.email);
  151 |     expect(dbData.role).toBe(user.role);
  152 |     console.log("Database Validation successful for staff member with ID:", staffId);
  153 |     const deleteQuery = 'DELETE FROM staff WHERE id = ?'
  154 |     await DBConfiguration.executeQuery(deleteQuery, [staffId]);
  155 |     console.log(`Staff member with ID ${staffId} deleted from the database.`);
  156 | 
  157 | 
  158 | })}
  159 | 
  160 | test(`getting staff details`, async  ({request})=>{
  161 |     let staffId:number
  162 |     const response=await request.post(tokenDetails.baseURL+"/staff",{
  163 |         headers:{
  164 |             "Authorization":"Bearer "+token,
  165 |             "Content-Type":"application/json"
  166 |         },
  167 |         data:{
  168 |             "staffName":"nayeem",
  169 |             "email":"nayeem@example.com",
  170 |             "role":"admin"
  171 |         }
  172 |     })
  173 |     const respondBody= await response.json()
  174 |     console.log("Response body:", respondBody)
  175 |     expect(response.status()).toBe(201)
  176 |     staffId=Number(respondBody.id)
  177 |     expect(Number.isInteger(staffId) && staffId > 0).toBeTruthy();
  178 |     console.log("Staff member created with ID:", staffId)
  179 |     console.log("*********************getting staff member with ID:", staffId ,"*********************")
  180 |     const getResponse=await request.get(tokenDetails.baseURL+"/staff/"+staffId,{
  181 |         headers:{
  182 |             "Authorization":"Bearer "+token,
  183 |             "Content-Type":"application/json"
  184 |         },
  185 |     })
  186 |     const getResponseBody = await getResponse.json()
  187 |     console.log("Get Response body:", getResponseBody)
  188 |     expect(getResponse.status()).toBe(200)
  189 | })
  190 | 
  191 | test.afterAll(async () => {
  192 |     await DBConfiguration.closeDB();
  193 |     console.log('Database connection closed after all tests.');
  194 |     })
```