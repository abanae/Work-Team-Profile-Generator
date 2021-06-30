const renderManager = (manager)=>{
    return `<div class="card employee-card mr-4 ml-4 mb-3">
    <div class="card-header text-center">
        <h2 class="card-title">${manager[0].name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager[0].role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">id:${manager[0].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager[0].email}">${manager[0].email}</a>
            </li>
            <li class="list-group-item">Office number:${manager[0].officeNum}</li>
        </ul>
    </div>
</div>`

}



const htmlTemplate = (data) => {
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
                    ${renderManager(data)}
                    <div class="card employee-card mr-4 ml-4 mb-3">
                        <div class="card-header text-center">
                            <h2 class="card-title">Sam</h2>
                            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: 2</li>
                                <li class="list-group-item">Email: <a href="mailto:jim@office.com">sam@office.com</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/201" target="_blank"
                                        rel="noopener noreferrer">201</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card employee-card mr-4 ml-4 mb-3">
                        <div class="card-header text-center">
                            <h2 class="card-title">Rooster</h2>
                            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: 3</li>
                                <li class="list-group-item">Email: <a href="mailto:pam@office.com">rooster@office.com</a>
                                </li>
                                <li class="list-group-item">School: KU</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    </html>`
}
module.exports = htmlTemplate;