// 使用 Mock
/**
 * [Mock description]劫持ajax请求，模拟后端返回数据
 * @type {[type]}
 */
var Mock = require('mockjs');
var data = Mock.mock("/list", {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
});

module.exports = data;
