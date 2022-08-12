const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'willalwaySlovemiYa19',
        database: 'employees'
    },
    console.log(`Connected to the employees_db database.`)
);

module.exports = db;