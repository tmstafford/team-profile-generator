const inquirer = require('inquirer');
const fs = require('fs');

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
        const role = manager.getRole();
        console.log(role);
        console.log(manager);

    })
};

promptManager();