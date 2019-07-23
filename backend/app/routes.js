var fileRouter = require('./routes/file');
var splashRouter = require('./routes/splash');
var skeletonRouter = require('./routes/skeleton');
var galleryRouter = require('./routes/gallery')

module.exports = function(app){
    app.use('/api/files', fileRouter());
    app.use('/api/splash', splashRouter());
    app.use('/api/skeleton', skeletonRouter());
    app.use('/api/gallery', galleryRouter());
}