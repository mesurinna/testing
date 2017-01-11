var gulp = require('gulp');

gulp.task('html', function(){
    return gulp.src('html/*.html')
        .pipe(gulp.dest('src/html'))
});

gulp.task('css', function(){
    return gulp.src('css/*.css')
        .pipe(gulp.dest('src/css'))
});

gulp.task('default',['html', 'css']);