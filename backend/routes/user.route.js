const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {

    const username=req.body.username;
    const checkin= req.body.checkin;
    const checkout= req.body.checkout;
    const room= req.body.room;
    

    const newUser = new User({username,checkin,checkout,room});

  newUser.save()
    .then(() => res.json('New User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
