// Init express
let express = require('express'),
    app = express(),
    path = require('path'),
    sassMiddleware = require('node-sass-middleware');

// Express settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(sassMiddleware({
  src: path.join(__dirname, 'styles'),
  dest: path.join(__dirname, 'public'),
  outputStyle: 'compressed',
  prefix: '/styles'
}));
app.use(express.static('public'));

// Load routes
require('./routes.js')(app);

// Start express server
let server = app.listen(3000, function() {
  console.log('Node server listening on port ' + server.address().port + '.');
});