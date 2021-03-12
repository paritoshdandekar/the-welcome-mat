const router = require('express').Router();
let Laundary = require('../models/Laundary.model');

router.route('/').get((req, res) => {
    Laundary.find()
    .then(Laundary => res.json(Laundary))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const userId = req.body.userId;
  
    const laundaryclothCount = Number(req.body.laundaryclothCount);
    const laundarySlot = req.body.laundarySlot;
  
    const laundaryTask = req.body.laundaryTask;
    const status = req.body.status;
  
    const newLaundary = new Laundary({userId, laundaryclothCount, laundarySlot, laundaryTask, status });
  
    newLaundary.save()
    .then(() => res.json('Laundry record added'))
    .catch(err => res.status(400).json('Error: ' + err));
  });