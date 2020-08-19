// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // const name = "Alice";
        // const id = 1;
        // const email = "test@test.com";

        super(name, id, email)
        this.github = github;
    }
    getGithub(){

    }
    getRole(){
    return "Engineer"
    }
}
console.log(new Engineer("github")) 