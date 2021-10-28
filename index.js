const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
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
    {
        type: "list",
        name: "job", 
        choices: ["Engineer", "Intern", "Finish building my team."]
    },
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
  ]);
};

const copyrightText = (copyright) => {
  if (copyright === "MIT License") {
    return `Copyright <2021>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
  if (copyright === "IBM Public License Version 1.0"){
    return `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS IBM PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.

    For more information, visit: https://opensource.org/licenses/IPL-1.0`
  }
  if (copyright === "The Apache License"){
    return `Copyright 2020 The Apache Software Foundation

This product includes software developed at
The Apache Software Foundation (http://www.apache.org/).

The Initial Developer of some parts of the framework, which are copied from, derived from, or
inspired by Adobe Flex (via Apache Flex), is Adobe Systems Incorporated (http://www.adobe.com/).
Copyright 2003 - 2012 Adobe Systems Incorporated. All Rights Reserved.

The Initial Developer of the examples/mxroyale/tourdeflexmodules, 
is Adobe Systems Incorporated (http://www.adobe.com/).
Copyright 2009 - 2013 Adobe Systems Incorporated. All Rights Reserved.
`
  }
  if (copyright === "Creative Commons - CC0"){
    return `CC0 (aka CC Zero) is a public dedication tool, which allows creators to give up their copyright and put their works into the worldwide public domain. CC0 allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, with no conditions.`
  }
  if (copyright === "Eclipse Public License (EPL)"){
    return `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.

    For more information visit: https://www.eclipse.org/legal/epl-v10.html`

  }
}

const licenseBadge = (copyright) => {
    if (copyright === "MIT License") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (copyright === "IBM Public License Version 1.0"){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  if (copyright === "The Apache License"){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (copyright === "Creative Commons - CC0"){
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  }
  if (copyright === "Eclipse Public License (EPL)"){
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }

}


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
const init = () => {
  promptUser()
  // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('./dist/index.html', generateHTML(answers))) //confirm i go to the right place
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
