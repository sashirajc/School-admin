/**
 * API Router
 * Author: Sashiraj Chan
 * Date Created: 16-August-2018
 * Date Edited: 19-August-2018
 */

 module.exports = function(app){
     const studentController = require('./v1/controller/studentController');
     const notificationController = require('./v1/controller/notificationController');
     app.route('/api/register').post(studentController.registerStudent);
     app.route('/api/commonstudents').get(studentController.getCommonStudents);
     app.route('/api/suspend').post(studentController.suspendStudent);
     app.route('/api/retrievefornotifications').post(notificationController.retrieveForNotification);
     app.route('/live').get((req,res)=>res.send('Page is alive'));
 };