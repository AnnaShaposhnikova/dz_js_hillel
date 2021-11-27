const{src, dest, series, parallel, watch} = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');


function copyHTML(){
    return src('./src/index.html')
    .pipe(dest('./dist'));
}
function copyCSS(){
    return src('./src/css.css')
    .pipe(dest('./dist'));
}

function cleanDist(){
    return src('./dist',{read:false})
    .pipe(clean());
}

function copyJS(){
    return src(['./src/HTTPService.js', './src/environment.js', './src/api.js'])
    .pipe(concat('all.js'))
    .pipe(dest('./dist'));
}

function createVendorJS(){
    return src(['./node_modules/jquery/dist/jquery.min.js','./node_modules/axios/dist/axios.min.js'])
    .pipe(concat('vendorJs.js'))
    .pipe(dest('./dist'));
}

function watchFiles(){
    return [
    watch('./src/css.css',{events:"change"},
    ()=>copyCSS()),
    watch('./src/**/*.js',{events:"all"},
    ()=>copyJS())
];    
}

function build(){
    return src('./src/index.html')
    .pipe(dest('./dist'))
}

module.exports = {
    build: series(cleanDist, parallel(createVendorJS, copyHTML, copyCSS, copyJS)),
    serve: series(cleanDist, parallel(createVendorJS, copyHTML, copyCSS, copyJS), watchFiles)
}