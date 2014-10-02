var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify'); 
var source = require('vinyl-source-stream');

gulp.task('transforming jsx', function() {
  browserify('./index.jsx')
  	.transform(reactify)
  	.bundle()
  	.pipe(source('bundle.js'))
  	.pipe(gulp.dest('./'));
});

gulp.task('default', ['transforming jsx']);