const restaurants = require('../models').Restaurants;

module.exports ={
  restaurantInfo(req, res){
    return restaurants.create({
      name: req.body.name,
      foodType: req.body.foodType,
      price: req.body.price,
      location: req.body.location
    })
    .then(function(restaurants){
      res.render('results.ejs', restaurants);
    })

  }
}
