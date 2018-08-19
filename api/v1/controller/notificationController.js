/**
 * Notification Controller
 * Author: Sashiraj Chan
 * Date Created: 19-August-2018
 * Date Edited: 19-August-2018
 */
const validate = require('../../../util/validate');
const query = require('../../../util/query');
const response = require('../../../util/response');

function difference(setA, setB) {
    var _difference = new Set(setA);
    for (var elem of setB) {
        _difference.delete(elem);
    }
    return Array.from(_difference);
}

exports.retrieveForNotification = async function (req, res) {
    var studentArr = [];
    var notificationTextArr = req.body.notification.split(' ');
    var studentSet = new Set();
    const queryParam = {
        table: 'student_registration',
        queryFor: 'student_id',
        queryCondition: `teacher_id='${req.body.teacher}'`
    };
    try {
        
        validate.getStudentArray(await query.selectQuery(queryParam))
        .map(student => studentSet.add(student));
    } catch (err) {
        response.errorResponse(res);
    }
    
    notificationTextArr.map(word => {
        if (word[0] === '@')
            studentSet.add(word.slice(1));
    });
    
    studentArr = Array.from(studentSet).map(student => `student_id='${student}'`);

    const queryParamSuspension = {
        table: 'student_suspension',
        queryFor: 'student_id',
        queryCondition: studentArr.join(' OR ')
    };

    try{
        var suspendedStudentSet = new Set(validate.getStudentArray(
            await query.selectQuery(queryParamSuspension)
        ));
        
    }catch(err){
        response.errorResponse(res);
    }
    
    response.successResponseRecipients(res,200,difference(studentSet,suspendedStudentSet));
    
}