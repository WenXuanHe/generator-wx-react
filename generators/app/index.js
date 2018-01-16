// initializing - 您的初始化方法（检查当前项目状态，获取配置等）
// prompting- 在哪里提示用户选择（你打电话的地方this.prompt()）
// configuring- 保存配置并配置项目（创建.editorconfig文件和其他元数据文件）
// default - 如果方法名称与优先级不匹配，将被推送到此组。
// writing - 编写生成器特定文件（路由，控制器等）的位置
// conflicts - 处理冲突（内部使用）
// install - 运行安装（npm，bower）
// end- 称为最后，清理，再见再见等
const path = require('path');
const chalk = require('chalk'); //不同颜色的info
const util = require('util');
const Generator = require('yeoman-generator');
const yosay = require('yosay'); //yeoman弹出框
module.exports = class extends Generator {
    info() {
        this.log(chalk.strikethrough(
            'I am going to build your app🏡'
        ));
    }
    constructor(args, opts) {
        super(args, opts);
        this.answers = null;
        this.appname = "wx-react";
    }
    paths() {
        this.sourceRoot();
    }
    install() { //安装依赖
        // this.installDependencies({
        //     skipInstall: this.options['skip-install']
        // });
    }
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'please Input Your project name',
            default: this.appname // Default to current folder name
        }]).then((answers) => {
            this.log('app name', answers.name);
            this.answers = answers;
            this.appname = answers.name;
        });
    }
    writing() {
        const _path = this.appname;
        this.fs.copy(
            this.templatePath('.travis'),
            this.destinationPath(_path + '/.travis')
        );
        this.fs.copy(
            this.templatePath('bin'),
            this.destinationPath(_path + '/bin')
        );
        this.fs.copy(
            this.templatePath('helper'),
            this.destinationPath(_path + '/helper')
        );
         this.fs.copy(
            this.templatePath('config'),
            this.destinationPath(_path + '/config')
        );
        this.fs.copy(
            this.templatePath('server'),
            this.destinationPath(_path + '/server')
        );
        this.fs.copy(
            this.templatePath('public'),
            this.destinationPath(_path + '/public')
        );
        this.fs.copy(
            this.templatePath('routes'),
            this.destinationPath(_path + '/routes')
        );
        this.fs.copy(
            this.templatePath('test'),
            this.destinationPath(_path + '/test')
        );
        this.fs.copy(
            this.templatePath('views'),
            this.destinationPath(_path + '/views')
        );
        this.fs.copy(
            this.templatePath('chromedriver'),
            this.destinationPath(_path + '/chromedriver')
        );
        this.fs.copyTpl(
            this.templatePath('.babelrc'),
            this.destinationPath(_path + '/.babelrc')
        );
        this.fs.copyTpl(
            this.templatePath('.travis.yml'),
            this.destinationPath(_path + '/.travis.yml')
        );
        this.fs.copyTpl(
            this.templatePath('app.js'),
            this.destinationPath(_path + '/app.js')
        );
        this.fs.copyTpl(
            this.templatePath('id_rsa.enc'),
            this.destinationPath(_path + '/id_rsa.enc')
        );
        this.fs.copyTpl(
            this.templatePath('karma.conf.js'),
            this.destinationPath(_path + '/karma.conf.js')
        );
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath(_path + '/package.json'), { packagename: this.appname }
        );
        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath(_path + '/webpack.config.js')
        );
        this.fs.copyTpl(
            this.templatePath('postcss.config.js'),
            this.destinationPath(_path + '/postcss.config.js')
        );
    }
    end() {
        this.log(yosay(
            '创建任务Success😁'
        ));
    }
};
