

/* CONFIG */


// Javascript to include in concatenation and minification.
// Any additional Bower install dependencies must be added
// here to be included.
var js = [
  'ng-app/**/*.js',
  'bower-packages/angular/angular.js',
  'bower-packages/angular-ui-router/release/angular-ui-router.js'
  ];

// Grab our packages.
var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    less        = require('gulp-less')
    connect     = require('gulp-connect')
    concat      = require('gulp-concat')
    del         = require('del')
    runSequence = require('run-sequence')
    ;


/* TASKS (Partials) */


// Configure the less task.
gulp.task('less', function () {
  return gulp.src('ng-app/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./ng-dev/css'))
    .pipe(connect.reload());
});


// Configure the js concatenation task.
gulp.task('js-concat', function () {
  return gulp.src(js)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('ng-dev/js'))
    .pipe(connect.reload());
});


// Configure copying html files over.
gulp.task('copy-html', function() {
   return gulp.src('ng-app/**/*.html')
   .pipe(gulp.dest('ng-dev/'))
   .pipe(connect.reload());
});


// Configure the jshint task.
gulp.task('jshint', function () {
  return gulp.src('ng-app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


// Configure the clean task for removing files/folders.
gulp.task('clean', function (cb) {
  return del('ng-dev/**', cb);
});


// Configure the local webserver.
gulp.task('connect', function() {
  connect.server({
    port: 3000,
    root: 'ng-dev',
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
  gulp.watch('ng-app/**/*.js', ['jshint', 'js-concat']);
  gulp.watch('ng-app/less/**/*.less', ['less']);
  gulp.watch('ng-app/**/*.html', ['copy-html']);
});


// Configure primary build task for generating full ng-dev/ files.
// Leverages runSequence until Gulp 4. Any tasks in an array are
// performed in parallel.
gulp.task('build', function (cb) {
  runSequence(
    'clean',
    'jshint',
    ['js-concat', 'less'],
    'copy-html',
    cb
    );
});
