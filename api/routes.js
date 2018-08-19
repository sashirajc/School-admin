/**
 * API Router
 * Author: Sashiraj Chan
 * Date Created: 16-August-2018
 * Date Edited: 16-August-2018
 */

 module.exports = function(app){
     const studentController = require('./v1/controller/studentController.js');
     app.route('/v1/api/register').post(studentController.registerStudent);
     app.route('/v1/api/commonstudents').get(studentController.getCommonStudents);
 };