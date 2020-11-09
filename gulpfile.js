/**
 * author: fcq
 * date: 2020/11/09 17:39:38
 * fileName: gulpfile.js
 * description: gulp 配置文件
 **/

let gulp = require("gulp");
let browserify = require("browserify");
let source = require("vinyl-source-stream");
let watchify = require("watchify");
let tsify = require("tsify");
let uglify = require("gulp-uglify");
let sourcemaps = require("gulp-sourcemaps");
let buffer = require("vinyl-buffer");
let gutil = require("gulp-util");
let paths = {
  pages: ["src/*.html"],
};

let watchedBrowserify = watchify(
  browserify({
    basedir: ".",
    debug: true,
    entries: ["src/main.ts"],
    cache: {},
    packageCache: {},
  }).plugin(tsify)
);

gulp.task("copy-html", () => {
  return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});

function bundle() {
  return watchedBrowserify
    .plugin(tsify)
    .transform("babelify", { presets: ["es2015"], extensions: [".ts"] })
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("dist"));
}

gulp.task("default", gulp.series(["copy-html"], bundle));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);
