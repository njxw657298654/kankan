




// 引入本地安装的gulp
var gulp = require('gulp');


var cssmin = require('gulp-cssmin');

var imagemin = require('gulp-imagemin');

var uglify = require('gulp-uglify');

var rev = require('gulp-rev');
var htmlmin = require('gulp-htmlmin');



// 返回值gulp是一个对象，借助此对象可以实现任务清单订制
// 通过一系列方法实现

// 定义任务(将less转成css)
gulp.task('css', function () {


	gulp.src('./css/*.css')
		.pipe(cssmin())
		.pipe(rev())
		// 通过gulp.dest进行存储
		.pipe(gulp.dest('./release/css'));

});

// 处理图片(压缩图片)
gulp.task('image', function () {

	gulp.src('./images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./release/images'));

});

// 压缩JS
gulp.task('js', function () {

	gulp.src('./js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./release/js'))
});

// 压缩html
gulp.task('html', function () {

	gulp.src(['./index.html'], {base: './'})
		.pipe(htmlmin({collapseWhitespace: true, removeComments: true, minifyJS: true}))
		.pipe(gulp.dest('./release'));

});




















