
let gulp = require('gulp');
let babel = require('gulp-babel');
let path = require('path');
let rename = require('gulp-rename');
let aliasCombo = require('gulp-alias-combo');
let sourcemaps = require('gulp-sourcemaps');

//捕获错误信息
function swallowError(error) {
     // If you want details of the error in the console
   console.error(error.toString())
 
   this.emit('end')
}

gulp.task("default", function () {
        
  return gulp.src(['routes/src/*.js']) // ES6 源码存放的路径
    
    .pipe(babel({
      presets: ['es2015'],
      plugins: ["transform-es2015-modules-commonjs"]
    }))
    .pipe(sourcemaps.init())
    //报错不退出
    .on('error', swallowError)
    //重命名
    .pipe(rename({suffix: '.dist'}))   
    .pipe(gulp.dest('routes/dist/'));
});

gulp.watch('routes/*.js',['default']);