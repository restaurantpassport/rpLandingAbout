const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', () => {
  return gulp.src('less/index.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});