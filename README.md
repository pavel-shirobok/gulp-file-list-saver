gulp-file-list-saver
====================

Creating JSON list with file's path and content(optionally)

```
var fileList = require('gulp-file-list-saver');
return gulp
 .src(APP.CSS)
 .pipe(fileList('./src', 'build/css.json'))
 .pipe(gulp.dest('build/styles/'))
```