module.exports = function (app) {

  // Root route
  app.get('/', function(req, res) {
    res.render('index');
  });

};