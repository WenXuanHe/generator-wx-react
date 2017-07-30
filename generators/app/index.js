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
        this.appname = "yd-vue-kernel";
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
            message: 'Input Your project name',
            default: this.appname // Default to current folder name
        }, {
            type: 'list',
            name: 'preprocessor',
            message: 'Select the CSS preprocessor',
            choices: ['◉ PostCSS', '◉ Less', '◉ Sass', '◉ Stylus']
        }]).then((answers) => {
            this.log('app name', answers.name);
            this.appname = answers.name;
            if (answers.preprocessor) {
                this.log(chalk.yellow(
                    '预处理已被我强烈建议成PostCSS💻'
                ));
            }
        });
    }
    writing() {
        const _path = this.appname;
        this.fs.copy(
            this.templatePath('config'),
            this.destinationPath(_path + '/config')
        );
        this.fs.copy(
            this.templatePath('src'),
            this.destinationPath(_path + '/src')
        );
        this.fs.copy(
            this.templatePath('test'),
            this.destinationPath(_path + '/test')
        );
        this.fs.copy(
            this.templatePath('web'),
            this.destinationPath(_path + '/web')
        );
        this.fs.copy(
            this.templatePath('chromedriver'),
            this.destinationPath(_path + '/chromedriver')
        );
        this.fs.copyTpl(
            this.templatePath('gulpfile.js'),
            this.destinationPath(_path + '/gulpfile.js')
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
            this.templatePath('README.md'),
            this.destinationPath(_path + '/README.md')
        );
        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath(_path + '/webpack.config.js')
        );
        this.fs.copyTpl(
            this.templatePath('yarn.lock'),
            this.destinationPath(_path + '/yarn.lock')
        );
    }
    end() {
        this.log(yosay(
            '小灯灯创建任务Success😁'
        ));
    }
};
