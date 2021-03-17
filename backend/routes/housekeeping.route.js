const router = require('express').Router();
let Housekeeping = require('../models/housekeeping.model');

router.route('/').get((req, res) => {
  Housekeeping.find()
    .then(housekeeping => res.json(housekeeping))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userId= req.body.userId;
  const data= req.body.data;
  const text = req.body.text;
  const status = req.body.status;
  

  const newHousekeeping = new Housekeeping({userId,data,text,status});

  newHousekeeping.save()
    .then(() => res.json('Housekeeping query added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;