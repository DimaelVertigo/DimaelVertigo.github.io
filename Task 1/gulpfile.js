var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith');
    

// Sprite 

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('img/airlines/*.*') 
            .pipe(spritesmith({
                imgName: 'sprite.png',
                imgPath: '../img/sprite.png',
                cssName: 'sprite.less',
                cssFormat: 'less',
                algorithm: 'binary-tree'
            }));

    spriteData.img.pipe(gulp.dest('img/')); 
    spriteData.css.pipe(gulp.dest('less/'));
});

// Default
gulp.task('default', ['sprite']);