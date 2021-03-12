const router = require('express').Router();
let Support = require('../models/support.model');

router.route('/').get((req, res) => {
  Support.find()
    .then(support => res.json(support))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const furtherdetails = req.body.furtherdetails;
  const userId= req.body.userId;
  const data= req.body.data;
  
  const newSupport = new Support({furtherdetails,userId,data});

  newSupport.save()
    .then(() => res.json('Support query added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});