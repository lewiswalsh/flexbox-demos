
  var gulp         = require('gulp');
  var sass         = require('gulp-sass');
  var cssNano      = require('gulp-cssnano');
  var autoprefixer = require('gulp-autoprefixer');
  var watch        = require('gulp-watch');

  var paths = {
    src : {
      sass : './scss/**/*.scss'
    },
    dist : {
      css : './css'
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

  gulp.task('watch', function(){
    watch(paths.src.sass, function(){ gulp.start('css'); });
  });

  gulp.task('default', ['css', 'watch']);
