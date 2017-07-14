var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		useref = require('gulp-useref'),
		uglify = require('gulp-uglify'),
		cssmin = require('gulp-cssmin'),
		wiredep = require('wiredep').stream,
		gulpif = require('gulp-if'),
		connect = require('gulp-connect'),
		sass = require('gulp-sass'),

		reload = browserSync.reload;

gulp.task('default', ['watch', 'sass'], function () {
	browserSync.init({
		notify: false,
		port: 3000,
		server: {baseDir: ['.']},
		open: true
	});
});

gulp.task('watch', function () {
	gulp.watch([
		'app/views/*.html',
		'app/*.js',
		'app/*/*.js'
	]).on('change', reload);
	gulp.watch(['app/scss/*.scss', 'app/scss/pages/*.scss', 'app/components/*/*.scss'], ['sass']);
});
gulp.task('sass', function () {
	return gulp.src('app/scss/styles.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('app/css'))
			.pipe(reload({stream: true}));
});


gulp.task('build', ['html', 'files'], function () {
	return gulp.src('index.html')
			.pipe(useref())
			.pipe(gulpif('*.js', uglify()))
			.pipe(gulpif('*.css', cssmin()))
			.pipe(gulp.dest('www/'));
});

gulp.task('html', function () {
	return gulp.src(['app/views/*.html', 'app/templates/*.html', '!app/components/**/*.html'])
			.pipe(gulp.dest('www/views'));
});

gulp.task('files', ['json', 'fonts']);

gulp.task('json', function () {
	return gulp.src('app/translations/*.json')
			.pipe(gulp.dest('www/translations'));
});
gulp.task('fonts', function () {
	return gulp.src('app/fonts/font-awesome/*.*')
			.pipe(gulp.dest('www/fonts/font-awesome'));
});