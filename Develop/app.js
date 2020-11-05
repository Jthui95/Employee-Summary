

const fs = require("fs")
const inquirer = require("inquirer")
let renderFile = require("./lib/htmlRenderer")
const generateManager = renderFile.createManager
const generateEngineer = renderFile.createEngineer
const generateIntern = renderFile.createIntern
const renderHTML = renderFile.renderMain



function init() {
    inquirer.prompt([{
        
          type: "input",
          message: "Please input your name.",
          name: "name",
          validate: function(answer){
             if (answer.length < 1) {
              return console.log("A name is required for this section.")
          } else{
             return true;
             }
         }
        },
        {
            type: "number",
            message: "Please input your ID.",
            name: "id",
            validate: function(answer){
                if (answer.length < 1) {
                 return console.log("A ID is required for this section.")
             } else{
                return true;
                }
            }
        },
        {
            type: "email",
            message: "Please input your email.",
            name: "email",
            validate: function(answer){
                if (answer.length < 1) {
                 return console.log("A email is required for this section.")
             } else{
                return true;
                }
            }
        },
        {
            type: "list",
        message: "How many employees do you have?",
        name:"role",
        choices: ["Engineer" , "Intern", "Manager"],
            validate: function(answer){
                if (answer.length < 1) {
                 return console.log("A name is required for this section.")
             } else{
                return true;
                }
            }
        },
])
.then(
function({name, id, email, role}) {
    switch(role){
        case "Engineer":
            inquirer
            .prompt({
                type:"input",
                message: "What is your Github username?",
                name: "github",
                validate: function(answer){
                    if (answer.length < 1) {
                     return console.log("A name is required for this section.")
                 } else{
                    return true;
                    }
                }
            }).then(
                function({github}) {
                    generateEngineer(name, id, email, github)
                    addOtherMembers()
                }
            )
        break
        case "Intern":
            inquirer
            .prompt({
                type:"input",
                message: "what school do you attend?",
                name:"school"
            }).then (function({school}){
                generateIntern(name,id,email,school)
                addOtherMembers()
            }
            )
            break
        case "Manager":
            inquirer
            .prompt({
                type: "input",
                message: "What is your Office Number?",
                name: "officeNumber",
                validate: function(answer){
                    if (answer.length < 1) {
                     return console.log("A name is required for this section.")
                 } else{
                    return true;
                    }
                }
            }).then(
                function({officeNumber}) {
                    generateManager(name, id, email, officeNumber)
                    addOtherMembers();
                }
            )
            break
        }
        })
    }

    function addOtherMembers(){
        inquirer.prompt({
            type:"confirm",
            message: "Are there other team members?",
            name:"addOtherMembers"
        }).then(
            function({addOtherMembers}) {
                console.log("add other members", addOtherMembers)
                if(addOtherMembers) {
                    init()
                } else {
                    renderHTML()
                }
            }
        )
        .catch(err => {
            console.log("Error adding other members", err)
            throw err
        })
    }

init();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
