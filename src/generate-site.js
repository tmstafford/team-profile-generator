function generateSite(data) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div class="container pt-5 justify-content-center">
            <div class="row">
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
        <div class="col p-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text">Manager</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                </ul>
            </div>
        </div>
    `;
};

function engineerCard(employee) {
    return `
        <div class="col p-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text">Engineer</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">GitHub: ${employee.github}</li>
                </ul>
            </div>
        </div>
    `;
};

function internCard(employee) {
    return `
        <div class="col p-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text">Intern</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">School: ${employee.school}</li>
                </ul>
            </div>
        </div>
    `;
}

module.exports = generateSite;