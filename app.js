const inquirer = require('inquirer');
const cTable = require('console.table');
const inputCheck = require('./utils/inputCheck');

// question prompts
    const promptUser = () => {
        return inquirer.prompt([
            {
                type: "list",
                name: "start",
                message: "What would you like to do?",
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
            }
        ])
        .then((startData) => {
            console.log(startData);
        })
    };
    promptUser()