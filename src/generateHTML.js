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