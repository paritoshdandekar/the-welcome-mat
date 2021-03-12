const router = require('express').Router();
let Housekeeping = require('../models/housekeeping.model');

router.route('/').get((req, res) => {
  Housekeeping.find()
    .then(Housekeeping => res.json(Housekeeping))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userId= req.body.userId;
  const text = req.body.text;
  const status = req.body.status;
  const data= req.body.data;

  const newHousekeeping = new Housekeeping({userId,status,text,data});

  newHousekeeping.save()
    .then(() => res.json('Housekeeping query added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});