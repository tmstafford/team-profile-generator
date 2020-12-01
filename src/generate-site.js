function generateSite(data) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profiles</title>
    </head>
    <body>
        <header>
            <h1>Team Profiles <i class="fas fa-id-card"></i></h1>
        </header>
        <div class="container pt-5 justify-content-center">
            <div class="row justify-content-center">
                ${generateCard(data)}
        </div>
    </div>
    </body>
    </html>
    `;
};

function generateCard(data) {
    return data
    .map(employee => {
        let role = employee.getRole();
        if (role === 'Manager') {
            return managerCard(employee);
        } else if (role === 'Engineer') {
            return engineerCard(employee);
        } else if (role === 'Intern') {
            return internCard(employee);
        }
    })
    .join("\n");
};

function managerCard(employee) {
    return `
        <div class="col-auto mb-3 p-3">
            <div class="card shadow manager-border">
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text manager">Manager</p>
                    <span><i class="fas fa-user"></i></span>
                </div>
                <ul class="list-group list-group-flush bg-light managerA">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                </ul>
            </div>
        </div>
    `;
};

function engineerCard(employee) {
    return `
        <div class="col-auto mb-3 p-3">
            <div class="card shadow eng-border">
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text engineer">Engineer</p>
                    <span><i class="fas fa-glasses"></i></span>
                </div>
                <ul class="list-group list-group-flush bg-light engineerA">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
                </ul>
            </div>
        </div>
    `;
};

function internCard(employee) {
    return `
        <div class="col-auto mb-3 p-3">
            <div class="card shadow int-border">
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text intern">Intern</p>
                    <span><i class="fas fa-graduation-cap"></i></span>
                </div>
                <ul class="list-group list-group-flush bg-light internA">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.school}</li>
                </ul>
            </div>
        </div>
    `;
}

module.exports = generateSite;