export class Employee{
    empName:string
    empId:number
    empSarlary:number
    empAge:number
    empisPresent:boolean
    static companyName="ABC"

    constructor(name:string, id:number,age:number, present:boolean, empsal:number){
        this.empName=name
        this.empId=id
        this.empAge=age
        this.empisPresent=present
        this.empSarlary=empsal

    }

    displayinformation(){
        console.log("this for the class information")
    }

    static displayInformation1(){
        console.log("this is information for the static")
    }
    

}