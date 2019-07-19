var fileRouter = require('./routes/file');

module.exports = function(app){
    
    app.use('/api/files', fileRouter());

    //route to handle all vue requests
    app.get('/', function(req, res, next) {
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    });
}