var gulp = require('gulp')
    cssmin = require('gulp-minify-css')             //css压缩
    base64 = require('gulp-base64')                //- 把小图片转成base64字符串
    img64Html = require('gulp-img64-html')         // html中的img转成base64字符串
    postcss = require('gulp-postcss')
    autoprefixer = require('autoprefixer')
    htmlmin = require('gulp-htmlmin')
    uglify = require('gulp-uglify')
    imagemin = require('gulp-tinypng')
    url = 'demo1'
    filename = 'index'

gulp.task('image', function () {
        return gulp.src('./'+url+'/images/*.{png,jpg,jpeg}')
        .pipe(tingpng('fHUgKbrSLlBnX7dAbryaA5qyt9w3jwAc'))
        .pipe(gulp.dest('./'+url+'/images'));
});
 
//压缩  css文件   和base64 
gulp.task('css', function () {
        return gulp.src('./'+url+'/styles/'+filename+'.css')
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(base64({
            maxImageSize: 1024 * 1024
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./'+url+'/dist/styles'));
});

// 压缩 js 文件
gulp.task('script', function() {
  return gulp.src('./'+url+'/scripts/'+filename+'.js')
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('./'+url+'/dist/scripts'));
});

gulp.task('html', function () {
      var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src('./'+url+'/'+filename+'.html')
        .pipe(htmlmin(options))
        .pipe(img64Html())
        .pipe(gulp.dest('./'+url+'/dist'));
});

gulp.task('html2', function () {
  var options = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
};
return gulp.src('./'+url+'/'+filename+'_rule.html')
    .pipe(htmlmin(options))
    .pipe(img64Html())
    .pipe(gulp.dest('./'+url+'/dist'));
});


/**
 * 先执行image压缩图片，然后在执行其他的
 */
gulp.task('default', [
        'image',
        // 'css',
        // 'script',
        // 'html',
        // 'html2'
    ]
);