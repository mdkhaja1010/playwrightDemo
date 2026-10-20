import {test, expect} from '@playwright/test'
import tokenDetails from '../testdata/apiTokenDetails.json'
import { DBConfiguration } from '../src/utils/dbUtils/DBConfiguration'




let token:string
test.beforeEach(async ({request})=>{
   const response = await request.post(tokenDetails.tokenURL,
    {headers:{"Content-Type":"application/x-www-form-urlencoded"},
    form:{"grant_type":tokenDetails.grantType,
        "client_id":tokenDetails.clientId,
        "client_secret":tokenDetails.clientSecret}})

    expect(response.ok()).toBeTruthy();
    const responseBody=await response.json();
    token=responseBody.access_token
    expect(token).toBeTruthy();
    console.log('Access token generated successfully');
})

test("getting staff Details", async  ({request})=>{
   const  response = await request.get(tokenDetails.baseURL+"/staff",{headers:{"Authorization":"Bearer "+token}})
   console.log( await response.json())
   expect(response.status()).toBe(200)
})

test("creating staff member", async  ({request})=>{
    const response=await request.post(tokenDetails.baseURL+"/staff",{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        },
        data:{
            "staffName":"alex",
            "email":"alex@gmail.com",
            "role":"Lab Technician"
        }
    })
    const respondBody= await response.json()
    console.log("Response body:", respondBody)
    expect(response.status()).toBe(201)
    const staffId=respondBody.id
    expect(staffId).toBeTruthy()
    console.log("Staff member created with ID:", staffId)
    const query='select * from staff where id=?'
    //db validation
    const dbResponse = await DBConfiguration.executeQuery<{ id: number; staff_name: string, email: string, role: string }>(
        query,
        [staffId]
    );
    expect(dbResponse.length).toBe(1);
    expect(Number(dbResponse[0].id)).toBe(Number(staffId));
    expect(dbResponse[0].staff_name).toBe("alex");
    expect(dbResponse[0].email).toBe("alex@gmail.com");
    expect(dbResponse[0].role).toBe("Lab Technician");

    const deleteQuery = 'DELETE FROM staff WHERE id = ?'
    await DBConfiguration.executeQuery(deleteQuery, [staffId]);
    console.log(`Staff member with ID ${staffId} deleted from the database.`);
    await DBConfiguration.closeDB(); 
    

})
    

    /*const expectedData = {
    name: payload.name,
    email: payload.email,
    department: payload.department,
    salary: payload.salary,
    city: payload.city
};

for (const [column, expectedValue] of Object.entries(expectedData)) {
    expect(
        dbData[column as keyof typeof dbData],
        `Mismatch in DB column: ${column}`
    ).toEqual(expectedValue);
}
*/
