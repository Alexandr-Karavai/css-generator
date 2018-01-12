var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('./build')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      directoryListing: false,
      open: true
    }));
});

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('prefix', () =>
  gulp.src('css/**/*.css')
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(gulp.dest('build/css'))
);

gulp.task('prefix:watch', function () {
  gulp.watch('css/**/*.css', ['prefix']);
});

gulp.task('default', [ 'sass', 'sass:watch', 'prefix', 'prefix:watch', 'webserver']);
