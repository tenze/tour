var gulp = require('gulp');
var watch = require('gulp-watch');


gulp.task('default', function() {
  console.log('created gulp task');
});

gulp.task('html', function() {
  console.log('run the default');
});


gulp.task('watch', function() {
  watch('./app/index.html', function(){
    gulp.start('html');
  })
})
