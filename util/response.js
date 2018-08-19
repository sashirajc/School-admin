/**
 * Response helpers
 * Author: Sashiraj Chan
 * Date Created: 19-August-2018
 * Date Edited: 19-August-2018
 */

const operationSuccess = 'Operation Success';
const operationFailed = 'Operation Failed';

function generateResponse(message){
    return {
        message: message
    };
}

function generateStudentResponse(message){
    return {
        students:message
    };
}

function generateRecipientResponse(message){
    return {
        recipients:message
    };
}

exports.successResponse = function(res,code,message){
    res.status(code).send(message || operationSuccess);
}

exports.successResponseStudents = function(res,code,message){
    res.status(code).send(generateStudentResponse(message));
}

exports.successResponseRecipients = function(res,code,message){
    res.status(code).send(generateRecipientResponse(message));
}

exports.errorResponse = function(res,code, err){
    res.status(code || 500).send(generateResponse(err || operationFailed));
}