const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');

gulp.task('default', function() {
  console.log('First Gulp Task!');
});

gulp.task('html', function() {
  console.log('Imagine something useful in html');
});

gulp.task('styles', function() {
  return gulp
    .src('./app/assets/styles/style.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
