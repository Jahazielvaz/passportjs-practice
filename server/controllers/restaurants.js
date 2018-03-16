const restaurants = require('../models').Restaurants;


module.exports ={
  create(req, res){
    return
    Restaurants.create({
      name: req.body.name,
      foodType: req.body.foodType,
      price: req.body.price,
      location: req.body.location
    })

    .then(console.log(req.body))
    .catch(error, function(){
      res.send(error);
    });
  }
}














// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('development', 'KupidoExportLLC');
// sequelize
// .sync({
//   force: true
// })
// .then(function(){
//   Restaurants.create({
//     name: req.body.name,
//     foodType: req.body.foodType,
//     price: req.body.price,
//     location: req.body.location
//   })
// })
