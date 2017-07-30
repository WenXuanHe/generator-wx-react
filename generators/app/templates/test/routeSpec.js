'use strict';
var superagent = require('supertest');
var app = require('../build/app');

function request() {
    return superagent(app.listen());
}

describe('【测试路由】', function() {
    describe('测试技术列表数据', function() {
        it('数组第三项应该等于Vue2', function(done) {
            request()
            request().get('/index/getdata').expect(200).end(function(err, res) {
                if (res.body.data[2] == "Vue2") return done(err);
                done();
            });
        });
    });
});
