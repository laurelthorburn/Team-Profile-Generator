const generateHTML = (employeeArray) => {
console.log(employeeArray);
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
      

<div class="row row-cols-1 row-cols-md-2">
  <div class="col mb-4">
    <div class="card">
      <div class="card-header">
            ${employeeArray[0].getName()} <br>
              Employer Icon & ${employeeArray[0].getRole()}
      </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employeeArray[0].getId()}</li>
                <li class="list-group-item">EMAIL: ${employeeArray[0].getEmail()}</li>
                <li class="list-group-item">Office Number: ${employeeArray[0].getOfficeNumber()}</li>
              </ul>
    </div>
    </div>
  </div>

          </div>
  </div>

  </body>
  </html>
  `}; 

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
// }




  module.exports = generateHTML;

 // first, is there data past [0], if so we need to push each new array [1+] to its own card until meet array.length.. remember we did grab array.length so we can generate until === array.length