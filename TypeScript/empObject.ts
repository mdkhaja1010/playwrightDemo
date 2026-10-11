import { Employee } from "./Employee"

const emp=new Employee("khaja",101,30,true,50000)

console.log(emp.empAge)
emp.displayinformation()

const emp2= new Employee("fathima", 199, 29, false, 30000)

console.log(emp2.empName)
console.log(emp2.empId)
console.log(emp2.empAge)
console.log(emp2.empisPresent)
console.log(Employee.companyName)
console.log(emp2.empSarlary)
Employee.displayInformation1()

class Department extends Employee {

  dept:string

  constructor(name:string, id:number,age:number, present:boolean, empsal:number, dept:string){
        super(name,id,age, present,empsal)
         this.dept=dept
       
  }

  displayinformationinfo(){
      this.displayinformation()
      console.log(this.dept)
  }


}

const depa1=new Department("khaja",101,30,true,50000,"CSC")

depa1.displayinformationinfo()