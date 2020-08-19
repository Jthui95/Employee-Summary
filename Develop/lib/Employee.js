// TODO: Write code to define and export the Employee class
class Employee{
    constructor (name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName(){

    }
    getId(){

    }
    getEmail(){

    }
    getRole(){
        return "Employee"
    
    }
}
console.log(new Employee("Alice", 1 , "test@test.com"))

module.exports = Employee;