const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
    //manipulate data here, at end call next function
    //array of employees and push data into an array and then called continue, 3 choices and if else if for 3 branches... if finish then generate HTML
  })
};

function promptContinue(){
  return inquirer.prompt([
  {
    type: "list", //this is where we have conditional logic to call on a function, functions we create (engineer, intern, all done functions) this will have it's own function bc once we create a manager then we can call on this question
    name: "job", 
    choices: ["Engineer", "Intern", "Finish building my team."]
  },
])
.then((answers) => {
  //manipulate data here, at end call next function
  //array of employees and push data into an array and then called continue, 3 choices and if else if for 3 branches... if finish then generate HTML
})
};

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
    //manipulate data here, at end call next function
    //array of employees and push data into an array and then called continue, 3 choices and if else if for 3 branches... if finish then generate HTML
  })
};

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

  //manipulate data here, at end call next function
  //array of employees and push data into an array and then called continue, 3 choices and if else if for 3 branches... if finish then generate HTML
})
};


const generateHTML = ({ managerName, managerID, managerEmail, managerOffice }) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="./Assets/style.css">
      <title>Team Generator</title>
  </head>
  <body>
  
      <header>
        My Team  
      </header>
      
  <main>
      <div class="card" style="width: 18rem;">
          <div class="card-header">
            ${managerName}<br>
            Employer Icon & Manager
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${managerID}</li>
            <li class="list-group-item">EMAIL: ${managerEmail}</li>
            <li class="list-group-item">Office Number: ${managerOffice}</li>
          </ul>
        </div>
  
        <div class="card" style="width: 18rem;">
          <div class="card-header">
            Employer name<br>
            Employer Icon & Employer Role
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: NUMBER</li>
            <li class="list-group-item">EMAIL: email here</li>
            <li class="list-group-item">Office Number/Github/University</li>
          </ul>
        </div>
  
        <div class="card" style="width: 18rem;">
          <div class="card-header">
            Employer name<br>
            Employer Icon & Employer Role
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: NUMBER</li>
            <li class="list-group-item">EMAIL: email here</li>
            <li class="list-group-item">Office Number/Github/University</li>
          </ul>
        </div>
  
        <div class="card" style="width: 18rem;">
          <div class="card-header">
            Employer name<br>
            Employer Icon & Employer Role
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: NUMBER</li>
            <li class="list-group-item">EMAIL: email here</li>
            <li class="list-group-item">Office Number/Github/University</li>
          </ul>
        </div>
  
        <div class="card" style="width: 18rem;">
          <div class="card-header">
            Employer name<br>
            Employer Icon & Employer Role
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: NUMBER</li>
            <li class="list-group-item">EMAIL: email here</li>
            <li class="list-group-item">Office Number/Github/University</li>
          </ul>
        </div>
  
        <div class="card" style="width: 18rem;">
          <div class="card-header">
            Employer name<br>
            Employer Icon & Employer Role
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: NUMBER</li>
            <li class="list-group-item">EMAIL: email here</li>
            <li class="list-group-item">Office Number/Github/University</li>
          </ul>
        </div>
  
        </main>
  </body>
  </html>


  `; 

// Bonus using writeFileSync as a promise
// const init = () => {
//   promptManager()

//   // Use writeFileSync method to use promises instead of a callback function
//     .then((answers) => fs.writeFileSync('./dist/index.html', generateHTML(answers))) //confirm i go to the right place
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

//answers.manager - instantiate a new manager with this name 
// init();


//have to create a manager first, then have function for proceed question, then do functions for intern and engineer that call on the proceed question function until user choose abort function which generates the HTML... problem: need to figure out how to generate cards using 1. manager and then potential employees up to as many as user wants. 




//   type: "list", //this is where we have conditional logic to call on a function, functions we create (engineer, intern, all done functions) this will have it's own function bc once we create a manager then we can call on this question
