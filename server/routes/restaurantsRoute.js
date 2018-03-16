const controller = require('../controllers/restaurants.js');

module.exports = function(app){
  app.get('/restaurants/create', function(req, res){
    res.render('restaurants.ejs')
  })

  app.post('/restaurants/create', function(req, res){
    res.render('results.ejs');
  })
}
