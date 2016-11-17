var gulp = require('gulp');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-mini-css');

gulp.task('minifyJS', function () {
    gulp.src(['resources/js/ngTile.js'])
        .pipe(ngAnnotate())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(rename('ngTile.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyCSS', function () {
    gulp.src(['resources/css/ngTile.css'])
        .pipe(minifyCSS())
        .pipe(rename('ngTile.min.css'))
        .pipe(gulp.dest('dist'))
});