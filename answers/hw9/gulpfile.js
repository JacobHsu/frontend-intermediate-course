var gulp = require('gulp');
var inline = require('gulp-inline');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('inline',function(){
	return gulp.src('./index.html')
	.pipe(inline({
		base:'./'
	}))
	.pipe(gulp.dest('dist'));
});

gulp.task('minifyCSS',function(){
  	return gulp.src('./app/style/css/style.css')  
  		.pipe(minifyCSS({
 			  keepBreaks: false
  		}))
  		.pipe(rename('style.min.css'))
  		.pipe(gulp.dest('dist')); 
});

gulp.task('default',['inline','minifyCSS']);
