/*
Author: Sashiraj Chan
Date Created: 16-August-2018
Date Edited: 16-August-2018
*/

const express = require('express'),
    app = express(),
    mysql = require('mysql');
    bodyParser = require('body-parser'),
    routes = require('./api/routes'),
    config = require('./config'),
    port = process.env.PORT || 8080;

app.use(require('express-status-monitor')());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
console.log(config.mysql);
const connection = mysql.createConnection(config.mysql);

console.log('Connecting to DB');
connection.connect();


process.on('SIGINT',function(){
    console.log('Closing database connection');
    connection.end();
});

routes(app);
app.listen(port);
console.log(`API Server started on localhost:${port}`);