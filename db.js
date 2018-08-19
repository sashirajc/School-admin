/*
Author: Sashiraj Chan
Date Created: 18-August-2018
Date Edited: 18-August-2018
*/

const config = require('./config'),
mysql = require('mysql');

exports.pool = mysql.createPool(config.mysql);

