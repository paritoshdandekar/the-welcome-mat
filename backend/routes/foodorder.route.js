const router = require('express').Router();
let FoodOrder = require('../models/foodorder.model');

router.route('/').get((req, res) => {
  FoodOrder.find()
    .then(foodorders => res.json(foodorders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userId = req.body.userId;
  const food_name = req.body.food_name;
  const food_type = req.body.food_type;
  const food_price = Number(req.body.food_price);
  const status = req.body.status;
  
  const newOrder = new FoodOrder({userId, food_name, food_type, food_price, status});

  newOrder.save()
    .then(() => res.json('Order added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;