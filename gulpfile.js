var gulp = require('gulp');

var jshint = require('gulp-jshint');

gulp.task('lint', function() {
	return gulp.src(['app/js/**/*.js', '!app/js/vendor/**'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
	gulp.watch(['app/js/**/*.js', '!app/js/vendor/**'], ['lint']);
});

gulp.task('default', ['lint', 'watch']);