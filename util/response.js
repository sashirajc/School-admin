/**
 * Response helpers
 * Author: Sashiraj Chan
 * Date Created: 19-August-2018
 * Date Edited: 19-August-2018
 */

const operationSuccess = 'Operation Success';
const operationFailed = 'Operation Failed';

function generateResponse(status,message){
    return {
        status: status,
        message: message
    };
}

function generateStudentResponse(message){
    return {
        students:message
    };
}

exports.successResponse = function(res,code,message){
    res.status(code).send(message || operationSuccess);
}

exports.successResponseStudents = function(res,code,message){
    res.status(code).send(generateStudentResponse(message));
}

exports.errorResponse = function(res,err){
    res.status(500).send(generateResponse(false, err || operationFailed));
}