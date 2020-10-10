// const path = require("path");
// const fs = require("fs");
// const Engineer = require("./lib/Engineer")
// const Intern = require("./lib/Intern")
// const Manager = require("./lib/Manager")

// const templatesDir = path.resolve(__dirname, "../templates");

// const render = employees => {
//   const html = [];

//   html.push(employees
//     .filter(employee => employee.getRole() === "Manager")
//     .map(manager => renderManager(manager))
//   );
//   html.push(employees
//     .filter(employee => employee.getRole() === "Engineer")
//     .map(engineer => renderEngineer(engineer))
//   );
//   html.push(employees
//     .filter(employee => employee.getRole() === "Intern")
//     .map(intern => renderIntern(intern))
//   );

//   return renderMain(html.join(""));

// };

// const renderManager = manager => {
//   let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
//   template = replacePlaceholders(template, "name", manager.getName());
//   template = replacePlaceholders(template, "role", manager.getRole());
//   template = replacePlaceholders(template, "email", manager.getEmail());
//   template = replacePlaceholders(template, "id", manager.getId());
//   template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
//   return template;
// };

// const renderEngineer = engineer => {
//   let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
//   template = replacePlaceholders(template, "name", engineer.getName());
//   template = replacePlaceholders(template, "role", engineer.getRole());
//   template = replacePlaceholders(template, "email", engineer.getEmail());
//   template = replacePlaceholders(template, "id", engineer.getId());
//   template = replacePlaceholders(template, "github", engineer.getGithub());
//   return template;
// };

// const renderIntern = intern => {
//   let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
//   template = replacePlaceholders(template, "name", intern.getName());
//   template = replacePlaceholders(template, "role", intern.getRole());
//   template = replacePlaceholders(template, "email", intern.getEmail());
//   template = replacePlaceholders(template, "id", intern.getId());
//   template = replacePlaceholders(template, "school", intern.getSchool());
//   return template;
// };



// module.exports = {}

const fs = require("fs")
const path = require("path")
const templateDir = "./templates/"
const employeeGen = require("./Employee")
const Engineer = require("./Engineer")
const Intern = require("./Intern")
const Manager = require("./Manager")
let teamMembers = ""


// Rendering the different employee roles
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templateDir, "manager.html"), "utf8");
    var managerHtml = ""
    managerHtml = managerHtml + template.replace(/{{ name }}/g, manager.getName())
        .replace(/{{ role }}/g, manager.getRole())
        .replace(/{{ email }}/g, manager.getEmail())
        .replace(/{{ id }}/g, manager.getId())
        .replace(/{{ officeNumber }}/g, manager.getOfficeNumber())
    teamMembers = teamMembers + managerHtml;
    
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templateDir, "engineer.html"), "utf8");
    var engineerHtml = ""
    engineerHtml = engineerHtml + template.replace(/{{ name }}/g, engineer.getName())
        .replace(/{{ role }}/g, engineer.getRole())
        .replace(/{{ email }}/g, engineer.getEmail())
        .replace(/{{ id }}/g, engineer.getId())
        .replace(/{{ github }}/g, engineer.getGithub())
    teamMembers = teamMembers + engineerHtml;
    
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templateDir, "intern.html"), "utf8");
    var internHtml = ""
    internHtml = internHtml + template.replace(/{{ name }}/g, intern.getName())
        .replace(/{{ role }}/g, intern.getRole())
        .replace(/{{ email }}/g, intern.getEmail())
        .replace(/{{ id }}/g, intern.getId())
        .replace(/{{ school }}/g, intern.getSchool())
    teamMembers = teamMembers + internHtml;
    
};


// Functions to create each new Constructor
function createManager(name, id, email, officeNumber) {
    const manager = new Manager(name, id, email, officeNumber)
    renderManager(manager)
}

function createEngineer(name, id, email, github) {
    const engineer = new Engineer(name, id, email, github)
    renderEngineer(engineer)
}

function createIntern(name, id, email, school) {
    const intern = new Intern(name, id, email, school)
    renderIntern(intern)
}

function renderMain() {
    let mainTemplate = fs.readFileSync(path.resolve(templateDir, "main.html"), "utf8")
    var mainHtml = ""
    mainHtml = mainHtml + mainTemplate.replace(/{{ team }}/g, teamMembers)
    let file = path.join(__dirname, 'output', "/index.html");
    // console.log(file);
    fs.writeFile(file, mainHtml, function(err) {
        if (err) {
            throw new Error(err)
        }
        console.log('done writing file')
    })
}

module.exports = {
    createManager: createManager,
    createEngineer: createEngineer,
    createIntern: createIntern,
    renderMain: renderMain
}