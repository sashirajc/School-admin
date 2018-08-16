/**
 * API Router
 * Author: Sashiraj Chan
 * Date Created: 16-August-2018
 * Date Edited: 16-August-2018
 */

 module.exports = function(app){
     const studentController = require('./v1/controller/studentController.js');
     app.route('/api/v1/register').post(studentController.registerStudent);
 };