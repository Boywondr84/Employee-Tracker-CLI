const inquirer = require('inquirer');
const cTable = require('console.table');

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
                        // {
                        //     type: "input",
                        //     name: "id",
                        //     message: "What is the department's id number?"
                        // },
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
                        const sql = `INSERT INTO departments (department_name)
                                    VALUES (?)`;
                        const params = [departmentData.name];
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
            } else if (response.start == 'View All Departments') {
                function viewDepartment() {
                    const sql = `SELECT * FROM departments`;
                    db.query(sql, (err, result) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.table(result);
                        }
                    })
                }
                viewDepartment()
            } else if (response.start == 'Add Employee') {
                function addEmployee() {
                    return inquirer.prompt([
                        // {
                        //     type: "input",
                        //     name: "id",
                        //     message: "ID number"
                        // },
                        {
                            type: "input",
                            name: "first_name",
                            message: "First name"
                        },
                        {
                            type: "input",
                            name: "last_name",
                            message: "Last name"
                        },
                        {
                            type: "input",
                            name: "role_id",
                            message: "Role ID number"
                        },
                        {
                            type: "input",
                            name: "manager_id",
                            message: "Manager ID number"
                        },
                    ])
                };
                addEmployee()
                    .then((employeeData) => {
                        console.table(employeeData);
                        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                                    VALUES (?, ?, ?, ?)`;
                        const params = [employeeData.first_name, employeeData.last_name, employeeData.role_id, employeeData.manager_id];
                        db.query(sql, params, (err, result) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.table(result);
                            }
                        })
                    })
            } else if (response.start == 'Add Role') {
                function addRole() {
                    return inquirer.prompt([
                        // {
                        //     type: "input",
                        //     name: "id",
                        //     message: "Role ID"
                        // },
                        {
                            type: "input",
                            name: "role_title",
                            message: "Role title"
                        },
                        {
                            type: "input",
                            name: "salary",
                            message: "Salary for this postion"
                        },
                        {
                            type: "input",
                            name: "department_id",
                            message: "Enter department ID number"
                        },
                    ])
                };
                addRole()
                    .then((roleData) => {
                        console.table(roleData);
                        const sql = `INSERT INTO roles (role_title, salary, department_id)
                                    VALUES (?, ?, ?)`;
                        const params = [roleData.role_title, roleData.salary, roleData.department_id];
                        db.query(sql, params, (err, result) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.table(result);
                            }
                        })
                    })
            }
            
        })
};

promptUser()