/**
 * Student Controller
 * Author: Sashiraj Chan
 * Date Created: 16-August-2018
 * Date Edited: 19-August-2018
 */
const validate = require('../../../util/validate');
const query = require('../../../util/query');
const response = require('../../../util/response');
const teacherRegex = new RegExp(/\b(teacher)\w*\b/);
const studentRegex = new RegExp(/\b(student)\w*\b/);

exports.registerStudent = async function (req, res) {
    if (validate.validateItem(req.body.teacher,teacherRegex)) {
        var studentArr = validate.validateStudentArray(req.body.students,studentRegex);
        studentArr = studentArr.map(student => new Array(student, req.body.teacher));
        try {
            if (await query.insertQuery(`student_registration (student_id,teacher_id) VALUES ?`, [studentArr]))
                response.successResponse(res,204);
        } catch (error) {
            response.errorResponse(res,error);
        }
    } else response.successResponse(res,400,'Invalid Teacher');
}

exports.getCommonStudents = async function(req,res){
    
    var teacherArr = validate.makeArray(req.query.teacher);
    teacherArr = teacherArr.filter(teacher => validate.validateItem(teacher,teacherRegex));
    teacherArr = teacherArr.map(teacher => `teacher_id='${teacher}'`);
    
    const queryParam = {
        table: 'student_registration',
        queryFor: 'student_id',
        queryCondition: teacherArr.join(' OR ')
    };
    try{
        var students  = await query.selectQuery(queryParam);
        students = students.map(item => item.student_id);
        response.successResponseStudents(res,200,students);
    } catch(err){
        response.errorResponse(res,400);
    }
    
}

exports.suspendStudent = async function(req,res){
    if(validate.validateItem(req.body.student,studentRegex)){
        
        try{
    
            if(await query.insertQuery(`student_suspension (student_id) VALUES (?)`,req.body.student)){
                response.successResponse(res,204);
            }
        }
        catch(err){ 
            if(err.code === 'ER_DUP_ENTRY')
            response.errorResponse(res,400,'Student Already Suspended');
        }
    } else response.errorResponse(res);
}