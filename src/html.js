const renderManager = (manager) => {
    return `<div class="card employee-card mr-4 ml-4 mb-3">
    <div class="card-header text-center">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a>
            </li>
            <li class="list-group-item">Office Number:${manager.officeNum}</li>
        </ul>
    </div>
</div>`

}

const renderEngineer = (engineer) => {
    return `<div class="card employee-card mr-4 ml-4 mb-3">
    <div class="card-header text-center">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title"><i class="fas fa-wrench mr-2"></i>${engineer.role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
            </li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank"
            rel="noopener noreferrer">${engineer.gitHub}</a></li>
        </ul>
    </div>
</div>`
}

const renderIntern = (intern) => {
    return `<div class="card employee-card mr-4 ml-4 mb-3">
    <div class="card-header text-center">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title"><i class="fas fa-id-badge mr-2"></i>${intern.role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id} </li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.name}</a>
            </li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</div>`
}


const htmlTemplate = (data) => {
    console.log(data);
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Work Team Profile</title>
            <!-- Bootstrap CSS & CDN Components  -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Merriweather|Muli:300" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="./style.css"/>
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">Team<span>Members</span></h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center mt-5">
                    ${data.filter(emp => emp.getRole() === "Manager")
            .map(emp => renderManager(emp))
            .join("")
        }

                    ${data.filter(emp => emp.getRole() === "Engineer")
            .map(emp => renderEngineer(emp))
            .join("")
        }

                    ${data.filter(emp => emp.getRole() === "Intern")
            .map(emp => renderIntern(emp))
            .join("")
        }
                </div >
            </div >
        </div >
        <footer>
        <p>Created By <a href="https://github.com/abanae">Ana Abad</a></p>
        <p>Copyright © 2021 Work Team Profile.All Rights Reserved</p>
    </footer>
    </body >
    
    </html > `
}

module.exports = htmlTemplate;





