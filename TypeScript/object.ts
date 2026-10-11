import data from '../testdata/a.json'

const human={person:"Rahul", age:39}
console.log(data)
console.log(data.name)
console.log(human.person)
console.log(human["person"])

const obj={
    name:"khaja",
    age:29,
    city:"Hyderabad",
    MaritalStatus:"Married",
    skills:["TS", "JS","Selenium"],
    fun: function(){
        console.log(this.name, this.age,obj.MaritalStatus,obj.skills[1])
    }
}
obj.fun()