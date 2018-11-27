var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var del = require("del");
var run = require("run-sequence");
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var plumber = require('gulp-plumber');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './build'
    },
  });
  gulp.watch("./source/*.html", ['copy-html-js']);
});

gulp.task('clean', function () {
  return del ('./build');
});

/*gulp.task('copy-html', function () {
  return gulp.src('./source/!*.html')
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
});*/

gulp.task('copy-all', function () {
  return gulp.src(['./source/**/*.*', '!./source/index.html' , '!./source/**/*.js'])
    .pipe(gulp.dest('./build'));
});

//Super task for working with js. It looks to .html file and concatinates all *.js files
// to one. <!--build:js js/main.min.js --> and this comment in *.html file is very usefull.
//it says where to put main.min.js file.
// At the same time all js files that were in html file changes to one file.
//see more here https://css-tricks.com/gulp-for-beginners/
gulp.task('copy-html-js', function(){
  return gulp.src('source/*.html')
    .pipe(plumber())
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream());
});


gulp.task("build", function (done) {
  run(
    "clean",
    "copy-all",
    "copy-html-js",
    "browserSync",
    done
  );
});