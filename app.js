const inquirer = require('inquirer');
const cTable = require('console.table');
var departmentsArray = [];
var Department = require("./lib/Department");
// const inputCheck = require('./utils/inputCheck');
// const { response } = require('express');
// const express = require('express');
const db = require('./db/connection');


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
        .then((response) => {
            console.log(response);
            if (response.start == 'Add Department') {
                function addDepartment() {
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "id",
                            message: "What is the department's id number?"
                        },
                        {
                            type: "input",
                            name: "name",
                            message: "What is the department's name?"
                        },
                    ])
                };
                addDepartment()
                    .then((departmentData) => {
                        console.table(departmentData);
                        const sql = `INSERT INTO departments (id, department_name)
                                    VALUES (?, ?)`;
                        const params = [departmentData.id, departmentData.name];
                        db.query(sql, params, (err, result) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log(result);
                            }
                        })
                        promptUser()
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        });
};


promptUser()