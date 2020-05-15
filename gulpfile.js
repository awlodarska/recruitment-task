const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const { series, parallel, task } = gulp;

task('pug', function buildHTML(done) {
  gulp.src('client/*.pug')
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest('server/views'));

  done();
});

task('sass', function (done) {
  gulp.src('client/*.sass')
  .pipe(sass({

  }))
  .pipe(gulp.dest('server/public'));
  done();
});

task('watch', series(
  task('pug'),
  task('sass'),
  function watchPage() {
    gulp.watch(['client/*.pug'], task('pug'));
    gulp.watch(['client/*.sass'], task('sass'));
  }
));

task('default', series('watch'));
