

/* CONFIG */


// Javascript to include in concatenation and minification.
// Any additional Bower install dependencies must be added
// here to be included.
var js = [
  'bower-packages/angular/angular.js',
  'bower-packages/angular-ui-router/release/angular-ui-router.js',
  'bower-packages/ng-lodash/build/ng-lodash.js',
  'app/app.js',
  'app/routes.js',
  'app/modules/**/*.js'
  ];

// Grab our packages.
var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    sass        = require('gulp-sass'),
    connect     = require('gulp-connect'),
    concat      = require('gulp-concat'),
    del         = require('del'),
    runSequence = require('run-sequence')
    ;


/* TASKS (Partials) */


// Configure the sass task.
gulp.task('sass', function () {
  return gulp.src('app/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});


// Configure the js concatenation task.
gulp.task('js-concat', function () {
  return gulp.src(js)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});


// Configure copying html files over.
gulp.task('copy-html', function() {
   return gulp.src('app/**/*.html')
   .pipe(gulp.dest('dist/'))
   .pipe(connect.reload());
});


// Configure the jshint task.
gulp.task('jshint', function () {
  return gulp.src('app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


// Configure the clean task for removing files/folders.
gulp.task('clean', function (cb) {
  return del('dist/**', cb);
});


// Configure the local webserver.
gulp.task('connect', function() {
  connect.server({
    port: 3000,
    root: 'dist',
    livereload: true
  });
});


/* TASKS (Primaries) */


// Empty default task.
gulp.task('default', []);


// Dev task runs watch and boots up our test server.
gulp.task('dev', ['watch', 'connect']);


// Configure which files to watch and what tasks to use on file changes.
gulp.task('watch', function () {
  gulp.watch('app/**/*.js', ['jshint', 'js-concat']);
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', ['copy-html']);
});


// Configure primary build task for generating full dist/ files.
// Leverages runSequence until Gulp 4. Any tasks in an array are
// performed in parallel.
gulp.task('build', function (cb) {
  runSequence(
    'clean',
    'jshint',
    ['js-concat', 'sass'],
    'copy-html',
    cb
    );
});
