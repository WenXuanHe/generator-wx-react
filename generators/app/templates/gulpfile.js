var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');

gulp.task('default', function() {
	//gulp.src
   gulp.src('src/**/*.es').pipe(babel({
        presets: ['es2015', 'stage-3']
    })).pipe(gulp.dest('./build'));
});