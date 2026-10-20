import {test, expect} from '@playwright/test'
import tokenDetails from '../testdata/apiTokenDetails.json'
import { DBConfiguration } from '../src/utils/dbUtils/DBConfiguration'

import path from 'path'
import { ExcelUtils } from '../utils/ExcelUtils'

const staffExcelFile=path.join(__dirname, "../testdata/employeeData.xlsx")
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

    /*

{ 
    "name": "John son jon", 
    "department": "CSE",
    "email":"johndoe@gmail.com"
 }*/
})

test("getting employee Details", {tag:['@api']}, async  ({request})=>{
   const  response = await request.get(tokenDetails.baseURL+"/employees",{headers:{"Authorization":"Bearer "+token}})
   //console.log( await response.json())
   expect(response.status()).toBe(200)
})

//TC	email	department	name	updatedName


for(let user1 of datas!){
test(`creating employee member ${user1.department}`, {tag:['@api']},async  ({request})=>{
    let empId:number
    const response=await request.post(tokenDetails.baseURL+"/employees",{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        },
        data:{
            "name":user1.name,
            "department":user1.department,
            "email":user1.email
        }
    })
    const respondBody= await response.json()
    console.log("Response body:", respondBody)
    expect(response.status()).toBe(201)
    empId=Number(respondBody.id)
    expect(Number.isInteger(empId) && empId > 0).toBeTruthy();
    console.log("Employee member created with ID:", empId)
    const query='select * from employee where id=?'
    //db validation
    const dbResponse = await DBConfiguration.executeQuery<{ id: number; name: string, email: string, department: string }>(
        query,
        [empId]
    );
    expect(dbResponse).toHaveLength(1)
    const dbData = dbResponse[0];
    expect(Number(dbData.id)).toBe(Number(empId));
    expect(dbData.name).toBe(user1.name);
    expect(dbData.email).toBe(user1.email);
    expect(dbData.department).toBe(user1.department);

    console.log("Database Validation successful for employee member with ID:", empId);

    const deleteQuery = 'DELETE FROM employee WHERE id = ?'
    await DBConfiguration.executeQuery(deleteQuery, [empId]);
    console.log(`employee member with ID ${empId} deleted from the database.`);
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
test(`update employee member ${user.updatedName}`,{tag:['@api']}, async  ({request})=>{
    let empId:number
    const response=await request.post(tokenDetails.baseURL+"/employees",{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        },
        data:{
            "name":user.name,
            "email":user.email,
            "department":user.department
        }
    })
    const respondBody= await response.json()
    console.log("Response body:", respondBody)
    expect(response.status()).toBe(201)
    empId=Number(respondBody.id)
    expect(Number.isInteger(empId) && empId > 0).toBeTruthy();
    console.log("employee member created with ID:", empId)
    console.log("*********************Updating employee member with ID:", empId ,"*********************")
    const UpdateResponse=await request.put(tokenDetails.baseURL+"/employees/"+empId,{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        },
        data:{
            "name":user.updatedName,
            "email":user.email,
            "department":user.department
        }
    })
    const updateResponseBody = await UpdateResponse.json()
    console.log("Update Response body:", updateResponseBody)
    expect(UpdateResponse.status()).toBe(200)
    const query = 'select * from employee where id=?'
    //db validation
    const dbResponse = await DBConfiguration.executeQuery<{ id: number; name: string, email: string, department: string }>(
        query,
        [empId]
    );
    expect(dbResponse).toHaveLength(1)
    const dbData = dbResponse[0];
    expect(Number(dbData.id)).toBe(Number(empId));
    expect(dbData.name).toBe(user.updatedName);
    expect(dbData.email).toBe(user.email);
    expect(dbData.department).toBe(user.department);
    console.log("Database Validation successful for employeeempId member with ID:", empId);
    const deleteQuery = 'DELETE FROM employee WHERE id = ?'
    await DBConfiguration.executeQuery(deleteQuery, [empId]);
    console.log(`employee member with ID ${empId} deleted from the database.`);
})}

test(`getting employee details`, {tag:['@api']}, async  ({request})=>{
    let empId:number
    const response=await request.post(tokenDetails.baseURL+"/employees",{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        },
        data:{
            "name":"nayeem",
            "email":"nayeem@example.com",
            "department":"Civil"
        }
    })
    const respondBody= await response.json()
    console.log("Response body:", respondBody)
    expect(response.status()).toBe(201)
    empId=Number(respondBody.id)
    expect(Number.isInteger(empId) && empId > 0).toBeTruthy();
    console.log("employee member created with ID:", empId)
    console.log("*********************getting employee member with ID:", empId ,"*********************")
    const getResponse=await request.get(tokenDetails.baseURL+"/employees/"+empId,{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        }
    })
    const getResponseBody = await getResponse.json()
    console.log("Get Response body:", getResponseBody)
    expect(getResponse.status()).toBe(200)
    const deleteQuery = 'DELETE FROM employee WHERE id = ?'
    await DBConfiguration.executeQuery(deleteQuery, [empId]);
    console.log(`employee member with ID ${empId} deleted from the database.`);
})

test(`deleting employee details`, {tag:['@api']}, async  ({request})=>{
    let empId:number
    const response=await request.post(tokenDetails.baseURL+"/employees",{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        },
        data:{
            "name":"nayeem",
            "email":"nayeem@example.com",
            "department":"ECE"
        }
    })
    const respondBody= await response.json()
    console.log("Response body:", respondBody)
    expect(response.status()).toBe(201)
    empId=Number(respondBody.id)
    expect(Number.isInteger(empId) && empId > 0).toBeTruthy();
    console.log("employee member created with ID:", empId)
    console.log("*********************Deleting Employee member with ID:", empId ,"*********************")
    const getResponse=await request.delete(tokenDetails.baseURL+"/employees/"+empId,{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-Type":"application/json"
        }
    })
    
})
