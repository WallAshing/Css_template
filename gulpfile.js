// GULPFILE A LA RACINE
// STRICT MODE
"use strict";

// DECLARATION DES MODULES GULP
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')

//taskname, fucntion
gulp.task('sass', function(){
    return gulp.src(['scss/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./mike-portefolio/css'))
        .pipe(gulp.dest('./'))
})

gulp.task('test', function(){
    zaezeazezaeazeazezae
})

gulp.task('compile', function(){
    gulp.watch('scss/**/*.scss', gulp.series(['sass']))
})



