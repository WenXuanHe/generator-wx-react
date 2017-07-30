/*
 *@Description webpack module、plugins等核心配置文件
 *@Author yuanzhijia@yidengxuetang.com
 *@Date 2016-07-18
 */
const webpack = require('webpack');
const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const cssnext = require('postcss-cssnext');
const cssvariables = require('postcss-css-variables');
const precss = require('precss');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const entryPath = path.join(__dirname, '../web/views'); //非监听自动更新模式下
const widgetPath = path.join(__dirname, '../web/widget'); //
const rootPath = path.join(__dirname, '..');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

//生产环境&开发环境基础配置项
//js入口文件 entris
const jsEntris = fs.readdirSync(entryPath).reduce(function(o, filename) {
    if (!/\./.test(filename)) {
        var _fd = entryPath + '/' + filename;
        fs.readdirSync(_fd).map(function(ifilename) {
            console.log(ifilename);
            (/.entry.es$/.test(ifilename)) && (o[ifilename.replace('.entry.es', '')] = path.join(entryPath, filename, ifilename));
        });
    }
    return o;
}, {});
//自动遍历全部Widget
const widgetPage = fs.readdirSync(widgetPath).reduce(function(o, filename) {
    if (!/\./.test(filename)) {
        const _fd = widgetPath + '/' + filename;
        fs.readdirSync(_fd).map(function(ifilename) {
            (/.html$/.test(ifilename)) && (o[ifilename.replace('.html', '')] = path.join(widgetPath, filename, ifilename));
        });
    }
    return o;
}, {});

const _entris = Object.assign(jsEntris),
    _module = {
        rules: [{
            //设置对应的资源后缀.
            test: /\.(css)$/,
            //设置后缀对应的加载器.
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{ loader: 'css-loader' }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function() {
                            return [
                                precss({ browsers: "last 3 versions" }),
                                cssnext({ /* ...options */ }),
                                cssvariables({})
                            ];
                        }
                    }
                }]
            })
        }, {
            test: /\.es$/,
            loader: "babel-loader",
            options: {
                "presets": ['es2015', 'stage-0'],
                "plugins": ['transform-runtime']
            },
            exclude: path.resolve(__dirname, "../node_modules")
        }]
    },
    _resolve = {
        extensions: [".vue", ".js", ".es", ".less"],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    };
let _devLoaders = _.clone(_module.rules);
let _prodLoaders = _.clone(_module.rules);
_devLoaders.push({
    test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg|otf)$/,
    loader: 'file-loader?name=assets/images/[name].[ext]'
});
_prodLoaders.push({
    test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg|otf)$/,
    loader: 'file-loader?name=assets/images/[name].[hash:5].[ext]'
});
const webpackConfig = {
    dev: {
        entry: _entris,
        module: {
            rules: _devLoaders
        },
        resolve: _resolve,
    },
    prod: {
        entry: _entris,
        module: {
            rules: _prodLoaders
        },
        resolve: _resolve
    },
    TemplatePage: widgetPage
};

module.exports = webpackConfig;
module.exports.rootPath = rootPath;
