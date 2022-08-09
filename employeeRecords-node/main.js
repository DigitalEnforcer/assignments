let employees = [];
function Employee(name, title, salary, status){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "Full Time"
    this.printEmployeeForm = function(){
        console.log("Employee Name: " + this.name + ", " + "Job Title: " + this.title + ", " + "Salary: " + this.salary + "/year, " + "Status: " + this.status)
    }
}

let david = new Employee("David", "President", "$50,000")
let tom = new Employee("Tom", "Vice President", "$25,000")
let tiffany = new Employee("Tiffany", "Marketing", "$30,000")

david.status = "Contract"

david.printEmployeeForm()
tom.printEmployeeForm()
tiffany.printEmployeeForm()

employees.push(david)
employees.push(tom)
employees.push(tiffany)
console.log(employees)