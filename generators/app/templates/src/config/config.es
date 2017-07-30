//应用配置文件
import path from 'path';
import local from './local';
import _ from 'lodash';
let config = {
    //端口号配置
    "port": 3000,
    //模板所在的目录
    "webpackConf": path.join(__dirname, "../..", "config/webpack.dev.js"),
    "viewDir": path.join(__dirname, '..', 'views'),
    //log所在的目录
    "logDir": path.join(__dirname, '..', 'logs'),
    //静态文件所在的目录
    "staticDir": path.join(__dirname, '..'),
};
const server = {};
//本地调试环境
if (process.env.NODE_ENV === 'development') {
    config = _.extend(config, local);
} else {
    config = _.extend(config, server);
}
export default config;