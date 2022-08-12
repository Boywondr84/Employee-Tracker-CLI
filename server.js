const inquirer = require('inquirer');
const cTable = require('console.table');
const express = require('express');
const db = require('./db/connection');

const PORT = process.env.PORT || 3004;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Start server after db connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});