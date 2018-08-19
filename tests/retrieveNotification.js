var superagent = require('superagent');
var expect = require('expect');

if (process.argv[3] == 'dev')
    url = 'http:///v1/';
else if (process.argv[3] == 'local')
    url = 'http://localhost:8080/api/';

describe('Retrieve students', function () {
    it('Case 1', function (done) {
        superagent
            .post(`${url}retrievefornotifications`)
            .send({
                'teacher': 'teacherken@gmail.com',
                "notification": "Hey everybody"
            })
            .end(function (e, res) {
                expect(e).toEqual(null);
                expect(res.status).toEqual(200);
                done();
            });
    });

    it('Case 2', function (done) {
        superagent
            .post(`${url}retrievefornotifications`)
            .send({
                'teacher': 'teacherken@gmail.com',
                "notification": "Hello students! @studentagnes@example.com @studentmiche@example.com"
            })
            .end(function (e, res) {
                expect(e).toEqual(null);
                expect(res.status).toEqual(200);
                done();
            });
    });

});