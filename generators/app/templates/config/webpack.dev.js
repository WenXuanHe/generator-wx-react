/**
 *@Description 开发环境Webpack配置项
 */
const conf = require('./webpack.conf');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const options = {
    output: {
        path: path.join(__dirname, '../build/'),
        publicPath: '/',
        filename: 'assets/scripts/[name].bundle.js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {}
        }),
        // new webpack.ProvidePlugin({
        //     Vue: 'vue'
        // }),
        new HtmlWebpackPlugin({
            template: path.join(conf.rootPath, './src/log4js.json'),
            filename: './log4js.json',
            inject: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'assets/scripts/[name].bundle.js'
        }),
        new HtmlWebpackPlugin({
            template: path.join(conf.rootPath, './web/views/common/pages/layout.html'),
            filename: './views/common/pages/layout.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: path.join(conf.rootPath, './web/views/error/pages/404.html'),
            filename: './views/error/pages/404.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: path.join(conf.rootPath, './web/views/error/pages/500.html'),
            filename: './views/error/pages/500.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: path.join(conf.rootPath, './web/views/index/pages/index.js'),
            filename: './views/index/pages/index.html',
            inject: false,
            chunks: ['vendor', 'common', 'index-index']
        }),
        new LiveReloadPlugin({
            appendScriptTag: true
        }),
        new ExtractTextPlugin("assets/styles/[name].css"),
    ]
};
const _options = Object.assign(options, conf.dev);
for (let i in conf.TemplatePage) {
    _options.plugins.push(
        new HtmlWebpackPlugin({
            template: conf.TemplatePage[i],
            filename: './widget/' + i + '/' + i + '.html',
            inject: false
        })
    )
};
module.exports = _options;
