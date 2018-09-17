const gulp = require('gulp')
const webpackStream = require('webpack-stream')
const pkg = require('./package.json')
const dist = process.env.NODE_ENV === 'production' ? 'dist' : `demo/components/${pkg.name}`

gulp.task('webpack', _ =>
  gulp.src([])
    .pipe(webpackStream({
      entry: './src/index',
      output: {
        filename: 'index.js',
        libraryTarget: 'commonjs2',
      },
      mode: 'production'
    }))
    .pipe(gulp.dest(dist))
)

gulp.task('copy', _ =>
  gulp.src('src/**/*.{wxss,wxml,json}')
    .pipe(gulp.dest(dist))
)

gulp.task('default', ['copy', 'webpack'])