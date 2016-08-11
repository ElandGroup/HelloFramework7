const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "app"
        },
        port: 190
    });
    gulp.watch('app/*.html').on('change', reload);
})

