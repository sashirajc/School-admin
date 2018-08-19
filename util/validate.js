const validator = require('email-validator');

exports.validateItem = function (item,regex) {
    if (validator.validate(item) && regex.test(item)) {
        return true
    } else return false;
}

exports.validateStudentArray = function (studentArr,regex) {
    return studentArr.filter(student =>
        validator.validate(student) && regex.test(student)
    );
}

exports.makeArray = function(items){
    var Arr = [];
    if(Array.isArray(items))
    Arr.push(...items);
    else Arr.push(items)
    return Arr;
    
}

exports.getStudentArray = function(items){
    return items.map(item => item.student_id);
}

