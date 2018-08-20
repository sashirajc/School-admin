var superagent = require('superagent');
var expect = require('expect');

if (process.argv[3] == 'dev')
    url = 'http://ec2-13-229-123-65.ap-southeast-1.compute.amazonaws.com:8080/api/';
else if (process.argv[3] == 'local')
    url = 'http://localhost:8080/api/';

describe('Register new students', function () {
    it('One Student is registered', function (done) {
        superagent
            .post(`${url}register`)
            .send({
                'teacher': 'teacherken@gmail.com',
                'students': ['studentjon@example.com']
            })
            .end(function (e, res) {
                expect(e).toEqual(null);
                expect(res.status).toEqual(204);
                done();
            });
    });
    it('3 Students are registered', function (done) {
        superagent
            .post(`${url}register`)
            .send({
                'teacher': 'teacherken@gmail.com',
                'students': ['studentjon@example.com',
                    'studenthon@example.com',
                    'studentjulie@example.com']
            })
            .end(function (e, res) {
                expect(e).toEqual(null);
                expect(res.status).toEqual(204);
                done();
            });
    });
    it('Invalid Students', function (done) {
        superagent
            .post(`${url}register`)
            .send({
                'teacher': 'teacherken@gmail.com',
                'students': ['studentjon@example.com',
                    'sdenthon@example.com',
                    'studentjulie@example.com']
            })
            .end(function (e, res) {
                expect(e).toEqual(null);
                expect(res.status).toEqual(204);
                done();
            });
    });
    it('Invalid Teacher', function (done) {
        superagent
            .post(`${url}register`)
            .send({
                'teacher': 'acherken@gmail.com',
                'students': ['studentjon@example.com',
                    'sdenthon@example.com',
                    'studentjulie@example.com']
            })
            .end(function (e, res) {
                expect(res.status).toEqual(400);
                done();
            });
    });
});