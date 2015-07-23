// Init express
let express = require('express'),
    app = express(),
    path = require('path'),
    sassMiddleware = require('node-sass-middleware'),
    babelify = require('express-babelify-middleware');

// Express settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(sassMiddleware({
  src: path.join(__dirname, 'styles'),
  dest: path.join(__dirname, 'public/styles'),
  outputStyle: 'compressed',
  'prefix': '/styles'
}));
app.use('/app.js', babelify(path.join(__dirname, 'public/app.js')));
app.use(express.static('public'));

// Load routes
require('./routes.js')(app);
require('./app/dashboard');

// Start express server
let server = app.listen(3000, function() {
  console.log('Node server listening on port ' + server.address().port + '.');
});