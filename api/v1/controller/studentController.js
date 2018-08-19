/**
 * Student Controller
 * Author: Sashiraj Chan
 * Date Created: 16-August-2018
 * Date Edited: 19-August-2018
 */
const validate = require('../../../util/validate');
const query = require('../../../util/query');
const response = require('../../../util/response');

exports.registerStudent = async function (req, res) {
    if (validate.validateTeacher(req.body.teacher)) {
        var studentArr = validate.validateStudent(req.body.students);
        studentArr = studentArr.map(student => new Array(student, req.body.teacher));
        try {
            if (await query.insertQuery(`student_registration (student_id,teacher_id) VALUES ?`, [studentArr]))
                response.successResponse(res,204);
        } catch (error) {
            response.errorResponse(res,error);
        }
    } else response.successResponse(res,400,'Invalid Teacher');
}