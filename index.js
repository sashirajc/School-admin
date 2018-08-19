/*
Author: Sashiraj Chan
Date Created: 16-August-2018
Date Edited: 16-August-2018
*/

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    helmet = require('helmet'),
    routes = require('./api/routes'),
    db = require('./db'),
    port = process.env.PORT || 8080;

app.use(require('express-status-monitor')());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(helmet());

process.on('SIGINT',function(){
    console.log('Closing database pool');
    server.close();
});

routes(app);
server = app.listen(port);
console.log(`API Server started on localhost:${port}`);