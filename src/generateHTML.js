
var htmlText =  `<!DOCTYPE html>
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
    
<div class="row row-cols-1 row-cols-md-2">\n`


//creating new cards
const generateHTML = (employeeArray) => {
//loop through employee array and create a card
//each card within a backtick, take all of that content and do += to that variable we have above
//at the end of that loop, += the ending code
employeeArray.forEach(element => {
    htmlText += ` <div class="col mb-4">
    <div class="card">
      <div class="card-header">
            ${element.getName()} <br>
              Employer Icon & ${element.getRole()}
      </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${element.getId()}</li>
                <li class="list-group-item">EMAIL: ${element.getEmail()}</li>\n`
                if(element.getRole() === "Manager"){
                    htmlText += `<li class="list-group-item">OFFICE NUMBER: ${element.getOfficeNumber()}</li>\n`
                } else if(element.getRole() === "Engineer"){
                    htmlText += `<li class="list-group-item">GitHub Username: <a href="https://github.com/${element.getGitHub()}">${element.getGitHub()}</a></li>\n`
                }
                if(element.getRole() === "Intern"){
                    htmlText += `<li class="list-group-item">School: ${element.getSchool()}</li>\n`
                }
                htmlText += `</ul></div></div></div></div></body></html>` //check, might have too many div's lol
});
//writing html to a file

fs.writeFileSync('./dist/index.html', htmlText);

}



module.exports = generateHTML;


// function filterEngineer(employeeArray){
//     console.log(employeeArray.Engineer)
//     return employeeArray.Engineer

// };
// function filterIntern(employeeArray){
//     console.log(employeeArray.Intern)
//     return employeeArray.Intern
// };


// }; 

// function employeeChoice(){
//     `<div class="col mb-4">
//     <div class="card">
//       <div class="card-header">
//         Employer name<br>
//         Employer Icon & Employer Role
//       </div>
//       <div class="card-body">
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">ID: NUMBER</li>
//           <li class="list-group-item">EMAIL: email here</li>
//           <li class="list-group-item">Office Number/Github/University</li>
//         </ul>
//       </div>
//     </div>
//   </div>`



