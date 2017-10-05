'use strict';

const gulp            = require('gulp');
const gutil           = require("gulp-util");

const concat          = require('gulp-concat');
const babel           = require('gulp-babel');
const rename          = require('gulp-rename');
const uglify          = require('gulp-uglify');
const banner          = require('gulp-banner');
const notify          = require('gulp-notify');
const bump            = require('gulp-bump');
const strip           = require('gulp-strip-comments');

const pkg             = require('./package.json');

const src             = {
  jsMain:       'src/easings.js',
  jsDest:       'dist',
};

const uglifyConfig    = {
  mangle: {
    except: []
  },
  compress: {
    drop_console: true
  },
  preserveComments: false,
};

gulp.task('watch', () => {
  gulp.watch([src.jsMain], ['js']);
});

gulp.task('js', ['js:next'], () => {
  return gulp.src(src.jsMain)
    .pipe(babel({
      presets: ['es2015', 'stage-0'],
      plugins: [
        "add-module-exports",
        "transform-es2015-modules-umd",
      ],
    }))
    .pipe(rename('easings.js'))
    .pipe(gulp.dest(src.jsDest))
    .pipe(strip())
    .pipe(babel({
      presets: ['minify']
    }))
    .pipe(rename('easings.min.js'))
    .pipe(gulp.dest(src.jsDest));
});

gulp.task('js:next', () => {
  return gulp.src(src.jsMain)
    .pipe(babel({
      presets: ['stage-0'],
    }))
    .pipe(rename('easings.next.js'))
    .pipe(gulp.dest(src.jsDest))
    .pipe(strip())
    .pipe(babel({
      presets: ['minify'],
    }))
    .pipe(rename('easings.next.min.js'))
    .pipe(gulp.dest(src.jsDest))
    .pipe(notify('js done'));
});

gulp.task('bump:pre', () => {
   gulp.src(['./bower.json', './component.json', './package.json'])
    .pipe(bump({type: 'prerelease'}))
    .pipe(gulp.dest('./'));
});

gulp.task('bump:patch', () => {
   gulp.src(['./bower.json', './component.json', './package.json'])
    .pipe(bump({type: 'patch'}))
    .pipe(gulp.dest('./'));
});

gulp.task('bump:minor', () => {
   gulp.src(['./bower.json', './component.json', './package.json'])
    .pipe(bump({type: 'minor'}))
    .pipe(gulp.dest('./'));
});

gulp.task('bump:major', () => {
   gulp.src(['./bower.json', './component.json', './package.json'])
    .pipe(bump({type: 'major'}))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['dist', 'watch']);

gulp.task('dist', ['js'], () => {
  return gulp.src('./')
    .pipe(notify('dist done'));
});

// generic error handler
function onError(err) {
  // console.log(err.toString());
  this.emit('end');
}
