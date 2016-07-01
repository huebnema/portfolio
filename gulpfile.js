var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	inlineCss = require('gulp-inline-css');
	minifyCSS = require('gulp-minify-css');


gulp.task('scripts', function(){
	gulp.src('app/js/*.js')
		.pipe(uglify())
		// .pipe(rename('app.min.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function(){
	gulp.src('app/css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/CSS'));
});

gulp.task('inline', function() {
    return gulp.src('app/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('dist/'));
});