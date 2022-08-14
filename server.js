// const express = require('express');
// const db = require('./db/connection');
// const inputCheck = require('./utils/inputCheck');

// const PORT = process.env.PORT || 3004;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


// // let { departments } = require('./db/departments.json');

// // Get all departments
// app.get('/api/departments', (req, res) => {
//     const sql = `SELECT * FROM departments`;
//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//         } else {
//             res.json({
//                 message: "Success",
//                 data: rows
//             });
//         }
//     });
// });

// // Create a department
// app.post('/api/departments', ({ body }, res) => {
//     const errors = inputCheck(body, 'id', 'department_name');
//     if (errors) {
//         res.status(400).json({ errors: errors });
//         return;
//     }

//     const sql = `INSERT INTO departments (id, department_name)
//                 VALUES (?, ?)`;
//     const params = [body.id, body.department_name];
//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         } else {
//             res.json({
//                 message: "Success",
//                 data: body
//             });
//         }
//     });
// });

// Start server after db connection
// db.connect(err => {
//     if (err) throw err;
//     console.log('Database connected.');

//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// });
