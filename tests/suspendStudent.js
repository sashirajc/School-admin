var superagent = require('superagent');
var expect = require('expect');

if (process.argv[3] == 'dev')
    url = 'http:///v1/';
else if (process.argv[3] == 'local')
    url = 'http://localhost:8080/api/';

const studentName = process.argv[4] || 'studenton@example.com';

describe('Suspend Student',function(){
    it('Suspend one student',function(done){
        superagent
            .post(`${url}suspend`)
            .send({
                'student': studentName
            })
            .end(function (e, res) {
                expect(res.status).toEqual(204);
                done();
            });
    });

    it('Suspend already suspended student',function(done){
        superagent
            .post(`${url}suspend`)
            .send({
                'student': studentName
            })
            .end(function (e, res) {
                expect(res.status).toEqual(400);
                expect(res.body.message).toEqual('Student Already Suspended');
                done();
            });
    });
});