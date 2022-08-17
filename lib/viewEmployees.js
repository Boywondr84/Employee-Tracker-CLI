// const db = require('../db/connection');
// // const cTable = require('console.table');

// function viewEmployees() {
//         // return new Promise((resolve, reject) => {

//         const sql = `SELECT * FROM employees
//                 INNER JOIN roles
//                 ON employees.role_id = roles.role_id
//                 ORDER BY department_id`;
//         db.query(sql, (err, result) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.table(result);
//             }
//         })
//     }

// module.exports = viewEmployees();