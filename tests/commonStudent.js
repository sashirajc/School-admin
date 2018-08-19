var superagent = require('superagent');
var expect = require('expect');

if (process.argv[3] == 'dev')
    url = 'http://v1/';
else if (process.argv[3] == 'local')
    url = 'http://localhost:8080/api/';

describe('Get Common Students', function () {
    it('Get students of one teacher', function (done) {
        superagent
            .get(`${url}commonstudents`)
            .query({ teacher: 'teacherken@gmail.com' })
            .end(function (e, res) {
                expect(e).toEqual(null);
                expect(res.status).toEqual(200);
                done();
            });
    });

    it('Get students of 2 teachers', function (done) {
        superagent
            .get(`${url}commonstudents`)
            .query({ teacher: ['teacherken@gmail.com','teacherjon@gmail.com'] })
            .end(function (e, res) {
                expect(e).toEqual(null);
                expect(res.status).toEqual(200);
                done();
            });
    });

    it('One teacher invalid', function (done) {
        superagent
            .get(`${url}commonstudents`)
            .query({ teacher: ['eacherken@gmail.com','teacherjon@gmail.com'] })
            .end(function (e, res) {
                expect(e).toEqual(null);
                expect(res.status).toEqual(200);
                done();
            });
    });
});