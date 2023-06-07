const { src, dest, watch, parallel, series } = require('gulp');

const dartSass = require('sass');
const gulpSaas = require('gulp-sass');
const sass = gulpSaas(dartSass);
const cleanCss = require('gulp-clean-css');
const flatten = require('gulp-flatten');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const autoprefixer = require('gulp-autoprefixer');
const webpackStream = require('webpack-stream');
const imagemin = require('gulp-imagemin');
const gulpif = require('gulp-if');

const srcFolder = './src';
const buildFolder = './dist';
const path = {
  src: {
    html: `${srcFolder}/pages/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    componentsJs: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/assets/**/*.{jpg,jpeg,png,ico,webp}`,
    icons: `${srcFolder}/assets/icons/*.svg`,
    mainPageMainJs: `${srcFolder}/pages/main/index.js`,
    donatePageMainJs: `${srcFolder}/pages/donate/donate.js`,
  },
  build: {
    images: `${buildFolder}/assets/`,
    icons: `${buildFolder}/assets/icons/`,
  },
  watch: {
    html: `${srcFolder}/pages/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    mainJs: `${srcFolder}/pages/**/*.js`,
    componentsJs: `${srcFolder}/js/**/*.js`,
    images: `${buildFolder}/assets/**/*.*`,
  },
};

let isProd = false;

const html = () => {
  return src(path.src.html)
    .pipe(flatten())
    .pipe(dest(buildFolder))
    .pipe(browserSync.stream())
}

const styles = () => {
  return src(path.src.scss, { sourcemaps: !isProd })
    .pipe(sass())
    .pipe(gulpif(isProd, autoprefixer({
      grid: true,
      overrideBrowserslist: ["last 3 versions"]
    })))
    .pipe(gulpif(isProd, cleanCss()))
    .pipe(dest(buildFolder))
    .pipe(browserSync.stream())
}

const scripts = () => {
  return src([path.src.mainPageMainJs, path.src.donatePageMainJs], { sourcemaps: !isProd })
    .pipe(uglify())
    .pipe(webpackStream({
      mode: isProd ? 'production' : 'development',
      entry: {
        index: path.src.mainPageMainJs,
        donate: path.src.donatePageMainJs,
      },
    }))
    .pipe(dest(buildFolder))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
  watch(path.watch.html, html);
  watch(path.watch.scss, styles);
  watch([path.watch.mainJs, path.watch.componentsJs], scripts);
  watch(path.watch.images, images);
}

const syncBrowser = () => {
  browserSync.init({
    server: {
      baseDir: buildFolder
    },
  });
}

const cleanBuildFolder = () => {
  return src(buildFolder, { allowEmpty: true })
    .pipe(clean());
}

const images = () => {
  return src(path.src.images)
    .pipe(dest(path.build.images))
    .pipe(src(path.src.images))
    .pipe(gulpif(isProd, imagemin({
      optimizationLevel: 3,
    })))
    .pipe(dest(path.build.images))
    .pipe(browserSync.stream())
}

const icons = () => {
  return src(path.src.icons)
    .pipe(dest(path.build.icons))
}

const changeMode = (done) => {
  isProd = true;
  done();
}

const mainTasks = parallel(html, styles, scripts, images, icons);
const dev = series(cleanBuildFolder, mainTasks, parallel(watchFiles, syncBrowser));
const prod = series(changeMode, cleanBuildFolder, mainTasks);

exports.default = dev;
exports.build = prod;