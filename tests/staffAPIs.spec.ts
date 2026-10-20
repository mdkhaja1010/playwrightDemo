import {test, expect} from '@playwright/test'
import tokenDetails from '../testdata/apiTokenDetails.json'
import { DBConfiguration } from '../src/utils/dbUtils/DBConfiguration'

import path from 'path'
import { ExcelUtils } from '../utils/ExcelUtils'

const staffExcelFile=path.join(__dirname, "../testdata/StaffCreate.xlsx")
const sheetName="Create"
let datas

try{
 datas=ExcelUtils.getDataFromExcel(staffExcelFile,sheetName)
}
catch(e){
    console.log(e)
}



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

test("getting staff Details", {tag:['@api']}, async  ({request})=>{
   const  response = await request.get(tokenDetails.baseURL+"/staff",{headers:{"Authorization":"Bearer "+token}})
   //console.log( await response.json())
   expect(response.status()).toBe(200)
})

for(let user1 of datas!){
test(`creating staff member ${user1.staffName}`, {tag:['@api']},async  ({request})=>{
    let staffId:number
    const response=await request.post(tokenDetails.baseURL+"/staff",{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        },
        data:{
            "staffName":user1.staffName,
            "email":user1.email,
            "role":user1.role
        }
    })
    const respondBody= await response.json()
    console.log("Response body:", respondBody)
    expect(response.status()).toBe(201)
    staffId=Number(respondBody.id)
    expect(Number.isInteger(staffId) && staffId > 0).toBeTruthy();
    console.log("Staff member created with ID:", staffId)
    const query='select * from staff where id=?'
    //db validation
    const dbResponse = await DBConfiguration.executeQuery<{ id: number; staff_name: string, email: string, role: string }>(
        query,
        [staffId]
    );
    expect(dbResponse).toHaveLength(1)
    const dbData = dbResponse[0];
    expect(Number(dbData.id)).toBe(Number(staffId));
    expect(dbData.staff_name).toBe(user1.staffName);
    expect(dbData.email).toBe(user1.email);
    expect(dbData.role).toBe(user1.role);

    console.log("Database Validation successful for staff member with ID:", staffId);

    const deleteQuery = 'DELETE FROM staff WHERE id = ?'
    await DBConfiguration.executeQuery(deleteQuery, [staffId]);
    console.log(`Staff member with ID ${staffId} deleted from the database.`);
})}
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
const sheetName1="Update"
let data

try{
 data=ExcelUtils.getDataFromExcel(staffExcelFile,sheetName1)
}
catch(e){
    console.log(e)
}
for(let user of data!){
test(`update staff member ${user.UpdatedstaffName}`,{tag:['@api']}, async  ({request})=>{
    let staffId:number
    const response=await request.post(tokenDetails.baseURL+"/staff",{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        },
        data:{
            "staffName":user.staffName,
            "email":user.email,
            "role":user.role
        }
    })
    const respondBody= await response.json()
    console.log("Response body:", respondBody)
    expect(response.status()).toBe(201)
    staffId=Number(respondBody.id)
    expect(Number.isInteger(staffId) && staffId > 0).toBeTruthy();
    console.log("Staff member created with ID:", staffId)
    console.log("*********************Updating staff member with ID:", staffId ,"*********************")
    const UpdateResponse=await request.put(tokenDetails.baseURL+"/staff/"+staffId,{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        },
        data:{
            "staffName":user.UpdatedstaffName,
            "email":user.email,
            "role":user.role
        }
    })
    const updateResponseBody = await UpdateResponse.json()
    console.log("Update Response body:", updateResponseBody)
    expect(UpdateResponse.status()).toBe(200)
    const query = 'select * from staff where id=?'
    //db validation
    const dbResponse = await DBConfiguration.executeQuery<{ id: number; staff_name: string, email: string, role: string }>(
        query,
        [staffId]
    );
    expect(dbResponse).toHaveLength(1)
    const dbData = dbResponse[0];
    expect(Number(dbData.id)).toBe(Number(staffId));
    expect(dbData.staff_name).toBe(user.UpdatedstaffName);
    expect(dbData.email).toBe(user.email);
    expect(dbData.role).toBe(user.role);
    console.log("Database Validation successful for staff member with ID:", staffId);
    const deleteQuery = 'DELETE FROM staff WHERE id = ?'
    await DBConfiguration.executeQuery(deleteQuery, [staffId]);
    console.log(`Staff member with ID ${staffId} deleted from the database.`);
})}

test(`getting staff details`, {tag:['@api']}, async  ({request})=>{
    let staffId:number
    const response=await request.post(tokenDetails.baseURL+"/staff",{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        },
        data:{
            "staffName":"nayeem",
            "email":"nayeem@example.com",
            "role":"admin"
        }
    })
    const respondBody= await response.json()
    console.log("Response body:", respondBody)
    expect(response.status()).toBe(201)
    staffId=Number(respondBody.id)
    expect(Number.isInteger(staffId) && staffId > 0).toBeTruthy();
    console.log("Staff member created with ID:", staffId)
    console.log("*********************getting staff member with ID:", staffId ,"*********************")
    const getResponse=await request.get(tokenDetails.baseURL+"/staff/"+staffId,{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        }
    })
    const getResponseBody = await getResponse.json()
    console.log("Get Response body:", getResponseBody)
    expect(getResponse.status()).toBe(200)
    const deleteQuery = 'DELETE FROM staff WHERE id = ?'
    await DBConfiguration.executeQuery(deleteQuery, [staffId]);
    console.log(`Staff member with ID ${staffId} deleted from the database.`);
})

test(`deleting staff details`, {tag:['@api']}, async  ({request})=>{
    let staffId:number
    const response=await request.post(tokenDetails.baseURL+"/staff",{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        },
        data:{
            "staffName":"nayeem",
            "email":"nayeem@example.com",
            "role":"admin"
        }
    })
    const respondBody= await response.json()
    console.log("Response body:", respondBody)
    expect(response.status()).toBe(201)
    staffId=Number(respondBody.id)
    expect(Number.isInteger(staffId) && staffId > 0).toBeTruthy();
    console.log("Staff member created with ID:", staffId)
    console.log("*********************Deleting staff member with ID:", staffId ,"*********************")
    const getResponse=await request.delete(tokenDetails.baseURL+"/staff/"+staffId,{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        }
    })
    
})
