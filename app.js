const inquirer = require('inquirer');
const cTable = require('console.table');
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
        .then(response => {
            console.log(response);
            if (response.start == 'Add Department') {
                function addDepartment() {
                    return inquirer.prompt([ 
                        {
                            type: "input",
                            name: "name",
                            message: "What is the department's name?"
                        },
                    ])
                };
                addDepartment()
                    .then((departmentData) => {
                        // console.table(departmentData);
                        const sql = `INSERT INTO departments (name)
                                    VALUES (?)`;
                        const params = [departmentData.name];
                        db.query(sql, params, (err, result) => {
                            if (err) {
                                console.log(err)
                            } else {
                                // console.log(result);
                                promptUser();
                            }
                        })
                        // promptUser()
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
                            promptUser();
                        }
                    })
                }
                viewDepartment()
            } else if (response.start == 'Add Employee') {
                function addEmployee() {
                    return inquirer.prompt([
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
                            type: "list",
                            name: "manager_id",
                            message: "Manager ID number. 100 for Sales, 200 for Finance, 300 for Marketing, 400 for R & D, 500 for Legal, 600 for HR, 0 for Manager",
                            choices: [100, 200, 300, 400, 500, 600, 0]
                        },
                        {
                            type: "input",
                            name: "role_id",
                            message: "Role ID number"
                        },
                    ])
                };
                addEmployee()
                    .then((employeeData) => {
                        // console.table(employeeData);
                        const sql = `INSERT INTO employees (first_name, last_name, manager_id, role_id)
                                    VALUES (?, ?, ?, ?)`;
                        const params = [employeeData.first_name, employeeData.last_name, employeeData.manager_id, employeeData.role_id];
                        db.query(sql, params, (err, result) => {
                            if (err) {
                                console.log(err)
                            } else {
                                // console.table(result);
                                promptUser();
                            }
                        })
                    })
            } else if (response.start == 'Add Role') {
                function addRole() {
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "job_title",
                            message: "Job title"
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
                        // console.table(roleData);
                        const sql = `INSERT INTO roles (job_title, salary, department_id)
                                    VALUES (?, ?, ?)`;
                        const params = [roleData.job_title, roleData.salary, roleData.department_id];
                        db.query(sql, params, (err, result) => {
                            if (err) {
                                console.log(err)
                            } else {
                                // console.table(result);
                                promptUser()
                            }
                        })
                    })
            } else if (response.start == 'Update Employee Role') {
                function updateRole() {
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "employee_id",
                            message: "Enter employee ID"
                        },
                        {
                            type: "input",
                            name: "role_id",
                            message: "Enter new role ID"
                        },
                        {
                            type: "list",
                            name: "manager_id",
                            message: "Manager ID number. 100 for Sales, 200 for Finance, 300 for Marketing, 400 for R & D, 500 for Legal, 600 for HR, 0 for Manager",
                            choices: [100, 200, 300, 400, 500, 600, 0]
                        },
                    ])
                };
                updateRole()
                    .then((updatedRoleData) => {
                        console.log(updatedRoleData.employee_id, updatedRoleData.role_id, updatedRoleData.manager_id);
                    const sql = `UPDATE
                                    employees
                                SET
                                    role_id = ${updatedRoleData.role_id},
                                    manager_id = ${updatedRoleData.manager_id}
                                WHERE
                                    id = ${updatedRoleData.employee_id}`;
                    // const params = [updatedRoleData.employee_id, updatedRoleData.role_id];
                    db.query(sql, (err, result) => {
                        if (err) {
                            console.log(err)
                        } else {
                            // console.log('success');
                            promptUser()
                        }
                    })
                })
            } else if (response.start == 'View All Employees') {
                function viewEmployees() {
                    const sql = `SELECT * FROM employees
                                INNER JOIN roles
                                ON employees.role_id = roles.role_id
                                ORDER BY department_id`;
                    db.query(sql, (err, result) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.table(result);
                            promptUser();
                        }
                    })
                }
                viewEmployees()
            } else if (response.start == 'View All Roles') {
                function viewRoles() {
                    const sql = `SELECT * FROM departments
                                LEFT JOIN roles
                                ON departments.id = roles.department_id`;
                    db.query(sql, (err, result) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.table(result);
                            promptUser();
                        }
                    })
                }
                viewRoles()
            } else {
                console.log("To close, press ctrl + C for windows users. Goodbye.");
            }
        })
};

promptUser()