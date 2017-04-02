




// ���뱾�ذ�װ��gulp
var gulp = require('gulp');


var cssmin = require('gulp-cssmin');

var imagemin = require('gulp-imagemin');

var uglify = require('gulp-uglify');

var rev = require('gulp-rev');
var htmlmin = require('gulp-htmlmin');



// ����ֵgulp��һ�����󣬽����˶������ʵ�������嵥����
// ͨ��һϵ�з���ʵ��

// ��������(��lessת��css)
gulp.task('css', function () {


	gulp.src('./css/*.css')
		.pipe(cssmin())
		.pipe(rev())
		// ͨ��gulp.dest���д洢
		.pipe(gulp.dest('./release/css'));

});

// ����ͼƬ(ѹ��ͼƬ)
gulp.task('image', function () {

	gulp.src('./images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./release/images'));

});

// ѹ��JS
gulp.task('js', function () {

	gulp.src('./js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./release/js'))
});

// ѹ��html
gulp.task('html', function () {

	gulp.src(['./index.html'], {base: './'})
		.pipe(htmlmin({collapseWhitespace: true, removeComments: true, minifyJS: true}))
		.pipe(gulp.dest('./release'));

});




















