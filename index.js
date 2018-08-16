/*
Author: Sashiraj Chan
Date Created: 16-August-2018
Date Edited: 16-August-2018
*/

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('./api/routes'),
    port = process.env.PORT || 8080;

app.use(require('express-status-monitor')());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);
console.log(`API Server started on localhost:${port}`);