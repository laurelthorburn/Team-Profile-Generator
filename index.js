const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeArray = [];

//begin function with manager questions
promptManager()

//manager questions built into a function
function promptManager() {
  return inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?"
    },
    {
        type: "input",
        name: "managerID",
        message: "What is the team manager's employee ID?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email address?"
    },
    {
        type: "input",
        name: "managerOffice",
        message: "What is the team manager's office number?"
    },
  ])
 
  .then((answers) => {
    const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
    //want to push little manager storing in an mega array and then later will pull from the mega array to create the cards

    //pushing the manager into the mega array named employeeArray
    employeeArray.push(manager)
    console.log(employeeArray)
    promptContinue();
    //array of employees and push data into an array and then called continue, 3 choices and if else if for 3 branches... if finish then generate HTML
  })
};
// User choice path
function promptContinue(){
  return inquirer.prompt([
  {
    type: "list", //this is where we have conditional logic to call on a function, functions we create (engineer, intern, all done functions) this will have it's own function bc once we create a manager then we can call on this question
    name: "job", 
    choices: ["Engineer", "Intern", "Finish building my team."]
  },
])
.then((answers) => {
  console.log(answers)
  if(answers.job === "Engineer"){
    promptEngineer();
  } else if (answers.job === "Intern"){
    promptIntern();
  } else {
    generateHTML();
    console.log("get outta here loser, you're fired!")
  }
})
};
//engineer prompt questions built into a function
function promptEngineer(){
  return inquirer.prompt([
{
      type: "input",
      name: "engName",
      message: "What is the engineer's name?"
    },
    {
      type: "input",
      name: "engID",
      message: "What is the team engineer's employee ID?"
    },
    {
      type: "input",
      name: "engEmail",
      message: "What is the engineer's email address?"
    },
    {
      type: "input",
      name: "engGit",
      message: "What is the engineer's github username?"
    },
  ])
  .then((answers) => {
    const engineer = new Engineer(answers.engName, answers.engID, answers.engEmail, answers.engGit);
    //manipulate data here, at end call next function
    employeeArray.push(engineer);
    console.log(employeeArray);
    promptContinue();
    //array of employees and push data into an array and then called continue, 3 choices and if else if for 3 branches... if finish then generate HTML
  })
};

//intern prompt questions built into a function
function promptIntern(){
  return inquirer.prompt([
{
  type: "input",
  name: "internName",
  message: "What is the intern's name?"
},
{
  type: "input",
  name: "internID",
  message: "What is the team intern's employee ID?"
},
{
  type: "input",
  name: "internEmail",
  message: "What is the intern's email address?"
},
{
  type: "input",
  name: "school",
  message: "What is the intern's school?"
},
])
.then((answers) => {
  const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.school);
  //manipulate data here, at end call next function
  employeeArray.push(engineer);
  console.log(employeeArray);
  //manipulate data here, at end call next function
  promptContinue();
  //array of employees and push data into an array and then called continue, 3 choices and if else if for 3 branches... if finish then generate HTML
})
};

function generateHTML(){
  console.log("take 2...");
}
// Bonus using writeFileSync as a promise
// const init = () => {
//   promptManager()

//   // Use writeFileSync method to use promises instead of a callback function
//     .then((answers) => fs.writeFileSync('./dist/index.html', generateHTML(answers))) //confirm i go to the right place
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => consle.error(err));
// };

//answers.manager - instantiate a new manager with this name 
// init();


//have to create a manager first, then have function for proceed question, then do functions for intern and engineer that call on the proceed question function until user choose abort function which generates the HTML... problem: need to figure out how to generate cards using 1. manager and then potential employees up to as many as user wants. 




//   type: "list", //this is where we have conditional logic to call on a function, functions we create (engineer, intern, all done functions) this will have it's own function bc once we create a manager then we can call on this question
