const inquirer = require('inquirer');
const fs = require('fs');
const generateSite = require('./src/generate-site');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [];

function promptManager() {
    console.log("Please answer the following prompts to generate your team's profiles!");

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the team manager's employee ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the team manager's email address:"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the team manager's office number:"
        }
    ])
    .then(function({ name, id, email, officeNumber}) {
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(teamArray);
        addMember();
    })
};

function addMember() {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'newMember',
            message: 'Would you like to add another team member?'
        }
    ])
    .then(function({ newMember }) {
        if (newMember) {
            memberInfo();
        } else {
            generateHTML(teamArray);
        }
    })
};

function memberInfo() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select the team member's role:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the team member's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the team member's ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the team member's email address:"
        }
    ])
    .then(function({ role, name, id, email }) {
        if (role === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: "Enter the team member's GitHub Username:"
                }
            ])
            .then(function({ github }) {
                const engineer = new Engineer(name, id, email, github);
                teamArray.push(engineer);
                console.log(teamArray);
                addMember();
            })
        } else if (role === 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: "Enter the team member's school name:"
                }
            ])
            .then(function({ school }) {
                const intern = new Intern(name, id, email, school);
                teamArray.push(intern);
                console.log(teamArray);
                addMember();
            })
        }
    })
};

// function to generate the HTML (write the file) from the teamArray
// generated from the user input 
function generateHTML(teamArray) {
    const html = generateSite(teamArray);
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', html, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
            console.log('Check out the index.html file to see your webpage!');
        });
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
            console.log('stylesheet copied!');
        });
    });
};

promptManager();
