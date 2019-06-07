const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db');
var employeeController = require('./controllers/employeeController');

const app = express();
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log('Server running on localhost : 3000');
});

app.use('/employees', employeeController);