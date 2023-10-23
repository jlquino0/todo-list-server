var assert = require('assert').strict;
var request = require('supertest')('http://localhost:3001');
describe('Load testing operations', function () {
 afterAll(function (done) {
    done();
  });
 test("server listening", function (done) {
    request.get(`/`)
      .end(function (err, res) {
        console.log(res.text);
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.text, 'hello get request');
        done();
      });
  });

  test("get todos", function (done) {
    request.get(`/api/todos`)
      .end(function (err, res) {
        console.log(res.text);
        console.log(res);
        assert.strictEqual(res.status, 200);
        done();
      });
  });

  test("registrar usuario", function (done) {
    request.post(`/api/user`)
    .send({
        username:'jlquino0test',
        password: 'jlquino0test'
    })
      .end(function (err, res) {
        console.log(res.text);
        console.log(res);
        assert.strictEqual(res.status, 201);
        done();
      });
  });

  test("registrar usuario", function (done) {
    request.post(`/api/login`)
    .send({
        username:'jlquino0test',
        password: 'jlquino0test'
    })
      .end(function (err, res) {
        console.log(res.text);
        console.log(res);
        assert.strictEqual(res.text, 'Found');
        assert.strictEqual(res.status, 200);
        done();
      });
  });

});