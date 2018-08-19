const validator = require('email-validator');
const teacherRegex = new RegExp(/\b(teacher)\w*\b/);
const studentRegex = new RegExp(/\b(student)\w*\b/);
exports.validateTeacher = function (teacherID) {
    if (validator.validate(teacherID) && teacherRegex.test(teacherID)) {
        return true
    } else return false;
}

exports.validateStudent = function (studentArr) {
    return studentArr.filter(student =>
        validator.validate(student) && studentRegex.test(student)
    );
}

