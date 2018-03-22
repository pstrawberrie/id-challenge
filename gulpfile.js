/**
 * Gulp Setup
 */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// Set up browsersync 
gulp.task('serve', ['html', 'images', 'js', 'sass'], () => {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/styles/**/*.scss", ['sass']);
    gulp.watch("src/scripts/*.js", ['js']);
    gulp.watch("src/images/*.*", ['images']);
    gulp.watch("src/views/*.html", ['html']).on('change', browserSync.reload);
});

// Copy HTML to dist folder via watch
gulp.task('html', () => {
    return gulp.src("src/views/*.html")
        .pipe(gulp.dest("./dist"));
});

// Copy Images to dist folder
gulp.task('images', () => {
    return gulp.src("src/images/*.*")
        .pipe(gulp.dest("./dist/images"));
});

// Copy JS to dist folder via watch
gulp.task('js', () => {
    return gulp.src("src/scripts/*.js")
        .pipe(gulp.dest("./dist"));
});

// Compile & Copy SCSS to dist folder via watch
gulp.task('sass', () => {
    return gulp.src("src/styles/master.scss")
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['./src/styles']
        }).on('error', sass.logError))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.stream());
});

// Gulp default task to run
gulp.task('default', ['serve']);