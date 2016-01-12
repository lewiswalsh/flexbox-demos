
  var gulp         = require('gulp');
  var sass         = require('gulp-sass');
  var cssNano      = require('gulp-cssnano');
  var autoprefixer = require('gulp-autoprefixer');
  //var uglify     = require('gulp-uglify');
  //var concat     = require('gulp-concat');
  var watch        = require('gulp-watch');

  var paths = {
    src : {
      sass : './scss/**/*.scss',
      js   : './public/src/js/**/*.js'
    },
    dist : {
      css : './css',
      js  : './public/dist/js'
    }
  };

  gulp.task('css', function(){
    return gulp.src(paths.src.sass)
      .pipe(sass())
      .pipe(autoprefixer({
  			   browsers : ['last 2 versions'],
  			   cascade  : false
  		  })
      )
      .pipe(cssNano())
      .pipe(gulp.dest(paths.dist.css));
  });

  // gulp.task('js', function(){
  //   return gulp.src(paths.src.js)
  //     .pipe(concat('dist.js'))
  //     .pipe(uglify())
  //     .pipe(gulp.dest(paths.dist.js));
  // });

  gulp.task('watch', function(){
    watch(paths.src.sass, function(){ gulp.start('css'); });
    //watch(paths.src.js, function(){ gulp.start('js'); });
  });

  gulp.task('default', ['css', 'watch']); // 'js',  'images',
