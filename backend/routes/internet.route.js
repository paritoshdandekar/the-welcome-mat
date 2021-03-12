const router = require('express').Router();
let Internet = require('../models/internet.model');

router.route('/').get((req, res) => {
    Internet.find()
      .then(internet => res.json(internet))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {

    const userId=req.body.userId;
    const status= req.body.status;
    const data= req.body.data;
    const specific= req.body.specific;

    const newInternet = new Internet({userId,specific,status,data});

  newInternet.save()
    .then(() => res.json('Internet query added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});